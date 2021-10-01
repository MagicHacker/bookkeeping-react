import React from 'react';
import { Icon } from 'zarm';
import './index.less';

export default function Custom() {
  const handleAdd = () => {
    alert(1);
  };
  return (
    <div className="custom-wrapper" onClick={handleAdd}>
      <Icon type="tianjia" />
    </div>
  );
}
