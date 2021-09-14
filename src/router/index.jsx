/**
 * 路由
 */
import Bill from '@/pages/bill'
import User from '@/pages/user'
import Statistics from '@/pages/statistics'

const routes = [
    {
        path: '/bill',
        component: Bill
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '/user',
        component: User
    }
]

export default routes