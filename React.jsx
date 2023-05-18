/** 
    1. Create a Simple JSX Element
    React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface(UI) of modern web applications.

    React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. For the most part, JSX is similar to the HTML that you hace already learned, however there are a few key differences that will be covered throughout these challenges.

    For instance, because JSX is a syntactic extension of JavaScript, you can actually write Javascript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: {'this is treated as JavaScript code' }. Keep this in mind, since it's used in seceral future challenges.

    However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process. For your convenience, it's already added behind the scenes for these challenges. If you happen to write syntactically incalid JSX, you will see the first test in these challenges fail.

    It's worth noting that under the hood the challenges are calling ReactDOM.render(JSX, document.getElementByID('root')). This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.

    The current code uses JSX to assign a div element to the constant JSX. Replace the div with an h1 element and add the text Hello JSX! inside it.
*/

const JSX = <h1>Hello JSX!</h1>;

/**
   2. Create a Complex JSX Element

   The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.

   One important thing to know about nested JSX is that it must return a single element.

   This one parent element would wrap all of the other levels of nested elements.

   For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

   Here's an example:

   Valid JSX:

   <div>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>
   </div>

   Invalid JSX: (no parent element wraping)
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>

   Define a new constant JSX that renders a div which contains the following elements in order:

   An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

   Note: When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a div tag to wrap all the child elements within a single parent element. If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.

 */

const JSX = 
<div>
    <h1>Heading.</h1>
    <p>Paragraph</p>
    <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul>
</div>;

{/*

3. Add Comments inJSX

JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.

To put comments inside JSX, you use the syntax like this to wrap around the comment text.

The code editor has a JSX element similar to what you created in the last challenge. Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.
*/}

const JSX = (
    <div>
    {/*this is the comment*/}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );

{/*

4. Render HTML Elements to the DOM

So far, you've learned that JSX is a convenient tool to write readable HTML within JavaScript. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.

ReactDOM offers a simple method to render React elements to the DOM which looks like this: 

ReactDOM.render(componentToRender, targetNode) 

where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

As you would expect, ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them.

The code editor has a simple JSX componet. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.
*/}

{/*
Problem Explanation

To render an element to the DOM, we use the following syntax:

ReactDOM.render(<item to be rendered>, <where to be rendered>);

Use the Document method getElementById() to target a specific node in the DOM

document.getElementById(<target node>)

Use the Document method getElementById() as an argument within the ReactDOM method render() to solve this challenge.
*/}

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );

  ReactDOM.render(JSX, document.getElementById("challenge-node"));


/**
 * 5. Define an HTML Class in JSX
 * 
 * Now that you're getting comfortable writing JSX, you may be wondering how it differs from HTML.
 * 
 * So far, it may seem that HTML and JSX are exactly the same.
 * 
 * One key difference in JSX is that you can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className.
 * 
 * In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange. While this is a subtle difference, it is an important one to keep in mind moving forward.
 * 
 * Apply a class of myDiv to the div provided in the JSX code.
 */

/**
 * HTML and JSX may seem that they are exactly the same but there are a few differences between them.
 * 
 * One of these differences is the naming convention.
 * 
 * HTML attributes and event references in JSX become camelCase (onclick => onClick).
 * 
 * There may also be some words reserved in JavaScript.For instance the word "class" cant be use to define HTML classes
 * in JSX.Therefore instead of using "class" you can use "clasName".
 */

const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

/**
 * 6. Learn About Self-Closing JSX Tags
 * 
 * So far, you've seen how JSX differs from HTML in a key way with the use of className vs. class for defining HTML classes.
 * 
 * Another important way in which JSX differs from HTML is in the idea of the self-closing tag.
 * 
 * In HTML, almost all tags have both an open9ng and closing tag: <div></div>; the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in HTML called "self-closing tags", or tags that don't require both an opening and closing tag before another tag can start.
 * 
 * For example the line-break tag can be written as <br> or as <br />, but should never be written as <br></br>, since it doesn't contain any content.
 * 
 * In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />. you will  see in later challenges that this syntax is useful when rendering React components. 
 * 
 * Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.
 */

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);


/**
 * 7. Create a Stateless Functional Component
 * 
 * Components are the core of React. Everything in React is a component and here you will learn how to create one.
 * 
 * There are two ways to create a React component. The first way is to use a JS function. Defining a component in this way creates a stateless functional component. The concept of stae in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)
 * 
 * To create a component with a function, you simply write a JavaScript function tha treturns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of stateless functional component that assigns an HTML class in JSX:
 * 
 * const DemoCompomnent = function() {
 *    return (
 * <div className='customClass' />
 *    );
 * };
 * 
 * After being transpiled, the <div> will have a CSS class of customClass.
 * 
 * Because a JSX component represents HTML, you could put several components together to vreate a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.
 * 
 * The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.
 * 
 * Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.
 */

const MyComponent = function() {
  // Change code below this line
return (
  <div>
  <p>here is it</p>
  </div>
)
  // Change code above this line
}

/**
 * 8. Create a React Component
 * 
 * The other way to define a React component is with the ES6 class syntax. In the following example, Kitten extends React.Component:
 * 
 * class Kitten extends React.Component
 *    constructor(props) {
 *      super(props);
 *    }
 * 
 *    render() {
 *      return(
 *        <h1>Hi</h1>
 *      );
 *    }
 * }
 * 
 * This creates an ES66 class Kitten which extends the React.Component class. 
 * 
 * So the Kitten class now has access to many useful React features, such as local state and lifecycle hooks. Don't worry if you aren't familiar with these terms yet, they will be convered in greater detail in later challenges. 
 * 
 * Also notice the Kitten class has a  constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component. 
 * 
 * The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with super, and pass props to both. 
 * 
 * This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as props.
 * 
 * My Component is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!
 */
/**
 * Hint:
 * 
 * You're going to be seeing these React Class Components all the time, so now would be a great time to get comfortable with them. Remember in theis exercise you don't have to define the component, you just need to make a function return a little html in between the marked lines.
 * Remember the previous section and return a "div" element which contains an "h1" with the text Hello Reace! 
 * "div" element has a child so remember to closs all tags.
 * 
 * Note that you don't need to put quotes around the text, because when you are working with JSX it is treated as HTML. Also check to make sure your spelling, case, and punctuation are correct! If all this code looks strange, go check out some of the great material on JavaScript ES6 here on freeCodeCamp.
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};

/**
 * 9. Create a Component with Composition
 * 
 * Now we will look at how we can compose multiple React components together. Imagine you are building an app and have created three components: a Navbar, Dashboard, and Footer.
 * 
 * To compose these components together, you could create an App parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the render method you could write:
 * 
 * retuen (
 *  <App>
 *    <Navbar />
 *    <Dashboard />
 *    <Footer />
 *  </App>
 * )
 * 
 * When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the App component and the Navbar, Dashboard, and Footer.
 */

/**
 * In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.
 * 
 * Note: ChildComponent is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.
 * 
 * Hints:
 * Add the component to be rendered in the component in which it is to be rendered.
 * Use JSX self closing tags.
 * The component to be rendered is ChildComponent and it is to be rendered in ParentComponent.
 */

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />

        { /* Change code above this line */ }
      </div>
    );
  }
};

/**
 * 10. Use React to Render Nested Components
 * 
 * The last challenge showed a simple way to compose two components, but there are many different ways you can compose components with React.
 * 
 * Component composition is one of React's powerful features. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.
 */

/**
 * There are two functional components defined in the code editor, called TypesOfFruit and Fruits. Take the TypesOfFruit component and compose it, or nest it, within the Fruits component. Then take the Fruits component and nest it within the TypesOfFood component. The result should be a child component, nested within a parent component, which is nested within a parent component of its own.
 */

/**
 * Problem Explanation
 * 
 * You have learned in earlier lessons, that there are two ways to create a React component:
 * 1, Stateless functional component - using a JavaScript function.
 * 2, Define a React component using the ES6 syntax.
 * 
 * Hint:
 * In this challenge, we hava defined two stateless functional components, i.e. using JS functions. Recall, once a component has been created, it can be rendered in the same way as an HTML tag, by using the component name inside HTML opening and closing breakets. For example, to nest a component called Dog inside a parent component called Animals, you's simply return the Dog component from the Animals component like this:
 * 
 * return <Dog />
 * 
 * Try this with the TypesOfFruit and Fruits components.
 */