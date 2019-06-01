
# Angular Tutorial

## Why use Angular
- Its Organized front-end Structure makes things easier such as (Components,Modules and Services)
-  Extremely powerful and full featured
-  All in one solution
-  Allows us to build single page apps
-  MVC
-  uses `TypeScript`

## Things to know before learning `Angular`
- TypeScript
- Classes
- High Order Array Methods
- Arrow functions
- Promises and Oberservables
- MVC Pattern

## Installing Angular
**Note**: Make sure you have `NodeJS` installed.
- To install angular run this command `npm install -g @angular/cli`. (Installing globally)
- You can also install `Angular` locally without `-g` flag.
- If you install `locally` make sure to run `npm run-script` before every angular cli command.
- For example (`npm run-script ng --version `)

## Getting Started
- Once we have installed we can check the version using `ng --version`.
- If you installed using `-g` flag you can run `ng new my-app`.
- If you want run angular locally use this command `npx -p @angular/cli ng new hello-world-project `. (Note:`npx comes with npm`)

## Building `TODO` App using `ANGULARJS`.
- We will be building simple todo app using `angularJS`.
- Run `ng serve --open` to run the app locally. 
- If you have installed `AngularJS` locally run the app using `npm run-script ng serve --open`.
- `Package.json` file has the dependencies present in our project.
- We run `ng build` command when deploying angular app.
- `app.module.ts` file contains all the components and modules. Let say we want to use a custom module we have to put the module name in this file.

## Notes
- Most of the useful stuff is within code embedded in comments
- `Constructor` is intiated when the component is loaded.
- To generate component `ng generate component <name of the component>` (Example: `ng generate component components/Todo`). This is going to generate a todo component in the components folder.[]
- `*nGFOr allows us to loop for links`
- `ng generate service <Service Name >`

## Modules
- In Angular app everything is related to modules for instance, user can have there own module and admin can have its own module.
- Furthermore, Each module is built on components, For instance we can have components to display a `sidebar`,`navigation` and `posts`