<template>
    <section>
        <form @submit.prevent="submitData">
            <input type="text" placeholder="name" v-model="enteredName"/>
            <input type="text" placeholder="age" v-model="enteredAge"/>
            <button>set user data</button>
        </form>
    </section>  
</template>

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    submitData() {
        this.$emit('set-data', this.enteredName, this.enteredAge);
    }
}
</script>

<style scoped>

</style>