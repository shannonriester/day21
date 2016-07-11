import $ from 'jquery';
import session from './session';

function Messages (sender, msgBody){
  this.sender = sender;
  this.timeStamp = new Date();
  this.msgBody = msgBody;
}

Messages.prototype.create = function(){
  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/day21_chatup_sriester',
    type: 'POST',
    data: JSON.stringify(this),
    contentType: 'application/json',
    success: (response) =>{
      console.log(response, ' response');
    }
  });
};

export default Messages;


//where to separate rendering functions
  //order of operations?
