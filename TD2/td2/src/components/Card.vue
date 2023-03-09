<script>
    export default {
        props: ['data'],
        mounted(){

        }
    }
</script>

<template>
    <div>
        {{data}}
        <img :src='data.imgSrc'>
    </div>
</template>