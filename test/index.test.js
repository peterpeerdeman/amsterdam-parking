const expect = require('chai').expect;
const nock = require('nock');
const fs = require('fs');

const AP = require('../index');
const currentavailability_response = fs.readFileSync('test/response.currentavailability.html');

describe('High-level API tests', () => {
    var ap = new AP();

    it('Should get an array of parking space data items', () => {
        nock('https://penr.stachanov.com')
            .get('/penr/currentAvailability/index')
            .reply(200, currentavailability_response);

        return ap.getCurrentAvailability()
            .then(response => {
                expect(typeof response).to.equal('Array');
                expect(response.length).to.equal(9);

            })
            .catch(err => {
            
            });
    });

    it('Should containt a name and number of spaces available', () => {
        nock('https://penr.stachanov.com')
            .get('/penr/currentAvailability/index')
            .reply(200, currentavailability_response);

        return ap.getCurrentAvailability()
            .then(response => {
                expect(response[0].name).to.equal('P+R Johan Cruijff ArenA');
                expect(response[0].spaces).to.equal(1930);
            })
            .catch(err => {
            });
    });
});
