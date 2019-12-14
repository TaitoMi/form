import React from 'react';
import 'normalize.css';
import { Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
import Timer from './components/Timer';
import CountDown from './components/CountDown';
import './styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimer: true,
      renderedResponse: '',
    };
  }

  componentDidMount() {
    this.getResponse().then(res => {
      const someData = res;
      this.setState({ renderedResponse: someData });
    });
  }

  getResponse = async () => {
    const response = await fetch('api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  toCountdown = () => {
    const { isTimer } = this.state;
    this.setState({ isTimer: !isTimer });
  };

  render() {
    const { isTimer, renderedResponse } = this.state;
    return (
      <div className="app">
        <h2>Call out to API!</h2>
        <p>{renderedResponse.express}</p>
        <Tabs defaultActiveKey="1" onChange={this.toCountdown}>
          <Tabs.TabPane
            className="app__tab"
            tab={
              <span>
                <Icon type="clock-circle" />
                Timer
              </span>
            }
            key="1"
          >
            {isTimer && <Timer />}
          </Tabs.TabPane>
          <Tabs.TabPane
            className="app__tab"
            tab={
              <span>
                <Icon type="dashboard" />
                CountDown
              </span>
            }
            key="2"
          >
            {!isTimer && <CountDown />}
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
