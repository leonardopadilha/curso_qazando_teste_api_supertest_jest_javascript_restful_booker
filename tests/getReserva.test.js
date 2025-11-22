const request = require('supertest');
const randomInt = require('crypto').randomInt;
const ApiUrl = "https://restful-booker.herokuapp.com"

describe('GET /booking', () => {
    it('Deve retornar 200 ao fazer um GET em booking', async () => {
        const response = await request(ApiUrl).get('/booking')
    
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body.length).toBeGreaterThan(0)
        for (const booking of response.body) {
            expect(booking.bookingid).not.toBe.null
        }
    })
    
    it('Deve retornar 200 ao fazer um GET em booking por id', async () => {
        const bodies = await request(ApiUrl).get('/booking')
        const randomId = Math.floor(Math.random() * bodies.body.length)
        const id = bodies.body[randomId].bookingid
    
        const response = await request(ApiUrl)
                                .get(`/booking/${id}`)
                                .set('Accept', 'application/json')
    
        expect(response.status).toBe(200)
        expect(typeof response.body).toEqual('object')
        expect(Object.keys(response.body)).toEqual(['firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates', 'additionalneeds'])
        expect(response.body.bookingdates).toEqual({checkin: expect.any(String), checkout: expect.any(String)})
        for (const key in Object.keys(response.body)) {
            expect(response.body[key]).not.toBe.null
        }
    })
    
    it('Deve retornar 200 ao fazer um GET em booking por id - Melhorias via gpt', async () => {
        const { body } = await request(ApiUrl).get('/booking');
        const idAleatorio = randomInt(body.length);
        const { bookingid } = body[idAleatorio];
    
        const response = await request(ApiUrl)
                                .get(`/booking/${bookingid}`)
                                .set('Accept', 'application/json')
    
        expect(response.status).toBe(200)
        expect(typeof response.body).toEqual('object')
        expect(Object.keys(response.body)).toEqual(['firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates', 'additionalneeds'])
        expect(response.body.bookingdates).toEqual({checkin: expect.any(String), checkout: expect.any(String)})
        for (const key in Object.keys(response.body)) {
            expect(response.body[key]).not.toBe.null
        }
    })
    
    it('Deve retornar 404 ao fazer um GET em booking inexistente', async () => {
        const response = await request(ApiUrl)
                                .get('/booking/teste')
                                .set('Accept', 'application/json')
    
        expect(response.status).toBe(404)
        expect(response.text).toBe('Not Found')
    })
})