import React, { useEffect, useState } from 'react'
import { Link } from  'react-router-dom'
import axios from 'axios'

import Layout from './Layout'

const Category = (props) => {
    const [name, setName] = useState()
    const [allDishes, setAllDishes] = useState()
    const [specificCateg, setSpecificCateg] = useState()

    const getCateg = () => {
        let temp = props.match.params.name
        if(temp) {
            setName(temp)
            getSpecificCateg()
            getAllDishes(temp)
        }
    }

    const getAllDishes = async (temp) => {
        if(temp) {
            await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${temp}`)
            .then(res => setAllDishes(res.data.meals))
            .catch(err => console.log(err))
        }
    }

    const getSpecificCateg = async () => {
        await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => setSpecificCateg(res.data.categories))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getCateg()
    }, [])

    const showTitle = () => {
        return name && (
            <div className="ind-cat-title">
                <div className="ind-cat-title-text">
                    Category - <span className="ind-title-main">{name}</span>
                </div>
                <Link className="ind-cat-title-btn" to='/categories'>
                    <i className="fas fa-arrow-left"></i> &nbsp; All Categories
                </Link>
            </div>
        )
    }

    const showCategDetails = () => {
        if(name && specificCateg) {
            let arr = specificCateg.filter((val, i) => val.strCategory.includes(name))
            return arr[0] && (
                <div className="ind-cat-cont-main">
                    <div className="ind-cat-cont-img-box">
                        <img src={arr[0].strCategoryThumb} alt={arr[0].strCategoryThumb} className="ind-cat-cont-img" />
                    </div>
                    <div className="ind-cat-cont-box">
                        <div className="ind-cat-cont-dec">Description</div>
                        {arr[0].strCategoryDescription}
                    </div>
                </div>
            )
        }
    }

    const showCategDishes = () => {
        return allDishes && allDishes.map((dish, i) => (
            <Link className="ind-cat-dish-link" to={`/dish/${dish.idMeal}`} key={i}>
                <div className="ind-cat-dish">
                    <img src={dish.strMealThumb} alt={dish.strMeal} className="ind-cat-dish-img" />
                    <div className="ind-cat-dish-cont">{dish.strMeal}</div>
                </div>
            </Link>
        ))
    }

    return (
        <Layout>
            <div className="ind-cat">
                {showTitle()}
                <div className="ind-cat-cont">
                    {showCategDetails()}
                </div>
                <div className="ind-cat-dishes">
                    <div className="ind-cat-dishes-title">
                        Related Dishes - <span className="ind-cat-dishes-count">{allDishes && allDishes.length} dishes</span>
                    </div>
                    {showCategDishes()}
                </div>
            </div>
        </Layout>
    )
}

export default Category
