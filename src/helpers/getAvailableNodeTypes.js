import * as walk from 'acorn-walk'
import {NODE_TYPES} from '@/constants'

export default function() {
  const usedTypes = new Set()
  // Capture 'types' of all nodes in given code
  walk.full(this.ast, (node, state, type) => usedTypes.add(type) )

  // filter valid walk methods of nodes present in the AST
  return Object.keys(NODE_TYPES).filter( type => usedTypes.has(type) )
}