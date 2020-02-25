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
[ { status: 'success',
    name: 'P+R Johan Cruijff ArenA',
    availability: 'Available',
    spaces: 1704 },
  { status: 'success',
    name: 'P+R Zeeburg 2',
    availability: 'Available',
    spaces: 253 },
  { status: 'success',
    name: 'P+R Noord',
    availability: 'Available',
    spaces: 190 },
  { status: 'success',
    name: 'P+R Sloterdijk',
    availability: 'Available',
    spaces: 51 },
  { status: 'success',
    name: 'P+R Bos en Lommer',
    availability: 'Available',
    spaces: 45 },
  { status: 'success',
    name: 'P+R Zeeburg 1',
    availability: 'Available',
    spaces: 15 },
  { status: 'danger',
    name: 'P+R Olympisch Stadion',
    availability: 'Full',
    spaces: 0 },
  { status: 'active',
    name: 'P+R RAI',
    availability: 'Closed',
    spaces: 0 },
  { status: 'active',
    name: 'Weekend P+R VUmc',
    availability: 'Closed',
    spaces: 0 } ]
```

The following API calls are available
```javascript
ap.getCurrentAvailability();
```
