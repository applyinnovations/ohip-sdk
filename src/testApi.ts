import { Api } from '.';
import { BASE_PATH, Configuration, ReservationApi } from './apis/fetch/rsv';

export const {
  OHIP_HOSTNAME,
  OHIP_APP_KEY,
  OHIP_CLIENT_ID,
  OHIP_CLIENT_SECRET,
  OHIP_USERNAME_1,
  OHIP_PASSWORD_1,
  OHIP_USERNAME_2,
  OHIP_PASSWORD_2,
  OHIP_HOTEL_ID,
} = process.env;

async function main() {
  const resConfig = new Configuration({
    apiKey: OHIP_APP_KEY,
    password: OHIP_PASSWORD_1,
    username: OHIP_USERNAME_1,
    basePath: OHIP_HOSTNAME,
    hotelId: OHIP_HOTEL_ID,
    ohipCredentials: [
      {
        password: OHIP_PASSWORD_1,
        username: OHIP_USERNAME_1,
      },
      {
        password: OHIP_PASSWORD_2,
        username: OHIP_USERNAME_2,
      },
    ],
  });
  const reservationApi = new ReservationApi(resConfig);

  const requestForReservations = async () => {
    try {
      const results = await reservationApi.getReservations({
        xHotelid: OHIP_HOTEL_ID,
      });
      console.log('success results', results.reservations);
    } catch (e) {
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
