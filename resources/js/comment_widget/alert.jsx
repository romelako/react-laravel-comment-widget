import React, { Component } from "react";

export default class Alert extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className={"alert alert-"+this.props.alertType}>
                        {this.props.alert}
                        {this.props.errors.length > 0 &&
                            <ul>
                                {this.props.errors.map((error) => <li key={error}>{error}</li>)}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        );
    }
}