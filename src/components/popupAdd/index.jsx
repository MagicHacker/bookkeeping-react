import React, { useState } from 'react';
import { Popup, Icon, DatePicker, Keyboard } from 'zarm';
import './index.less';
export default function PopupAdd() {
  const [timerVisible, setTimerVisible] = useState(false);
  const [popVisible, setPopVisible] = useState(true);
  // 选择时间
  const toggleTimer = () => {
    setTimerVisible(true);
  };
  const timerCancel = () => {
    setTimerVisible(false);
  };
  return (
    <div className="popup-add-wrapper">
      <Popup
        visible={popVisible}
        direction="bottom"
        onMaskClick={() => setPopVisible(false)}
        onEsc={() => setPopVisible(false)}
      >
        <div className="popup-dialog-wrapper">
          <div className="popup-dialog-header">
            <Icon type="wrong" size="sm" />
          </div>
          <div className="popup-dialog-filter">
            <div className="popup-filter-type">
              <span className="popup-filter-item active">支出</span>
              <span className="popup-filter-item">收入</span>
            </div>
            <div className="popup-filter-time" onClick={toggleTimer}>
              <span>2021-10</span>
              <Icon className="header-time-icon" type="arrow-bottom" />
            </div>
          </div>
          <div className="popup-dialog-money">
            <span className="popup-money-suffix">¥</span>
            <span className="popup-money-amount">ss</span>
          </div>
          <div className="popup-dialog-type">
            <div className="popup-type-item">
              <span>
                <Icon type="canyin" />
              </span>
              <span>餐饮</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="fushi" />
              </span>
              <span>服饰</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="jiaotong" />
              </span>
              <span>交通</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="riyong" />
              </span>
              <span>日用</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="gouwu" />
              </span>
              <span>购物</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="xuexi" />
              </span>
              <span>学习</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="yiliao" />
              </span>
              <span>医疗</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="lvxing" />
              </span>
              <span>旅行</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="renqing" />
              </span>
              <span>人情</span>
            </div>
            <div className="popup-type-item">
              <span>
                <Icon type="qita" />
              </span>
              <span>其他</span>
            </div>
          </div>
          <div className="popup-dialog-remark">添加备注</div>
          <Keyboard type="price" />
        </div>
      </Popup>
      <DatePicker visible={timerVisible} mode="date" onCancel={timerCancel} />
    </div>
  );
}
