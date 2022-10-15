const dev = {
    "url": "https://localhost:8000"
}

const stg = {
    "url": "https://touchdown-api-staging.herokuapp.com"
}

$.ajax({
    url: `${dev.url}/`,
    data: {
      
    },
    success: function( result ) {
      $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
    }
  });

let registerAccount
