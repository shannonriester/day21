import $ from 'jquery';
import user from './session';

function Messages (){
  this.sender = sender;
  this.timeStamp = timeStamp;
  this.msgBody = msgBody;
}

Messages.prototype.create = function(){
  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/users',
    type: 'POST',
    data: JSON.stringify(this),
    contentType: 'application/json', //tells server that you're going to send it as json
    // datatType: 'json' //when the data returns with whatever it return wiht, pls inerprate it with json
    success: (response) =>{
      console.log('you created a new message');
      console.log(response);
    }
  });
};


export default Messages;
