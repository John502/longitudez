module.exports = {
    env: {
        //..others
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        SIGNUP_FROM_EMAIL: process.env.SIGNUP_FROM_EMAIL,
        CONTACT_LIST: process.env.CONTACT_LIST
        },
    serverRuntimeConfig: {
        //..others
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        SIGNUP_FROM_EMAIL: process.env.SIGNUP_FROM_EMAIL,
        CONTACT_LIST: process.env.CONTACT_LIST
    }
}
