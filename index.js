"use strict";

const ap_url = 'https://penr.stachanov.com';

const axios = require('axios');
const cheerio = require('cheerio');

class AP {
    getCurrentAvailability() {
        return axios({
            url: ap_url + '/penr/currentAvailability/index'
        }).then(function(response) {
            const $ = cheerio.load(response.data);
            const table = $('#currentAvailability');
            let results = [];
            table.find('tbody > tr').each(function(i, el) {
                const row = $(el);
                results.push({
                    status: row.attr('class'),
                    name: row.find('.name').text().trim(),
                    availability: row.find('td:nth-child(2)').text(),
                    spaces: parseInt(row.find('td.number').text().replace(/\./g,'')) || 0,
                });
            });
            return results;
        });
    }
}

module.exports = AP;
