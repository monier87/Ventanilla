import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

export const TableAxios = () => {

const [usuarios, setUsuarios] = useState( [] )


const endpoint = 'https://freetestapi.com/api/v1/users'

const getData = async () => {
    await axios.get(endpoint).then((response) => {
        const data = response.data
        console.log(data)
        setUsuarios(data)
    })
}

useEffect( ()=>{
    getData()
}, [])


const columns = [
    {
        name: "id",
        label: "ID"
    },
    {
        name: "title",
        label: "TITLE"
    },
    {
        name: "price",
        label: "PRICE"
    }
]
//4 - renderizamos la datatable
        return (
            <MUIDataTable 
            title={"Show data with Axios"}
            data={usuarios}
            columns={columns}
            />
        )

}