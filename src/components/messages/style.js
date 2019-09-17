
import styled from 'styled-components'

export const MessageRow = styled.div`
    width:100%;
    float:left;
}`

export const SenderName =  styled.div`
    color:#4e7ea8;
    word-break: initial;
    width:100%;
    margin-right:50px;
    font:18px/20px 'Open Sans',"Lucida Grande","Lucida Sans Unicode",Arial,Helvetica,Verdana,sans-serif;`

export const SenderMessage =  styled.div`
    width:100%;
    margin-left:10px;
    float:left;
    font:12px/18px 'Open Sans',"Lucida Grande","Lucida Sans Unicode",Arial,Helvetica,Verdana,sans-serif;
`
export const SenderTime =  styled.div`
    float: right;
    font: 11px/20px 'Open Sans',"Lucida Grande","Lucida Sans Unicode",Arial,Helvetica,Verdana,sans-serif;
    color: grey;
`

export const Message = styled.div`
    position: relative;
    padding:5px 10px 5px 10px;
    margin-top:10px;
    word-break: break-all;
    max-width: 450px;
    border-radius: .4em;
    background :${ props=>props.data? '#a4e893':'#FFFFFF' }
    float: ${props=> props.data? 'right':'left'};
    margin-left:${props=>props.data?'':'30px'};
    margin-right:${props=>props.data?'30px':''};
    &::after{
        content: '';
        position: absolute;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-bottom: 0;
        margin-top: -10px;

        //sender
        right: ${props=>props.data? '0':''};
        left: ${props=>props.data? '':'0'};

        border-right-color: ${props=>!props.data? '#FFFFFF':''};
        border-left-color: ${props=>props.data ? '#a4e893':''};
        border-right: ${props=>props.data?'0':''};
        border-left: ${props=>!props.data?'0':''};

        margin-right:${props=>props.data?'-20px':''};
        margin-left:${props=>!props.data?'-20px':''};
    }
`

