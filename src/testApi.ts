import { Api } from '.';

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
  const api = new Api({
    hostName: OHIP_HOSTNAME,
    hotelId: OHIP_HOTEL_ID,
    appKey: OHIP_APP_KEY,
    clientId: OHIP_CLIENT_ID,
    clientSecret: OHIP_CLIENT_SECRET,
    credentials: [
      {
        username: OHIP_USERNAME_1,
        password: OHIP_PASSWORD_1,
      },
      {
        username: OHIP_USERNAME_2,
        password: OHIP_PASSWORD_2,
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
    } catch (e) {
      console.log('retrying', e);
    }
  };

  await getReservation();
}

main();
