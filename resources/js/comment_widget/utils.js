/**
 * Creates an object that matches the signature of Comment entity in Laravel
 */
export function mapStateToComment(state) {
    return {
        'author_name': state.author,
        'author_email': state.email,
        'comment': state.comment
    }
}

export function validate(state) {
    let errors = [];

    if (state.author.trim().length == 0)
        errors.push("You must specify an author name");
    else if (!/^[A-Za-z\s]+$/.test(state.author))
        errors.push("Author name can only contain letters and spaces");

    if (state.email.trim().length == 0)
        errors.push("You must specify an email");
    else if (!/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/.test(state.email))
        errors.push("Please enter a valid email");

    if (state.comment.trim().length == 0)
        errors.push("You must include a comment");

    return errors;
}