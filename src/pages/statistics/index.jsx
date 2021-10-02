import React, { useEffect } from 'react';
import { Icon, Progress } from 'zarm';
import './index.less';
let proportionChart = null;
export default function Statistics() {
  useEffect(() => {
    initChart();
    return () => {
      proportionChart.dispose();
    };
  }, []);
  const initChart = () => {
    if (window.echarts) {
      proportionChart = window.echarts.init(document.getElementById('proportion'));
      proportionChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        // 图例
        legend: {
          data: ['支出', '收入'],
        },
        series: [
          {
            name: '支出',
            type: 'pie',
            radius: '55%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      });
    }
  };
  return (
    <div className="statis-wrapper">
      <div className="statis-total">
        <div className="statis-total-time">
          <span>2021-09</span>
          <Icon type="date" />
        </div>
        <div className="statis-total-title">共支出</div>
        <div className="statis-total-expense">¥333.00</div>
        <div className="statis-total-income">共收入¥77777.00</div>
      </div>
      <div className="statis-structure">
        <div className="statis-structure-head">
          <span>收支构成</span>
          <div className="statis-head-tab">
            <span className="active">支出</span>
            <span className="active">收入</span>
          </div>
        </div>
        <div className="statis-structure-content">
          <div className="statis-content-item">
            <div className="statis-item-left">
              <div className="statis-left-type">
                <span>
                  <Icon type="licai" />
                </span>
                <span>理财</span>
              </div>
              <div>¥66666.00</div>
            </div>
            <div className="statis-item-right">
              <Progress shape="line" percent="50" strokeShape="round" />
            </div>
          </div>
        </div>
        <div className="statis-structure-propo">
          <div className="statis-propo-head">
            <span>收支构成</span>
            <div className="statis-head-tab">
              <span className="active">支出</span>
              <span className="active">收入</span>
            </div>
          </div>
          <div id="proportion" style={{ width: '319px', height: '400px' }} />
        </div>
      </div>
    </div>
  );
}
