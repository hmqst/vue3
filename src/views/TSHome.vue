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

<script lang="ts">
    import Lifecycle from '../components/ts/TSLifecycle.vue';
    import Responsive from '../components/ts/TSResponsive.vue';
    import NewComponent from '../components/ts/TSNewComponent.vue';
    import OtherChange from '../components/ts/TSOtherChange.vue';
    import CommonApi from '../components/ts/TSCommonApi.vue';
    import OtherApi from '../components/ts/TSOtherApi.vue';
    import {Options, Vue} from 'vue-class-component';

    @Options({
        name: 'TSHome',
        components: {
            Lifecycle, Responsive, NewComponent, OtherChange, CommonApi, OtherApi
        }
    })
    export default class Home extends Vue {
        // 计算属性
        get getName(): string {
            return "" + Date.now().toLocaleString()
        }

        // 方法
        getDateNow(): string {
            return Date.now().toLocaleString();
        }
    }
</script>
