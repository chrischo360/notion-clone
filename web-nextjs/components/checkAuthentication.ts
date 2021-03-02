import React, { useEffect, Component } from "react";
import {useRouter} from 'next/router';
import { useGetMeQuery } from "../generated/graphql";

const checkAuthentication = () => {
    const { data, loading } = useGetMeQuery({ fetchPolicy: "network-only" });
    const userId = data?.me.id
    return () => {
        const router = useRouter();
        useEffect(() => {
            if (userId == null) router.push("/login");
          }, []); 

          return <Component {...arguments} />

      
    }
}

export default checkAuthentication;