<template>


        <main class="container">



            <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                <div class="col-lg-6 px-0">
                    <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
                    <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what`s most interesting in this post`s contents.</p>
                    <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
                </div>
            </div>



            <div class="row mb-2">


                <div class="col-md-6" v-for="item in data" :key="item.id">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary-emphasis">{{ item.language }}</strong>
                            <h3 class="mb-0">{{ item.name }}</h3>
                            <p class="card-text mb-auto">{{ item.description }}</p>
                            <router-link class="icon-link gap-1 icon-link-hover" to="/course">Continue reading<svg class="bi"><use xlink:href="#chevron-right"/></svg></router-link>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"/>
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>
                        </div>
                    </div>
                </div>


            </div>



        </main>

        <FooterPage />

</template>

<script>
import axios from "axios";
import FooterPage from "@/components/Footer.vue";
export default {
    name: 'Language',
    components: { FooterPage },
    props: ['id'],
    data() {
        return {
            backUrl: process.env.VUE_APP_BACK_URL,
            data: []
        }
    },
    watch: {
        '$route': {
            handler: function(newRoute, oldRoute) {
                this.getTutorialsByLanguageId(newRoute.params.id)
            },
            immediate: true,
            deep: true,
        }
    },
    methods: {

        getTutorialsByLanguageId(id) {

            axios.get(this.backUrl + '/api/tutorials/' + id).then(response => {
                this.data = response.data;
            }).catch(error => {
                console.error(error);
            });
        }
    },
}
</script>
