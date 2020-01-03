import React, { Component } from "react";

class ErrorHandler extends Component {
  render() {
    return <>{this.props.children}</>;
  }

  componentDidCatch(error, errorInfo) {
    if (this.props.onError) {
      this.props.onError({ error, errorInfo });
      console.log(error);
    }
  }
}

export default ErrorHandler;
