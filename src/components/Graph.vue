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
  name: 'Graph',

  components: {
    
  },

  data() {
    return {
      nodes: {}
    }
  },

  computed: {
    
  },

  mounted() {
    console.log('Graph Component AST: ', this.ast)
  },

  methods: {
    addVertex(val) {
      // add vertex only if it does not exist.
      if (!this.nodes[val]) {
        this.nodes[val] = new GraphNode(val)
      }
      // TODO: should I return the new vertex for chaining?
    },

    removeVertex(val) {
      delete this.nodes[val]
      // disconnect from all this node's edges
      for ( const vertex in this.nodes) {
        if (vertex.edges[val]) {
          delete vertex.edges[val]
        }
      }
    },

    removeVertex = function(val) {
      if (this.nodes[val]) {
        // once you remove a vertex, you need to remove all edges pointing
        // to the vertex.
        delete this.nodes[val];
        
        Object.keys(this.nodes).forEach(function(key, index) {
          if (this.nodes[key].edges[val]) {
            delete this.nodes[key].edges[val];
          }
        }.bind(this));
      }
    },

    getVertex = function(val) {
      return this.nodes[val];
    },

    addEdge = function(start, end) {
      // check to see if nodes exists.
      // if it exists, set the edges and be done.
      if (this.nodes[start] && this.nodes[end]) {
        
        // check to see if edge exists, if it does, increment it's weight
        if (this.nodes[start].edges[end]) {
          this.nodes[start].edges[end].weight += 1;
        } else {
          
          // edge does not exist, set weight to 1.
          this.nodes[start].edges[end] = { weight: 1 };
        }
      }
    },

    removeEdge = function(start, end) {
      if (this.nodes[start] && this.nodes[end]) {
        if (this.nodes[start].edges[end]) {
          delete this.nodes[start].edges[end];
        }
      }
    },

    getEdge = function(start, end) {
      return this.nodes[start].edges[end] || null;
    },

    neighbors = function(val) {
      return this.nodes[val] ? this.nodes[val].edges : null;
    }
  },

  props: {
    // data props
    ast: {default: () => ({}), type: Object},
    adjList: {default: () => ({}), type: Object},
    value: {default: , type: null},
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