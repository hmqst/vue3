<template>
    <Suspense>
        <template v-slot:default>
            <SuspenseSonDialog/>
        </template>
        <!-- v-slot: 和 # 一样 -->
        <template #fallback>
            <h3><i class="el-icon-loading"/> 加载中.....</h3>
        </template>
    </Suspense>
</template>

<script lang="js">
    import {defineAsyncComponent} from 'vue'

    export default {
        name: "TSSuspenseDialog",
        components:{
            SuspenseSonDialog: defineAsyncComponent(() => import('./TSSuspenseSonDialog.vue'))
        }
    }
</script>

<style scoped>

</style>
