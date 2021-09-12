import React, { useState } from 'react'
import PropsType from 'prop-types'
import './index.less'
import { TabBar, Icon } from 'zarm'
const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js')
const NavBar = (props) => {

    return (
        <>
            <TabBar style={{height: '40px'}}>
                <TabBar.Item title="账单" icon={<TabIcon type="zhangdan" size="lg"></TabIcon>}></TabBar.Item>
                <TabBar.Item title="统计" icon={<TabIcon type="tongji" size="md"></TabIcon>}></TabBar.Item>
                <TabBar.Item title="我的" icon={<TabIcon type="wode" size="md"></TabIcon>}></TabBar.Item>
            </TabBar>
        </>
    )
}

export default NavBar