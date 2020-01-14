/* jshint esversion: 6 */

String.prototype.normalize = require("./normalize");

let autocomplete = (function () {
    const countries = require("./countries.json");

    return {
        cities: (key) => {

            let re = new RegExp(key.normalize().toLocaleUpperCase());
            let data = [];

            Object.keys(countries).forEach(country => {
                Object.keys(countries[country]).forEach(uf => {
                    if (uf == "code") return;
                    Object.keys(countries[country][uf]).forEach(city => {
                        if(re.test(city)) {
                            countries[country][uf][city].country = country;
                            countries[country][uf][city].uf = uf;
                            data.push(countries[country][uf][city]);
                        }
                    });
                });
            });
            return data;
        }
    };
}());

module.exports = autocomplete;