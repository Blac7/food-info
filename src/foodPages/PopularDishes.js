import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PopularDishes = () => {
    const [dish, setDish] = useState()

    const getDish = async () => {
        await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
                    .then(res => setDish(res.data.meals))
                    .catch(err => console.log(err))
    }

    useEffect(() => {
        getDish()
    }, [])

    const displayDish = () => {
        if (dish) {
            let arr = dish.filter((val, i) => i < 6)
            return arr && arr.map((data, i) => (
            <Link to={`/dish/${data.idMeal}`} className="p-dish-link" key={i}>
                <div className="p-dish-item">
                    <div className="dish-img-box">
                        <img src={data.strMealThumb} alt="Meal Thumbnail" className="dish-img" />
                    </div>
                    <div className="dish-cont">
                        <div className="dish-title">{data.strMeal}</div>
                    </div>
                </div>
            </Link>
        ))
        }
    }

    return (
        <div className="p-dish">
            <div className="p-dish-title">Popular Dishes</div>
            <div className="p-dish-box">
                { displayDish() }
            </div>
        </div>
    )
}

export default PopularDishes
