$(document).ready(function () {

  url = 'http://0.0.0.0:5001/api/v1/status/';
  $.getJSON(url, function (data) {
    if (data.status === 'OK') {
      console.log(data.status);
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
 $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify({})
  }).done((rsl) => {
    console.log(rsl);

    const myplaces = $('section.places');
    const myplace;
    for ( myplace of rsl) {
      const myarticle = $('<article></article>');
      myarticle.append('<div class="price_by_night">$' + myplace.price_by_night + '</div>');
      myarticle.append('<h2>' + myplace.name + '</h2>');

      const chdiv = $('<div class="informations"></div>');

      chdiv.append('<div class="max_guest">' + myplace.max_guest + ' Guests</div>');
      chdiv.append('<div class="number_rooms">' + myplace.number_rooms + ' Rooms</div>');
      chdiv.append('<div class="number_bathrooms">' + myplace.number_bathrooms + ' Bathrooms</div>');

      myarticle.append(chdiv);
      myarticle.append('<div class="description">' + myplace.description + '</div>');

      myplaces.append(myarticle);
    }
  });


const amnity = {};

  $('li :checkbox').change(function () {
    const a_ID = $(this).attr('data-id');
    const a_name = $(this).attr('data-name');

    if (this.checked) {
      amenity[a_ID] = a_name;
    } else {
      delete amenity[a_Id];
    }

    $('div.amenities h4').empty();
    const mytext = $.map(amenity, function (givent) {
      return givent;
    }).join(', ');

    $('div.amenities h4').text(mytext);
  });
});
