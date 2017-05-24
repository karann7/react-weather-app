var React = require('react');
var FormResults = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return (
      <div>
        It is currently: {temp} in {location}
      </div>
    )
  }
});
module.exports = FormResults;