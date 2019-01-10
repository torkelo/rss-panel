import React, { PureComponent } from 'react';
import { DeleteButton, LoadingState } from '@grafana/ui';

interface State {
  loading: LoadingState;
}

export class Panel extends PureComponent<any, State> {

  constructor(props) {
    super(props);

    this.state = {
      loading: LoadingState.Loading,
    };
  }

  onDelete = () => {
    console.log('delete!');
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <h2>External panel plugin!</h2>
        <p>loading: {loading} </p>
        <DeleteButton onConfirm={this.onDelete} />
      </div>
    );
  }
}
