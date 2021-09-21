import React, { useRef } from 'react'
import { Cell, Icon, Input, Button} from 'zarm'
import Captcha from 'react-captcha-code'
import './index.less'

const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js')
export default function Login() {
    // 刷新验证码
    const handleChange = () => {
    }
    return (
        <div className="login-wrapper">
            <div className="login-header"></div>
            <div className="login-tabs">
                <span className="active">登录</span>
                <span>注册</span>
            </div>
            <div className="login-form">
                <Cell style={{'backgroundColor': 'transparent'}} icon={<TabIcon type="zhanghao" size="md"/>}>
                    <Input clearable type="text" placeholder="用户名"/>
                </Cell>
                <Cell style={{'backgroundColor': 'transparent'}} icon={<TabIcon type="mima" size="md"/>}>
                    <Input clearable type="password" placeholder="密码"/>
                </Cell>
                <Cell style={{'backgroundColor': 'transparent'}} icon={<TabIcon type="mima" size="md"/>}>
                    <Input clearable type="text" placeholder="验证码"/>
                    <Captcha charNum={4} onChange={handleChange}/>
                </Cell>
            </div>
            <div className="login-btn">
                <Button block theme="primary">登录</Button>
            </div>
        </div>
    )
}
