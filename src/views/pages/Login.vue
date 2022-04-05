<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">登录</h4>
                                    <p>欢迎使用云客在线服务系统, 请登录你的账户</p>
                                </div>
                                <vs-input
                                  data-vv-validate-on="blur"
                                  v-validate="'required|alpha_dash'"
                                  type="username"
                                  name="username"
                                  icon="icon icon-user"
                                  icon-pack="feather"
                                  label-placeholder="用户名"
                                  v-model="username"
                                  class="w-full no-icon-border" />
                                <span class="text-danger text-sm" v-show="errors.has('username')">{{ errors.first('username') }}</span>

                                <vs-input
                                    data-vv-validate-on="blur"
                                    v-validate="'required|min:8|max:10'"
                                    type="password"
                                    name="password"
                                    icon="icon icon-lock"
                                    icon-pack="feather"
                                    label-placeholder="密码"
                                    v-model="password"
                                    class="w-full mt-6 no-icon-border" />
                                <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                                <div class="flex flex-wrap justify-between my-5">
                                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">记住密码</vs-checkbox>
                                    <router-link to="/pages/forgot-password">忘记密码?</router-link>
                                </div>
                                <vs-button  type="border" @click="registerUser">注册</vs-button>
                                <vs-button class="float-right" :disabled="!validateForm" @click="login">登录</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            username: 'demo@demo.com',
            password: 'demodemo',
            checkbox_remember_me: false
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.username != '' && this.password != '';
        },
    },
    methods: {
        login() {
            const payload = {
                checkbox_remember_me: this.checkbox_remember_me,
                userDetails: {
                    email: this.username,
                    password: this.password
                },
                notify: this.$vs.notify
            }
            this.$store.dispatch('auth/loginAttempt', payload);
        },

        loginAuth0() {
            if (this.$store.state.auth.isUserLoggedIn()) {
                this.notifyAlreadyLogedIn();
                return false
            }
            this.$auth.login({ target: this.$route.query.to });
        },
        notifyAlreadyLogedIn() {
            this.$vs.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
        },
        registerUser() {
            if(this.$store.state.auth.isUserLoggedIn()) {
                this.notifyAlreadyLogedIn();
                return false;
            }
            this.$router.push('/pages/register');
        }
    }
}
</script>

<style lang="scss">
#page-login {
    .social-login {
        .bg-facebook {
          background-color: #1551b1;
        }
        .bg-twitter {
          background-color: #00aaff;
        }
        .bg-google {
          background-color: #4285F4;
        }
        .bg-github {
          background-color: #333;
        }
    }
}
</style>
