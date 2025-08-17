import { useEffect, useState } from "react"

 const useFetch = <T>(fetchFunction: () => Promise<T>, autofetch = true) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | Error>(null)


    const fetchData = async () => {

        try {
            setLoading(true)
            setError(null)

            const data = await fetchFunction();
            setData(data)

        } catch (e) {
            // @ts-ignore
            setError(e instanceof Error ? err : new Error('An Error occured !'))

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (autofetch) {
            fetchData()

        }
    }, [])

    const reset = () => {
        setData(null)
        setLoading(false)
        setError(null)
    }
    return { data, loading, error, refetch: fetchData, reset }

}

export default useFetch;