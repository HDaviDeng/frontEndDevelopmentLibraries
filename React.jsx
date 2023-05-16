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

  