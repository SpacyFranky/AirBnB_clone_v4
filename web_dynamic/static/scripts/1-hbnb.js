$(document).ready(function () {
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
