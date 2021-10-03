import React from 'react';
import { Button, Cell } from 'zarm';
import './index.less';

export default function User() {
  return (
    <div className="user-wrapper">
      <div className="user-header">
        <div className="user-header-info">
          <span>昵称：ss</span>
          <span>
            <img src="http://s.yezgea02.com/1615973630132/geqian.png" alt="" />
            世界和平。
          </span>
        </div>
        <img src="" alt="" />
      </div>
      <div className="user-content">
        <Cell title="用户信息修改" hasArrow icon={<img src="http://s.yezgea02.com/1615974766264/gxqm.png" />} />
        <Cell title="重置密码" hasArrow icon={<img src="http://s.yezgea02.com/1615974766264/zhaq.png" />} />
      </div>
      <Button theme="danger" className="user-logout">
        退出登录
      </Button>
    </div>
  );
}
