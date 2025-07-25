/**
 * 根据用户菜单权限设置路由
 * @param menuData
 */
/* -------------------------------------分割线-------------------------------------------- */
import layout from '../layout/index.vue'
import formTemplate1 from '../views/FormTemplate/template1.vue'
import formTemplate2 from '../views/FormTemplate/template2.vue'
import tableTemplate1 from '../views/TableTemplate/template1.vue'
import tableTemplate2 from '../views/TableTemplate/template2.vue'
import cardTemplate1 from '../views/CardTemplate/template1.vue'
import cardTemplate2 from '../views/CardTemplate/template2.vue'
import cardTemplate3 from '../views/CardTemplate/template3.vue'
import cardTemplate4 from '../views/CardTemplate/template4.vue'
import structures from '../views/Systems/structures.vue'
import pdfTemplate1 from '../views/PdfTemplate/template1.vue'
import pdfTemplate2 from '../views/PdfTemplate/template2.vue'

const componentObj = {
  layout,
  formTemplate1,
  formTemplate2,
  tableTemplate1,
  tableTemplate2,
  cardTemplate1,
  cardTemplate2,
  cardTemplate3,
  cardTemplate4,
  structures,
  pdfTemplate1,
  pdfTemplate2
}
const iconList = {
  formTemplate: 'Tickets',
  tableTemplate: 'CopyDocument',
  cardTemplate: 'Files',
  systems: 'Tools',
  pdfTemplate: 'Document'
}

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("/src/views/**/*.vue");


/**
 * 动态添加用户路由权限
 * @param menuData json格式的字符串
 * @returns {[]}
 */
export function getAuthRouters(menuData) {
  const routerList = []
  let obj, children
  menuData && menuData.map(item => {
    obj = {
      path: item.path,
      component: () => import('@/layout/index.vue'),
      redirect: 'noRedirect',
      name: item.name,
      meta: {
        breadcrumbName: item.meta.title,
        icon: item.meta.icon
      }
    }
    // 设置子菜单
    children = []
    item['children'].map(it => {
      // 动态加载组件
      const componentLoader = modules[it.component];
      children.push({
        path: it.path,
        component: componentLoader,
        name: it.name, // 如果该组件需要缓存,这里的name属性请与组件的name保持一致
        meta: {
          breadcrumbName: it.meta.title,
          icon: it.meta.icon,
          cached: true, // 是否需要缓存
          keepAlive: true
        }
      })
    })
    obj.children = children
    routerList.push(obj)
  })
  return routerList
}


