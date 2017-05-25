var React = require('react');

//instead of passing props as argument, you can just destructure
//straight in the arguments
var FormResults = ({temp, location})=>{
  return (
      <div>
        It is currently: {temp} in {location}
      </div>
    )
};

module.exports = FormResults;