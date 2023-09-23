import React from "react";

class ErrorThrower extends React.Component {
  componentDidMount() {
    throw new Error("This is a test error");
  }

  render() {
    return <div>This component will throw an error</div>;
  }
}

export default ErrorThrower;