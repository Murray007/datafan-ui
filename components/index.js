/*
 * @Description: 组件/指令安装注册
 * @Date: 2022-03-01 15:14:22
 */
import SenseTable from './sense-table/index.vue'
import AdminHeader from './sense-layout/sense-header/index.vue'
import SideMenu from './sense-layout/components/menu/side-menu.vue'
import SenseLayout from './sense-layout/index.vue'
import Empty from './empty/index.vue'
import SenseDictSelect from './sense-dict-select/index.vue'
import Resizable from './resizable'
import { PageTitle, PageHandle, PageHandleItem } from './page-table'
import Navigation from './navigation-slider'
import TransferModal from './transfer-modal'
import LargeSelect from './large-select'
import FullLoading from './full-loading'
import confirmList from './confirm-list'

import { matchPermission } from '../utils/match-permission'

function install(Vue) {
  if (install.installed) return
  install.installed = true

  Vue.use(FullLoading)
  Vue.use(confirmList)
  Vue.component('SenseTable', SenseTable)
  Vue.component('SenseLayout',SenseLayout)
  Vue.component('AdminHeader',AdminHeader)
  Vue.component('Empty', Empty)
  Vue.component('SenseDictSelect', SenseDictSelect)
  Vue.component('SPageTitle', PageTitle)
  Vue.component('SPageHandle', PageHandle)
  Vue.component('SPageHandleItem', PageHandleItem)
  Vue.component('SNavigation', Navigation)
  Vue.component('SResizable', Resizable)
  Vue.component('STransferModal', TransferModal)
  Vue.component('SLargeSelect', LargeSelect)
  Vue.component('SideMenu',SideMenu)
  
  Vue.directive('permission', (el, binding, vnode) => {
    if (binding.value && !matchPermission(binding.value)) {
      const commentElm = document.createComment(binding.value)
      Object.defineProperty(commentElm, 'setAttribute', {
        value: () => undefined
      })
      vnode.elm = commentElm
      vnode.isComment = true
      vnode.context = undefined
      vnode.tag = undefined
      vnode.data.directives = undefined
      if (vnode.componentInstance) {
        vnode.componentInstance.$el = commentElm
      }
      if (el.parentNode) {
        el.parentNode.replaceChild(commentElm, el)
      }
    }
  })

  Vue.directive('permission-readonly', (el, binding) => {
    if (binding.value && !matchPermission(binding.value)) {
      el.style.pointerEvents = 'none'
    }
  })
}

const Plugins = { install }

export default Plugins
