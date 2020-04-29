import React, { Component } from "react";
import ReactDOM from "react-dom";
import Alert from "./alert.jsx";
import Comments from "./comments.jsx";
import Form from "./form.jsx";
import axios from "axios";

const FETCH_DELAY = 30000;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            alert: "",
            alertType: "danger",
            errors: []
        }
    }

    fetchComments() {
        axios.get('/api/get_recent_comments')
            .then(response => {
                this.setState({
                    comments: response.data
                });
            }).catch(_ => {
                this.setAlert("Failed to grab the comments from the server!");
            })
    }

    setAlert(alert, alertType = "danger", errors = []) {
        this.setState({
            alert: alert,
            alertType: alertType,
            errors: errors
        })
    }

    componentDidMount() {
        this.fetchComments();
        setInterval(() => this.fetchComments(), FETCH_DELAY);
    }

    render() {
        return (
            <div>
                {this.state.alert.length > 0 &&
                    <Alert alert={this.state.alert} alertType={this.state.alertType} errors={this.state.errors} />
                }

                <Form fetchComments={this.fetchComments.bind(this)} setAlert={this.setAlert.bind(this)} />
                <Comments comments={this.state.comments} />
            </div>
        )
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;