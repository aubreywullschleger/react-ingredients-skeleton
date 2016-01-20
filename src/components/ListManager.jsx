var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function() {
    return {items: [], newItemText: ''};
  },
  onChange: function(element) {
    this.setState({newItemText: element.target.value});
  },
  handleSubmit: function(event) {
    event.preventDefault();

    var currentItems = this.state.items;
    // this.props is ONLY ever readOnly
    // this.state is for data the changes, muteable
    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText:''});
  },
  render: function() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newItemText}/>
          <button>add</button>
        </form>
        <List items={this.state.items}/>
      </div>
      );
  }
});

module.exports = ListManager;
