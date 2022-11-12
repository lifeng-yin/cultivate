import * as appwrite from 'appwrite';

const client = new appwrite.Client()
    .setEndpoint('https://cultivating.netlify.app/')
    .setProject('636fa7e2930cbd636db3');

const api = {
    async signup(email, password, name) {
        const account = new appwrite.Account(client)

        return account.create(
            appwrite.ID.unique(),
            email,
            password,
            name
        ).then().catch(console.error);

    },

    async login(email, password) {
        const account = new appwrite.Account(client)

        return account.createEmailSession(
            email,
            password
        ).then().catch(console.error)
    },

    async getJWT() {
        const account = new appwrite.Account(client)

        return account.createJWT().then().catch(console.error) // no clue if this works lol
    } // should i run it or anything
}

export default api;