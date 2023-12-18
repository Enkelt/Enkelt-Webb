<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="https://enkelt.edvard.dev"><img src="../assets/logo.png" height="50px" alt="Enkelt"> Enkelt</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="https://enkelt.edvard.dev">Hem</b-nav-item>
                <b-nav-item href="#" active>Redigerare</b-nav-item>
                <b-nav-item href="https:///bibliotek.enkelt.edvard.dev">Bibliotek</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style scoped>

</style>