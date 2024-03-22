<template>

        <div class="container">

            <header class="border-bottom lh-1 py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-4 pt-1">
                        <a class="link-secondary" href="#">Subscribe</a>
                    </div>
                    <div class="col-4 text-center">
                        <router-link class="blog-header-logo text-body-emphasis text-decoration-none" to="/">{{ msg }}</router-link>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <a class="link-secondary" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24">
                                <title>Search</title>
                                <circle cx="10.5" cy="10.5" r="7.5"/>
                                <path d="M21 21l-5.2-5.2"/>
                            </svg>
                        </a>
                        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                    </div>
                </div>
            </header>

            <div class="nav-scroller py-1 mb-3 border-bottom">
                <nav class="nav nav-underline justify-content-between">
                    <router-link class="nav-item nav-link link-body-emphasis" v-for="item in data" :key="item.id" :to="item.url">{{ item.name }}</router-link>
                </nav>
            </div>

        </div>

</template>

<script>

import axios from "axios";

export default {

    name: 'NavBar',
    props: {
        msg: String
    },
    data() {
        return {
            backUrl: process.env.VUE_APP_BACK_URL,
            data: []
        }
    },
    mounted() {

        this.getAllLanguages();
    },
    methods: {
        getAllLanguages() {
            axios.get(this.backUrl + '/api/languages').then(response => {
                this.data = response.data;
            }).catch(error => {
                console.error(error);
            });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blog-header-logo {
    font-family: "Playfair Display", Georgia, "Times New Roman", serif;
    font-size: 2.25rem;
}

.blog-header-logo:hover {
    text-decoration: none;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
</style>
