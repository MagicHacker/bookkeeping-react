import React, { useState } from 'react'
import { Cell, Icon, Input, Button, Checkbox} from 'zarm'
import Captcha from 'react-captcha-code'
import './index.less'

const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js')
export default function Login() {
    const [tabType, setTabType] = useState('login')
    // 刷新验证码
    const handleChange = () => {
    }

    return (
        <div className="login-wrapper">
            <div className="login-header"></div>
            <div className="login-tabs">
                <span className={tabType === 'login' ? 'active' : ''} onClick={() => setTabType('login')}>登录</span>
                <span className={tabType === 'register' ? 'active' : ''} onClick={() => setTabType('register')}>注册</span>
            </div>
            <div className="login-form">
                <Cell style={{'backgroundColor': 'transparent'}} icon={<TabIcon type="zhanghao" size="md"/>}>
                    <Input clearable type="text" placeholder="用户名"/>
                </Cell>
                <Cell style={{'backgroundColor': 'transparent'}} icon={<TabIcon type="mima" size="md"/>}>
                    <Input clearable type="password" placeholder="密码"/>
                </Cell>
                {
                    tabType === 'register' ?
                    <>
                        <Cell style={{'backgroundColor': 'transparent'}} icon={<TabIcon type="mima" size="md"/>}>
                            <Input clearable type="text" placeholder="验证码"/>
                            <Captcha charNum={4} onChange={handleChange}/>
                        </Cell>
                        <Cell style={{'backgroundColor': 'transparent'}}>
                            <Checkbox>
                                <span>阅读并同意《条款》</span>
                            </Checkbox>
                        </Cell>
                    </>
                     : null
                }
                
            </div>
            <div className="login-btn">
                <Button block theme="primary">登录</Button>
            </div>
        </div>
    )
}
