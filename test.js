const AirportDao = require("./dao/AirportDao.js");
const db = require("./dao/base");
const Airport = require("./models/Airport");

async function main() {
  try {
    await AirportDao.add(
      new Airport({
        name: "Tashkent International Airport",
        country: "Uzbekistan",
        region: "Central Asia",
        img_url: ""
      })
    );
    console.log(await AirportDao.getList());
    // await PersonsDao.update(1, { country: "Russia" });
    // console.log(await PersonsDao.getById(5));
    // await PersonsDao.delete(1);
    // console.log("USA\n", await PersonsDao.getByCountry("USA"));
    // console.log("Aged above 25\n", await PersonsDao.getByMinAge(25));
  } catch (error) {
    console.error(error);
  } finally {
    db.exit();
  }
}

main();
