"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OHIP_HOTEL_ID = exports.OHIP_PASSWORD_2 = exports.OHIP_USERNAME_2 = exports.OHIP_PASSWORD_1 = exports.OHIP_USERNAME_1 = exports.OHIP_CLIENT_SECRET = exports.OHIP_CLIENT_ID = exports.OHIP_APP_KEY = exports.OHIP_HOSTNAME = void 0;
const _1 = require(".");
_a = process.env, exports.OHIP_HOSTNAME = _a.OHIP_HOSTNAME, exports.OHIP_APP_KEY = _a.OHIP_APP_KEY, exports.OHIP_CLIENT_ID = _a.OHIP_CLIENT_ID, exports.OHIP_CLIENT_SECRET = _a.OHIP_CLIENT_SECRET, exports.OHIP_USERNAME_1 = _a.OHIP_USERNAME_1, exports.OHIP_PASSWORD_1 = _a.OHIP_PASSWORD_1, exports.OHIP_USERNAME_2 = _a.OHIP_USERNAME_2, exports.OHIP_PASSWORD_2 = _a.OHIP_PASSWORD_2, exports.OHIP_HOTEL_ID = _a.OHIP_HOTEL_ID;
async function main() {
    const api = new _1.Api({
        hostName: exports.OHIP_HOSTNAME,
        hotelId: exports.OHIP_HOTEL_ID,
        appKey: exports.OHIP_APP_KEY,
        clientId: exports.OHIP_CLIENT_ID,
        clientSecret: exports.OHIP_CLIENT_SECRET,
        credentials: [
            {
                username: exports.OHIP_USERNAME_1,
                password: exports.OHIP_PASSWORD_1,
            },
            {
                username: exports.OHIP_USERNAME_2,
                password: exports.OHIP_PASSWORD_2,
            },
        ],
    });
    console.log('initiating clients');
    const clients = await api.getClients();
    console.log('getting reservation');
    const getReservation = async () => {
        try {
            // @ts-ignore
            const resp = await clients.rsv.ReservationApi.getReservations({});
            console.log('respnse', JSON.stringify(resp.reservations));
        }
        catch (e) {
            console.log('retrying', e);
        }
    };
    await getReservation();
}
main();
