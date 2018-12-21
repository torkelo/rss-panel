import React, { PureComponent } from 'react';
import { DeleteButton } from '@grafana/ui';

export class Panel extends PureComponent {

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
