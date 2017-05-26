var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="true">
        <h4>Some Title</h4>
        <p>Insert error message here</p>
        <p>
        <button className="button hollow" data-close="true">
          Okay
        </button>
        </p>
      </div>
    );
  }
});


module.exports = ErrorModal;