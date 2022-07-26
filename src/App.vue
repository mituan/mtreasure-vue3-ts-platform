<template>
<!-- :locale='i18nLocale' -->
  <el-config-provider :size="globalComponentSize">
    <router-view/>
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent,reactive } from 'vue'
export default defineComponent({
  name:'app',
  setup(){
    const data = reactive({
      globalComponentSize:'large', //全局的组件大小  large / default /small
    })

    return{
      ...data
    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>
