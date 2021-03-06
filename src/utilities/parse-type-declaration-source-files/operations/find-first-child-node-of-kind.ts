import * as ts from 'typescript'

import { Operation } from './operation'

export function findFirstChildNodeOfKind(kind: ts.SyntaxKind): Operation {
  return function (node: ts.Node): null | ts.Node {
    const childNode = node.getChildren().find(function (childNode: ts.Node) {
      return childNode.kind === kind
    })
    return typeof childNode === 'undefined' ? null : childNode
  }
}
