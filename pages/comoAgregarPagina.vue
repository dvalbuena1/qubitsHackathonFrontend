<template>
  <div>
    <h1>Hola</h1>
    <h3>Aca te presentamos los pasos para agregar tu página de Facebook a nuestra aplicación.</h3>
    <br />
    <br />
    <div v-for="paso in pasos" :key="paso.index">
      <h2>{{paso.name}}</h2>
      <h4>{{paso.description}}</h4>
      <div>
        <img height="500" width="1000" :src="getImage(paso.image)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pasos: [
        {
          name: "Paso 1",
          description:
            "Ingresa a https://developers.facebook.com e inicia sesión.",
          image: "Paso1.PNG",
        },
        {
          name: "Paso 2",
          description: 'Una vez dentro ingresa a "Mis Apps".',
          image: "Paso2.PNG",
        },
        {
          name: "Paso 3",
          description: 'Dale clic al botón de "Agregar una nueva app".',
          image: "Paso3.PNG",
        },
        {
          name: "Paso 4",
          description: 'Dale clic en "Administrar integraciones comerciales".',
          image: "Paso4.PNG",
        },
        {
          name: "Paso 5",
          description:
            'Llena el formulario en pantalla, solo llena el nombre de la app, un correo de contacto y has clic en "Solo yo, personas de mi negocio o desarrolladores que tienen un rol en mi app".',
          image: "Paso5.PNG",
        },
        {
          name: "Paso 6",
          description:
            'Arriba aparecerá "Identificador de la app" y un numero de 15 dígitos, anótalo. Luego has clic en "Configurar" sobre Messenger',
          image: "Paso6.PNG",
        },
        {
          name: "Paso 7",
          description:
            'Navega la página hasta el apartado de "Tokens de acceso" y dale clic a "Agregar o eliminar páginas"',
          image: "Paso7.PNG",
        },
        {
          name: "Paso 8",
          description:
            "Selecciona las páginas a las cuales quieres activar el envio de mensajes",
          image: "Paso8.PNG",
        },
        {
          name: "Paso 9",
          description:
            'Una vez activada la página aparecerá debajo del nombre, un numero de 15, anótalo, este es el Identificador de la página. Has clic despues en "Generar Token"',
          image: "Paso9.PNG",
        },
        {
          name: "Paso 10",
          description:
            'Aparecerá una ventana con el token, has clic en "Acepto" y luego copia el token.',
          image: "Paso10.PNG",
        },
        {
          name: "Paso 11",
          description: "Ve a 'Configuración Básica'",
          image: "Paso11.PNG",
        },
        {
          name: "Paso 12",
          description:
            'Dale clic a "Mostrar" en "Clave secreta de app" y copiala. Ya con estos cuatro valores puedes configurar tu página de Facebook.',
          image: "Paso12.PNG",
        },
      ],
    };
  },
  methods: {
    getImage(image) {
      return require("../static/PasoAPaso/" + image);
    },
  },
};
</script>

<style>
</style>