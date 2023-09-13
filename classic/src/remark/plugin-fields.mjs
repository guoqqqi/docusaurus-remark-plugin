import { visit } from 'unist-util-visit';

export const pluginFiled = () => {
  const transformer = async (ast) => {
    visit(ast, (node) => {
      if (node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective') {
        console.log('node: ', node);
        const isPluginField = node.name === 'plugin-field';
        if (!isPluginField) return;
      }
    });
  }

  return transformer;
};
