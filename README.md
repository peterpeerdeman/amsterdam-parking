# amsterdam-parking
[![Build Status](https://travis-ci.org/peterpeerdeman/amsterdam-parking.svg?branch=master)](https://travis-ci.org/peterpeerdeman/amsterdam-parking)

An Amsterdam Parking API client for Node

## Usage
```javascript
// Import the Amsterdam Parking client
const AP = require('amsterdam-parking');

// Create a new AP instance
var ap = new AP();

// Get the parking information
ap.getCurrentAvailability().then(resp => { console.log(resp); });
```

This call will return something similar to the following Javascript object.

```javascript
{
}
```

The following API calls are available
```javascript
ap.getCurrentAvailability();
```
