import axios from "axios";
import { useEffect, useState } from "react";

export default function useData<T>(url: string, defaultData: T, deps: React.DependencyList = []) {
    const [data, setData] = useState<T>(defaultData)

    const fetchData = async () => {
        const response = await axios.get(url)
        if (response.status == 200) {
            setData(response.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, deps)

    return { data, refetch: fetchData }
}