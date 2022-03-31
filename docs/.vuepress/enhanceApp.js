
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 引用本地组件&样式库
// import components from '../../components/index'
// import '../../assets/style/index.less'

// 引用npm包组件&样式库
import DataFanUI from '@young-datafan/datafan-ui'
import '@young-datafan/datafan-ui/assets/style/index.less'
import _ from 'lodash'

export default async ({
  Vue
}) => {
  Vue.prototype._ = _
  if (typeof process === 'undefined') {
    Vue.use(Antd)
    // Vue.use(components)
    Vue.use(DataFanUI)
  }
}