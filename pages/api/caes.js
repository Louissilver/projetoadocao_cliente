export default function handler(req, res) {
    res.status(200).json(
        [
            {
                "nome": "Tsubaki",
                "raca": "Akita",
                "idade": 8,
                "sexo": "Feminino",
                "porte": "Grande",
                "casinha": 3,
                "adotado": false,
                "imagem": "https://love.doghero.com.br/wp-content/uploads/2018/03/akita-1-e1542040695271.webp"
            },
            {
                "nome": "Max",
                "raca": "Doberman",
                "idade": 5,
                "sexo": "Masculino",
                "porte": "Grande",
                "casinha": 4,
                "adotado": false,
                "imagem": "https://love.doghero.com.br/wp-content/uploads/2018/03/shutterstock_75891091-1024x680.webp"
            },
            {
                "nome": "Tiger",
                "raca": "Vira-lata",
                "idade": 6,
                "sexo": "Masculino",
                "porte": "Médio",
                "casinha": 5,
                "adotado": false,
                "imagem": "https://love.doghero.com.br/wp-content/uploads/2018/09/ra%C3%A7a-de-cachorro-vira-lata-srd-1024x682.jpg"
            },
            {
                "nome": "Laika",
                "raca": "Yorkshire",
                "idade": 7,
                "sexo": "Feminino",
                "porte": "Pequeno",
                "casinha": 6,
                "adotado": false,
                "imagem": "https://love.doghero.com.br/wp-content/uploads/2018/02/shutterstock_434268268-1024x683.jpg"
            },
            {
                "nome": "Umbigo",
                "raca": "Beagle",
                "idade": 3,
                "sexo": "Masculino",
                "porte": "Médio",
                "casinha": 3,
                "adotado": false,
                "imagem": "https://love.doghero.com.br/wp-content/uploads/2016/10/Beagle-6.webp"
            },
            {
                "nome": "Lessie",
                "raca": "Border-collie",
                "idade": 2,
                "sexo": "Feminino",
                "porte": "Grande",
                "casinha": 8,
                "adotado": false,
                "imagem": "https://love.doghero.com.br/wp-content/uploads/2017/03/Galeria-Border-Collie-5.jpg"
            }
        ]
    )
}