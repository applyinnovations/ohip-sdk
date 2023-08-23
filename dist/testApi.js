"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OHIP_HOTEL_ID = exports.OHIP_PASSWORD_2 = exports.OHIP_USERNAME_2 = exports.OHIP_PASSWORD_1 = exports.OHIP_USERNAME_1 = exports.OHIP_CLIENT_SECRET = exports.OHIP_CLIENT_ID = exports.OHIP_APP_KEY = exports.OHIP_HOSTNAME = void 0;
const rsv_1 = require("./apis/fetch/rsv");
_a = process.env, exports.OHIP_HOSTNAME = _a.OHIP_HOSTNAME, exports.OHIP_APP_KEY = _a.OHIP_APP_KEY, exports.OHIP_CLIENT_ID = _a.OHIP_CLIENT_ID, exports.OHIP_CLIENT_SECRET = _a.OHIP_CLIENT_SECRET, exports.OHIP_USERNAME_1 = _a.OHIP_USERNAME_1, exports.OHIP_PASSWORD_1 = _a.OHIP_PASSWORD_1, exports.OHIP_USERNAME_2 = _a.OHIP_USERNAME_2, exports.OHIP_PASSWORD_2 = _a.OHIP_PASSWORD_2, exports.OHIP_HOTEL_ID = _a.OHIP_HOTEL_ID;
async function main() {
    const resConfig = new rsv_1.Configuration({
        apiKey: exports.OHIP_APP_KEY,
        password: exports.OHIP_PASSWORD_1,
        username: exports.OHIP_USERNAME_1,
        basePath: exports.OHIP_HOSTNAME,
        hotelId: exports.OHIP_HOTEL_ID,
        ohipCredentials: [
            {
                password: exports.OHIP_PASSWORD_1,
                username: exports.OHIP_USERNAME_1,
            },
            {
                password: exports.OHIP_PASSWORD_2,
                username: exports.OHIP_USERNAME_2,
            },
        ],
    });
    const reservationApi = new rsv_1.ReservationApi(resConfig);
    const requestForReservations = async () => {
        try {
            const results = await reservationApi.getReservations({
                xHotelid: exports.OHIP_HOTEL_ID,
            });
            console.log('success results', results.reservations);
        }
        catch (e) {
            ('error occured');
        }
    };
    await requestForReservations();
    await requestForReservations();
    await requestForReservations();
    await requestForReservations();
    await requestForReservations();
    await requestForReservations();
    await requestForReservations();
    await requestForReservations();
    await requestForReservations();
}
main();
