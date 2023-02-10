import { useState, useEffect } from "react"

export const Fetch = () => {

    const [data, setData] = useState()

    const FetchData = async() => {

    const response = await fetch("http://www.cbp-exercises.test/Day-25-MW/Simple_API.php")
    const fData = await response.json()
    console.log(fData.data)
    // console.log (fData.fact)
    setData(fData.data)
    }

    useEffect(() => {
        FetchData ();
    }, [])

    return (
        <div>
        {
            !data ?
            <p>LOADING</p>
            :
            // <p>{data.data}</p>
            data.map((fdata) =>{
                return <p>{fdata.fact}</p>
            })
            }
          
          </div>
    )

}
