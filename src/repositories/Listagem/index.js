const URL_CAES = `http://localhost:3000/api/caes`;

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
