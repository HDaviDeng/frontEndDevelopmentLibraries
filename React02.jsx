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


/**
 * 2. Pass Props to a Stateless Functional Component
 * 
 * The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: props. 
 * In React, you can pass props, or properties, to child components. Say you hace an App component which renders a child component called Welcome which is a stateless functional component. You can pass Welcome a user property by writing:
 * 
 * <App>
 *  <Welcome user='Mark' />
 * </App>
 * 
 * You use custom HTML attributes created by you and supported by React to be passed to the component. In this case, the created property user is passed to the component Welcome. Since Welcome is a stateless functional component, it has access to this value like so:
 * 
 * const Welcome = (props) => <h1>Hello, {props.user}!</h1>
 * 
 * It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.
 */

/**
 * Hint:
 * 
 * Define a prop named date in the Calendar component as follows:
 * <CurrentDate date={Date()} /}
 * 
 * The syntax prop.propName is used to render a prop.
 */

const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

/**
 * //3. Pass an Array as Props
 * 
 * The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
 * 
 * <ParentComponent>
 *  <ChildComponent colors={["green","blue", "red"]} />
 * </ParentComponent>
 * 
 * The child component then has access to the array property colors. Array methods such as join() can be used when accessing the property. 
 * 
 * const ChildComponent = (props) => <p> {props.colors.join(', ')}</p> 
 * 
 * This will join all colors array items into a comma separated string and produce: 
 * <p>green, blue, red</p> 
 * Later, we will learn about other common methods to render arrays of data in React.
 */

/**
 * There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assighed to an array of to-do tasks, for example ["wald dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasks array in the p element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should hace at least 3 tasks.
 */

const List = (props) => {
    { /* Change code below this line */ }
    return <p>{}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List/>
          <h2>Tomorrow</h2>
          <List/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };


/**
 * //4. Use Default Props
 * 
 * React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare MyComponent.defaultProps = { location:'San Francisco' }, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.
 */

/**
 * The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.
 */

const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line

/**
 * Problem Explanation
 * 
 * This challenge has you declaring a default prop for the ShoppingCart component
 * 
 * const ShoppingCart = props => {
 * return (
 *  <div>
 *    <h1>Shopping Cart Component</h1>
 *  </div>
 *  );
 * };
 * 
 * To declare a default prop, the syntax to be followed is
 * 
 * itemName.defaultProps = {
 *  prop-x: value,
 *  prop-y: value
 * }
 * 
 * Following the Syntax, the following code should be declared below the given code
 * 
 * ShoppingCart.defaultProps = {
 *  items: 0
 * };
 * 
 * This declares a prop named 'items' with the value of '0'.
 */


/**
 * //5. Use Default Props
 * 
 * React also has an option to set default
 */