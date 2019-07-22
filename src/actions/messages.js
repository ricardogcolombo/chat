export const SEND_MESSAGE = 'SEND_MESSAGE';
export const WRITTING_MESSAGE = 'WRITTING_MESSAGE';
export const IS_TYPING = 'IS_TYPING';

export function setIsTyping(from, isTyping) {
    return {
        type: IS_TYPING,
        from,
        isTyping
    };
}

export function writtingMessage(message, from) {
    return {
        type: WRITTING_MESSAGE,
        message,
        from
    };
}

export function sendMessage(message, from, to, time) {
    return {
        type: SEND_MESSAGE,
        message,
        from,
        to,
        time
    };
}
