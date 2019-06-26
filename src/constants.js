export default {
  NODE_TYPES: {
    // Node: 'Node', // not in acorn-walk
    Identifier: 'Identifier',//
    Literal: 'Literal',//
    // RegExpLiteral: 'RegExpLiteral', not in acorn-walk
    Program: 'Program',//
    // Statement: 'Statement', // skipThrough
    ExpressionStatement: 'ExpressionStatement',//
    BlockStatement: 'BlockStatement',//
    // EmptyStatement: 'EmptyStatement', // ignore
    // DebuggerStatement: 'DebuggerStatement', // ignore
    WithStatement: 'WithStatement',//
    ReturnStatement: 'ReturnStatement',//
    LabeledStatement: 'LabeledStatement',//
    BreakStatement: 'BreakStatement',//
    ContinueStatement: 'ContinueStatement',//
    IfStatement: 'IfStatement',//
    SwitchStatement: 'SwitchStatement',//
    SwitchCase: 'SwitchCase',//
    ThrowStatement: 'ThrowStatement',//
    TryStatement: 'TryStatement',//
    CatchClause: 'CatchClause',//
    WhileStatement: 'WhileStatement',//
    DoWhileStatement: 'DoWhileStatement',//
    ForStatement: 'ForStatement',//
    ForInStatement: 'ForInStatement',//
    ForInit: 'ForInit',//
    // Declaration: 'Declaration', // not in acorn-walk
    FunctionDeclaration: 'FunctionDeclaration',//
    VariableDeclaration: 'VariableDeclaration',//
    VariableDeclarator: 'VariableDeclarator',//
    // Expression: 'Expression', // skip through
    // ThisExpression: 'ThisExpression', // base.Super = base.MetaProperty = ignore
    // Super: 'Super', // base.MetaProperty = ignore
    // MetaProperty: 'MetaProperty', // ignore
    ArrayExpression: 'ArrayExpression',//
    ObjectExpression: 'ObjectExpression',//
    Property: 'Property',//
    Function: 'Function',//
    FunctionExpression: 'FunctionExpression',//
    ArrowFunctionExpression: 'ArrowFunctionExpression',//
    UnaryExpression: 'UnaryExpression',//
    UpdateExpression: 'UpdateExpression',//
    // UpdateOperator: 'UpdateOperator', // not in acorn-walk
    BinaryExpression: 'BinaryExpression',//
    // BinaryOperator: 'BinaryOperator', // not in acorn-walk
    AssignmentExpression: 'AssignmentExpression',//
    // AssignmentOperator: 'AssignmentOperator', // not in acorn-walk
    LogicalExpression: 'LogicalExpression',//
    // LogicalOperator: 'LogicalOperator', // not in acorn-walk
    MemberExpression: 'MemberExpression',//
    ConditionalExpression: 'ConditionalExpression',//
    CallExpression: 'CallExpression',//
    NewExpression: 'NewExpression',//
    SequenceExpression: 'SequenceExpression',//
    Pattern: 'Pattern',//
    // VariablePattern: 'VariablePattern', // ignore
    // MemberPatter: 'MemberPattern', // ignore
    RestElement: 'RestElement',//
    ArrayPattern: 'ArrayPattern',//
    ObjectPattern: 'ObjectPattern',//
    TemplateLiteral: 'TemplateLiteral',//
    // TemplateElement: 'TemplateElement', // ignore
    ExportNamedDeclaration: 'ExportNamedDeclaration',//
    ExportDefaultDeclaration: 'ExportDefaultDeclaration',//
    ExportAllDeclaration: 'ExportAllDeclaration',//
    ImportDeclaration: 'ImportDeclaration',//
    ImportSpecifier: 'ImportSpecifier',//
    ImportDefaultSpecifier: 'ImportDefaultSpecifier',//
    ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',//
    TaggedTemplateExpression: 'TaggedTemplateExpression',//
    ClassDeclaration: 'ClassDeclaration',//
    ClassExpression: 'ClassExpression',//
    Class: 'Class',//
    ClassBody: 'ClassBody',//
    MethodDefinition: 'MethodDefinition',//
    ParenthesizedExpression: 'ParenthesizedExpression',//
    YieldExpression: 'YieldExpression',//
    AwaitExpression: 'AwaitExpression',//
    SpreadElement: 'SpreadElement',//
    ForOfStatement: 'ForOfStatement',//
    AssignmentPattern: 'AssignmentPattern',//
  }
}