import Plop from 'plop';

module.exports = function (plop: Plop.NodePlopAPI) {
    // controller generator
    plop.setGenerator('component', {
      description: 'application controller logic',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'component name please'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/style.ts',
          templateFile: 'templates/style.ts.hbs'
        },  
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/test.tsx.hbs'
        }
      ]
    });
  };