<template>
  <div>

    <div class="uk-child-width-1-2@m uk-grid">
      <div>
        <div class="uk-card uk-card-default uk-card-small uk-card-body">
          <img src="https://assets-ouch.icons8.com/preview/457/0b338840-2e33-432e-a547-4d3e5acc960c.png" height="500"
            width="500" class="uk-align-center" alt="">
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-large uk-card-body">

          <form @submit.stop.prevent="handleSubmit">
            <fieldset class="uk-fieldset">

              <legend class="uk-legend">Sign in</legend>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Email</label>
                <input class="uk-input" v-model="email" type="email" placeholder="paul.bocuse@gmail.com">
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Password</label>
                <input class="uk-input" v-model="password" type="password">
              </div>

              <div class="uk-margin">
                <button class="uk-button uk-button-primary uk-width-1-1" :disabled="loading"
                  type="submit">Submit</button>
              </div>

              <div class="uk-margin">
                <p>
                  No account yet?
                  <router-link :to="{ name: 'users-register'}">
                    Register
                  </router-link>
                </p>
              </div>

            </fieldset>
          </form>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
     middleware: 'guest',
    data() {
      return {
        email: '',
        password: '',
        loading: false
      }
    },
    methods: {
      async handleSubmit() {
        try {
          await this.$auth.loginWith('local', {
              data: {
                identifier: this.email,
                password: this.password
              }
            })
            this.$router.push('/video')
        } catch (e) {
          this.error = e.response.data.message
        }
      },
    }
  }

</script>
