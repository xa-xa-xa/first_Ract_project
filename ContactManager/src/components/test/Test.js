import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  // componentDidUpdate = (prevProps, prevState) => {};

  // componentWillMount() {
  //   console.log('Component Will Mount!');
  // }
  // componentDidUpdate() {
  //   console.log('Component Did Update!');
  // }
  // componentWillUpdate() {
  //   console.log('Component Will Update!');
  // }
  // componentWillReceiveProps(mextProps, nextState) {
  //   console.log('ComponentWillReceiveProps..');
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
