/** 
    1. Create a Simple JSX Element
    React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface(UI) of modern web applications.

    React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. For the most part, JSX is similar to the HTML that you hace already learned, however there are a few key differences that will be covered throughout these challenges.

    For instance, because JSX is a syntactic extension of JavaScript, you can actually write Javascript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: {'this is treated as JavaScript code' }. Keep this in mind, since it's used in seceral future challenges.

    However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process. For your conbenience, it's already added behind the scenes for these challenges. If you happen to write syntactically incalid JSX, you will see the first test in these challenges fail.

    It's worth noting that under the hood the hallenges are calling ReactDOM.render(JSX, document.getElementByID('root')). This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.

    The current code uses JSX to assign a div element to the constant JSX. Replace the dic with an h1 element and add the text Hello JSX! inside it.
*/

const JSX = <h1>Hello JSX!</h1>;

/**
   2. Create a Complex JSX Element

   The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.
 */