import config from '../../config';

const URL_CAES = `${config.URL_BACKEND_TOP}/racas?_embed=caes`;
console.log(URL_CAES);

const ListarCaes = () => {
    return fetch(URL_CAES)
        .then(resp => {
            return resp.json()
        })
        .then(json => {
            return json
        })
}

export default ListarCaes;
