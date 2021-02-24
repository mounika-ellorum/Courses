<template>
    <section>
        <h2>{{name}}</h2>
        <h2>{{age}} years</h2>
    </section>
</template>

<script>
export default {
    props: {
        name: String,
        age: Number
    }
}
</script>

<style scoped>

</style>