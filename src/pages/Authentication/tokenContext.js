import {createContext} from "react";

const TokenContext = createContext({
    token: null,
    changeToken: () => {}
})

export default TokenContext