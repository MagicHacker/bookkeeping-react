/**
 * 头部组件
 */
import React from 'react';
import { Icon } from 'zarm';
import './index.less';
export default function Header(props) {
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
        <div className="header-type-item" onClick={props.togglePop}>
          <span>{props.type}</span>
          <Icon className="header-type-icon" type="arrow-bottom" />
        </div>
        <div className="header-type-item" onClick={props.toggleDatePicker}>
          <span>{props.date}</span>
          <Icon className="header-type-icon" type="arrow-bottom" />
        </div>
      </div>
    </div>
  );
}
