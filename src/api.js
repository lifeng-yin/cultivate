import * as appwrite from 'appwrite';

const client = new appwrite.Client()
const databases = new appwrite.Databases(client);

client
.setEndpoint(' http://8080-appwrite-integrationfor-tyg7rkf7ctb.ws-us74.gitpod.io/v1')
.setProject('636fa7e2930cbd636db3');

console.log(client)

const api = {
    
    // async signup(email, password, name) {
    //     const account = new appwrite.Account(client)

    //     return account.create(
    //         appwrite.ID.unique(),
    //         email,
    //         password,
    //         name
    //     ).then().catch(console.error);

    // },

    // async login(email, password) {
    //     const account = new appwrite.Account(client)

    //     return account.createEmailSession(
    //         email,
    //         password
    //     ).then().catch(console.error)
    // },

    async makepost(content) {
        // const promise = databases.createDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]', {});
        const promise = databases.createDocument('63704cd61c50e1114776', '63704d01e15336e4ecc1', 'monkey', {content});

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    },

    async getposts() {
        const promise = databases.listDocuments('63704cd61c50e1114776', '63704d01e15336e4ecc1');

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    },

    async getJWT(changeToken) {
        const account = new appwrite.Account(client)

        let token = await account.createJWT().then().catch(console.error) // no clue if this works lol
        changeToken(token)

        return token
    } // should i run it or anything
}

export default api;