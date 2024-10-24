const assert = require('assert');
const request = require('supertest');
const server = require('../src/server');

describe ('Test / request', function() {
    
    let mockedApp;

    this.beforeAll(function() {
        mockedApp = request(server.app);
    });

    it('Test request to /', async function() {
        const getResponse = await mockedApp.get('/');
        assert.equal(getResponse.status, 200, 'Status code');
    });

    it('Test if request to / returns timestamp', async function(){
        // Call get() method
        const getResponse = await mockedApp.get('/');
        
        // Test status code
        assert.equal(getResponse.status, 200, 'Status code'); 

        // Test response text
        assert.match(getResponse.text, /The time is now \d+<br>/, 'Times stamp');
    
    });

});