import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    //This is just to add
    // return <li key={item.key}>{item.text}</li>
    //This is changed to below to remove items
    // return (<li onClick={() => this.delete(item.key)} 
    //           key={item.key}>{item.text}</li>)
    return (<li> {item.text}
      <button type="submit" onClick={() => this.delete(item.key)} 
               key={item.key}>Remove</button></li>)
  }

//This is to delete the item from the list
 delete(key) {
    this.props.delete(key);
  }

// This is to change status from check to uncheck
// done(key){
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
// }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;