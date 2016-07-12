import $ from 'jquery';
import session from './session';
import moment from 'moment';

function Messages(sender, msgBody) {
    this.sender = sender;
    this.msgBody = msgBody;
    this.timeStamp = moment().format('MMM Do HH:MM:SS');
}

Messages.prototype.save = function() {
  console.log(this);
    $.ajax({
        url: 'https://tiny-za-server.herokuapp.com/collections/day21_chatup_sriester',
        type: 'POST',
        data: JSON.stringify(this),
        contentType: 'application/json',
        success: response => {
          console.log(response);
            let $parentChatBox = $('.entire-chat-box');
            let $liMessage = $(`
            <li>
              ${this.sender}
            </li>
            <li>
              ${this.msgBody}
            </li>
            <li>
              ${this.timeStamp}
            </li>`);
            $parentChatBox.prepend($liMessage);
        }
    });
};

export default Messages;


//where to separate rendering functions
//order of operations?
