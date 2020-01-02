import Home from "@/components/Home";
import FunctionManage from "@/components/FunctionManage";

const routerConfig = [{
    path: '/home',
    name: 'home',
    component: Home
},
    {path: '/function',
    name: 'function',
    component: FunctionManage}]

export default routerConfig
