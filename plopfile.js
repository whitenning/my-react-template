export default function (plop) {
    // component generator
    plop.setGenerator('component', {
      description: 'Create a new component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the new component?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/app/{{properCase name}}/{{properCase name}}.tsx',
          templateFile: 'plop-templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/app/{{properCase name}}/{{properCase name}}.scss',
          templateFile: 'plop-templates/component.scss.hbs',
        },
      ],
    });
  };
  