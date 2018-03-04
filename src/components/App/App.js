import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider} from "material-ui/styles/index";
import {Card, CardContent} from "material-ui";
import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';
import {DataTable} from "../DataTable/DataTable";
import FirebaseService from "../../services/FirebaseService";
import {Route, withRouter} from "react-router-dom";
import {privateUrls, urls} from "../../utils/urlUtils";
import Add from "../Add/Add";
import {Welcome} from "../Welcome/Welcome";
import {TopBar} from "./TopBar";

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
        FirebaseService.getDataList('leituras', (dataReceived) => this.setState({data: dataReceived}))
    }

    render() {


        return (
            <MuiThemeProvider theme={theme}>

                <React.Fragment>

                    <TopBar/>

                    <Card style={{margin: '50px'}}>
                        <CardContent>

                            <Route exact
                                   path={urls.home.path}
                                   render={(props) => <Welcome {...props}/>}
                            />

                            <Route exact
                                   path={urls.data.path}
                                   render={(props) => <DataTable {...props} data={this.state.data}/>}
                            />

                            <Route exact
                                   path={urls.add.path}
                                   render={(props) => <Add {...props} />}
                            />

                            <Route exact
                                   path={privateUrls.edit.path}
                                   render={(props) => <Add {...props} />}
                            />

                        </CardContent>
                    </Card>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(App);
