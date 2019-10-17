export const WRITTING_MESSAGE = 'WRITTING_MESSAGE';
export const IS_TYPING = 'IS_TYPING';
export const NEW_MESSAGE = 'NEW_MESSAGE';

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

export function newMessage({message,from,to,time}){
    return {
        type: NEW_MESSAGE,
        message,
        from,
        to,
        time
    }
}
