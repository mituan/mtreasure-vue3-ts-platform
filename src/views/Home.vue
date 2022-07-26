<template>
  <div>
   11111
   <div>
    <el-checkbox v-model="checked1" label="Option 1"/>
    <el-checkbox v-model="checked2" label="Option 2"/>
  </div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    getCurrentInstance,
    reactive
  } from 'vue';
  export default defineComponent({
    name: 'Home',
    setup() {
      const {
        proxy
      } = getCurrentInstance() as any;

      console.log('proxy', proxy)

      const data = reactive({
      checked1:true,
      checked2:true

    })

    return{
      ...data
    }
    }
  })

</script>
