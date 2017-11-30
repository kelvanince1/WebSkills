import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
//
import Header from './Header';

class NewSkills extends Component {
  renderSkillField(field) {
    return (
      <div>
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
            name='Skill'
            component={this.renderSkillField}
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
