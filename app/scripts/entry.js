import $ from 'jquery';
import session from './session';

let $loginPg = $('#login-page');
let $loginBtn = $('#login-btn');
let $loginInput = $('#login-input');

$('#message-page').css('display', 'none');

$loginBtn.on('click', function(){
  let userName = $loginInput.val().trim();
  session.userName = userName;
  console.log(userName);
  $loginPg.css('display', 'none');
});
