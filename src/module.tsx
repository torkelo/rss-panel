import React, { PureComponent } from 'react';
import { DeleteButton, PanelProps } from '@grafana/ui';

interface Options {}
interface Props extends PanelProps<Options> {}

export class Panel extends PureComponent<Props > {

  constructor(props) {
    super(props);
  }

  onDelete = () => {
    console.log('delete!');
  }

  render() {
    return (
      <div>
        <h2>External panel plugin!</h2>
        <DeleteButton onConfirm={this.onDelete} />
      </div>
    );
  }
}
