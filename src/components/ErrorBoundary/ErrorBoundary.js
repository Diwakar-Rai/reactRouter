import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(err) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(err, errorInfo) {
    console.log(err);
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1 style={{ color: "red" }}>Something Went Wrong</h1>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}
