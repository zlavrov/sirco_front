<template>

    <NavBar msg="Sirco"/>
    <router-view />
    <ColorModel />

</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ColorModel from "@/components/ColorModel.vue";

export default {
    name: "App",
    components: { NavBar, ColorModel }
}
</script>

<style>

</style>
