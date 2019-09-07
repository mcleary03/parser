<template>
  <!-- `embedded`` means the "goggles" button is required to enter scene -->
  <a-scene :embedded="embedded">
    <a-sky src="https://live.staticflickr.com/1700/24413259604_dcf4ef2149_o_d.jpg"></a-sky>

    <a-entity
      camera
      look-controls
      position="0 0 5"
      wasd-controls
      :universal-controls="`
        fly: true;
        movementEasing: ${globalScale * 15};
        movementAcceleration: ${globalScale * 80};`"
    ></a-entity>

    <a-entity cursor="rayOrigin: mouse"></a-entity>
    <a-entity gearvr-controls="hand: right"></a-entity>

    <!-- Code Blocks in Current Scope -->
    <scope
      :key="i"
      :ast="scopeAST"
      :globalScale="globalScale"
      :position="{x: globalScale * 0, y: globalScale * (-i*1.1), z: globalScale * 0}"
      :xAxis="xAxis"
      :zAxis="zAxis"
      v-for="(scopeAST, i) in scopes"
    ></scope>

    <!-- Time Plane -->
    <a-text
      align="right"
      :color="timePlane.fontColor"
      :anchor="'center'"
      :height="timePlane.height"
      :width="timePlane.width"
      :geometry="`primitive: plane;
                  height: ${globalScale * timePlane.height};
                  width: ${globalScale * timePlane.width}`"
      :material="`color: ${timePlane.color};
                  opacity: ${timePlane.opacity}`"
      :opacity="timePlane.textOpacity"
      :position="$coordString(timePlane.position)"
      :rotation="$coordString(timePlane.rotation)"
      :value="timePlane.text"
    ></a-text>
    <!-- Info Plane -->
    <a-text
      align="center"
      :color="infoPlane.fontColor"
      :anchor="'center'"
      :height="infoPlane.height"
      :width="infoPlane.width"
      :geometry="`primitive: plane;
                  height: ${globalScale * infoPlane.height};
                  width: ${globalScale * infoPlane.width}`"
      :material="`color: ${infoPlane.color};
                  opacity: ${infoPlane.opacity}`"
      :opacity="infoPlane.textOpacity"
      :position="$coordString(infoPlane.position)"
      :rotation="$coordString(infoPlane.rotation)"
      :value="infoPlane.text"
    ></a-text>
  </a-scene>
</template>

<script>
// import foo from '@/testSnippets/foo'
import fizzBuzz from '@/testSnippets/fizzBuzz'
import Scope from '@/components/Scope'

export default {
  name: 'Visualizer',

  components: {
    Scope
  },

  data() {
    return {
      // TODO make color dynamic based on node type
      backgroundColor: '#000',

      embedded: true,

      timePlane: {
        color: '#a9f3fc',
        fontColor: '#FFF',
        height: 10,
        opacity: 0.2,
        position: {x: 37, y: 3, z: 0},
        rotation: {x: 90, y: 90, z: 90},
        text: 'TIME > > > > >',
        textOpacity: 1,
        width: 80
      },

      infoPlane: {
        color: '#a9f3fc',
        fontColor: '#FFF',
        height: this.globalScale * 10,
        opacity: 0.5,
        position: {
          x: this.globalScale * -3,
          y: this.globalScale * -37,
          z: this.globalScale * 0
        },
        rotation: {x: 0, y: 90, z: -90},
        text: 'SCOPE > > > > >',
        textOpacity: 1,
        width: this.globalScale * 80
      },
    }
  },

  props: {
    ast: {default: () => ({}), type: Object},
    globalScale: {default: 1, type: [Number, String]},
    xAxis: {default: 'BlockStatement', type: String},
    yAxis: {default: 'BlockStatement', type: String},
    zAxis: {default: 'BlockStatement', type: String}
  },

  computed: {
    scopes() {
      return this.$getASTNodes(this.xAxis)
    }
  }
}
</script>
