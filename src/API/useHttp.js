import { useCallback } from "react";


export const useHttp = () => {

    const request = async (url, method = 'GET', body = null, params = {"base": 'USD', "symbols": 'RUB'}, headers = {'Content-Type': 'application/json', "apikey": "r2gU2TeURM5begQAXs8PtzpTN7rrHBo5",}) => {

        const response = await fetch(url, {method, body,params, headers});

        const data = await response.json();

        return data;
    }

    return {request}
}