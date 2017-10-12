import { hasMask } from './common';
import { Statement, ExpressionStatement, Literal, Expression, Pattern } from './estree';
import { Token } from './token';
import { Flags, Context } from './masks';

// Fully qualified element name, e.g. <svg:path> returns "svg:path"
export function isQualifiedJSXName(elementName: any): any {
    switch (elementName.type) {
        case 'JSXIdentifier':
            return elementName.name;
        case 'JSXNamespacedName':
            return elementName.namespace + ':' + elementName.name;
        case 'JSXMemberExpression':
            return (
                isQualifiedJSXName(elementName.object) + '.' +
                isQualifiedJSXName(elementName.property)
            );
            /* istanbul ignore next */
        default:
            // ignore
    }
}

export function isValidDestructuringAssignmentTarget(expr: Expression | Pattern): boolean {
    switch (expr.type) {
        case 'Identifier':
        case 'ArrayExpression':
        case 'ArrayPattern':
        case 'ObjectExpression':
        case 'ObjectPattern':
        case 'MemberExpression':
        case 'ClassExpression':
        case 'CallExpression':
        case 'TemplateLiteral':
        case 'AssignmentExpression':
        case 'NewExpression':
            return true;

        default:
            return false;
    }
}

export function isValidSimpleAssignmentTarget(expr: Expression | Pattern): boolean {
    switch (expr.type) {
        case 'Identifier':
        case 'MemberExpression':
            return true;
        default:
            return false;
    }
}

export function isAsync(t: Token): boolean {

    switch (t) {
        case Token.Colon:
        case Token.Assign:
        case Token.LeftParen:
        case Token.Comma:
            return false;
        default:
            return true;
    }
}
export function qualifiedPropertyName(t: Token): boolean {
    switch (t) {
        case Token.StringLiteral:
        case Token.NumericLiteral:
        case Token.Multiply:
        case Token.LeftBracket:
        case Token.Identifier:
            return true;
        default:
            return hasMask(t, Token.Keyword);
    }
}