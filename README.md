
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
- Run `ng serve --open` to run the app locally. 
- If you have installed `AngularJS` locally run the app using `npm run-script ng serve --open`.
- `Package.json` file has the dependencies present in our project.
- We run `ng build` command when deploying angular app.
- `app.module.ts` file contains all the components and modules. Let say we want to use a custom module we have to put the module name in this file.

## Modules
- In Angular app everything is related to modules for instance, user can have there own module and admin can have its own module.
- Furthermore, Each module is built on components, For instance we can have components to display a `sidebar`,`navigation` and `posts`
- Modules will also have services that deals with business logic.

## Angular Architecture Summary
- `Angular App` One or More than one module.
- Module has components and services.
- Components has `HTML TEMPLATE` and `Class` has all the logic that deals with HTML templates.
- Services has business logic.


## Angular `SRC/` folder

- This folder contains the entire code of our app
- `main.ts` file is the entry point of the app.
- `app.module.ts` file is the root module of the app
- `app.component.ts` file has the data that is needed by the view


## Angular Component
- A component is made up of three parts `template`, `class` , `Metadata`.
- `Template` represents `VIEW` and created using `HTML`.
- `Class` has the code and its created using `TYPESCRIPT` and it contains data methods. They are used to control the logic.
- `METADATA` differentiates between whether its a regular class or angular component.
- These three things make up the component.

### Root Component of the app

```ts
import { Component } from '@angular/core';
<!-- This is the meta data for the component and this decorator contains the templates for the view-->
<!-- selector is the custom html tag that is used to represent the component -->
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<!-- This is class that contains methods for html -->
export class AppComponent {
  title = 'CODE';
}
```

## Generating Component
- `ng generate component <name_of_component>`
- everytime we add the component it is added to `app.module.ts`
- All other components are added to the root component.
- We can also embed html code in the component file.
- You can also embed `css` within component file too.
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <div>
            <h1>Hello World</h1>
            </div>
            `
  style`: [`
           div {
            color:red;
           } 
        `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

This is going to render html straight from the `ts` component file but according to conventions we don't do that since projects get larger and its hard to keep track of things so we keep `html` code in separate file.
- Components are building blocks of the angular application


## Interpolation
- `{{string}}` this is used for interpolation of the data. When we want to make the data dynamic we use string interpolation.
- String interpolation in the example below
- We can also call custom methods.
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <div>
            <h1>Hello {{name}}</h1>
            <h2>{{greet()}}</h2>
            </div>
            `
  style`: [`
           div {
            color:red;
           } 
        `]
})
export class TestComponent implements OnInit {
    public name = "John"
  constructor() { }

  ngOnInit() {
  }
  greet(){
    return "Hello" + this.name;
  }

}
```