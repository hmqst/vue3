<template>
    <div class="hello_word">
        <h1>{{ msg }}</h1>
        <h2>点击次数：{{ num }}</h2>
        <el-button @click="num++">点我加一（模板中）</el-button>
        <el-button @click="addNum">点我加一（方法中）</el-button>
    </div>
</template>

<script lang="js">
    import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount} from 'vue'
    import {ref} from "vue";

    export default {
        name: 'TSLifecycleSon',
        props: {
            msg: {
                type: String,
                default: 'HelloWord'
            }
        },
        setup() {
            console.log(`---setup（此时 this = ${this}）---`)
            let num = ref(0)
            onBeforeMount(() => {
                console.log('---onBeforeMount---')
            })
            onMounted(() => {
                console.log('---onMounted---')
            })
            onBeforeUpdate(() => {
                console.log('---onBeforeUpdate---')
            })
            onUpdated(() => {
                console.log('---onUpdated---')
            })
            onUnmounted(() => {
                console.log('---onUnmounted---')
            })
            onBeforeUnmount(() => {
                console.log('---onBeforeUnmount---')
            })
            function addNum(){
                num.value++;
            }
            return {
                num,
                addNum
            }
        }
    }
</script>
<style scoped>
    .hello_word{
        background-color: darkgray;
        padding: 10px;
    }
</style>
