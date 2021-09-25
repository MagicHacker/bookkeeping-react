/**
 * 头部组件
 */
import React, { useEffect, useState } from 'react';
import { Icon } from 'zarm';
import './index.less';
export default function Header() {
  const [type, setType] = useState('全部类型');
  const [time, setTime] = useState('');
  useEffect(() => {
    const date = new Date();
    setTime(`${date.getFullYear()}-${date.getMonth() + 1}`);
  }, []);
  return (
    <div className="header-wrapper">
      <div className="header-data-wrapper">
        <span>
          总支出:
          <span className="header-data-number">￥0.00</span>
        </span>
        &nbsp;&nbsp;
        <span>
          总收入:
          <span className="header-data-number">￥0.00</span>
        </span>
      </div>
      <div className="header-type-wrapper">
        <div className="header-type-item">
          <span>{type}</span>
          <Icon className="header-type-icon" type="arrow-bottom" />
        </div>
        <div className="header-type-item">
          <span>{time}</span>
          <Icon className="header-type-icon" type="arrow-bottom" />
        </div>
      </div>
    </div>
  );
}
