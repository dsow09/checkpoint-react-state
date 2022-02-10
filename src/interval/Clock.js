import React
 from "react";
export class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {counter: 0};
    }
  
    componentDidMount() {
      this.timer = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timer);
    }
  
    tick() {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  
    render() {
      return (
        <div>
          <h2>Interval :  {this.state.counter}</h2>
        </div>
      );
    }
  }
  