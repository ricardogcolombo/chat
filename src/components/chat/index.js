import {
	connect
} from 'react-redux';
import Chat from './Chat'

import {
	sendMessage,
	writtingMessage
} from '../../actions/messages'

import store from '../../store';

const mapStateToProps = function({msg,currentMessage}) {
	return {
		messages: msg,
	    currentMessage
	}
}

const mapDispatchToProps = {
	sendMessage,
	writtingMessage
}


export default connect(mapStateToProps,mapDispatchToProps)(Chat);
