export default {
  install(Vue, options) {
    Vue.prototype.getAST = function(nodeType) {
      const scopesArray = []

      switch(this.nodeType) {
        case 'Node':
          walk.ancestor(this.ast, { Node(node) { scopesArray.unshift(node) }})
          break
        case 'Identifier':
          walk.ancestor(this.ast, { Identifier(node) { scopesArray.unshift(node) }})
          break
        case 'Literal':
          walk.ancestor(this.ast, { Literal(node) { scopesArray.unshift(node) }})
          break
        case 'RegExpLiteral': // sub 1
          walk.ancestor(this.ast, { RegExpLiteral(node) { scopesArray.unshift(node) }})
          break
        case 'Program':
          walk.ancestor(this.ast, { Program(node) { scopesArray.unshift(node) }})
          break
        case 'Statement':
          walk.ancestor(this.ast, { Statement(node) { scopesArray.unshift(node) }})
          break
        case 'ExpressionStatement': // sub 1
          walk.ancestor(this.ast, { ExpressionStatement(node) { scopesArray.unshift(node) }})
          break
        case 'BlockStatement': // sub 1
          walk.ancestor(this.ast, { BlockStatement(node) { scopesArray.unshift(node) }})
          break
        case 'EmptyStatement': // sub 1
          walk.ancestor(this.ast, { EmptyStatement(node) { scopesArray.unshift(node) }})
          break
        case 'DebuggerStatement': // sub 1
          walk.ancestor(this.ast, { DebuggerStatement(node) { scopesArray.unshift(node) }})
          break
        case 'WithStatement': // sub 1
          walk.ancestor(this.ast, { WithStatement(node) { scopesArray.unshift(node) }})
          break
        // ControlFlow
        case 'ReturnStatement': // sub 2
          walk.ancestor(this.ast, { ReturnStatement(node) { scopesArray.unshift(node) }})
          break
        case 'LabeledStatement': // sub 2
          walk.ancestor(this.ast, { LabeledStatement(node) { scopesArray.unshift(node) }})
          break
        case 'BreakStatement': // sub 2
          walk.ancestor(this.ast, { BreakStatement(node) { scopesArray.unshift(node) }})
          break
        case 'BlockStatement': // sub 2
          walk.ancestor(this.ast, { BlockStatement(node) { scopesArray.unshift(node) }})
          break
        case 'ContinueStatement': // sub 2
          walk.ancestor(this.ast, { ContinueStatement(node) { scopesArray.unshift(node) }})
          break
        // Choice
        case 'IfStatement': // sub 3
          walk.ancestor(this.ast, { IfStatement(node) { scopesArray.unshift(node) }})
          break
        case 'SwitchStatement': // sub 3
          walk.ancestor(this.ast, { SwitchStatement(node) { scopesArray.unshift(node) }})
          break
        case 'SwitchCase': // sub 3
          walk.ancestor(this.ast, { SwitchCase(node) { scopesArray.unshift(node) }})
          break
        // Exceptions
        case 'ThrowStatement': // sub 3
          walk.ancestor(this.ast, { ThrowStatement(node) { scopesArray.unshift(node) }})
          break
        case 'TryStatement': // sub 3
          walk.ancestor(this.ast, { TryStatement(node) { scopesArray.unshift(node) }})
          break
        case 'CatchClause': // sub 4
          walk.ancestor(this.ast, { CatchClause(node) { scopesArray.unshift(node) }})
          break
        // Loops
        case 'WhileStatement': // sub 3
          walk.ancestor(this.ast, { WhileStatement(node) { scopesArray.unshift(node) }})
          break
        case 'DoWhileStatement': // sub 3
          walk.ancestor(this.ast, { DoWhileStatement(node) { scopesArray.unshift(node) }})
          break
        case 'ForStatement': // sub 3
          walk.ancestor(this.ast, { ForStatement(node) { scopesArray.unshift(node) }})
          break
        case 'ForInStatement': // sub 3
          walk.ancestor(this.ast, { ForInStatement(node) { scopesArray.unshift(node) }})
          break
        // Declarations
        case 'Declaration':
          walk.ancestor(this.ast, { Declaration(node) { scopesArray.unshift(node) }})
          break
        case 'FunctionDeclaration': // sub 1
          walk.ancestor(this.ast, { FunctionDeclaration(node) { scopesArray.unshift(node) }})
          break
        case 'VariableDeclaration': // sub 1
          walk.ancestor(this.ast, { VariableDeclaration(node) { scopesArray.unshift(node) }})
          break
        case 'VariableDeclarator': // sub 2
          walk.ancestor(this.ast, { VariableDeclarator(node) { scopesArray.unshift(node) }})
          break
        // Expressions
        case 'Expressions':
          walk.ancestor(this.ast, { Expressions(node) { scopesArray.unshift(node) }})
          break
        case 'ThisExpression':
          walk.ancestor(this.ast, { ThisExpression(node) { scopesArray.unshift(node) }})
          break
        case 'ArrayExpression':
          walk.ancestor(this.ast, { ArrayExpression(node) { scopesArray.unshift(node) }})
          break
        case 'ObjectExpression':
          walk.ancestor(this.ast, { ObjectExpression(node) { scopesArray.unshift(node) }})
          break
        case 'Property':
          walk.ancestor(this.ast, { Property(node) { scopesArray.unshift(node) }})
          break
        case 'FunctionExpression':
          walk.ancestor(this.ast, { FunctionExpression(node) { scopesArray.unshift(node) }})
          break
        // Unary Operations
        case 'UnaryExpression':
          walk.ancestor(this.ast, { UnaryExpression(node) { scopesArray.unshift(node) }})
          break
        case 'UpdateExpression':
          walk.ancestor(this.ast, { UpdateExpression(node) { scopesArray.unshift(node) }})
          break
        case 'UpdateOperator':
          walk.ancestor(this.ast, { UpdateOperator(node) { scopesArray.unshift(node) }})
          break
        // Binary Operations
        case 'BinaryExpression':
          walk.ancestor(this.ast, { BinaryExpression(node) { scopesArray.unshift(node) }})
          break
        case 'BinaryOperator':
          walk.ancestor(this.ast, { BinaryOperator(node) { scopesArray.unshift(node) }})
          break
        case 'AssignmentExpression':
          walk.ancestor(this.ast, { AssignmentExpression(node) { scopesArray.unshift(node) }})
          break
        case 'AssignmentOperator':
          walk.ancestor(this.ast, { AssignmentOperator(node) { scopesArray.unshift(node) }})
          break
        case 'LogicalExpression':
          walk.ancestor(this.ast, { LogicalExpression(node) { scopesArray.unshift(node) }})
          break
        case 'LogicalOperator':
          walk.ancestor(this.ast, { LogicalOperator(node) { scopesArray.unshift(node) }})
          break
        case 'MemberExpression':
          walk.ancestor(this.ast, { MemberExpression(node) { scopesArray.unshift(node) }})
          break
        case 'ConditionalExpression':
          walk.ancestor(this.ast, { ConditionalExpression(node) { scopesArray.unshift(node) }})
          break
        case 'CallExpression':
          walk.ancestor(this.ast, { CallExpression(node) { scopesArray.unshift(node) }})
          break
        case 'NewExpression':
          walk.ancestor(this.ast, { NewExpression(node) { scopesArray.unshift(node) }})
          break
        case 'SequenceExpression':
          walk.ancestor(this.ast, { SequenceExpression(node) { scopesArray.unshift(node) }})
          break
        case 'Pattern':
          walk.ancestor(this.ast, { Pattern(node) { scopesArray.unshift(node) }})
          break
      }
      return scopesArray
    }
  }
}