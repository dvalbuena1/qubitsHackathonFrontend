<template>
  <div>
    <h2 class="ml-6">
      Informacion:
    </h2>
    <ul>
      <li>
        <v-card class="mx-auto m-5 p-5" tile>
          <v-row>
            <v-col :cols="3" class="ml-4 mt-3">
              Nombre:
            </v-col>
            <v-col :cols="8">
              <v-text-field
                :value=nombre
                label="Solo"
                solo
                readonly
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="3" class="ml-4 mt-3">
              Email:
            </v-col>
            <v-col :cols="8">
              <v-text-field
                :value=email
                label="Solo"
                solo
                readonly
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="3" class="ml-4 mt-3">
              Contraseña:
            </v-col>
            <v-col :cols="8">
              <v-text-field
                :value=password
                label="Solo"
                solo
                readonly
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue"
              class="mr-4 mb-4"
            >
              Cambiar
            </v-btn>
          </v-card-actions>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
data: () => ({
      nombre: "TestNombre",
      email: "TestEmail",
      password: "*********",
      usuario:{}
    }),
async created(){
  const config = {
    headers:{

    }
  }

  const res = await this.$axios.$get("/user",config)
}
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
.v-text-field{
  font-size: 200;
}
</style>
