export const SEND_MESSAGE = 'SEND_MESSAGE';
export const WRITTING_MESSAGE = 'WRITTING_MESSAGE';

export function writtingMessage(message, from) {
    return {
        type: WRITTING_MESSAGE,
        message,
        from
    };
}

export function sendMessage(message, from, to) {
    console.log('ALERT! from: ' + from + ' to: ' + to + 'message: ' + message);
    return {
        type: SEND_MESSAGE,
        message,
        from,
        to
    };
}
