<template>
    <!-- 用于框架切换 -->
    <component :is="themeConfig.layout"/>
</template>
<script lang="ts">
import { defineComponent,defineAsyncComponent, reactive,toRefs } from 'vue'
export default defineComponent({
    name:'layout',
    components:{
        default:defineAsyncComponent(() => import('@/layout/main/defaults.vue')),//默认框架
        classic:defineAsyncComponent(() => import('@/layout/main/classic.vue')),//
        transverse:defineAsyncComponent(() => import('@/layout/main/transverse.vue')),
        columns:defineAsyncComponent(() => import('@/layout/main/columns.vue'))
    },
    setup(){
        // reactive 用于对象、数组
        const dataConfig = reactive({
            themeConfig:{
                layout:'default'
            }
        })
        const data = toRefs(dataConfig);
        return {
            ...data
        }
    }
})
</script>
