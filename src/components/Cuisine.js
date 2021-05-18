import React, { useEffect, useState } from 'react'
import { Link } from  'react-router-dom'
import axios from 'axios'

import Layout from './Layout'

const Cuisine = (props) => {
    const [name, setName] = useState()
    const [allDishes, setAllDishes] = useState()

    const getCuis = () => {
        let temp = props.match.params.name
        if(temp) {
            setName(temp)
            getAllDishes(temp)
        }
    }

    const getAllDishes = async (temp) => {
        if(temp) {
            await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${temp}`)
            .then(res => setAllDishes(res.data.meals))
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getCuis()
    }, [])

    const showTitle = () => {
        return name && (
            <div className="ind-cat-title">
                <div className="ind-cat-title-text">
                    Cuisine - <span className="ind-title-main">{name}</span>
                </div>
                <Link className="ind-cat-title-btn" to='/Cuisines'>
                    <i className="fas fa-arrow-left"></i> &nbsp; All Cuisines
                </Link>
            </div>
        )
    }

    const showCuisDishes = () => {
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
                <div className="ind-cat-dishes">
                    <div className="ind-cat-dishes-title">
                        Related Dishes - <span className="ind-cat-dishes-count">{allDishes && allDishes.length} dishes</span>
                    </div>
                    {showCuisDishes()}
                </div>
            </div>
        </Layout>
    )
}

export default Cuisine
