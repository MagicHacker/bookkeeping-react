import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.less'
import { TabBar, Icon } from 'zarm'
const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js')

const NavBar = (props) => {
    const { history } = props
    const [activeKey, setActiveKey] = useState('/')
    const changeTab = path => {
        setActiveKey(path)
        history.push(path)
    }
    return (
        <>
            <TabBar activeKey={activeKey} visible={props.showNav} style={{height: '50px'}} onChange={changeTab}>
                <TabBar.Item title="账单" itemKey="/bill" icon={<TabIcon type="zhangdan" size="md"></TabIcon>}></TabBar.Item>
                <TabBar.Item title="统计" itemKey="/statistics" icon={<TabIcon type="tongji" size="md"></TabIcon>}></TabBar.Item>
                <TabBar.Item title="我的" itemKey="/user" icon={<TabIcon type="wode" size="md"></TabIcon>}></TabBar.Item>
            </TabBar>
        </>
    )
}

// 编写PropTypes
NavBar.propTypes = {
    visible: PropTypes.bool
}

export default withRouter(NavBar)