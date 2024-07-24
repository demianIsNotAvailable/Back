import { authorSeeder } from "./authorSeeder";
import { bookSeeders } from "./bookSeeder";
import userSeeder from "./userSeeder";

(async () => {
   console.log("Starting seeders...");
   await authorSeeder();
   await userSeeder();
   await bookSeeders();
})();


// const startSeeder = async() => {
//   console.log("Starting seeders...");
//   await authorSeeder();
// }

// startSeeder()