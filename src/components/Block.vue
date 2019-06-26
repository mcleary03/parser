<template>
  <a-box
    :color="color"
    :depth="depth"
    :height="height"
    :opacity="opacity"
    :position="stringIt(position)"
    :rotation="stringIt(rotation)"
    :transparent="opacity < 1"
    :visible="visible"
    :width="width"
  >
    <code-text
      :ast="snippet"
      :color="'#CFC'"
      :height="0.2"
      :i="i"
      :key="i"
      :opacity="1"
      :position="{x: 0, y: 0, z: 0.5-i*0.1}"
      :rotation="{x: 0, y: 0, z: 0}"
      :textColor="'#333'"
      :visible="true"
      :width="0.2"
      v-for="(snippet, i) in snippets"
    ></code-text>
  </a-box>
</template>

<script>
import * as walk from 'acorn-walk'
import aframe from 'aframe'
import CodeText from './CodeText'

export default {
  name: 'Block',

  components: {
    CodeText
  },

  data() {
    return {
      
    }
  },

  computed: {
    snippets() {
      const snippetArray = []

      walk.ancestor(this.ast, {
        // I can swap out this function for any type of node I want to render code text for.  Could use props for this...
        Statement(node) {
          console.log('node', node)
          snippetArray.unshift(node)
        }
      })
      console.log('snippets: ', snippetArray)

      // WHY IS THIS EMPTY!?!!?!?!!???!??!??!?????!

      return snippetArray
    }
  },

  mounted() {
    console.log('Block', this.ast)
  },

  props: {
    ast: {default: () => ({}), type: Object},
    color: {default: '#42c2f4', type: String},
    depth: {default: 0.2, type: Number},
    height: {default: 0.2, type: Number},
    opacity: {default: 0.2, type: Number},
    outerDisplay: {default: '', type: String},
    position: {default: () => ({x: 0, y: 0, z: 0}), type: Object},
    rotation: {default: () => ({x: 0, y: 0, z: 0}), type: Object},
    visible: {default: true, type: Boolean},
    width: {default: 0.2, type: Number}
  }
}
</script>