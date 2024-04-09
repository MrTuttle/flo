// prisma/seed.ts

// build command on Vercel hosting :
// prisma generate && prisma migrate deploy && prisma db seed && next build
// build with seed
// prisma generate && prisma migrate deploy && prisma db seed && next build

// if need a rollback :
// prisma generate && prisma migrate resolve --rolled-back "20240109204344_reservation_constraints" && next build

// DELETE ALL + IDS RESETS (DEV MODE)
// prisma migrate reset

// (PROD MODE) -- ERASE DB
// prisma generate && prisma migrate reset --force && next build
// must --force for reset in prod mode, reset will pass migrations and seed

// NORMAL COMMAND IN PROD MOD WITH SEED --- ERASE DB
// prisma generate && prisma migrate deploy && prisma db seed && next build

// NORMAL COMMAND IN PROD MOD -- DON'T CLEAN UP DB
// prisma generate && prisma migrate deploy && next build

// cleanup db work perfect locally
// deploy on vercel : ids doesn't restart to 1 - but the app work --> thats why I sometimes use migrate reset in prod

import { PrismaClient } from "@prisma/client";
import { number } from "zod";
const prisma = new PrismaClient();

async function main() {
  const rooms = await prisma.post.findMany();
  console.log("chambres dans la base avant post :");

  rooms.map((e) => console.log(`chambre n° ${e.id}`));
  const postCount = await prisma.post.count();
  const userCount = await prisma.user.count();
  // const guestsBefore = await prisma.userRoom.count();
  // const bookingsBefore = await prisma.reservation.count();
  // const imagesBefore = await prisma.image.count();
  console.log(`menus before posted in db : ${postCount}`);

  const post1 = await prisma.post.upsert({
    where: { id: "" },
    update: {},
    create: {
      title: "False Lorem Ipsum dolores et sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex iste ea itaque incidunt? Omnis voluptatem, totam, temporibus fugiat sit labore accusamus nemo est odit asperiores, non unde commodi autem illo assumenda laborum repudiandae blanditiis animi maxime libero quod obcaecati. Esse quas, harum culpa optio dolor fugit enim et doloremque mollitia placeat iure reiciendis id, magnam aliquam itaque incidunt molestias dicta ab amet omnis aperiam blanditiis nemo. Nisi, expedita earum! Aspernatur accusantium dolorem, error nostrum quod atque, neque cum ipsa, beatae hic libero! Aperiam laborum molestiae animi recusandae fugit labore accusamus asperiores eum dolorem, tempora totam aspernatur, optio quidem sit? ",
      published: false,
    },
  });
  const post2 = await prisma.post.upsert({
    where: { id: "" },
    update: {},
    create: {
      title: "True Lorem Ipsum dolores et sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\nQuis sed iusto ipsam dolores voluptatum saepe tempora tempore amet distinctio quasi fugiat placeat velit ea, id officiis omnis dolore blanditiis ex.\n\nEius veritatis praesentium labore vero optio perferendis ipsa libero tenetur id quas est, ad corporis omnis modi fugiat enim rerum atque consequatur voluptatibus temporibus.\n\n Voluptas ex iste ea itaque incidunt? Omnis voluptatem, totam, temporibus fugiat sit labore accusamus nemo est odit asperiores, non unde commodi autem illo assumenda laborum repudiandae blanditiis animi maxime libero quod obcaecati. Nam corrupti recusandae in? Esse quas, harum culpa optio dolor fugit enim et doloremque mollitia placeat iure reiciendis id, magnam aliquam itaque incidunt molestias dicta ab amet omnis aperiam blanditiis nemo. Nisi, expedita earum! Aspernatur accusantium dolorem, error nostrum quod atque, neque cum ipsa, beatae hic libero! Aperiam laborum molestiae animi recusandae fugit labore accusamus asperiores eum dolorem, tempora totam aspernatur, optio quidem sit? ",
      published: true,
    },
  });

  // CHAMBRES //
  //   const chambre1 = await prisma.room.upsert({
  //     where: { id: 1 },
  //     update: {},
  //     create: {
  //       title: "Chambre 1",
  //       description: `* 1 à 2 personnes, un grand lit.
  // * Lavabo dans la chambre.
  // * Salle de Douche et WC sur le palier.
  // * Vue sur la placette.
  // * Plateau de courtoisie.`,
  //       price: 50,

  //       assignedRoom: {
  //         create: [
  //           {
  //             publicId: "s1pqrceeb5yjoxlldsiv",
  //             alt: "La Chambre Bleue",
  //             cover: true,
  //           },
  //           {
  //             publicId: "q4akqqcgqdtuth6qflan",
  //             alt: "La Baraka - entrée",
  //             cover: false,
  //           },
  //         ],
  //       },
  //       // reservationDates: {
  //       //   create: {
  //       //     assignedToUserRoomId: 0,
  //       //   },
  //       // },
  //     },
  //   });
  //   const chambre2 = await prisma.room.upsert({
  //     where: { id: 2 },
  //     update: {},
  //     create: {
  //       title: "Chambre 2",
  //       description: `* 1 à 3 personnes, un grand lit et un petit lit.\n\n * Lavabo dans la chambre\n\n * Salle de Douche et WC sur le palier. \n\n * Vue sur la placette.
  // \n\n* Plateau de courtoisie.\n\n`,
  //       price: 60,

  //       assignedRoom: {
  //         create: [
  //           {
  //             publicId: "oqc8zcy0wybr1e8mvu9r",
  //             alt: "La Chambre 2",
  //             cover: true,
  //           },
  //           {
  //             publicId: "kh4tt0exbzev7p3csh32",
  //             alt: "La Baraka",
  //             cover: false,
  //           },
  //         ],
  //       },
  //     },
  //   });

  //// USERS ROOM
  // const userRoomJack = await prisma.post.upsert({
  //   where: { id: 3 },
  //   update: {},
  //   create: {
  //     firstName: "Jacky",
  //     name: "Russel",
  //     phone: "(+33) 00 00 00 00 00",
  //     reservationDates: {
  //       create: [
  //         {
  //           assignedToRoomId: 3,
  //           checkIn: new Date("2024-04-20T00:00"),
  //           checkOut: new Date("2024-04-22T00:00"),
  //           status: "OCCUPIED",
  //         },
  //         {
  //           assignedToRoomId: 3,
  //           checkIn: new Date("2024-05-20T00:00"),
  //           checkOut: new Date("2024-05-23T00:00"),
  //           status: "OCCUPIED",
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     reservationDates: true,
  //   },
  // });

  // const menus = await prisma.menu.count();
  // const chambres = await prisma.room.count();
  // const guests = await prisma.userRoom.count();
  // const bookings = await prisma.reservation.count();
  // const images = await prisma.image.count();

  // const seeReservations = await prisma.reservation.findMany({});
  // console.log("reservations :");
  // console.log(seeReservations);
  ////////////////////
}

async function howMany() {
  // this function clear 5 tables if one of theses tables has a count exceed 0
  // otherwise, launch main() to post seed
  const posts = await prisma.post.count();

  console.log(`menus already in db : ${posts}`);
  const score: number = posts + 0;
  score
    ? console.log(`must clean up - score is truthy : ${score}`)
    : console.log(`db clean - score is not truthy - ${score}`);
  score
    ? (await prisma.post.deleteMany({}),
      console.log("DB was cleaned up - we should now relaunch seed"),
      main()
        .then(async () => {
          await prisma.$disconnect();
        })
        .catch(async (e) => {
          console.error(e);
          await prisma.$disconnect();
          process.exit(1);
        }),
      console.log("db is clean - main function launched to post the seed"))
    : (main()
        .then(async () => {
          await prisma.$disconnect();
        })
        .catch(async (e) => {
          console.error(e);
          await prisma.$disconnect();
          process.exit(1);
        }),
      console.log("main function launched to post the seed"));
}
howMany()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
