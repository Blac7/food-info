import React, { useEffect, useState } from 'react'
import { Link } from  'react-router-dom'
import axios from 'axios'

import Layout from './Layout'

const Ingredient = (props) => {
    const [name, setName] = useState()
    const [allDishes, setAllDishes] = useState()
    const [specificIng, setSpecificIng] = useState()

    const getIng = () => {
        let temp = props.match.params.name
        if(temp) {
            setName(temp)
            getSpecificIng()
            getAllDishes(temp)
        }
    }

    const getAllDishes = async (temp) => {
        if(temp) {
            await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${temp}`)
            .then(res => setAllDishes(res.data.meals))
            .catch(err => console.log(err))
        }
    }

    const getSpecificIng = async () => {
        await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(res => setSpecificIng(res.data.meals))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getIng()
    }, [])

    const showTitle = () => {
        return name && (
            <div className="ind-cat-title">
                <div className="ind-cat-title-text">
                    Ingredient - <span className="ind-title-main">{name}</span>
                </div>
                <Link className="ind-cat-title-btn" to='/ingredients'>
                    <i className="fas fa-arrow-left"></i> &nbsp; All Ingredients
                </Link>
            </div>
        )
    }

    const showIngDetails = () => {
        if(name && specificIng) {
            let arr = specificIng.filter((val, i) => val.strIngredient.includes(name))
            return arr[0] && (
                <div className="ind-cat-cont-main">
                    <div className="ind-cat-cont-img-box">
                        <img src={`https://www.themealdb.com/images/ingredients/${arr[0].strIngredient}.png`} alt={arr[0].strIngredient} className="ind-cat-cont-img" />
                    </div>
                    <div className="ind-cat-cont-box">
                        {arr[0].strDescription && (<div className="ind-cat-cont-dec">Description</div> )}
                        {arr[0].strDescription ? arr[0].strDescription : "No Description" }
                    </div>
                </div>
            )
        }
    }

    const showIngDishes = () => {
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
                    {showIngDetails()}
                </div>
                <div className="ind-cat-dishes">
                    <div className="ind-cat-dishes-title">
                        Related Dishes - <span className="ind-cat-dishes-count">{allDishes && allDishes.length} dishes</span>
                    </div>
                    {showIngDishes()}
                </div>
            </div>
        </Layout>
    )
}

export default Ingredient
