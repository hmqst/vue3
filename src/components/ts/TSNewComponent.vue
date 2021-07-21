<template>
    <el-card shadow="always">
        <template #header>
            <div class="card-header">
                <strong>新的组件</strong>
            </div>
        </template>
        <div>
            <p><strong>Fragment：</strong>组件可以没有根标签, 内部会封装在一个 Fragment 虚拟元素中</p>
            <p><strong>Teleport：</strong>可将部分Html移动到指定位置，例如打开弹窗在body中</p>
            <p><strong>Suspense：</strong>配合 defineAsyncComponent() 异步加载组件</p>
        </div>
        <el-button @click="isShow = true">Teleport 测试</el-button>
        <TeleportDialog v-model="isShow"/>

        <el-button @click="dialogVisible = true">Suspense 测试</el-button>
        <el-dialog title="Suspense 测试" v-model="dialogVisible" destroy-on-close>
            <SuspenseDialog/>
            <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </el-card>
</template>

<script lang="js">
    import TeleportDialog from './son/TSTeleportDialog.vue'
    import SuspenseDialog from './son/TSSuspenseDialog.vue'
    import {ref, defineComponent} from 'vue'

    export default defineComponent({
        name: "TSNewComponent",
        components: {
            TeleportDialog,
            SuspenseDialog
        },
        setup() {
            let isShow = ref(false)

            let dialogVisible = ref(false)

            return {
                isShow,
                dialogVisible
            }
        }
    })
</script>

<style scoped>

</style>
