const { insertData } = require('../config/db.mongo');
const { isUsuarioExists } = require('../config/db.mongo');
const { isCarroExists } = require('../config/db.mongo');
const { isVueloExists } = require('../config/db.mongo');
const { Login } = require('../config/db.mongo');
const { getData } = require('../config/db.mongo');
const { getDataTurist } = require('../config/db.mongo');
const { getDataReception } = require('../config/db.mongo');
const { getDataAdmin } = require('../config/db.mongo');
const { deleteUser } = require('../config/db.mongo');
const { deleteAuto } = require('../config/db.mongo');
const { deleteVuelo } = require('../config/db.mongo');
const { ReservaA } = require('../config/db.mongo');
const { ReservaV } = require('../config/db.mongo');
const { getDataUser } = require('../config/db.mongo');
const { getReservaCar } = require('../config/db.mongo');
const { getReservaVuel } = require('../config/db.mongo');

const registro = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { nombre, apellido, usuario, correo, password } = req.body;
    console.log('Datos recibidos', nombre, apellido, usuario, correo, password, "turista");
    const usuarioExiste = await isUsuarioExists(usuario);
    if(usuarioExiste) {
        return res.status(400).json(
            {
                status: false,
                msg: 'El Usuario Ya Existe',
                data: null
            });
    }else {
        const result = await insertData('Usuarios', {
            nombre,
            apellido,
            usuario,
            correo,
            password, //: p_2
            tipo: "turista"
        });
    
        if(result instanceof Error) {
            return res.status(500).json(
                {
                    status: false,
                    msg: 'Error al registrar usuario',
                    data: result
                });
        };
    
        // Respuesta
        return res.status(200).json(
        {
            status: true,
            msg: 'Registro exitoso',
            data: result
        });
    }
    
};

const registror = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { nombre, apellido, usuario, correo, password } = req.body;
    console.log('Datos recibidos', nombre, apellido, usuario, correo, password, "recepcion");
    const usuarioExiste = await isUsuarioExists(usuario);
    if(usuarioExiste) {
        return res.status(400).json(
            {
                status: false,
                msg: 'El Usuario Ya Existe',
                data: null
            });
    }else {
        const result = await insertData('Usuarios', {
            nombre,
            apellido,
            usuario,
            correo,
            password, //: p_2
            tipo: "recepcion"
        });
    
        if(result instanceof Error) {
            return res.status(500).json(
                {
                    status: false,
                    msg: 'Error al registrar usuario',
                    data: result
                });
        };
    
        // Respuesta
        return res.status(200).json(
        {
            status: true,
            msg: 'Registro exitoso',
            data: result
        });
    }
};

const registroa = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { nombre, apellido, usuario, correo, password } = req.body;
    console.log('Datos recibidos', nombre, apellido, usuario, correo, password, "admin");
    const usuarioExiste = await isUsuarioExists(usuario);
    if(usuarioExiste) {
        return res.status(400).json(
            {
                status: false,
                msg: 'El Usuario Ya Existe',
                data: null
            });
    }else {
        const result = await insertData('Usuarios', {
            nombre,
            apellido,
            usuario,
            correo,
            password, //: p_2
            tipo: "admin"
        });
    
        if(result instanceof Error) {
            return res.status(500).json(
                {
                    status: false,
                    msg: 'Error al registrar usuario',
                    data: result
                });
        };
    
        // Respuesta
        return res.status(200).json(
        {
            status: true,
            msg: 'Registro exitoso',
            data: result
        });
    }
};

const getDataT = async (req, res) => {
    const { coleccion } = req.body;
    const result = await getDataTurist("Usuarios");
    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al obtener datos',
                data: result
            });
    };
    // Respuesta
    return res.status(200).json(
    {
        status: true,
        msg: 'Datos obtenidos',
        data: result
    });
};

const getDataR = async (req, res) => {
    const { coleccion } = req.body;
    const result = await getDataReception("Usuarios");
    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al obtener datos',
                data: result
            });
    };
    // Respuesta
    return res.status(200).json(
    {
        status: true,
        msg: 'Datos obtenidos',
        data: result
    });
};

const getDataA = async (req, res) => {
    const { coleccion } = req.body;
    const result = await getDataAdmin("Usuarios");
    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al obtener datos',
                data: result
            });
    };
    // Respuesta
    return res.status(200).json(
    {
        status: true,
        msg: 'Datos obtenidos',
        data: result
    });
};

const getDataVuelo = async (req, res) => {
    const { coleccion } = req.body;
    const result = await getData("Vuelos");
    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al obtener datos',
                data: result
            });
    };
    // Respuesta
    return res.status(200).json(
    {
        status: true,
        msg: 'Datos obtenidos',
        data: result
    });
};

const getDataAuto = async (req, res) => {
    const { coleccion } = req.body;
    const result = await getData("Carros");
    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al obtener datos',
                data: result
            });
    };
    // Respuesta
    return res.status(200).json(
    {
        status: true,
        msg: 'Datos obtenidos',
        data: result
    });
}; 

const addCarro = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { agencia, marca, placa, modelo, precio,ciudad } = req.body;
    console.log('Datos recibidos', agencia, marca, placa, modelo, precio, ciudad);
    const carroExiste = await isCarroExists(placa);
    if(carroExiste) {
        return res.status(400).json(
            {
                status: false,
                msg: 'El Auto Ya Existe',
                data: null
            });
    }else {
        const result = await insertData('Carros', {
            agencia,
            marca,
            placa,
            modelo,
            precio,
            ciudad
        });
    
        if(result instanceof Error) {
            return res.status(500).json(
                {
                    status: false,
                    msg: 'Error al agregar Auto',
                    data: result
                });
        };
    
        // Respuesta
        return res.status(200).json(
        {
            status: true,
            msg: 'Auto Agregado Exitosamente',
            data: result
        });
    }
    
};

const addVuelo = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { agencia, placa, origen, destino, dias,precio } = req.body;
    console.log('Datos recibidos', agencia, placa, origen, destino, dias, precio);
    const vueloExiste = await isVueloExists(placa);
    if(vueloExiste) {
        return res.status(400).json(
            {
                status: false,
                msg: 'El Vuelo Ya Existe',
                data: null
            });
    }else {
        const result = await insertData('Vuelos', {
            agencia,
            placa,
            origen,
            destino,
            dias,
            precio
        });
    
        if(result instanceof Error) {
            return res.status(500).json(
                {
                    status: false,
                    msg: 'Error al agregar Vuelo',
                    data: result
                });
        };
    
        // Respuesta
        return res.status(200).json(
        {
            status: true,
            msg: 'Vuelo Agregado Exitosamente',
            data: result
        });
    }
    
};

const iniciarSesion = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { usuario, password } = req.body;
    console.log('Datos recibidos');
    const result = await Login(usuario, password);
    if(result) {
        return res.status(200).json(
            {
                status: true,
                msg: 'Inicio de Sesión Exitoso '+result.tipo,
                type: result.tipo,
                data: result
            });
        }else {
            return res.status(400).json(
                {
                    status: false,
                    msg: 'Usuario y/o contraseña incorrectos',
                    data: null
                });
        }
}

const deleteUsuario = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { usuario } = req.body;
    console.log('Datos recibidos'+usuario);
    const result = await deleteUser(usuario);
    if(result) {
        return res.status(200).json(
            {
                status: true,
                msg: 'Usuario Eliminado Exitosamente',
                data: result
            });
        }else {
            return res.status(400).json(
                {
                    status: false,
                    msg: 'Usuario No Eliminado',
                    data: null
                });
        }
}

const deleteCarro = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { placa } = req.body;
    console.log('Datos recibidos'+placa);
    const result = await deleteAuto(placa);
    if(result) {
        return res.status(200).json(
            {
                status: true,
                msg: 'Auto de Renta Eliminado',
                data: result
            });
        }else {
            return res.status(400).json(
                {
                    status: false,
                    msg: 'Auto de Renta No Eliminado',
                    data: null
                });
        }
}

const deleteVuelos = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { placa } = req.body;
    console.log('Datos recibidos'+placa);
    const result = await deleteVuelo(placa);
    if(result) {
        return res.status(200).json(
            {
                status: true,
                msg: 'Vuelo de viaje Eliminado',
                data: result
            });
        }else {
            return res.status(400).json(
                {
                    status: false,
                    msg: 'Vuelo de Viaje No Eliminado',
                    data: null
                });
        }
}

const ReservaCar = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { usuario, agencia, marca, modelo, precio, estado } = req.body;
    console.log('Datos recibidos', usuario, agencia, marca, modelo, precio, estado);
    const result = await ReservaA({
            usuario,
            agencia,
            marca,
            modelo,
            precio,
            estado
    });
    
    if(result instanceof Error) {
            return res.status(500).json(
                {
                    status: false,
                    msg: 'Error al registrar reserva',
                    data: result
                });
    };
    
        // Respuesta
    return res.status(200).json(
    {
            status: true,
            msg: 'Reserva Exitosa',
            data: result
    });
    
    
};

const ReservaVuelo = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { usuario, agencia, origen, destino, dias, precio, estado } = req.body;
    console.log('Datos recibidos', usuario, agencia, origen, destino, dias, precio,);
    const result = await ReservaV({
            usuario,
            agencia,
            origen,
            destino,
            dias,
            precio,
            estado
    });
    
    if(result instanceof Error) {
            return res.status(500).json(
                {
                    status: false,
                    msg: 'Error al registrar reserva',
                    data: result
                });
    };
    
        // Respuesta
    return res.status(200).json(
    {
            status: true,
            msg: 'Reserva Exitosa',
            data: result
    });
    
    
};

const getReservaC= async (req, res) => {
    const { usuario } = req.body;
    const result = await getReservaCar("Reservacar",usuario);
    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al obtener datos',
                dato: result
            });
    };
    // Respuesta
    return res.status(200).json(
    {
        status: true,
        msg: 'Datos obtenidos',
        dato: result
    });
}

const getReservaV= async (req, res) => {
    const { usuario } = req.body;
    const result = await getReservaVuel("Reservavuelo",usuario);
    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al obtener datos',
                dato: result
            });
    };
    // Respuesta
    return res.status(200).json(
    {
        status: true,
        msg: 'Datos obtenidos',
        dato: result
    });
}

const getDataU = async (req, res) => {
    const { usuario } = req.body;
    const result = await getDataUser(usuario);
    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al obtener datos',
                dato: result
            });
    };
    // Respuesta
    return res.status(200).json(
    {
        status: true,
        msg: 'Datos obtenidos',
        dato: result
    });
}

module.exports = {
    registro,
    registror,
    registroa,
    addCarro,
    addVuelo,
    getDataT,
    getDataR,
    getDataA,
    getDataVuelo,
    getDataAuto,
    getDataU,
    deleteUsuario,
    deleteCarro,
    deleteVuelos,
    ReservaCar,
    ReservaVuelo,
    iniciarSesion,
    getReservaC,
    getReservaV
};