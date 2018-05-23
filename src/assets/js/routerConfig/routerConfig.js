import INDEX from '../../../components/index.vue'
import MESSAGE from '../../../components/message.vue'
import CAR from '../../../components/car.vue'
import MY from '../../../components/my.vue'
import BUY from '../../../components/buy.vue'
const routes = [
    {path:'/',component:INDEX},
    {path:'/mes',component:MESSAGE},
    {path:'/car',component:CAR},
    {path:'/my',component:MY},
    {path:'/buy',component:BUY},
    {path:'/buy:uid',component:BUY}
]
export default routes;