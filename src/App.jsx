import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import './App.less';
import 'zarm/dist/zarm.css';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import { ConfigProvider } from 'zarm';
import TabBar from '@/components/tab-bar';
import User from '@/pages/user';
import Bill from '@/pages/bill';
import Statistics from '@/pages/statistics';
import Login from '@/pages/login';
import Custom from '@/components/custom';
import PopupAdd from './components/popupAdd';
function App() {
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setShowNav(['/bill', '/statistics', '/user'].includes(location.pathname));
  }, [pathname]);
  return (
    <div className="App">
      <ConfigProvider locale={zhCN} primaryColor="#007fff">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/bill" component={Bill} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/user" component={User} />
          <Redirect from="/" to="/login" />
        </Switch>
      </ConfigProvider>
      <TabBar showNav={showNav} />
      <Custom />
      <PopupAdd />
    </div>
  );
}

export default App;
