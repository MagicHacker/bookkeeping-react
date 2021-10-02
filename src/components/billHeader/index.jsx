import React from 'react';
import { NavBar, Icon } from 'zarm';
import { useHistory } from 'react-router-dom';
import './index.less';

export default function BillHeader(props) {
  const history = useHistory();
  const { title } = props;
  return (
    <div className="bill-header-wrapper">
      <NavBar left={<Icon type="arrow-left" theme="primary" onClick={() => history.goBack()} />} title={title} />
    </div>
  );
}
