const { insertData } = require('../config/db.mongo');

const registro = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { nombre, apellido, usuario, correo, password } = req.body;
    console.log('Datos recibidos', nombre, apellido, usuario, correo, password);

    const result = await insertData('Usuarios', {
        nombre,
        apellido,
        usuario,
        correo,
        password //: p_2
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
};

module.exports = {
    registro
};