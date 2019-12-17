import React from 'react';
import 'normalize.css';
import './styles/app.scss';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [0],
    };
  }

  incrementSkills = event => {
    event.preventDefault();
    const { skills } = this.state;
    const newSkills = [...skills, skills.length];
    this.setState({ skills: newSkills });
  };

  render() {
    const { skills } = this.state;
    return <Form skills={skills} incSkills={this.incrementSkills} />;
  }
}

export default App;
