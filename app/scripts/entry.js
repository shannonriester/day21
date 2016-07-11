import $ from 'jquery';
import session from './session';
import Message from './messages';
import renderNewMessage from './renderNewMessage.js';


let $loginPg = $('#login-page');
let $loginBtn = $('#login-btn');
let $loginInput = $('#login-input');

let $chatBox = $('#chatbox');
let $sendBtn = $('#send-btn');

$('#message-page').css('display', 'none');

$loginBtn.on('click', function(){
  let userName = $loginInput.val().trim();
  session.userName = userName;
  console.log(userName);
  $loginPg.css('display', 'none');
  $('#message-page').css('display', 'flex');
});

$sendBtn.on('click', function(){
  let message = $chatBox.val().trim();

  let newMessage = new Message(session.userName, message);
  newMessage.create();
  // renderNewMessage();
  console.log('newMessage created: ', newMessage);
  //run function to append <li> message </li>
});
