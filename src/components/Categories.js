import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Layout from './Layout'

const Categories = () => {
    const [categ, setCateg] = useState()

    const getCateg = async () => {
        await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
                    .then(res => setCateg(res.data.categories))
                    .catch(err => console.log(err))
    }

    useEffect(() => {
        getCateg()
    }, [])

    const showCateg = () => {
        return categ && categ.map((data, i) => (
            <Link className="categ-link" key={i} to={`/category/${data.strCategory}`}>
                <div className="categ-box">
                    <img src={data.strCategoryThumb} alt={data.strCategory} className="categ-img" />
                    <div className="categ-name">
                        <p className="categ-name-head">{data.strCategory}</p>
                        <p className="categ-name-desc">{data.strCategoryDescription}</p>
                    </div>
                </div>
            </Link>
        ))
    }

    return (
        <Layout>
            <div className="categ">
                <div className="categ-title">Categories</div>
                <div className="categ-cont">
                    {showCateg()}
                </div>
            </div>
        </Layout>
    )
}

export default Categories
