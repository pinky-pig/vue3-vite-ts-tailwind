let config:Array<Object> = [
  {
    id: '1',
    pid: '-1',
    text: 'VUE',
    icon: 'location',
    name: 'VUE'
  },
  {
    id: '2',
    pid: '-1',
    text: 'Canvas',
    icon: 'location',
    name: 'Canvas'
  },
  {
    id: '3',
    pid: '-1',
    text: '一级菜单',
    icon: 'location',
    children: [
      {
        id: '3-1',
        pid: '3',
        text: '二级菜单1',
        name: 'icon',
        icon: 'location'
      },
      {
        id: '3-2',
        pid: '3',
        text: '二级菜单2',
        icon: 'location',
        children: [
          {
            id: '3-2-1',
            pid: '3-2',
            text: '三级菜单1',
            name: 'form',
            icon: 'location'
          },
          {
            id: '3-2-2',
            pid: '3-2',
            text: '三级菜单2',
            name: 'menu1-1',
            icon: 'location'
          },
          {
            id: '3-2-3',
            pid: '3-2',
            text: '三级菜单3',
            name: 'menu1-2',
            icon: 'location'
          },
          {
            id: '3-2-4',
            pid: '3-2',
            text: '三级菜单4',
            name: 'menu1-3',
            icon: 'location'
          }
        ]
      }
    ]
  },
]

export default config
