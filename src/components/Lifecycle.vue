<template>
    <el-card shadow="always">
        <template #header>
            <div class="card-header">
                <strong>演示生命周期使用</strong>
                <el-button @click="isShow = !isShow" type="text">隐藏/显示子组件</el-button>
            </div>
        </template>
        <div>
            <div v-if="isShow">
                <LifecycleSon msg="子组件"/>
            </div>
        </div>
    </el-card>
</template>

<script lang="js">
    import LifecycleSon from './son/LifecycleSon.vue';
    import {ref, defineComponent} from "vue";

    export default defineComponent({
        name: "Lifecycle",
        components: {
            LifecycleSon
        },
        setup() {
            let isShow = ref(false);

            return {
                isShow
            }
        },
    })
</script>

<style scoped>

</style>
