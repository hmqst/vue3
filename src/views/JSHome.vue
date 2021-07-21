<template>
    <div style="padding: 1rem">
        <el-row :gutter="12">
            <!-- 响应式原理 -->
            <el-col :span="8">
                <Responsive style="height: 100%"/>
            </el-col>
            <!-- 演示生命周期使用 -->
            <el-col :span="8">
                <Lifecycle style="height: 100%"/>
            </el-col>
            <!-- 内置组件 -->
            <el-col :span="8">
                <NewComponent style="height: 100%"/>
            </el-col>
        </el-row>
        <el-row :gutter="12" style="margin-top: 1rem">
            <!-- 其他变化 -->
            <el-col :span="8">
                <OtherChange style="height: 100%"/>
            </el-col>
            <!-- 常见组合式API -->
            <el-col :span="8">
                <CommonApi style="height: 100%"/>
            </el-col>
            <!-- 其他组合式API -->
            <el-col :span="8">
                <OtherApi style="height: 100%"/>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="js">
    import Lifecycle from '../components/Lifecycle.vue';
    import Responsive from '../components/Responsive.vue';
    import NewComponent from '../components/NewComponent.vue';
    import OtherChange from '../components/OtherChange.vue';
    import CommonApi from '../components/CommonApi.vue';
    import OtherApi from '../components/OtherApi.vue';

    export default {
        name: 'JSHome',
        components: {
            Lifecycle,
            Responsive,
            NewComponent,
            OtherChange,
            CommonApi,
            OtherApi
        },
        setup() {

        }

    }
</script>
