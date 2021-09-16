import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.less'
import 'zarm/dist/zarm.css'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import { ConfigProvider} from 'zarm'
import TabBar from './components/tab-bar'
import User from '@/pages/user'
import Bill from '@/pages/bill'
import Statistics from '@/pages/statistics'
function App() {
  return (
    <div className="App">
      <Router>
        <ConfigProvider locale={zhCN}>
          <Switch>
            <Route path="/bill" component={Bill}></Route>
            <Route path="/statistics" component={Statistics}></Route>
            <Route path="/user" component={User}></Route>
            <Redirect from="/" to="/bill"></Redirect>
          </Switch>
        </ConfigProvider>
        <TabBar/>
      </Router>
    </div>
  )
}

export default App
