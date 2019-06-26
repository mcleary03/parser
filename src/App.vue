<template>
  <div id="app">
    <select name="xAxis" v-model="xAxis">
      <option
        :key="i"
        v-for="(nodeType, i) in filteredNodeTypes"
      >{{ nodeType }}</option>
    </select>
    <br>
    <input placeholder="y axis" type="text" :value="y">
    <br>
    <input placeholder="z axis" type="text" :value="z">
    <br>
    <input placeholder="Target Node" type="text" :value="target">
    <Visualizer :xAxis="xAxis"></Visualizer>
  </div>
</template>

<script>
import Constants from './constants.js'
import Visualizer from './views/Visualizer.vue'

export default {
  components: {
    Visualizer
  },

  data() {
    return {
      nodeTypes: Constants.NODE_TYPES,
      xAxis: 'ExpressionStatement',
      y: 'BlockStatement',
      z: '',
      target: ''
    }
  },

  mounted() {
    console.log(Constants.NODE_TYPES);
  },

  computed: {
    filteredNodeTypes() {
      return Object.keys(this.nodeTypes)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
