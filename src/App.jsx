import React, { useState } from 'react'
import './App.css'
import 'zarm/dist/zarm.css'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import { ConfigProvider} from 'zarm'
import TabBar from './components/tab-bar'
function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <TabBar/>
      </ConfigProvider>
    </div>
  )
}

export default App
