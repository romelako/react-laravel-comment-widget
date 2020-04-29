import React, { Component } from "react";
import axios from "axios";
import Comment from "./comment.jsx";

export default class Comments extends Component {
    render() {
        return (
            <div className="comment-container">
                <h4>Most Recent Comments:</h4>

                {this.props.comments.length == 0 && <span>There are no comments to display</span>}

                {this.props.comments.length > 0 &&
                    this.props.comments.map((comment) => (
                        <Comment author={comment.author_name}
                                 authorEmail={comment.author_email}
                                 comment={comment.comment}
                                 key={comment.id} />
                    ))
                }
            </div>
        )
    }
}

