var React = require('react');
var Form  = require('Form');
var FormResults  = require('FormResults');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({
  getInitialState: function(){
    return {
      location: 'Miami',
      temp: 200
    }
  },
  handleSearch: function(location){
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
       location: location,
       temp: temp
      })
    }, function(err){
        alert(err)
    })  
  },
  render: function () {
    var {location, temp} = this.state;
    return (
      <div>
      <h3>Get Weather</h3>
      <Form onSearch={this.handleSearch}/>
      <FormResults location={location} temp={temp}/>
      </div>
    )
  }
});

module.exports = Weather;
