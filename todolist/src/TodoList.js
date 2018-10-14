import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    items: []
  };
    this.addItem = this.addItem.bind(this);
    // This is added to delete the item from the list
    this.deleteItem = this.deleteItem.bind(this);
    // this.doneItems = this.doneItems.bind(this);

  }
  addItem(e) {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now(),
      done: false // added for check and uncheck
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
}


deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}

// doneItems(key){
// var doneItems

//    this.setState({
//     items: doneItems
//   });
// }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter task" autofocus="autofocus">
            </input>
            <button type="submit">Add task</button>
          </form>

          <br/>
          <br/>
          <br/>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="listDiv">
        <p className="myTestYour"> Items will be displayed here: </p>
        <TodoItems entries={this.state.items} 
        // This is added to delete the item
        delete={this.deleteItem}/>
        </div>
      </div>
    );
  }
}
 
export default TodoList;