var React = require('react');
var Form  = require('Form');
var FormResults  = require('FormResults');
var Weather = React.createClass({
  render: function () {
    return (
      <div>
      <h3>Get Weather</h3>
      <Form/>
      <FormResults/>
      </div>
    )
  }
});

module.exports = Weather;
