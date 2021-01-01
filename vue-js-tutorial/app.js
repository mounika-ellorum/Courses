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

// assignment two
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

// assignment 3
const appThree = Vue.createApp({
    data() {
        return {
            number: 0,
        }
    },
    watch: {
        result() {
            console.log("watcher is executing ...");
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if(this.number < 37) {
                return "Not there yet!";
            } else if(this.number === 37) {
                return this.number;
            } else {
                return "Too Much!";
            }
        }
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num;
        }
    }
});
appThree.mount('#assignment-three');