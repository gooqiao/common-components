<template>
	<l-button type="primary">Click me</l-button>
</template>

<script>
export default() {
  mounted() {
    console.log(2222222);
    console.log(this.$notice);
    this.$notice({
        title: '提示',
        content: "太棒了",
        duration: 3
    })
  }
}
<script>

<markdown>
# 使用
  ## 直接使用
  ``` js 
  import TmUI from 'tm-components'
  import 'tm-components/lib/styles/tm-ui.css'

  Vue.use(TmUI)
  ```

  ## 按需加载
  1. 安装babel-plugin-component
  2. .babelrc文件写上
  {
      "plugins": [
          ["component", {
              "libraryName": "tm-ui",
              "libDir": "lib",
              "styleLibrary": {
                  "name": "styles",
                  "base": false, // no base.css file
                  "path": "[module].css"
              }
          }]
      ]
  }
  3. 项目中
  import Vue from 'vue'
  import { Button } from 'lime-ui'

  Vue.component('a-button', Button)
</markdown>
