import React, { useState } from 'react'
import { Cell, Icon, Input, Button, Checkbox} from 'zarm'
import Captcha from 'react-captcha-code'
import './index.less'

const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js')
export default function Login(props) {
    const [tabType, setTabType] = useState('login')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [checked, setChecked] = useState(false)
    // 刷新验证码
    const handleChange = () => {
    }
    // 登录
    const login = () => {
        const { history } = props
        history.push('/bill')
        console.warn('登录', username, password)
    }
    const register = () => {
        console.warn('注册', username, password, code, checked)
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
                    <Input clearable type="text" placeholder="用户名" value={username} onChange={value => setUsername(value)}/>
                </Cell>
                <Cell style={{'backgroundColor': 'transparent'}} icon={<TabIcon type="mima" size="md"/>}>
                    <Input clearable type="password" placeholder="密码" value={password} onChange={value => setPassword(value)}/>
                </Cell>
                {
                    tabType === 'register' ?
                    <>
                        <Cell style={{'backgroundColor': 'transparent'}} icon={<TabIcon type="mima" size="md"/>}>
                            <Input clearable type="text" placeholder="验证码" value={code} onChange={value => setCode(value)}/>
                            <Captcha charNum={4} onChange={handleChange}/>
                        </Cell>
                        <Cell style={{'backgroundColor': 'transparent'}}>
                            <Checkbox value={checked} onChange={value => setChecked(value)}>
                                <span>阅读并同意《条款》</span>
                            </Checkbox>
                        </Cell>
                    </>
                     : null
                }
            </div>
            <div className="login-btn">
                {
                    tabType === 'login' ? <Button block theme="primary" onClick={login}>登录</Button> :
                    <Button block theme="primary" onClick={register}>注册</Button>
                }
                
            </div>
        </div>
    )
}
