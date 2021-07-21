<template>
    <el-card shadow="always">
        <template #header>
            <div class="card-header">
                <strong>其他 Composition API</strong>
            </div>
        </template>
        <el-table height="430" :header-row-style="()=>'color: black'" :data="data" border stripe style="width: 100%">
            <el-table-column prop="api" label="API"/>
            <el-table-column prop="description" label="说明"/>
            <el-table-column prop="notes" label="注意事项"/>
        </el-table>
    </el-card>
</template>

<script lang="js">
    import {reactive, readonly, defineComponent} from "vue";

    export default defineComponent({
        name: "OtherApi",
        setup() {
            let data = readonly(reactive([
                {
                    api: 'shallowReactive 与 shallowRef',
                    description: '只处理最外层属性的响应式',
                    notes: 'ref将不处理对象类型的响应式'
                }, {
                    api: 'readonly 与 shallowReadonly',
                    description: '让一个响应式数据变为只读',
                    notes: 'shallow只处理最外层属性'
                }, {
                    api: 'toRaw 与 markRaw',
                    description: '使 reactive对象 变为普通对象',
                    notes: 'markRaw 将使其永远不会再成为响应式对象'
                }, {
                    api: 'customRef',
                    description: '自定义的 ref',
                    notes: '必须对其依赖项跟踪和更新触发进行显式控制（手写get，set方法）'
                }, {
                    api: 'provide(\'car\',car) 与 inject(\'car\')',
                    description: '祖与后代组件间通信',
                    notes: ''
                }, {
                    api: '响应式数据的判断',
                    description: 'isRef isReactive isReadonly isProxy',
                    notes: 'isProxy 相当于 isReactive || isReadonly'
                }
            ]));
            return {
                data
            }
        }
    })
</script>

<style scoped>

</style>
