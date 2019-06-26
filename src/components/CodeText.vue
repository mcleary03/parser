<template>
  <a-text
    :color="color"
    :height="height"
    :geometry="`primitive: plane;
                height: 1;
                width: 1`"
    :material="`color: ${textColor};
                opacity: ${opacity};
                transparent: ${opacity < 1};
                side: double`"
    :position="stringIt(position)"
    :rotation="stringIt(rotation)"
    :visible="visible"
    :width="width"
    :value="codeStr(ast)"
  ></a-text>
</template>

<script>
import aframe from 'aframe'
import { generate } from 'astring'

export default {
  name: 'CodeText',

  data() {
    return {
      codeText: this.codeStr(this.ast)
    }
  },
  methods: {
    codeStr(ast) {
      // console.log('ast', ast)
      return generate(ast).toString()
    }
  },

  props: {
    i: {default: 0, type: Number},
    ast: {default: () => ({}), type: Object},
    color: {default: 'blue', type: String},
    height: {default: 1, type: Number},
    opacity: {default: 1, type: Number},
    position: {default: () => ({x: 0, y: 0, z: 0}), type: Object},
    rotation: {default: () => ({x: 0, y: 0, z: 0}), type: Object},
    textColor: {default: '#DDD', type: String},
    visible: {default: true, type: Boolean},
    width: {default: 1, type: Number}
  },

  mounted() {
    console.log('CodeText '+this.i, this.ast)
  }
}
</script>