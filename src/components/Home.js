// import TableLoader from './loaders/Table';
import {
  API_REFRESH_INTERVAL,
  DATA_API_ROOT,
  DISTRICT_START_DATE,
  DISTRICT_TEST_END_DATE,
  MAP_VIEWS,
  PRIMARY_STATISTICS,
  TESTED_EXPIRING_DAYS,
  UNKNOWN_DISTRICT_KEY,
} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {
  fetcher,
  getStatistic,
  parseIndiaDate,
  retry,
} from '../utils/commonFunctions';

import classnames from 'classnames';
import {addDays, formatISO, max} from 'date-fns';
import {useMemo, useRef, useState, lazy, Suspense} from 'react';
import {useLocation} from 'react-router-dom';
import {useLocalStorage, useSessionStorage, useWindowSize} from 'react-use';

const Level = lazy(() => retry(() => import('./Level')));
const MapExplorer = lazy(() => retry(() => import('./MapExplorer')));
const MapSwitcher = lazy(() => retry(() => import('./MapSwitcher')));
const StateHeader = lazy(() => retry(() => import('./StateHeader')));
// const Table = lazy(() => retry(() => import('./Table')));

function Home() {
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [anchor, setAnchor] = useLocalStorage('anchor', null);
  const [expandTable, setExpandTable] = useLocalStorage('expandTable', false);
  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'active'
  );
  const [mapView, setMapView] = useLocalStorage('mapView', MAP_VIEWS.DISTRICTS);

  const [date, setDate] = useState('');
  const location = useLocation();

  const {data} = useStickySWR(
    `${DATA_API_ROOT}/data${date ? `-${date}` : ''}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: API_REFRESH_INTERVAL,
    }
  );

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);
  const {width} = useWindowSize();

  const hideDistrictData = date !== '' && date < DISTRICT_START_DATE;
  const hideDistrictTestData =
    date === '' ||
    date >
      formatISO(
        addDays(parseIndiaDate(DISTRICT_TEST_END_DATE), TESTED_EXPIRING_DAYS),
        {representation: 'date'}
      );

  const hideVaccinated =
    getStatistic(data?.['TT'], 'total', 'vaccinated') === 0;

  const lastDataDate = useMemo(() => {
    const updatedDates = [
      data?.['TT']?.meta?.date,
      data?.['TT']?.meta?.tested?.date,
      data?.['TT']?.meta?.vaccinated?.date,
    ].filter((date) => date);
    return updatedDates.length > 0
      ? formatISO(max(updatedDates.map((date) => parseIndiaDate(date))), {
          representation: 'date',
        })
      : null;
  }, [data]);

  const lastUpdatedDate = useMemo(() => {
    const updatedDates = Object.keys(data || {})
      .map((stateCode) => data?.[stateCode]?.meta?.['last_updated'])
      .filter((datetime) => datetime);
    return updatedDates.length > 0
      ? formatISO(max(updatedDates.map((datetime) => parseIndiaDate(datetime))))
      : null;
  }, [data]);

  const noDistrictDataStates = useMemo(
    () =>
      // Heuristic: All cases are in Unknown
      Object.entries(data || {}).reduce((res, [stateCode, stateData]) => {
        res[stateCode] = !!(
          stateData?.districts &&
          stateData.districts?.[UNKNOWN_DISTRICT_KEY] &&
          PRIMARY_STATISTICS.every(
            (statistic) =>
              getStatistic(stateData, 'total', statistic) ===
              getStatistic(
                stateData.districts[UNKNOWN_DISTRICT_KEY],
                'total',
                statistic
              )
          )
        );
        return res;
      }, {}),
    [data]
  );

  const noRegionHighlightedDistrictData =
    regionHighlighted?.stateCode &&
    regionHighlighted?.districtName &&
    regionHighlighted.districtName !== UNKNOWN_DISTRICT_KEY &&
    noDistrictDataStates[regionHighlighted.stateCode];

  return (
    <>
      <div className="Home">
      <div className={classnames('home-left', {expanded: expandTable})}>


          <div style={{position: 'relative', marginTop: '1rem'}}>
            {data && (
              <Suspense fallback={<div style={{height: '50rem'}} />}>
                {width >= 769 && !expandTable && (
                  <MapSwitcher {...{mapStatistic, setMapStatistic}} />
                )}
                <Level data={data['TT']} />
              </Suspense>
            )}
          </div>
      </div>
        <div
          className={classnames('home-right', {expanded: expandTable})}
          ref={homeRightElement}
          style={{minHeight: '4rem'}}
        >
          {(isVisible || location.hash) && (
            <>
              {data && (
                <div
                  className={classnames('map-container', {
                    expanded: expandTable,
                    stickied:
                      anchor === 'mapexplorer' || (expandTable && width >= 769),
                  })}
                >
                  <Suspense fallback={<div style={{height: '50rem'}} />}>
                    <StateHeader data={data['TT']} stateCode={'TT'} />
                    <MapExplorer
                      {...{
                        stateCode: 'TT',
                        data,
                        mapStatistic,
                        setMapStatistic,
                        mapView,
                        setMapView,
                        regionHighlighted,
                        setRegionHighlighted,
                        anchor,
                        setAnchor,
                        expandTable,
                        lastDataDate,
                        hideDistrictData,
                        hideDistrictTestData,
                        hideVaccinated,
                        noRegionHighlightedDistrictData,
                      }}
                    />
                  </Suspense>
                </div>
              )}
            </>
          )}
        </div>
        {/* <div className={classnames('home-left', {expanded: expandTable})}>
          <div className="header">
            {!data && !timeseries && <div style={{height: '60rem'}} />}
          </div>
          {/* <div className="header">
            {!data && !timeseries && <div style={{height: '60rem'}} />}
          </div> 
          <div style={{position: 'relative', marginTop: '1rem'}}>
            {data && (
              <Suspense fallback={<div style={{height: '50rem'}} />}>
                {width >= 769 && !expandTable && (
                  <MapSwitcher {...{mapStatistic, setMapStatistic}} />
                )}
                <Level data={data['TT']} />
              </Suspense>
            )}
          </div>
          {data && (
            <Suspense fallback={<TableLoader />}>
              <Table
                {...{
                  data,
                  regionHighlighted,
                  setRegionHighlighted,
                  expandTable,
                  setExpandTable,
                  hideDistrictData,
                  hideDistrictTestData,
                  hideVaccinated,
                  lastDataDate,
                  noDistrictDataStates,
                }}
              />
            </Suspense>
          )}
        </div> */}
      
      </div>
    </>
  );
}

export default Home;
