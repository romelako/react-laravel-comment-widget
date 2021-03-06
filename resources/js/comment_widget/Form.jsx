import React, { Component } from "react";
import axios from "axios";
import { mapStateToComment, formatErrorArray } from "./utils";
import { COMMENT_SUCCESS, COMMENT_ERRORS } from "./constants";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            email: "",
            comment: "",
            submitted: false
        }
    }

    resetState() {
        this.setState({
            author: "",
            email: "",
            comment: "",
            submitted: false
        })
    }

    handleSubmit() {
        if (this.state.submitted)
            return;

        // reset the alert
        this.props.setAlert("", "", []);

        this.setState({ submitted: true });

        axios.post('/api/store_comment', mapStateToComment(this.state))
            .then(_ => {
                this.resetState();
                this.props.fetchComments();
                this.props.setAlert(COMMENT_SUCCESS, "success");
            }).catch(error => {
                this.setState({ submitted: false });
                this.props.setAlert(COMMENT_ERRORS, "danger", formatErrorArray(error.response.data.errors));
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="form">
                                <div className="form-group">
                                    <label>Author Name</label>
                                    <input type="text"
                                           value={this.state.author}
                                           className="form-control"
                                           onChange={(e) => this.setState({ author: e.target.value })} />

                                    <label>Author Email</label>
                                    <input type="text"
                                           value={this.state.email}
                                           className="form-control"
                                           onChange={(e) => this.setState({ email: e.target.value })} />

                                    <label>Comment</label>
                                    <textarea className="form-control"
                                              value={this.state.comment}
                                              onChange={(e) => this.setState({ comment: e.target.value})} />


                                    <button className="btn btn-success submit-button float-right"
                                            onClick={this.handleSubmit.bind(this)}
                                            disabled={this.state.submitted ? "disabled" : null}>
                                        {this.state.submitted ? "Submitting..." : "Submit"}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}