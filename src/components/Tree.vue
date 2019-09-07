<template>
  <tree class="tree" :data="build(example)" node-text="name" layoutType="euclidean">
</tree>

</template>

<script>
  import { tree } from 'vued3tree'

  const defaultNode = () => ({
    name: 'parent',
    children:[{
      name: 'uniqueId',
      children: [], // 'was top level 'body'
      end:479,
      sourceType:"script",
      start:0,
      type:"Program"
    }]
  })

  export default {
    name: 'Tree',

    components: {
      tree
    },

    props: {
      ast: { default: defaultNode, type: Object }
    },

    data() {
      return {
        example: [{
          body: [{
            async: false,
            body: {
              type: "BlockStatement",
              start: 15,
              end: 211,
              body: Array(3)
            },
            end: 211,
            expression: false,
            generator: false,
            id: {
              type: "Identifier",
              start: 9,
              end: 12,
              name: "foo"
            },
            params: [],
            start: 0,
            type: "FunctionDeclaration"
          }]
        }]
      }
    },

    methods: {
      // buildD3Node({ body, ...meta }) {
      //   // no children, just return this node
      //   if (!body[0].body || body[0].body.length < 1) return { ...meta, ...body }
      //   // return formatted object that vued3tree can parse
      //   let node = {
      //     ...body,
      //     name: body.type,
      //     children: body[0].body.map(child=>buildD3Node(child))
      //   }
      //   // console.log('NODE!!!!!', node)
      //   return node
      // },

      isArr(el) {
        return Array.isArray(el)
      },

      isObj(el) {
        return !Array.isArray(el) && (typeof el === 'object' && el !== null)
      },

      isChild(el) {
        return this.isArr(el) || this.isObj(el)
      },

      // node is an object containing an array of objects, etc.
      build(node) {
        console.log('BUILDING A NODE!!!!!')
        console.log('node: ', node)
        if ( this.isObj(node) ) { // this is a parent node
          for (let property of node) {
            let prop = node[property]
            console.log("Object PROPERTY:", prop)
            if ( this.isChild(prop) ) {
              console.log('RECURSING!!!!!!!!!!', prop)
              node.children = node.children ? node.children.push(this.build(prop)) : [this.build(prop)]
            }
          }
        } else if ( this.isArr(node) ) { // this is 'children' of parent node
          node.forEach((prop, i) => {
            console.log("Array PROPERTY:" ,prop)
            if ( this.isChild(prop) ) node[i] = this.build(prop)
          })
        }
        // console.log('NODE!!!!!', node)
        return node
      }
    }
  }
</script>

<style scoped>
  .tree {
    max-width: 90vw;
    max-height: 40vh;
  }
</style>


// {
//           name: 'uniqueId',
//           children: [ // 'was top level 'body'
//             {
//               name: 'uniqueChild1',
//               async:false,
//               children: [
//                 {
//                   name: 'uniqueGrandchild1',
//                   children: [{ // was 'body', must be named 'children'
//                       name: 'uniqueGreatGrandchild2' // names should be set to 'type'
//                     }, {
//                       name: 'uniqueGreatGrandchild3'
//                     }, {
//                       name: 'uniqueGreatGrandchild4'
//                     }
//                   ],
//                   end:211,
//                   start:15,
//                   type:'BlockStatement' // get rid of type?
//                 },
//               ],
//               end:211,
//               expression:false,
//               generator:false,
//               id: {
//                 end: 12,
//                 name: 'foo',
//                 start: 9,
//                 type: 'Identifier'
//               },
//               params: [],
//               start:0,
//               type:'FunctionDeclaration'
//             }
//           ],
//           end:479,
//           sourceType:"script",
//           start:0,
//           type:"Program"
//         }






// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0:
//   body: Array(1)
//     0:
//       async: false
//       body: {
//         type: "BlockStatement",
//         start: 15,
//         end: 211,
//         body: Array(3)
//       }
//       end: 211
//       expression: false
//       generator: false
//       id: {
//         type: "Identifier",
//         start: 9,
//         end: 12,
//         name: "foo"
//       }
//       params: []
//       start: 0
//       type: "FunctionDeclaration"
//       __proto__: Object
//       length: 1
//       __proto__: Array(0)
//       end: 211
//       sourceType: "module"
//       start: 0
//       type: "Program"
//       __proto__: Object

//     1:
//     async: false
//     body: {type: "BlockStatement", start: 15, end: 211, body: Array(3)}
//     end: 211
//     expression: false
//     generator: false
//     id: {type: "Identifier", start: 9, end: 12, name: "foo"}
//     params: []
//     start: 0
//     type: "FunctionDeclaration"
//     __proto__: Object
//     2: {type: "BlockStatement", start: 15, end: 211, body: Array(3)}
//     3: {type: "FunctionDeclaration", start: 46, end: 209, id: {…}, expression: false, …}
//     4: {type: "BlockStatement", start: 61, end: 209, body: Array(3)}
//     5: {type: "ExpressionStatement", start: 199, end: 205, expression: {…}}
//     length: 6
//     __proto__: Array(0)