import { useEffect } from "react";
import useSWR from "swr"
import { ContactUsData, FetchDataError, FetchDataResponse } from "./types"

// Used all over to help SWR know how to fetch correctly
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useKontaktaOss(): FetchDataResponse<ContactUsData> {
    const {data, error} = useSWR<ContactUsData, FetchDataError>('/api/kontakta-oss', fetcher);

    return {
        data,
        error,
        isLoading: !error && !data,
    }
}

export {useKontaktaOss}