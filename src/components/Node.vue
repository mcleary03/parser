<template>
  <a-box
    :color="color"
    :depth="depth"
    :height="height"
    :opacity="opacity"
    :position="$coordString(position)"
    :rotation="$coordString(rotation)"
    :transparent="opacity < 1"
    :visible="visible"
    :width="width"
  >
  </a-box>
</template>

<script>
import * as walk from 'acorn-walk'
import aframe from 'aframe'

export default {
  name: 'Node',

  components: {
    
  },

  data() {
    return {
      
    }
  },

  computed: {
    
  },

  mounted() {
    // console.log('Node Component AST: ', this.ast)
  },

  props: {
    // data props
    ast: {default: () => ({}), type: Object},
    vertices: {default: null, type: Object},
    // Visual props
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