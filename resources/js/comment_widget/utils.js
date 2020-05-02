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

export function formatErrorArray(errors) {
    let formattedErrors = [];

    for (let error of Object.values(errors)) {
        // we are using the bail directive so there should be only 1 error per field
        formattedErrors.push(error[0]);
    }

    return formattedErrors;
}