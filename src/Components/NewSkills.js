import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
//
import Header from './Header';

class NewSkills extends Component {
  renderField(field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          type='text'
          {...field.input}
        />
      </div>
    )
  };

  render() {
    return (
      <div>
        <Header />
        <form>
          <Field
            label='Username'
            name='Username'
            component={this.renderField}
          />
          <Field
            label='Skill'
            name='Skill'
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SkillsNewForm'
})(NewSkills);
// export default reduxForm({
//   form: 'SkillsNewForm',
//   fields: ['username', 'skill']
// }, null, { createSkill })(NewSkills);
