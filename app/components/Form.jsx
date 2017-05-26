var React = require('react');
var Form = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0){
      this.props.onSearch(location);
      this.refs.location.value = "";
    }
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location"/>
        <button className="secondary button">Submit</button>
      </form>
    )
  }
});
module.exports = Form;