import React from "react";

type TokenContextProps = {
    token: string | null
}

export const AuthToken = React.createContext<TokenContextProps>({ token: "" });
