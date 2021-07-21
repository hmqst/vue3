<template>
    <el-card shadow="always">
        <template #header>
            <div class="card-header">
                <strong>响应式原理</strong>
                <el-button @click="isLog = !isLog" type="text">打印/不打印日志切换</el-button>
            </div>
        </template>
        <div>
            <p>
                源用户信息：{{user}}
                <el-button @click="showThisUser" size="small">查看现在的用户信息</el-button>
            </p>
            <p>代理用户信息：{{proxy}}</p>
            <p>姓名：{{proxy.name}}</p>
            <p>年龄：{{proxy.age}}</p>

            <el-button @click="proxy.name += '~'">代理姓名变化</el-button>
            <el-button @click="proxy.age++">代理年龄变化</el-button>
            <el-button @click="proxy.sex = '男'">代理新增Sex</el-button>
            <el-button @click="delete proxy.sex">代理删除Sex</el-button>
        </div>
    </el-card>
</template>

<script lang="js">
    import {ElMessage} from 'element-plus'
    import {ref} from "vue";

    export default {
        name: "TSResponsive",
        setup() {
            let isLog = ref(false);
            let user = {
                name: '姓名',
                age: 18
            }
            let proxy = new Proxy(user, {
                // 拦截读取属性值
                get(target, prop) {
                    if (isLog.value){
                        console.log(`监听到读取了user中的 ${prop.toString()}，我需要去更新页面`)
                    }
                    return Reflect.get(target, prop)
                },
                // 拦截设置属性值或添加新属性
                set(target, prop, value) {
                    if (isLog.value) {
                        console.log(`监听到设置或添加了user中的 ${prop}，值为：${value}，我需要去更新页面`)
                    }
                    return Reflect.set(target, prop, value)
                },
                // 拦截删除属性
                deleteProperty(target, prop) {
                    if (isLog.value) {
                        console.log(`监听到删除了user中的 ${prop}，我需要去更新页面`)
                    }
                    return Reflect.deleteProperty(target, prop)
                }
            });
            function showThisUser() {
                ElMessage.info(JSON.stringify(user));
            }
            return {
                isLog,
                user,
                proxy,
                showThisUser
            }
        }
    }
</script>

<style scoped>

</style>
