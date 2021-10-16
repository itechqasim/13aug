import {SPRING_CONFIG_NUMBERS} from '../constants.js';
import {formatDate, formatNumber, getStatistic} from '../utils/commonFunctions';

import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {animated, useSpring} from 'react-spring';

function StateHeader({data, stateCode}) {
  const {t} = useTranslation();
  const spring = useSpring({
    total: getStatistic(data, 'total', 'tested'),
    config: SPRING_CONFIG_NUMBERS,
  });

  return (
    <div className="StateHeader">
      <div className="header-left">
        {data?.meta?.['last_updated'] && (
          <h5 className="fadeInUp" >
            {`${t('Last Updated on')} ${formatDate(
              data.meta.last_updated,
              'dd MMM, p'
            )} ${t('IST')}`}
          </h5>
        )}
      </div>
      <div className="header-right fadeInUp">
        <h5>{t('Tested')}</h5>
        <animated.h2>
          {spring.total.to((total) => formatNumber(total, 'long'))}
        </animated.h2>
        {data?.meta?.tested?.date && (
          <h5 className="timestamp">
            {`${t('As of')} ${formatDate(data.meta.tested.date, 'dd MMMM')}`}
          </h5>
        )}
      </div>
    </div>
  );
}

export default memo(StateHeader);
