export const SEND_MESSAGE = 'SEND_MESSAGE';
// export const UPDATE_MESSAGE_FIELD = 'UPDATE_MESSAGE_FIELD';

// export function update_message_field(message, userid) {
    // return {
        // type: UPDATE_MESSAGE_FIELD,
        // message,
        // userid
    // };
// }

export function sendMessage(message, from, to) {
    console.log('ALERT! from: ' + from + ' to: ' + to + 'message: ' + message);
    return {
        type: SEND_MESSAGE,
        message,
        from,
        to
    };
}
