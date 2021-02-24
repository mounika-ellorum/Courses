<template>
    <section>
        <header>
            <h2>My friends</h2>
        </header>
        <new-friend @add-contact="addContact"></new-friend>
        <ul>
            <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone="friend.phone"
            :email="friend.email"
            @get-id="getIdOfFriend"
            @delete="deleteFriend"
            ></friend-contact>
            <!-- <friend-contact
            name="murali"
            phone="9876542310"
            email="murali@gmail.com"
            ></friend-contact> -->
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: '1',
                    name: 'mounika',
                    phone: '9876543210',
                    email: 'mouni@gmail.com'
                },
                {
                    id: '2',
                    name: 'murali',
                    phone: '9876542310',
                    email: 'murali@gmail.com'
                },
            ]
        }
    },
    methods: {
        getIdOfFriend(friendId) {
            alert(friendId);
        },
        addContact(name,num,email) {
            const newFriendcontact = {
                id: new Date().toISOString(),
                name: name,
                phone: num,
                emial: email,
            };
            this.friends.push(newFriendcontact);
        },
        deleteFriend(id) {
            console.log(id);
            this.friends = this.friends.filter((friend) => friend.id !== id);
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
html {
    font-family: "Jost", sans-serif;
}
body {
    margin: 0;
}
header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}
#app ul {
    margin: 0;
    padding: 0;
}
#app li,
#app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    list-style: none;
}
#app h2 {
    font-size: 2rem;
    margin: 0 0 1rem 0; 
}
#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}


</style>