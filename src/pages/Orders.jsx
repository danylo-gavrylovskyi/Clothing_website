import React from "react"
import axios from "axios"

import { Card } from "../components/Card/Card"

import styles from "../App.module.css"

export function Orders({searchInput}){

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        try{
            (async () => {
                setIsLoading(true)
                const {data} = await axios.get("https://64248fef7ac292e3cfed5b72.mockapi.io/Orders")
                setItems(data.map(obj => obj.items))
                setIsLoading(false)
            })()
        }
        catch(error){
            alert("Error with getting orders!!!")
            console.log(error)
        }
    }, [])

    return(
        <>
        <div className={styles.current_category}>
            <div>
                {searchInput ? <div className={styles.bolder}>Search by: {searchInput}</div>: <span className={styles.bolder}>My Orders</span>}
            </div>

            <div className={styles.filter_buttons}>
                <button className={styles.see}>See 2</button>
                <button className={styles.filter}>Filter</button>
            </div>
        </div>

            {items.map((obj, index) => (
                <>
                <p className={styles.order_num}>Order #{index+1}</p>
                <br></br>
                <main className={styles.main_grid}>
                    {obj.map(item => (
                        <Card {...item}></Card>
                    ))}
                </main>
                </>
            ))}
        </>
    )
}