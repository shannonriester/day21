import $ from 'jquery';

function clearAPI() {
  console.log('clearing');
  $.ajax({
    url: 'http://tiny-za-server.herokuapp.com/collections/day21_chatup_sriester/',
    type: 'GET',
    success: function(response){
      response.forEach(function(user){
        $.ajax({
          url: 'http://tiny-za-server.herokuapp.com/collections/day21_chatup_sriester/' + user._id,
          type: 'DELETE',
          contentType: 'application/json',
          success: function(response) {
            console.log('DELETED', user._id);
          }
        });
      });
    }
  });
}

export default clearAPI;
