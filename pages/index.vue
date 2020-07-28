<template>
  <div>
    <h2>Qubit APP</h2>
  </div>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: "Qubit APP",
      meta: [
        {
          hid: "Welcome",
          name: "welcome",
          content: "Welcome to Qubit APP",
        },
      ],
    };
  },
};
</script>
