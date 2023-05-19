/**
 * 1.Write a React Component from Scratch
 * 
 * Now that we've learned the basic of JSX and React components, it's time to write a component on your own. React components are the core building blocks of React applications so it's important to become very familiar with writing them. Remember, a typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML(for JSX) or null. This is the basic form of a React component. Once you understand this well, you will be prepared to start building more complex React projects.
 */

/**
 * Define a class MyComponent that extends React.Component. Its render method should return a div that contains an h1 tag with the text: My First React Component! in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.
 * 
 * Render this component to the DOM using ReactDOM.render() . There is a div with id='challenge-node' available for you to use.
 */

/**
 * Problem Explanation
 * 
 * In this challenge we want to create a class react component(React components can be class components or function components). All of our class components are going to be an extention of React.Component. For example we can start to make a component called FirstComponent with:
 * 
 * class FirstComponent extends React.Component {}
 * 
 * We also need to be sure to define the constructor for our new class. It is best practice to call any component's constructor with super and to pass props to both. super pulls the constructor of our component's parent class (in this case React.Component). Now, the code for our component looks like this:
 * 
 * class FirstComponent extends React.Component {
 *  constructor(props){
 *      super(props);
 *  }
 * }
 * 
 * Now all that's left to do is define what our component will render! We do this by calling the component's render method, and returning our JSX code:
 * 
 * class FirstComponent extends React.Component {
 *  constructor(props) {
 *      super(props);
 *  }
 *  render(){
 *      return (
 *      // The JSX code you put here is what your component will render
 *      );
 *  }
 * };
 * 
 * Once your JSX code is ther, your component is complete! 
 */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="challenge-node">
                <h1>My First React Component!</h1>
            </div>
        );
    }
};
ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));