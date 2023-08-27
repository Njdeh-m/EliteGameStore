import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";



  interface FetchResponse <T> {
    count: number;
    results: T[];
  }

const useData = <T>(endpoint : string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, SetData] = useState<T[]>([]);
    const [error, SetError] = useState("");
    const [isLoading, setLoading] =useState(false);
  
    useEffect(() => {
        const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal: controller.signal, ...requestConfig})

        
        .then((data) => {
          SetData(data.data.results);
          setLoading(false)
        })

        
        .catch((err) => {
          SetError(err.message);
          setLoading(false)
        });

    }, deps ?[...deps]: []);
    return {error,data, isLoading};
}

export default useData;

  
