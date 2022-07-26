<template>
  <!-- 默认框架 -->
     <el-container class="layout-container">
       <Aside/>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>
<script lang="ts">
  import {
    defineComponent
  } from 'vue'
  import Aside from '@/layout/component/aside.vue'
  // import Header from '@/layout/component/header.vue'

  export default defineComponent({
    name:'defaults',
    components:{
      Aside,
      // Header,
      // mainBox:defineAsyncComponent(() => import('@/layout/component/main.vue')),
    },
    setup() {
      
     
      return {

      }
    },
  })

</script>
