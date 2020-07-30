const a = {
    name: "menu",
    message: "hola",
    options: [
        {
            name: "Info",
            message: "XD",
            options: []
        },
        {
            name: "Contactar",
            message: "",
            options: [
                {
                    name: "Jefe",
                    message: "Para contactar a nuestro jefe de ventas...",
                    options: []
                },
                {
                    name: "Asesor",
                    message: "Re le redirigira con uno de nuestros asesores",
                    options: []
                }
            ]
        }

    ]
}




console.log(a.menu.options);


