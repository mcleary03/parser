<template>
  <div id="app">

    <label>
      X Axis
      <select name="xAxis" v-model="xAxis">
        <option
          :key="i"
          v-for="(nodeType, i) in filteredNodeTypes"
        >{{ nodeType }}</option>
      </select>
    </label>

    <br><br>

    <label>Y Axis
      <select name="xAxis" v-model="yAxis">
        <option
          :key="i"
          v-for="(nodeType, i) in filteredNodeTypes"
        >{{ nodeType }}</option>
      </select>
    </label>

    <br><br>

    <label>Z Axis
      <select name="xAxis" v-model="zAxis">
        <option
          :key="i"
          v-for="(nodeType, i) in filteredNodeTypes"
        >{{ nodeType }}</option>
      </select>
    </label>
    <br><br>
    <label>Target
      <input placeholder="Target Node" type="text" :value="target">
    </label>

    <br><br>

    <label>Scale
      <input type="number" step="0.1" v-model="globalScale">
    </label>
    
    <br><br>
    
    <Tree></Tree>

    <Visualizer :ast="ast" :xAxis="xAxis" :yAxis="yAxis" :zAxis="zAxis" :globalScale="globalScale"></Visualizer>

  </div>
</template>

<script>
import { Parser } from 'acorn'
import Tree from '@/components/Tree.vue'
import Visualizer from './views/Visualizer.vue'
import fizzBuzz from '@/testSnippets/fizzBuzz'
import foo from '@/testSnippets/foo'
import { COLORS } from '@/constants'

import * as walk from 'acorn-walk'

const parse = ast => {
  const parsedAST = Parser.parse(ast, {
    ecmaVersion: 9,
    sourceType: 'module',
    allowReserved: true
  })

  const formatter = (node, state, array) => {
    console.log(node)
    console.log(array.map(n=>JSON.parse(JSON.stringify(n))))
  }

  const formatted = walk.fullAncestor(parsedAST, formatter) 

}

export default {
  components: {
    Visualizer,
    Tree
  },
  mounted() {
    parse(foo)
  },

  data() {
    return {
      xAxis: 'BlockStatement',
      yAxis: 'BlockStatement',
      zAxis: 'BlockStatement',
      target: '',
      globalScale: 1
    }
  },

  computed: {
    ast() {
      const fooAST = Parser.parse(foo)
      // const colorsAST = Parser.parse(COLORS, {
      //   ecmaVersion: 9,
      //   sourceType: 'script',
      //   allowReserved: true,
      //   allowImportExportEverywhere: true,
      //   program: fooAST
      // })

      return Parser.parse(fizzBuzz, {
        ecmaVersion: 9,
        sourceType: 'script',
        allowReserved: true,
        program: fooAST
      })
    },
    filteredNodeTypes() {
      return this.$getAvailableNodeTypes()
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
</style>
