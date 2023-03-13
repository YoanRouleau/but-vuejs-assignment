<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import HomePage from './views/HomePage.vue'
    console.log(HomePage)    
</script>


<template>
    <header>
        <div class="wrapper">
            <span class="header-title"></span>
            <nav>
                <RouterLink to="/" class="link">Home</RouterLink>
                <RouterLink to="/about" class="link">About</RouterLink>
            </nav>
        </div>
    </header>
    <RouterView/>
</template>


<style scoped>
    @font-face {
        font-family: 'eloquia_displayextrabold';
        src: url('../public/font/Eloquia/typekiln_-_eloquiadisplay-extrabold-webfont.woff2') format('woff2'),
            url('../public/font/Eloquia/typekiln_-_eloquiadisplay-extrabold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    nav{
        font-family: 'eloquia_displayextrabold';
        background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff); 
        height: 10vh;
        text-align: center;
        line-height: 10vh;
    }

    .link{
        font-family: 'eloquia_displayextrabold';
        background: none;
        font-size: 30px;
        padding: 30px;
        text-decoration: none;
        font-weight: bold;
    }
</style>

