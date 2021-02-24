<template>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources';


export default {
  components: {
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        { 
          id: '1', 
          title: 'Official Guide', 
          description: 'The official Vue.js documentation',
          link: '/'
        },
        { 
          id: '2', 
          title: 'Google', 
          description: 'Learn to google...',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
