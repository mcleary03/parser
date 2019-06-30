<template>
  <a-entity
    animation="animation"
  >
    <slot></slot>
  </a-entity>
</template>

<script>
import aframe from 'aframe'

export default {
  data() {
    return {
      
    }
  },

  props: {
    property: {default: position, type: String},
    dir: {default: '', type: String},
    delay: {default: '', type: [ Number, String ]},
    dur: {default: 1000, type: [ Number, String ]},
    from: {default: '', type: String},
    to: {default: '', type: String},
    easing: {default: 'linear', type: String},
    repeat: {default: 1, type: [ Number, String ]}
  },

  computed: {
    animation() {
      return ``
    }
  }
}
</script>