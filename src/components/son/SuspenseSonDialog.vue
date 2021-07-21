<template>
    <h3>{{ data }}</h3>
</template>

<script lang="js">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "SuspenseSonDialog",
        async setup() {
            // 在 `setup` 内部使用 `await` 需要非常小心
            // 因为大多数组合式 API 函数只会在
            async function loadData() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve("加载完成")
                    }, 2000)
                })
            }

            // 第一个 `await` 之前工作
            const data = await loadData()

            // 它隐性地包裹在一个 Promise 内
            // 因为函数是 `async` 的
            return {
                data
            }
        }
    })
</script>

<style scoped>

</style>
