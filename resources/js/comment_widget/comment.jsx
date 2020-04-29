import React, { Component } from "react";

export default class Comment extends Component {
    render() {
        return (
            <div className="comment-wrapper">
                <div className="comment-box">
                    <div className="comment-header">
                        <strong>{this.props.author}</strong> ({this.props.authorEmail}):
                    </div>

                    <div className="comment-body">
                        {this.props.comment}
                    </div>
                </div>
            </div>
        )
    }
}