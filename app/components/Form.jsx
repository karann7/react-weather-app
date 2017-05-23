var React = require('react');
var Form = React.createClass({
  render: function(){
    return (
      <form>
        <input type="text" ref="location"/>
        <button>Submit</button>
      </form>
    )
  }
});
module.exports = Form;