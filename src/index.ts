import axios from "axios";
import USER_DB from "./db/users.json";

let USERS_ID = [1, 2, 3, 4];

async function mockFetchUser(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USER_DB.find((user) => user.id === id));
    }, 1000);
  });
}

async function fetchUser(id: number) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

const badAwaitLoop = async (fetch) => {
  const users = [];

  console.time("BAD_AWAIT_LOOP");

  for (const id of USERS_ID) {
    const user = await fetch(id);
    users.push(user);
  }

  console.timeEnd("BAD_AWAIT_LOOP");

  return users;
};

const parallelAsync = async (fetch) => {
  let users = [];

  console.time("GOOD_AWAIT_LOOP");

  /**
   * Promise.all allows parallel execution
   */
  users = await Promise.all(USERS_ID.map((i) => fetch(i)));

  console.timeEnd("GOOD_AWAIT_LOOP");

  return users;
};

const exec = async () => {
  console.log("MOCK EXECUTION START");
  await badAwaitLoop(mockFetchUser);
  await parallelAsync(mockFetchUser);

  console.log("\nEXECUTION START");
  await badAwaitLoop(fetchUser);
  await parallelAsync(fetchUser);
};

exec();
