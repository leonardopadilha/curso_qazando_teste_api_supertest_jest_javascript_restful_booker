const request = require('supertest');
const ApiUrl = "https://restful-booker.herokuapp.com"

const newBooking = {
    firstname : "Jim",
    lastname : "Brown",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2026-01-01",
        checkout : "2026-02-01"
    },
    additionalneeds : "Breakfast"
}

describe('Post /booking', () => {
    it('cadastrar uma reserva', async () => {
        const response = await request(ApiUrl)
                                .post("/booking")
                                .send(newBooking)
                                .set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')

        expect(response.status).toBe(200)
        expect(response.body.bookingid).not.toBe.null
        expect(response.body.booking.firstname).toEqual(newBooking.firstname)
        expect(response.body.booking.lastname).toEqual(newBooking.lastname)
        expect(response.body.booking.totalprice).toEqual(newBooking.totalprice)
        expect(response.body.booking.depositpaid).toEqual(newBooking.depositpaid)
        expect(response.body.booking.bookingdates.checkin).toEqual(newBooking.bookingdates.checkin)
        expect(response.body.booking.bookingdates.checkout).toEqual(newBooking.bookingdates.checkout)
        expect(response.body.booking.additionalneeds).toEqual(newBooking.additionalneeds)
    })
})