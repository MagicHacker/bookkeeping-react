import React, { useState } from 'react';
import Header from '@/components/header';
import { Popup, DatePicker } from 'zarm';
import './index.less';
export default function Bill() {
  const [dateVisible, setDateVisible] = useState(false);
  return (
    <div className="bill-wrapper">
      <Header />
      <DatePicker visible={dateVisible} mode="month" />
    </div>
  );
}
