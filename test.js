AP = require('./index.js');

ap = new AP()
ap.getCurrentAvailability().then(function(response) {
    console.log(response);
});
console.log(ap);
