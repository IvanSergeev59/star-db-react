import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update()
      }
    }

    componentDidMount() {
      this.update()
    }

    update() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;
      
      if (!data) {
        return <ErrorBoundry><Spinner /></ErrorBoundry>;
      }

      return <ErrorBoundry><View {...this.props} data={data} /></ErrorBoundry>;
    }
  };
};

export default withData;
