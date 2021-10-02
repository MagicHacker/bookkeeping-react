import React from 'react';
import BillHeader from '@/components/billHeader';
import { Icon, Modal } from 'zarm';
import './index.less';
export default function Detail() {
  // 删除账单
  const delBill = () => {
    Modal.confirm({
      title: '删除',
      content: '确认删除？',
      cancelText: '取消',
      okText: '确认',
      onOk: () => {
        alert(1);
      },
    });
  };
  return (
    <div className="bill-detail-wrapper">
      <BillHeader title="账单详情" />
      <div className="bill-detail-card">
        <div className="bill-card-type">
          <span className="bill-type-icon">
            <Icon type="gongzi" />
          </span>
          <span>工资</span>
        </div>
        <div className="bill-card-amount">2</div>
        <div className="bill-card-info">
          <div className="bill-info-item">
            <span>记录时间</span>
            <span>2021-09-28 20:49</span>
          </div>
          <div className="bill-info-item">
            <span>备注</span>
            <span>-</span>
          </div>
        </div>
        <div className="bill-card-operation">
          <span onClick={delBill}>
            <Icon type="shanchu" />
            删除
          </span>
          <span>
            <Icon type="bianji" />
            编辑
          </span>
        </div>
      </div>
    </div>
  );
}
