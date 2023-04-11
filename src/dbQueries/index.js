import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'userData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'user-data.db', location: 'default' });
};

export const createTable = async (db) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} ("id" TEXT PRIMARY KEY, "firstName" TEXT, "lastName" TEXT, "email" TEXT, "password" TEXT, "userLoggedIn" INTEGER, "profileImageURI" TEXT, "bookmarks" TEXT)`
  await db.executeSql(query);
};

export const getUserItems = async (db) => {
  try {
    const userItems = [];
    const results = await db.executeSql(`SELECT rowid as id,value FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        userItems.push(result.rows.item(index))
      }
    });
    return userItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get userItems !!!');
  }
};

export const saveUserItems = async (db, userItems) => {
  alert(userItems.id)
  let values = `(${userItems.id}, '${userItems.firstName}', '${userItems.lastName}', '${userItems.email}', '${userItems.password}', '${userItems.userLoggedIn}', '${userItems.profileImageURI}', '${userItems.bookmarks}')`;
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, firstName, lastName, email, password, userLoggedIn, profileImageURI, bookmarks) values` +
    values;

  return db.executeSql(insertQuery);
};

export const deleteTodoItem = async (db, id) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};

export const getUserData = async (db, email) => {
  try {
    let user = {};
    const results = await db.executeSql(`SELECT rowid as id,firstName,lastName,email,password,userLoggedIn, profileImageURI, bookmarks FROM ${tableName}`);
   
    results.forEach(result => {
      
      for (let index = 0; index < result.rows.length; index++) {
        let userData = result.rows.item(index);
        if (userData.email == email) {          
          user = userData
        }
      }
    });
    return user;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get userItems !!!');
  }
}

export const getCount = async () => {
  const db = await getDBConnection()
  const query = `SELECT COUNT(*) FROM ${tableName}`
  let data = await db.executeSql(query);
  return data[0].rows.length;
}

export const updateQuery = async (type, value, id) => {
  const db = await getDBConnection()
  const query = `UPDATE ${tableName} SET ${type} = ${value} WHERE id = ${id}`
  return await db.executeSql(query);
}

export const getCurrentUser = async () => {
  const db = await getDBConnection()
  const query = `SELECT * FROM ${tableName} WHERE userLoggedIn LIKE 1`
  
  let result = await db.executeSql(query);
  let userData = result
  return data;
}
 