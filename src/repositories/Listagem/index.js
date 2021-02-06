const URL_CAES = `https://adocao.vercel.app/api/caes`;

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
