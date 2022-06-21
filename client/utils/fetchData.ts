import { useEffect } from "react";
import useSWR from "swr"
import { AboutUsData, ContactUsData, FetchDataError, FetchDataResponse } from "./types"

// Used all over to help SWR know how to fetch correctly
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useData<T>(endpoint: string): FetchDataResponse<T> {
    const { data, error } = useSWR<T, FetchDataError>('/api/' + endpoint, fetcher);

    return {
        data,
        error,
        isLoading: !error && !data
    };
}

export { useData }