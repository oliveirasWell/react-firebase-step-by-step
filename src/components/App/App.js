import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider} from "material-ui/styles/index";
import {AppBar, Toolbar, Typography} from "material-ui";
import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';
import {DataTable} from "../DataTable/DataTable";
import FirebaseService from "../../services/FirebaseService";

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

class App extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        FirebaseService.getDataList('leituras', (dataReceived) => this.setState({data: dataReceived}), 20)
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography type="title" color="inherit">
                                My Awesome React App
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    {
                        this.state.data !== undefined && this.state.data.length !== 0
                            ? <DataTable data={this.state.data}/>
                            : <div style={{textAlign:'center'}}>It's empty</div>
                    }

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;
