import * as appwrite from 'appwrite';

const client = new appwrite.Client()
    .setEndpoint('127.0.0.1')
    .setProject('636fa7e2930cbd636db3');

const api = {
    async signup(email, password, name) {
        const account = new appwrite.Account(client)

        account.create(
            appwrite.ID.unique(),
            email,
            password,
            name
        ).then(console.log).catch(console.error);

    },

    async login(email, password) {
        const account = new appwrite.Account(client)

        account.createEmailSession(
            email,
            password
        ).then(console.log).catch(console.error)
    }
}

export default api;