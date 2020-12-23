import React, { Component } from 'react';
import { Grid } from 'gridjs-react';

class InfoTable extends Component {

  render(){
    return (
    <Grid
      data = {this.props.rows}
      columns={this.props.headers}
      search={true}
      sort={true}
      pagination={{
        enabled: true,
        limit: 10,
      }}
      />
    );
  }
}

export default InfoTable;