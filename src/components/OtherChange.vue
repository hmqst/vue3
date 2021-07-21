<template>
    <el-card shadow="always">
        <template #header>
            <div class="card-header">
                <strong>其他变化</strong>
            </div>
        </template>
        <div>
            <el-tabs v-model="type">
                <el-tab-pane label="移除" name="0">
                    <p><strong style="color:#DD5145">移除</strong>全局配置 Vue.config.productionTip，现在为自动</p>
                    <p><strong style="color:#DD5145">移除</strong>过滤器（filter）</p>
                    <p><strong style="color:#DD5145">移除</strong>v-on.native，子组件使用emits: ['close']表名接收的方法，其他为原生方法</p>
                    <p><strong style="color:#DD5145">移除</strong>keyCode作为 v-on 的修饰符，同时也不再支持config.keyCodes</p>
                </el-tab-pane>
                <el-tab-pane label="变化" name="1">
                    <p><strong>data 选项应始终被声明为一个函数</strong></p>
                    <el-table max-height="320" :header-row-style="()=>'color: black'" :data="removeData" border stripe
                              style="width: 100%">
                        <el-table-column
                                prop="old"
                                label="2.x 全局 API（Vue）">
                        </el-table-column>
                        <el-table-column
                                prop="new"
                                label="3.x 实例 API (app)">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-card>

</template>

<script lang="js">
    import {ref, reactive, readonly, defineComponent} from 'vue'

    export default defineComponent({
        name: "OtherChange",
        setup() {
            let type = ref('0');
            let removeData = readonly(reactive([
                {
                    old: 'Vue.config.xxxx',
                    new: 'app.config.xxxx'
                }, {
                    old: 'Vue.component',
                    new: 'app.component'
                }, {
                    old: 'Vue.directive',
                    new: 'app.directive'
                }, {
                    old: 'Vue.mixin',
                    new: 'app.mixin'
                }, {
                    old: 'Vue.use',
                    new: 'app.use'
                }, {
                    old: 'Vue.prototype',
                    new: 'app.config.globalProperties'
                }
            ]))
            return {
                type,
                removeData
            }
        }
    })
</script>

<style scoped>
    .name {

    }
</style>
