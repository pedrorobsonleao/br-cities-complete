/* jshint esversion: 6 */

const assert = require('assert');
const autocomplete = require('../index');

describe('Testing autocomplete', () => {
    it('Aaa input', () => {
        let list = autocomplete.cities("Aaa");
        list.forEach(item => {console.log(`${item.country} - ${item.uf} - ${item.capitalized}`)});
        assert.equal(list.length,0);
    });
    it('Aa input', () => {
        let list = autocomplete.cities("Aa");
        list.forEach(item => {console.log(`${item.country} - ${item.uf} - ${item.capitalized}`)});
        assert.equal(list.length,13);
    });
    it('São input', () => {
        let list = autocomplete.cities("São");
        list.forEach(item => {console.log(`${item.country} - ${item.uf} - ${item.capitalized}`)});
        assert.equal(list.length,366);
    });
    it('Pedro de input', () => {
        let list = autocomplete.cities("Pedro de");
        // console.log(list);
        list.forEach(item => {console.log(`${item.country} - ${item.uf} - ${item.capitalized}`)});
        assert.equal(list.length,3);
    });
    // it('Casa input', () => {
    //     let list = autocomplete.cities("Casa");
    //     console.log(list);
    // });
});