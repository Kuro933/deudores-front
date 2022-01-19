import axios from 'axios';
import config from './Config/config.json'

const nuevoCliente = () => {
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}


export const postDatos = async (datos_a_enviar) => {
    try {
        let data = {};
        data.si = datos_a_enviar;
        const cliente = nuevoCliente();
        let response = await cliente.post("excel", data);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}