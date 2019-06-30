<template>
  <a-text
    :font="'sourcecodepro'"
    :color="color"
    :height="height"
    :geometry="`primitive: plane;
                height: ${height};
                width: ${width}`"
    :material="`color: ${textColor};
                opacity: ${opacity};
                transparent: ${opacity < 1};
                side: double`"
    :position="$coordString(position)"
    :rotation="$coordString(rotation)"
    :visible="visible"
    :anchor="'center'"
    :wrap-count="'40'"
    :width="width"
    :align="'left'"
    :value="codeString"
  ></a-text>
</template>

<script>
import aframe from 'aframe'
import { generate } from 'astring'

export default {
  name: 'CodeText',

  computed: {
    codeString() {
      return generate(this.ast).toString()
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
    // console.log('CodeText '+this.i, this.ast)
  }
}
</script>