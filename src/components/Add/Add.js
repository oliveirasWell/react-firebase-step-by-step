import {Button, TextField, Typography} from "material-ui";
import React, {Component} from "react";
import FirebaseService from "../../services/FirebaseService";
import {urls} from "../../utils/urlUtils";
import {withRouter} from "react-router-dom";

class Add extends Component {

    state = {id: null, temperatura: '', umidade: '', data: '', cliente: ''};

    componentWillMount = () => {
        const {id} = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({id});
            FirebaseService.getUniqueDataBy('leituras', id, (data) => this.setState({...data}, () => console.log(this.state)));
        }

    };

    submit = (event) => {
        event.preventDefault();

        const {temperatura} = this.state;
        const {umidade} = this.state;
        const {data} = this.state;
        const {cliente} = this.state;

        let objToSubmit = {
            temperatura,
            umidade,
            data,
            cliente
        };

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('leituras', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'leituras', objToSubmit)
        }

        this.props.history.push(urls.data.path);

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render = () => {
        return (<React.Fragment>

            <Typography variant="headline" component="h2">Add New</Typography>
            <form onSubmit={this.submit}>
                <TextField className="input-field"
                           type="text"
                           value={this.state.temperatura}
                           label="Temperature"
                           required
                           onChange={this.handleChange('temperatura')}/>

                <TextField className="input-field"
                           type="text"
                           label="Humidity"
                           value={this.state.umidade}
                           required
                           onChange={this.handleChange('umidade')}/>

                <TextField className="input-field"
                           type="text"
                           label="Date"
                           value={this.state.data}
                           required
                           onChange={this.handleChange('data')}/>

                <TextField className="input-field"
                           type="email"
                           label="Client"
                           value={this.state.cliente}
                           required
                           onChange={this.handleChange('cliente')}/>

                <Button type="submit"
                        style={{marginTop: '20px', display: 'inline-block'}}>
                    Add
                </Button>
            </form>
        </React.Fragment>)
    }
}

export default withRouter(Add);