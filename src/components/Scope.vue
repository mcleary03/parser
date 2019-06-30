<template>
  <a-entity :position="position">
    <a-entity :key="i" v-for="(block, i) in blocks">
      <!-- X AXIS -->
      <block
        :animation__mouseenter="onEventAnimateProperty(
          'mouseenter',
          'color',
          nodeColors[block.type].base,
          nodeColors[block.type].active)"
        :animation__mouseleave="onEventAnimateProperty(
          'mouseleave',
          'color',
          nodeColors[block.type].active,
          nodeColors[block.type].base)"
        :animation__click="onEventAnimateProperty(
          'click',
          'scale',
          '1 1 1',
          '1.2, 1.2, 1.2',
          'alternate')"
        :ast="block"
        :globalScale="globalScale"
        :color="nodeColors[block.type].base || 'black'"
        :opacity="0.2"
        :visible="true"
        :position="{x: globalScale * (i*(width*1.1)), y: 0, z: 0}"
        :width="width"
        :depth="depth"
        :height="height"
      ></block>
      <!-- Z AXIS -->
      <block
        :animation__mouseenter="onEventAnimateProperty(
          'mouseenter',
          'color',
          nodeColors[block.type].base,
          nodeColors[block.type].active)"
        :animation__mouseleave="onEventAnimateProperty(
          'mouseleave',
          'color',
          nodeColors[block.type].active,
          nodeColors[block.type].base)"
        :animation__click="onEventAnimateProperty(
          'click',
          'scale',
          '1 1 1',
          '1.2, 1.2, 1.2',
          'alternate')"
        :ast="block"
        :globalScale="globalScale"
        :color="nodeColors[block.type].base || 'black'"
        :opacity="0.2"
        :visible="true"
        :position="{x: 0, y: 0, z: globalScale * (-i*(depth*1.1))}"
        :width="width"
        :depth="depth"
        :height="height"
      ></block>
    </a-entity>
  </a-entity>
</template>

<script>
import * as walk from 'acorn-walk'
import aframe from 'aframe'
import Block from './Block'
import { COLORS } from '@/constants'

export default {
  name: 'Scope',

  components: {
    Block
  },

  data() {
    return {
      nodeColors: COLORS.NODES,
      height: 1,
      width: 1.5,
      depth: 1.5
    }
  },

  props: {
    ast: {default: () => ({}), type: Object},
    
    globalScale: {default: 1, type: [Number, String]},
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
    // console.log('Scope', this.ast)
  },

  methods: {
    onEventAnimateProperty(startEvents, property, from, to, dir='normal') {
      return this.$animate({
        property,
        from,
        to, 
        delay: 0,
        dur: 1000,
        startEvents,
        dir,
        loop: 1
      })
    }
  }

}

</script>
