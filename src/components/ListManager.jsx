var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
   getInitialState: function(){
     return {items: [], newItemText: ''};
   },
   onChange: function(elem){
     this.setState({newItemText: elem.target.value});
   },
   handleSubmit: function(event){
     event.preventDefault();

     var currentItems = this.state.items;

     currentItems.push(this.state.newItemText);

     this.setState({items: currentItems, newItemText: ''});
   },
   render: function(){
     return (
       <div>
         <h2>
         {this.props.title}
         </h2>
         <form onSubmit={this.handleSubmit}>
           <input onChange={this.onChange} value={this.state.newItemText}></input>
           <button>add</button>
         </form>
         <List items={this.state.items} />
       </div>
     )
     }
 });

module.exports = ListManager;
