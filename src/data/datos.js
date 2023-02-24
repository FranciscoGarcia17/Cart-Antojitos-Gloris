const datos = {
    dataProduct: [
        {
            id: 1,
            image: "https://media.istockphoto.com/id/934511646/es/foto/pila-de-tostada-de-pollo-crujiente.jpg?s=612x612&w=0&k=20&c=EIamsXYxGtwGF3uBB_uMdRfYgi95zLHRvTO36oQOibU=",
            category: "Antojitos",
            name: "Tostadas",
            price: 35
        },
        {
            id: 2,
            image:  "https://as2.ftcdn.net/v2/jpg/01/91/83/05/1000_F_191830575_j2Q7x8MIetqQh4KdpS6e2d08TrkYqqUQ.jpg",
            category: "Antojitos",
            name: "Sopes",
            price: 35
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nhzLM_qaWxzrrbaDXoulb_ieVsMLrSOlfg&usqp=CAU",
            category: "Antojitos",
            name: "Quesadillas",
            price: 35
        },
        {
            id: 4,
            image: "https://www.maricruzavalos.com/wp-content/uploads/2021/01/potato-tacos-recipe.jpg",
            category: "Antojitos",
            name: "Tacos dorados",
            price: 80,
            description : ""
        },
        {
            id: 5,
            image: "https://media.istockphoto.com/id/1256377963/es/foto/flautas-also-called-taquitos-mexican-food.jpg?s=612x612&w=0&k=20&c=yx2MTeFfnTkoVVWNtwE5R3u7D6SXf6r_xzBTPw4jKvU=",
            category: "Antojitos",
            name: "Flautas",
            price: 80,
            description : ""
        },
        {
            id: 6,
            category: "Antojitos",
            name: "Gorditas",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnle8VbzhV-zkovLN8LX-B7D99VXCLPWlUzw&usqp=CAU",
            price: 35
        },
        {
            id: 7,
            image: "https://t3.ftcdn.net/jpg/03/62/72/26/240_F_362722619_EKBbiaBRUI16sk2OdaqxIjXJkhdqzjB3.jpg",
            category: "Antojitos",
            name: "Enchiladas",
            price: 80,
        },
        {
            id: 8,
            name: "Milanesas",
            category: "Comida del dia",
            image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7fd9e77b-3396-49f3-be08-fceef56376bf/Derivates/8a096b0f-382a-47ac-b11a-62b630e0e59e.jpg",
            price : 110
        },
        {
            id: 9,
            name: "Comida corrida",
            category: "Comida del dia",
            image : "https://www.gastrolabweb.com/u/fotografias/m/2021/12/8/f850x638-22662_100151_5050.jpg",
            price : 100
        },
        {
            id: 13,
            name : "Pozole chico",
            category : "Caldo",
            image : "https://t3.ftcdn.net/jpg/03/72/33/14/240_F_372331474_0Z1s10Wz1pQlDPfpVmqYnKhkqYOeHCi8.jpg",
            price : 100,
        },
        {
            id: 23,
            name: "Pozole Grande",
            image: "https://t3.ftcdn.net/jpg/03/72/33/14/240_F_372331474_0Z1s10Wz1pQlDPfpVmqYnKhkqYOeHCi8.jpg",
            price : 110
        },
        {
            id: 14,
            name: "Menudo Chico",
            category : "Caldo",
            image : "https://comidasmexicanas.club/wp-content/uploads/2020/03/menudo-rojo.jpg",
            price : 110
        },
        {
            id: 22,
            name: "Menudo Grande",
            category: "caldo",
            image : "https://comidasmexicanas.club/wp-content/uploads/2020/03/menudo-rojo.jpg",
            price : 120
        },
        {
            id: 15,
            name: "Caldo de Res chico",
            category : "Caldo",
            image : "https://www.maricruzavalos.com/wp-content/uploads/2020/09/caldo_de_res_recipe-1.jpg",
            price : 100
        },
        {
            id: 16,
            name: "Caldo de Res Grande",
            category: "Caldo",
            image: "https://www.maricruzavalos.com/wp-content/uploads/2020/09/caldo_de_res_recipe-1.jpg",
            price : 110
        },
        {
            id: 17,
            name : "Aguas Chicas",
            category: "Bebida",
            image : "https://foodandtravel.mx/wp-content/uploads/2017/04/aguasfrescas.jpg",
            price : 25
        },
        {
            id: 18,
            name : "Aguas Grandes",
            category : "Bebida",
            image : "https://www.gob.mx/cms/uploads/article/main_image/24844/aguas.jpg",
            price : 35
        },
        {
            id: 19,
            name : "Sodas Lata",
            category: "Bebida",
            image : "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvY2ElMjBjb2xhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price : 20
        },
        {
            id: 21,
            name : "Sodas de Vidrio",
            category: "Bebida",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMb5ASnm0EUPtzgVAarP2q6IAqIUI2noLbyiRtaq2rTWUN9P8NLb6pfcZ1kJ6B9NUd9A&usqp=CAU",
            price : 25,
        },
        {
            id: 20,
            name: "Champurrado",
            category: "Bebida",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8oBkD8YNvU7YHWrWDpkDMwIDe4pxmgC1ng&usqp=CAU",
            price : 35,
        },
        {
            id: 31,
            name: "Capirotada",
            image : "https://cdn2.telediario.mx/uploads/media/2022/03/02/capirotada-carola-delicias-cortesia-facebook.jpg",
            price: 60
        },
        {
            id: 30,
            name: "Extra",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8R3j6rB_vGwJ3jwWhWymCBJxjjxKnCvh9Q&usqp=CAU",
            price: 10
        }
    ]
}

export default datos;