<template>
  <!-- 默认框架 -->
     <el-container class="layout-container">
       <Aside/>
      <el-container class="flex-center" :class="{ 'layout-backtop': !isFixedHeader }">
        <Header v-if="isFixedHeader" />
         <el-scrollbar>
           <!-- <el-header v-if="!isFixedHeader"><Header/></el-header> -->
           <Header v-if="!isFixedHeader" ref="layoutDefaultsScrollbarRef" :class="{ 'layout-backtop': isFixedHeader }"/>
           <Main/>
        </el-scrollbar>
      </el-container>
      <el-backtop target=".layout-backtop .el-scrollbar__wrap"></el-backtop>
      <el-backtop :right="100" :bottom="100" />
    </el-container>
</template>
<script lang="ts">
  import {
    computed,
    defineComponent
  } from 'vue'
  import { storeToRefs } from 'pinia';
  import { useThemeConfig } from '@/store/themeConfig';
  import Aside from '@/layout/component/aside.vue'
  import Header from '@/layout/component/header.vue'
  import Main from '@/layout/component/main.vue'

  export default defineComponent({
    name:'defaults',
    components:{
      Aside,
      Header,
      Main
    },
    setup() {
      const storesThemeConfig = useThemeConfig();
      const { themeConfig } = storeToRefs(storesThemeConfig);
      console.log('themeConfig',themeConfig)
      const isFixedHeader = computed(() => {
        return themeConfig.value.isFixedHeader;
      })
      return {
        isFixedHeader
      }
    },
  })

</script>
