/**
  * @jsx React.DOM
  * @flow
  */
'use strict';

var React = require('react');
var $ = require('jquery');
var Form = require('../base/Form.react');

var AnswerForm = React.createClass({
  getFormError: function() {
    return 'The answer field cannot be empty :(';
  },

  createAnswer: function(answer) {
    var data = {qId: this.props.q.id, answer: answer};
    return $.post('/api/v1/answers/', JSON.stringify(data));
  },

  render: function() {
    return (
      <Form
        formError={this.getFormError()}
        createRow={this.createAnswer}
        addRow={this.props.addAnswer}
        expandRows={this.props.expandRows}
        placeholder='add new answer'
        answerForm={true} />
    );
  }
});

module.exports = AnswerForm;