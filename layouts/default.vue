<template>
  <div>
    <Navbar></Navbar>
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
      Navbar
    }
}
</script>
