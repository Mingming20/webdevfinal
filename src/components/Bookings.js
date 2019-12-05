import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import MaterialTable from 'material-table';




export default class Buses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Client', field: 'client' },
                { title: 'Date', field: 'date' },
                { title: 'Time', field: 'time' },
                { title: 'From',field: 'from'},
                { title: 'To', field: 'to' },
                { title: 'Bus', field: 'bus' },
                { title: 'Seat/s', field: 'seat' },
                { title: 'Bill', field: 'bill' },
                { title: 'Ticket', field: 'ticket' }
            ],
            data: [
                {
                    client: 'testing@gmail.com',
                    date: '11/26/2019',
                    time: "10:50:25 am",
                    from: 'Talamban',
                    to: 'colon',
                    bus: 'Ceres Liner',
                    seat:JSON.stringify([1,2,3]),
                    bill: '100',
                    ticket: 'BFL-9-1072-ZAW'
                }
            ],
        }
    }

    checkCredential = () => {

    }
    render() {
        return (
            <div>
                {this.view()}
            </div>
        )
    }

    view() {
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                height: 100,
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }));

        return (
            <div style={{ backgroundColor: '#f5f5f5' }} className={classes.root}>
                <Grid container spacing={3} justify="center" style={{ marginTop: '3%' }}>
                    <Grid item xs={11} >
                        <Paper className={classes.paper} >
                            <Grid container justify='space-around' style={{ height: '10%', marginTop: '1%' }}>
                                <Grid style={{ width: '100%' }}>
                                    <Card style={{ maxHeight: '300px' }}>
                                        <CardContent style={{ backgroundColor: '#ffc107' }}>
                                            <p style={{ textAlign: 'justify' }}><InfoIcon /><b>Manage Bookings<br ></br></b>
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid>
                                <MaterialTable
                                    title = ''
                                    // style={{backgroundColor:'lightBlue'}}
                                    columns={this.state.columns}
                                    data={this.state.data}
                                    editable={{
                                        onRowAdd: newData =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    this.setState(prevState => {
                                                        const data = [...prevState.data];
                                                        data.push(newData);
                                                        return { ...prevState, data };
                                                    });
                                                }, 600);
                                            }),
                                        onRowUpdate: (newData, oldData) =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    if (oldData) {
                                                        this.setState(prevState => {
                                                            const data = [...prevState.data];
                                                            data[data.indexOf(oldData)] = newData;
                                                            return { ...prevState, data };
                                                        });
                                                    }
                                                }, 600);
                                            }),
                                        onRowDelete: oldData =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    this.setState(prevState => {
                                                        const data = [...prevState.data];
                                                        data.splice(data.indexOf(oldData), 1);
                                                        return { ...prevState, data };
                                                    });
                                                }, 600);
                                            }),
                                    }}
                                />
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        )
    }

}



