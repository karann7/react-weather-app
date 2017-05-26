var React = require('react');

//instead of passing props as argument, you can just destructure
//straight in the arguments
var FormResults = ({temp, location})=>{
  return (
      <div>
        <h3 className="text-center">It is currently: {temp} in {location}</h3>
      </div>
    )
};

module.exports = FormResults;