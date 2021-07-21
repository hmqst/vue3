<template>
    <el-card shadow="always">
        <template #header>
            <div class="card-header">
                <strong>常用 Composition API</strong>
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
    import {reactive, readonly} from 'vue'

    export default {
        name: "TSCommonApi",
        setup() {
            let data = readonly(reactive([
                {
                    api: 'setup(props, context)',
                    description: 'Composition API（组合API）“ 表演的舞台 ”',
                    notes: 'beforeCreate之前执行一次，this = undefined'
                }, {
                    api: 'ref()',
                    description: '定义基本数据类型的响应式（也可对象类型，内部使用 reactive 实现）',
                    notes: '使用时需要.value，模板中不需要'
                }, {
                    api: 'reactive()',
                    description: '定义对象数据类型的响应式',
                    notes: '响应式数据是"深层次的"'
                }, {
                    api: 'computed(()=>{return})',
                    description: '计算属性',
                    notes: ''
                }, {
                    api: 'watch(data,(newValue,oldValue)=>{},{immediate:true。deep:true})',
                    description: '监听器',
                    notes: '监听多个数据时 data 为数组 [data1,data2]' +
                        '监听 reactive 定义数据时 oldValue无效，' +
                        '监听其中某个属性使用 ()=>data.data1，此时 deep 有效'
                }, {
                    api: 'watchEffect(()=>{})',
                    description: '监听器，类似computed，但没有返回值',
                    notes: '内部使用了的数据会自动监听并执行方法'
                }, {
                    api: '自定义 hook()',
                    description: '将 setup() 中的数据封装成一个函数，并提供一个返回值，类似 mixin',
                    notes: '其他组件引入后即可实现其中的功能'
                }, {
                    api: 'toRef(data,\'name\') 和 toRefs(data)',
                    description: '创建一个 ref 对象，其value值指向另一个对象中的某个属性',
                    notes: '要将响应式对象中的某个属性单独提供给外部使用时使用（特殊的 toRefs() 返回为多个值，return使用 ...toRefs()）'
                }, {
                    api: '生命周期函数',
                    description: '生命周期钩子',
                    notes: '使用见 演示生命周期使用 卡片'
                },

            ]));
            return {
                data
            }
        }
    }
</script>

<style scoped>

</style>
