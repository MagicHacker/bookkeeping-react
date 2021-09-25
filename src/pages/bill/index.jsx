import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import { Popup, DatePicker, Icon } from 'zarm';
import './index.less';
export default function Bill() {
  const [dateVisible, setDateVisible] = useState(false);
  const [popVisible, setPopVisible] = useState(false);
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const getDate = (value) => {
    const selectedDates = new Date(value);
    setDate(`${selectedDates.getFullYear()}-${selectedDates.getMonth() + 1}`);
    setDateVisible(false);
  };
  const handleCancel = () => {
    setDateVisible(false);
  };
  const toggleDatePicker = () => {
    setDateVisible(true);
  };
  const togglePop = () => {
    setPopVisible(true);
  };
  // 全部类型
  const selectAll = (e) => {
    setType(e.target.innerText);
    setPopVisible(false);
  };
  // 支出类型
  const selectExpond = (e) => {
    setType(e.target.innerText);
    setPopVisible(false);
  };
  // 收入类型
  const selectIncome = (e) => {
    setType(e.target.innerText);
    setPopVisible(false);
  };
  useEffect(() => {
    const date = new Date();
    setDate(`${date.getFullYear()}-${date.getMonth() + 1}`);
    setType('全部类型');
  }, []);
  return (
    <div className="bill-wrapper">
      <Header toggleDatePicker={toggleDatePicker} togglePop={togglePop} date={date} type={type} />
      <DatePicker visible={dateVisible} mode="month" onOk={(value) => getDate(value)} onCancel={handleCancel} />
      <Popup
        visible={popVisible}
        direction="bottom"
        onMaskClick={() => setPopVisible(false)}
        onEsc={() => setPopVisible(false)}
      >
        <div className="popup-wrapper">
          <div className="popup-header">
            请选择类型
            <Icon type="wrong" onClick={() => setPopVisible(false)} />
          </div>
          <div className="popup-content">
            <div className="popup-item" onClick={selectAll}>
              全部类型
            </div>
            <div className="popup-text">支出</div>
            <div className="popup-expond" onClick={selectExpond}>
              <div className="popup-item">餐饮</div>
              <div className="popup-item">服饰</div>
              <div className="popup-item">交通</div>
              <div className="popup-item">日用</div>
              <div className="popup-item">购物</div>
              <div className="popup-item">学习</div>
              <div className="popup-item">医疗</div>
              <div className="popup-item">旅行</div>
              <div className="popup-item">人情</div>
              <div className="popup-item">其他</div>
            </div>
            <div className="popup-text">收入</div>
            <div className="popup-income" onClick={selectIncome}>
              <div className="popup-item">工资</div>
              <div className="popup-item">奖金</div>
              <div className="popup-item">转账</div>
              <div className="popup-item">理财</div>
              <div className="popup-item">退款</div>
              <div className="popup-item">其他</div>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
