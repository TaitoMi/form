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

  render() {
    const { skills } = this.state;
    return <Form skills={skills} />;
  }
}

export default App;
