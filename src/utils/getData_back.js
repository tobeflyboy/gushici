const routes = [
  {
    id: 100,
    name: "诗词文集",
    path: "/gushici",
    meta: {
      icon: "Notebook",
      title: "诗词文集"
    },
    children: [
      {
        id: 101,
        name: "论语十二章",
        path: "lun-yu-shi-er-zhang",
        component: "/src/views/gushici/论语十二章.vue",
        meta: {
          icon: "Tickets",
          title: "《论语》十二章"
        }
      },
      {
        id: 102,
        name: "爱莲说",
        path: "ai-lian-shuo",
        component: "/src/views/gushici/爱莲说.vue",
        meta: {
          icon: "Tickets",
          title: "爱莲说"
        }
      },
      {
        id: 103,
        name: "桃花源记",
        path: "tao-hua-yuan-ji",
        component: "/src/views/gushici/桃花源记.vue",
        meta: {
          icon: "Tickets",
          title: "桃花源记"
        }
      },
      {
        id: 104,
        name: "小石潭记",
        path: "xiao-shi-tan-ji",
        component: "/src/views/gushici/小石潭记.vue",
        meta: {
          icon: "Tickets",
          title: "小石潭记"
        }
      },
      {
        id: 105,
        name: "曹刿论战",
        path: "cao-gui-lun-zhan",
        component: "/src/views/gushici/曹刿论战.vue",
        meta: {
          icon: "Tickets",
          title: "曹刿论战"
        }
      },
      {
        id: 106,
        name: "送东阳马生序",
        path: "song-dong-yang-ma-sheng",
        component: "/src/views/gushici/送东阳马生序.vue",
        meta: {
          icon: "Tickets",
          title: "送东阳马生序"
        }
      },
      {
        id: 107,
        name: "生于忧患死于安乐",
        path: "sheng-yu-you-huan-si-yu-an-le",
        component: "/src/views/gushici/生于忧患死于安乐.vue",
        meta: {
          icon: "Tickets",
          title: "生于忧患死于安乐"
        }
      },
      {
        id: 108,
        name: "定风波·莫听穿林打叶声",
        path: "ding-feng-bo",
        component: "/src/views/gushici/定风波·莫听穿林打叶声.vue",
        meta: {
          icon: "Tickets",
          title: "定风波·莫听穿林打叶声"
        }
      },
      {
        id: 109,
        name: "短歌行",
        path: "duan-ge-xing",
        component: "/src/views/gushici/短歌行.vue",
        meta: {
          icon: "Tickets",
          title: "短歌行"
        }
      },
      {
        id: 110,
        name: "江城子·密州出猎",
        path: "jiang-cheng-zi-mi-zhou",
        component: "/src/views/gushici/江城子·密州出猎.vue",
        meta: {
          icon: "Tickets",
          title: "江城子·密州出猎"
        }
      },
      {
        id: 111,
        name: "江城子·乙卯正月二十日夜记梦",
        path: "jiang-cheng-zi-yi-mao",
        component: "/src/views/gushici/江城子·乙卯正月二十日夜记梦.vue",
        meta: {
          icon: "Tickets",
          title: "江城子·乙卯正月二十日夜记梦"
        }
      },
      {
        id: 112,
        name: "桃花庵歌",
        path: "tao-hua-an-ge",
        component: "/src/views/gushici/桃花庵歌.vue",
        meta: {
          icon: "Tickets",
          title: "桃花庵歌"
        }
      },
      {
        id: 113,
        name: "逍遥游节选",
        path: "xian-yao-you-jie-xuan",
        component: "/src/views/gushici/逍遥游节选.vue",
        meta: {
          icon: "Tickets",
          title: "逍遥游节选"
        }
      },
      {
        id: 114,
        name: "逍遥游",
        path: "xian-yao-you",
        component: "/src/views/gushici/逍遥游.vue",
        meta: {
          icon: "Tickets",
          title: "逍遥游"
        }
      },
      {
        id: 115,
        name: "出师表",
        path: "chu-shi-biao",
        component: "/src/views/gushici/出师表.vue",
        meta: {
          icon: "Tickets",
          title: "出师表"
        }
      },
      {
        id: 116,
        name: "岳阳楼记",
        path: "yue-yang-lou-ji",
        component: "/src/views/gushici/岳阳楼记.vue",
        meta: {
          icon: "Tickets",
          title: "岳阳楼记"
        }
      },
      {
        id: 117,
        name: "滕王阁序",
        path: "teng-wang-ge-xu",
        component: "/src/views/gushici/滕王阁序.vue",
        meta: {
          icon: "Tickets",
          title: "滕王阁序"
        }
      },
      {
        id: 118,
        name: "将进酒",
        path: "qiang-jin-jiu",
        component: "/src/views/gushici/将进酒.vue",
        meta: {
          icon: "Tickets",
          title: "将进酒"
        }
      },
      {
        id: 119,
        name: "满江红·写怀",
        path: "man-jiang-hong-xie-huai",
        component: "/src/views/gushici/满江红·写怀.vue",
        meta: {
          icon: "Tickets",
          title: "满江红·写怀"
        }
      }
    ]
  },
  {
    id: 1000,
    name: 'cardTemplate',
    path: '/cardTemplate',
    meta: {
      title: '卡片合集',
      icon: 'Files'
    },
    children: [
      {
        id: 1001,
        name: 'cardTemplate1',
        path: 'cardTemplate1',
        component: '/src/views/CardTemplate/template1.vue',
        meta: {
          title: '普通卡片',
          icon: 'Files'
        }
      },
      {
        id: 1002,
        name: 'cardTemplate3',
        path: 'cardTemplate3',
        component: '/src/views/CardTemplate/template3.vue',
        meta: {
          title: '可拖拽卡片',
          icon: 'Files'
        }
      },
      {
        id: 1003,
        name: 'cardTemplate4',
        path: 'cardTemplate4',
        component: '/src/views/CardTemplate/template4.vue',
        meta: {
          title: '可缩放卡片',
          icon: 'Files'
        }
      },
      {
        id: 1004,
        name: 'cardTemplate2',
        path: 'cardTemplate2',
        component: '/src/views/CardTemplate/template2.vue',
        meta: {
          title: 'echarts卡片',
          icon: 'Files'
        }
      }
    ]
  },
  {
    id: 2000,
    name: 'formTemplate',
    path: '/formTemplate',
    meta: {
      title: '表单示例',
      icon: 'Tickets'
    },
    children: [
      {
        id: 2001,
        name: 'formTemplate1',
        path: 'formTemplate1',
        component: '/src/views/FormTemplate/template1.vue',
        meta: {
          title: '示例1',
          icon: 'Tickets'
        }
      },
      {
        id: 2002,
        name: 'formTemplate2',
        path: 'formTemplate2',
        component: '/src/views/FormTemplate/template2.vue',
        meta: {
          title: '示例2',
          icon: 'Tickets'
        }
      }
    ]
  },
  {
    id: 3000,
    name: 'tableTemplate',
    path: '/tableTemplate',
    meta: {
      title: '表格示例',
      icon: 'CopyDocument'
    },
    children: [
      {
        id: 3001,
        name: 'tableTemplate1',
        path: 'tableTemplate1',
        component: '/src/views/TableTemplate/template1.vue',
        meta: {
          title: '示例1',
          icon: 'CopyDocument'
        }
      },
      {
        id: 3002,
        name: 'tableTemplate2',
        path: 'tableTemplate2',
        component: '/src/views/TableTemplate/template2.vue',
        meta: {
          title: '示例2',
          icon: 'CopyDocument'
        }
      }
    ]
  },
  {
    id: 5000,
    name: 'pdfTemplate',
    path: '/pdfTemplate',
    meta: {
      title: 'pdf示例',
      icon: 'Document'
    },
    children: [
      {
        id: 5001,
        name: 'pdfTemplate1',
        path: 'pdfTemplate1',
        component: '/src/views/PdfTemplate/template1.vue',
        meta: {
          title: '预览PDF1',
          icon: 'Document'
        }
      },
      {
        id: 5002,
        name: 'pdfTemplate2',
        path: 'pdfTemplate2',
        component: '/src/views/PdfTemplate/template2.vue',
        meta: {
          title: '预览PDF2',
          icon: 'Document'
        }
      }
    ]
  },
  {
    id: 4000,
    name: 'systems',
    path: '/systems',
    meta: {
      title: '系统设置',
      icon: 'Tools'
    },
    children: [
      {
        id: 4001,
        name: 'structures',
        path: 'structures',
        component: '/src/views/Systems/structures.vue',
        meta: {
          title: '组织架构',
          icon: 'Tools'
        }
      }
    ]
  }
]

// 模拟获取动态路由数据
export function getDynamicRoutes() {
  return new Promise((resolve) => {
    resolve(routes)
  })
}
