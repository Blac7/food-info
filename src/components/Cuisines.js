import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Layout from './Layout'

const Cuisines = () => {
    const [cuis, setCuis] = useState()

    const getArea = async () => {
        await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
                    .then(res => setCuis(res.data.meals))
                    .catch(err => console.log(err))
    }

    const showCuis = () => {
        return cuis && cuis.map((data, i) => (
            <Link className={`cuis-box cuis-box-${data.strArea}`} key={i} to={`/cuisine/${data.strArea}`}>
                {data.strArea}
            </Link>
        ))
    }

    useEffect(() => {
        getArea()
    }, [])

    return (
        <Layout>
            <div className="cuis">
                <div className="cuis-title">Cuisines</div>
                <div className="cuis-cont">
                    {showCuis()}
                </div>
            </div>
        </Layout>
    )
}

export default Cuisines
