import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { GetMeQuery, useGetMeQuery } from "../generated/graphql";

export const UserContext = createContext();

interface IUser {
    id: number | undefined;
    email: string | undefined | null;
}

export const AppWrapper = ({ children }: any) => {
    const [user, setUser] = useState<IUser | undefined>();

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    const { data } = useGetMeQuery({ fetchPolicy: "network-only" });
    console.log("ID", data?.me?.id);
    // useEffect(() => {
    //     // const { data } = useGetMeQuery({ fetchPolicy: "network-only" });
    //     console.log("ID in UseEffect", data?.me?.id);
    //     setUser({
    //         id: data?.me?.id,
    //         email: data?.me.email,
    //     });
    // }, [data]);

    // let sharedState = {{user, setUser}};
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export function useAppContext() {
    return useContext(UserContext);
}
