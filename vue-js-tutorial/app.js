const app = Vue.createApp({
    data() {
        return {
            name: 'Mounika',
            age: 26,
            imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1606255499.jpg"
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        }
    }
});

app.mount('#assignment');

const appTwo = Vue.createApp({
    data() {
        return {
            input: '',
            confirmedInput: '',
        }
    },
    methods: {
        showAlert() {
            alert('helo welcome');
        },
        saveInput(event) {
            this.input = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.input;
        }
    }
});

appTwo.mount('#assignment-two');