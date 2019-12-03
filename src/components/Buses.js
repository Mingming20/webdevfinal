import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import MaterialTable from 'material-table';





export default class DateLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Bus Name', field: 'busName' },
                { title: 'Seats', field: 'bus.seats.one' },
                { title: 'Bus Number', field: 'bus.busNumber' },
                { title: 'Starting Point', field: 'bus.routes.start' },
                { title: 'Destination', field: 'bus.routes.end' },
                { title: 'Start Time', field: 'startTime' },
                { title: 'End Time', field: 'endTime' },
                { title: 'Duration', field: 'duration' },
                { title: 'Child', field: 'fare.child' },
                { title: 'Adult', field: 'fare.adult' },
            ],
            data: [
                {
                    "busName": "Ceres",
                    "bus": {
                        "seats": { "one": "true" },
                        "busNumber": "00791",
                        "routes": {
                            "start": "Danao",
                            "end": "Cebu",
                        }
                    },
                    "startTime": " 12:2:24 pm",
                    "endTime": " 12:2:24 am",
                    "duration": "1",
                    "fare": {
                        "child": "50",
                        "adult": "100"
                    }
                },
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
            // table: {
            //     minWidth: 700,
            // },
        }));

        return (
            <div className={classes.root}>
                <Grid container spacing={3} justify="center" style={{ marginTop: '3%' }}>
                    <Grid item xs={11} >
                        <Paper className={classes.paper} >
                            <Grid container justify='space-around' style={{ height: '10%', marginTop: '1%' }}>
                                <Grid style={{ width: '100%' }}>
                                    <Card style={{ maxHeight: '300px' }}>
                                        <CardContent style={{ backgroundColor: '#ffc107' }}>
                                            <p style={{ textAlign: 'justify' }}><InfoIcon /><b>Buses List<br ></br></b>
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid>
                                <MaterialTable
                                title = ''
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



