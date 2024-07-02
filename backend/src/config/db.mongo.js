const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DATABASE, MONGO_PORT } =
  process.env;

const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}`;
// const uri = `mongodb://root:M1A2024.@localhost:27017`;

const insertData = async (collec, data) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient
      .connect()
      .then(() => console.log("Conectado a la base de datos"));
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    const result = await coleccion.insertOne(data);
    console.log("Resultado insertData: ", result);
    return result;
  } catch (error) {
    console.error("Error insertData: ", error);
    return error;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const getData = async (collec) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    // Convert the result to an array using toArray()
    const data = await coleccion.find({}).toArray();
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const getData1 = async (collec) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    // Convert the result to an array using toArray()
    const data = await coleccion.find({estado: 'pendiente'}).toArray();
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const updateEstadoA = async (collec,user) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    // Convert the result to an array using toArray()
    console.log(user);
    const data = await coleccion.updateMany({usuario: user}, {$set:{estado: 'aceptado'}});
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const updateEstadoR = async (collec,user) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    // Convert the result to an array using toArray()
    console.log(user);
    const data = await coleccion.updateMany({usuario: user}, {$set:{estado: 'rechazado'}});
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};


const getDataTurist = async (collec) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    const query = { tipo: "turista" }
    // Convert the result to an array using toArray()
    const data = await coleccion.find(query).toArray();
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const getDataReception = async (collec) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    const query = { tipo: "recepcion" }
    // Convert the result to an array using toArray()
    const data = await coleccion.find(query).toArray();
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const getDataAdmin = async (collec) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    const query = { tipo: "admin" }
    // Convert the result to an array using toArray()
    const data = await coleccion.find(query).toArray();
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const isUsuarioExists = async (usuario) => {
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Usuarios");
    const user = await coleccion.findOne({ usuario: usuario });
    return user !== null;
  } catch (error) {
    console.error("Error isUsuarioExists: ", error);
    return false;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const isCarroExists = async (placa) => {
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Carros");
    const user = await coleccion.findOne({ placa: placa});
    return user !== null;
  } catch (error) {
    console.error("Error isCarro: ", error);
    return false;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const isVueloExists = async (placa) => {
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Vuelos");
    const user = await coleccion.findOne({ placa: placa});
    return user !== null;
  } catch (error) {
    console.error("Error isCarro: ", error);
    return false;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const Login = async (usuario, password) => {
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Usuarios");
    const user = await coleccion.findOne({ usuario: usuario, password: password });
    return user;
  } catch (error) {
    console.error("Error Login: ", error);
    return false;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
}

const deleteUser = async (usuario) => {
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Usuarios");
    const user = await coleccion.deleteMany({ usuario: usuario});
    return user;
  } catch (error) {
    console.error("Error Eliminar Usuario: ", error);
    return false;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
}

const deleteAuto = async (placa) => {
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Carros");
    const user = await coleccion.deleteMany({ placa: placa});
    return user;
  } catch (error) {
    console.error("Error Eliminar Carro: ", error);
    return false;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
}

const deleteVuelo = async (placa) => {
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient.connect();
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Vuelos");
    const user = await coleccion.deleteMany({ placa: placa});
    return user;
  } catch (error) {
    console.error("Error Eliminar Vuelo: ", error);
    return false;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
}

const ReservaA = async (data) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient
      .connect()
      .then(() => console.log("Conectado a la base de datos"));
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Reservacar");
    const result = await coleccion.insertOne(data);
    console.log("Resultado insertData: ", result);
    return result;
  } catch (error) {
    console.error("Error insertData: ", error);
    return error;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const ReservaV = async (data) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);
  try {
    await mongoClient
      .connect()
      .then(() => console.log("Conectado a la base de datos"));
    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Reservavuelo");
    const result = await coleccion.insertOne(data);
    console.log("Resultado insertData: ", result);
    return result;
  } catch (error) {
    console.error("Error insertData: ", error);
    return error;
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const getReservaCar = async (collec, dato) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    const query = { usuario: dato }
    // Convert the result to an array using toArray()
    const data = await coleccion.find(query).toArray();
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const getReservaVuel = async (collec, dato) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection(collec);
    const query = { usuario: dato }
    // Convert the result to an array using toArray()
    const data = await coleccion.find(query).toArray();
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

const getDataUser = async (dato) => {
  console.log("URI: ", uri);
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();
    console.log("Conectado a la base de datos");

    const dbmongo = mongoClient.db(MONGO_DATABASE);
    const coleccion = dbmongo.collection("Usuarios");
    const query = { usuario: dato }
    // Convert the result to an array using toArray()
    const data = await coleccion.findOne(query);
    return data;
    
  } catch (error) {
    console.error("Error getData: ", error);
    // Consider throwing a custom error object with more details
    throw new Error('Error fetching data: ' + error.message);
  } finally {
    await mongoClient.close();
    console.log("Desconectado de la base de datos");
  }
};

module.exports = {
  insertData,
  isUsuarioExists,
  isVueloExists,
  isCarroExists,
  Login,
  getDataUser,
  getData,
  getDataTurist,
  getDataReception,
  getDataAdmin,
  deleteUser,
  deleteAuto,
  deleteVuelo,
  ReservaA,
  ReservaV,
  getReservaCar,
  getReservaVuel,
  getData1,
  updateEstadoA,
  updateEstadoR
};
