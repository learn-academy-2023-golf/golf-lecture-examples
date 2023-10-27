# React Review

## React Intro
- React: JavaScript Library to build UI
- DOM: Document Object Model - everything you see on the screen, visual representation of the code.
- component: Building blocks for a React application, reuasble
- functional components: a reusable component written as a function
- JSX: JavaScript XML - allows us to integrate JavaScript into HTML
- React fragments: <></> a container so we can return one item of HTML in our function.  Fragment will not create an extra DOM node like a div would.
- component invocation (component call): Self closing tag with the name of the component that will allow your component to render <Greeter />

## Create React App
- node modules: dependencies needed for React or library/framework you are utilizing
- yarn: package manager for our dependencies
- kebob-case: casing convention that seperates the words with dashes
- local server: live site we can see on our local machine
- localhost:3000: address we use in our browser to see our local server in a React app
- PascalCase: naming convention where every word is capitilized.  Used for classes, and the components in React
- export: allowing component to be accessed from within the React application

## React State
- state: a special variable in React that belongs to a React component that will cause page rerenders if the state variable is updated
- useState: a hook provided by React, useState allows us to utilize state variables
- React hooks: a React built in method
- separation of concerns: each component is in charge of it's own functionality
- container component: a component that is calling on additional components (oftentimes App.js)
- presentational component: a component who's job is to display content
- block level element: element or div takes the entire width of the page

## React Props
- props (properties): way to pass data and behavior to other React components, one directional, read-only
- key: attribute, unique identifier for an iterated JSX element or component invocation

## Functional Props
- functional props: passing information from a child component to a parent component via a function, going "up the river"
- conditional rendering: uses JavaScript logical && to toggle JSX tags
- immediately invoked function: a function that doesn't wait for the onClick event to trigger the function
- stack overflow: when there are more requests in the queue than that the computer can process

## Inputs and Events
- DOM events: user interaction on the DOM
- event listeners: the DOM listening for user events
- onChange: an event listener
- type attributes: input tags, attributes are modifications on HTML/JSX tags, tells the input how to display and behave - password, date, text, etc
- value attribute: what is being displayed in the input tag
- handler method: the function name that describes what the event listeners are doing in the app

## Ruby
- object-oriented programming (OOP): everything is a class, everything we interact with is an instance of a class
- interactive Ruby shell (IRB): Ruby console in terminal on Mac
- REPL: read, evaluate, print, loop, sandbox environment
- snake_case: all lower case, underscore separates words, Ruby casing convention
- shovel operator: mutator, adds an item to the end of an array <<
- puts: displays content, put string, info gets "stringified"
- p: displays content, displays with code syntax

## Ruby Methods and Conditionals
- method: function that belongs to an object or class
- def/end: defines the scope of your method
- implicit return: return the last line of the code, don't have to have the keyword return
- local scope: ensuring all relative info is inside the block
- if/else/end: defines the scope of an conditional
- elsif: else if
- unless: the negation of an conditional statement
- gets: stops the execution of a program, waits for input in terminal
- chomp: removes non-character syntax at the end of an input