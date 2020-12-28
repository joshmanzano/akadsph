import React, { useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';

function InfoTable(props) {

  // const grid = new Grid({
  //   columns: [
  //     'Name',
  //     { 
  //       name: 'Email',
  //       formatter: (cell) => _(<i>{cell}</i>)
  //     },
  //     'Actions'
  //   ],
  //   data: Array(5).fill().map(x => [
  //     'boop',
  //     'beep',
  //     _(<button className={"py-2 px-4 border rounded-md text-white bg-blue-600"} onClick={() => alert('clicked!')}>Edit</button>)
  //   ])
  // });

    return (
    <Grid
      data = {props.rows}
      columns={props.headers}
      search={true}
      sort={true}
      pagination={{
        enabled: true,
        limit: 5,
      }}
      />
    );
}

export default InfoTable;