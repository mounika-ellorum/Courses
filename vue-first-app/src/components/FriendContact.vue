<template>
    <li>
        <h2>{{name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{phone}}</li>
            <li><strong>Email:</strong>{{email}}</li>
        </ul>
        <button @click="$emit('delete', id)">Deletr friend</button>
    </li>
</template>

<script>
export default {
    props: {
        id: Number,
        name: String,
        email: String
    },
    data() {
        return {
            detailsAreVisible: false,
           
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
            this.$emit('get-id', this.id);
        },
        
    }
}
</script>