var React = require('react');
var Form  = require('Form');
var FormResults  = require('FormResults');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false  
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
       location: location,
       temp: temp,
       isLoading: false
      });
    }, function(err){
        alert(err);
        that.setState({isLoading: false});
    })  
  },
  render: function () {
    var {location, temp, isLoading} = this.state;
    function renderMessage(){
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location){
        return <FormResults location={location} temp={temp}/>
      }
    }
    return (
      <div>
      <h1 className="text-center">Weather</h1>
      <Form onSearch={this.handleSearch}/>
      {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
