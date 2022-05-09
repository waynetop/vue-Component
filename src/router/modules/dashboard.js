export default [{
  path: 'index',
  name: 'index',
  meta: {
    title: '首页'
  },
  component: () =>
      import('@/views/index')
}
]
