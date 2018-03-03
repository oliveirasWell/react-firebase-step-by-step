import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider} from "material-ui/styles/index";
import {AppBar, Toolbar, Typography} from "material-ui";
import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';
import {DataTable} from "../DataTable/DataTable";

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

class App extends Component {

    state = {
        data: [
            {
                key: 'test key key',
                temperatura: 'test key temperatura',
                umidade: 'test key umidade',
                cliente: 'test key cliente',
                data: 'test key data',
            }
        ]
    };

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
                    <DataTable data={this.state.data}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;
