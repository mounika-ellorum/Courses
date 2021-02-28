<template>
  <div>
    <active-user :name="user.name" :age="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'mounika',
        age: 26
      }
    }
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: age
      };
    }
  }
}
</script>

