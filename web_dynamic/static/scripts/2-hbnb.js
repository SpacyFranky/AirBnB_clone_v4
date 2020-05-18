$(document).ready(function () {

  url = 'http://0.0.0.0:5001/api/v1/status/';
  $.getJSON(url, function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  const d = {};
  let id, name;
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      id = $(this).attr('data-id');
      name = $(this).attr('data-name');
      d[id] = name;
      if (Object.keys(d).length == 1) {
        $('.amenities > h4').append(d[id]);
      } else {
        $('.amenities > h4').append(', ' + d[id]);
      }
      console.log(d);
    } else {
      id = $(this).attr('data-id');
      delete d[id];
      $('.amenities > h4').empty();
      let i = 1;
      for (let key of Object.keys(d)) {
        if (i < Object.keys(d).length) {
          $('.amenities > h4').append(d[key] + ', ');
        } else {
          $('.amenities > h4').append(d[key]);
        }
        i++;
      }
      console.log(d);
    }
  });
});
