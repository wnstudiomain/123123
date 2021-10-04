<template>
  <div>

    <div class="uk-child-width-1-2@m uk-grid">
      <div>
        // Nice image to make this app more beautiful
        <div class="uk-card uk-card-default uk-card-small uk-card-body">
          <img src="https://assets-ouch.icons8.com/preview/294/e25a0374-0657-45d5-98d9-2408473a744c.png" height="500"
            width="500" class="uk-align-center" alt="">
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-large uk-card-body">

          <form @submit.stop.prevent="handleSubmit">
            <fieldset class="uk-fieldset">

              <legend class="uk-legend">Register</legend>

              <div class="uk-margin">
                <label class="uk-form-label">Username</label>
                <input class="uk-input" v-model="username" type="text" placeholder="pbocuse">
              </div>

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
                  Already have an account?
                  <nuxt-link :to="{ name: 'users-login'}">
                    Login
                  </nuxt-link>
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
  // import axios from 'axios';

  export default {
    middleware: 'guest',
    data() {
      return {
        email: '',
        password: '',
        username: '',
        loading: false,
        error: null,
      }
    },
    methods: {
      async handleSubmit() {
        try {
          await this.$axios.post('http://localhost:1337/auth/local/register', {
              username: this.username,
              email: this.email,
              password: this.password,
            })
          await this.$auth.loginWith('local', {
            data: {
              identifier: this.email,
              password: this.password
            }
          })
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    }
  }

</script>
