<template>
  <a-entity :position="position">
    <a-entity :key="i" v-for="(block, i) in blocks">
      <block
        :ast="block"
        :color="colors[block.type] || 'black'"
        :opacity="0.2"
        :visible="true"
        :position="{x: 0, y: 0, z: -i*1.1}"
        :width="1"
        :depth="1"
        :height="1"
      ></block>
    </a-entity>
  </a-entity>
</template>

<script>
import * as walk from 'acorn-walk'
import aframe from 'aframe'
import Block from './Block'

export default {
  name: 'Scope',

  components: {
    Block
  },

  data() {
    return {
      colors: {
        BlockStatement: '#42c2f4',
        IfStatement: 'yellow',
        ForStatement: 'orange'
      }
    }
  },

  props: {
    ast: {default: () => ({}), type: Object},
    position: {default: () => ({x: 0, y: 0, z: 0})}
  },

  computed: {
    blocks() {
      const blocksArray = []

      walk.ancestor(this.ast, {
        BlockStatement(node) {
          blocksArray.unshift(node)
        }
      })
      return blocksArray
    }
  },

  mounted() {
    console.log('Scope', this.ast)
  }

}
</script>