import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import { Popup, DatePicker, Icon, Pull, Cell } from 'zarm';
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
      <div className="bill-content">
        <Pull>
          <div className="bill-content-item">
            <div className="bill-item-header">
              <div className="bill-header-date">2021-09-28</div>
              <div className="bill-header-money">
                <span>
                  <img src="http://s.yezgea02.com/1615953405599/zhi%402x.png" alt="支" />
                  <span>11</span>
                </span>
                <span>
                  <img src="http://s.yezgea02.com/1615953405599/shou%402x.png" alt="收" />
                  <span>22</span>
                </span>
              </div>
            </div>
            <Cell
              title={
                <span>
                  <Icon type="licai" />
                  理财
                </span>
              }
              description="+666"
              help="2020"
            />
          </div>
        </Pull>
      </div>
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
            <div className={`popup-item ${type === '全部类型' ? 'active' : ''}`} onClick={selectAll}>
              全部类型
            </div>
            <div className="popup-text">支出</div>
            <div className="popup-expond" onClick={selectExpond}>
              <div className={`popup-item ${type === '餐饮' ? 'active' : ''}`}>餐饮</div>
              <div className={`popup-item ${type === '服饰' ? 'active' : ''}`}>服饰</div>
              <div className={`popup-item ${type === '交通' ? 'active' : ''}`}>交通</div>
              <div className={`popup-item ${type === '日用' ? 'active' : ''}`}>日用</div>
              <div className={`popup-item ${type === '购物' ? 'active' : ''}`}>购物</div>
              <div className={`popup-item ${type === '学习' ? 'active' : ''}`}>学习</div>
              <div className={`popup-item ${type === '医疗' ? 'active' : ''}`}>医疗</div>
              <div className={`popup-item ${type === '旅行' ? 'active' : ''}`}>旅行</div>
              <div className={`popup-item ${type === '人情' ? 'active' : ''}`}>人情</div>
              <div className={`popup-item ${type === '其他' ? 'active' : ''}`}>其他</div>
            </div>
            <div className="popup-text">收入</div>
            <div className="popup-income" onClick={selectIncome}>
              <div className={`popup-item ${type === '工资' ? 'active' : ''}`}>工资</div>
              <div className={`popup-item ${type === '奖金' ? 'active' : ''}`}>奖金</div>
              <div className={`popup-item ${type === '转账' ? 'active' : ''}`}>转账</div>
              <div className={`popup-item ${type === '理财' ? 'active' : ''}`}>理财</div>
              <div className={`popup-item ${type === '退款' ? 'active' : ''}`}>退款</div>
              <div className={`popup-item ${type === '其他' ? 'active' : ''}`}>其他</div>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
