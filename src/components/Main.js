import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
          <div><h3>Latest Bookings</h3></div>
        <Typography component="div" style={{ backgroundColor: '#e3f2fd', height: '80vh' }} />
      </Container>
    </React.Fragment>
  );
}