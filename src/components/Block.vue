<template>
  <a-box
    :position="$coordString(position)"
    :rotation="$coordString(rotation)"
    :width="globalScale * width"
    :depth="globalScale * depth"
    :height="globalScale * height"
    :color="color"
    :visible="visible"
    :opacity="opacity"
    :transparent="opacity < 1"
  >
    <code-text
      :ast="snippet"
      :i="i"
      :opacity="1"
      :position="{
        x: globalScale * 0,
        y: globalScale * 0,
        z: globalScale * (0.5-i*0.1)}"
      :rotation="{x: 0, y: 0, z: 0}"
      :width="globalScale * width"
      :height="globalScale * height"
      :color="'#CFC'"
      :textColor="'#333'"
      :visible="true"
      :key="i"
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
          snippetArray.unshift(node)
        }
      })

      return snippetArray
    }
  },

  mounted() {
    // console.log('Block', this.ast)
  },

  props: {
    ast: {default: () => ({}), type: Object},
    globalScale: {default: 1, type: Number},
    color: {default: '#a9f3fc', type: String},
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
