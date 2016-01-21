var React = require('react');
var ListItem = require('./ListItem.jsx');

 var List = React.createClass({
   render: function() {
     var createListItem = function (item, text) {
      return <ListItem text={item} key={text + item}/>
    };
    return (
      <ul>
       {this.props.items.map(createListItem)}
      </ul>
    );
   }
 });

module.exports = List;
