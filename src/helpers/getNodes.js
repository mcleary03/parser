import * as walk from 'acorn-walk'
// https://github.com/acornjs/acorn/tree/master/acorn-walk
export default function(type) {
  const astNodes = []
  
  switch(type) {
    case 'Identifier':
      walk.ancestor(this.ast, { Identifier(node) {
        astNodes.unshift(node)
      }})
      break

    case 'Literal':
      walk.ancestor(this.ast, { Literal(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'Program':
      walk.ancestor(this.ast, { Program(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ExpressionStatement':
      walk.ancestor(this.ast, { ExpressionStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'BlockStatement':
      walk.ancestor(this.ast, { BlockStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'WithStatement':
      walk.ancestor(this.ast, { WithStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ReturnStatement':
      walk.ancestor(this.ast, { ReturnStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'LabeledStatement':
      walk.ancestor(this.ast, { LabeledStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'BreakStatement':
      walk.ancestor(this.ast, { BreakStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ContinueStatement':
      walk.ancestor(this.ast, { ContinueStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'IfStatement':
      walk.ancestor(this.ast, { IfStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'SwitchStatement':
      walk.ancestor(this.ast, { SwitchStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'SwitchCase':
      walk.ancestor(this.ast, { SwitchCase(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ThrowStatement':
      walk.ancestor(this.ast, { ThrowStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'TryStatement':
      walk.ancestor(this.ast, { TryStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'CatchClause':
      walk.ancestor(this.ast, { CatchClause(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'WhileStatement':
      walk.ancestor(this.ast, { WhileStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'DoWhileStatement':
      walk.ancestor(this.ast, { DoWhileStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ForStatement':
      walk.ancestor(this.ast, { ForStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ForInStatement':
      walk.ancestor(this.ast, { ForInStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ForInit':
      walk.ancestor(this.ast, { ForInit(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'FunctionDeclaration':
      walk.ancestor(this.ast, { FunctionDeclaration(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'VariableDeclaration':
      walk.ancestor(this.ast, { VariableDeclaration(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'VariableDeclarator':
      walk.ancestor(this.ast, { VariableDeclarator(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ArrayExpression':
      walk.ancestor(this.ast, { ArrayExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ObjectExpression':
      walk.ancestor(this.ast, { ObjectExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'Property':
      walk.ancestor(this.ast, { Property(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'Function':
      walk.ancestor(this.ast, { Function(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'FunctionExpression':
      walk.ancestor(this.ast, { FunctionExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ArrowFunctionExpression':
      walk.ancestor(this.ast, { ArrowFunctionExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'UnaryExpression':
      walk.ancestor(this.ast, { UnaryExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'UpdateExpression':
      walk.ancestor(this.ast, { UpdateExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'BinaryExpression':
      walk.ancestor(this.ast, { BinaryExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'AssignmentExpression':
      walk.ancestor(this.ast, { AssignmentExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'LogicalExpression':
      walk.ancestor(this.ast, { LogicalExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'MemberExpression':
      walk.ancestor(this.ast, { MemberExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ConditionalExpression':
      walk.ancestor(this.ast, { ConditionalExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'CallExpression':
      walk.ancestor(this.ast, { CallExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'NewExpression':
      walk.ancestor(this.ast, { NewExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'SequenceExpression':
      walk.ancestor(this.ast, { SequenceExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'Pattern':
      walk.ancestor(this.ast, { Pattern(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'RestElement':
      walk.ancestor(this.ast, { RestElement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ArrayPattern':
      walk.ancestor(this.ast, { ArrayPattern(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ObjectPattern':
      walk.ancestor(this.ast, { ObjectPattern(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'TemplateLiteral':
      walk.ancestor(this.ast, { TemplateLiteral(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ExportNamedDeclaration':
      walk.ancestor(this.ast, { ExportNamedDeclaration(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ExportDefaultDeclaration':
      walk.ancestor(this.ast, { ExportDefaultDeclaration(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ExportAllDeclaration':
      walk.ancestor(this.ast, { ExportAllDeclaration(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ImportDeclaration':
      walk.ancestor(this.ast, { ImportDeclaration(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ImportSpecifier':
      walk.ancestor(this.ast, { ImportSpecifier(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ImportDefaultSpecifier':
      walk.ancestor(this.ast, { ImportDefaultSpecifier(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ImportNamespaceSpecifier':
      walk.ancestor(this.ast, { ImportNamespaceSpecifier(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'TaggedTemplateExpression':
      walk.ancestor(this.ast, { TaggedTemplateExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ClassDeclaration':
      walk.ancestor(this.ast, { ClassDeclaration(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ClassExpression':
      walk.ancestor(this.ast, { ClassExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'Class':
      walk.ancestor(this.ast, { Class(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ClassBody':
      walk.ancestor(this.ast, { ClassBody(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'MethodDefinition':
      walk.ancestor(this.ast, { MethodDefinition(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ParenthesizedExpression':
      walk.ancestor(this.ast, { ParenthesizedExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'YieldExpression':
      walk.ancestor(this.ast, { YieldExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'AwaitExpression':
      walk.ancestor(this.ast, { AwaitExpression(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'SpreadElement':
      walk.ancestor(this.ast, { SpreadElement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'ForOfStatement':
      walk.ancestor(this.ast, { ForOfStatement(node) {
        astNodes.unshift(node)
      }})
      break
    
    case 'AssignmentPattern':
      walk.ancestor(this.ast, { AssignmentPattern(node) {
        astNodes.unshift(node)
      }})
      break

  }

  return astNodes
}