import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TodaysDish = () => {
    const [dish, setDish] = useState()

    const getDish = async () => {
        await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
                    .then(res => setDish(res.data.meals))
                    .catch(err => console.log(err))
    }

    useEffect(() => {
        getDish()
    }, [])

    const displayDish = () => {
        return dish && dish.map((data, i) => (
            <div className="t-dish-item" key={i}>
                <div className="dish-img-box">
                    <img src={data.strMealThumb} alt="Meal Thumbnail" className="dish-img" />
                </div>
                <div className="dish-cont">
                    <div className="dish-title">{data.strMeal}</div>
                    <div className="dish-category">
                        Category
                        <a href={`/category/${data.strCategory}`} className="dish-cat-link">{data.strCategory}</a>
                    </div>
                    <div className="dish-area">
                        Cuisine 
                        <a href={`/cuisine/${data.strArea}`} className="dish-area-link">{data.strArea}</a>
                    </div>
                    <div className="dish-tags">
                        <div className="dish-tags-text">Tags</div>
                        <div className="dish-tags-cont">
                            {showTags(data.strTags)} 
                        </div>
                    </div>
                    <div className="dish-video">
                        <a href={data.strYoutube} className="dish-yt-link">Watch Video</a>
                    </div>
                </div>
            </div>
        ))
    }

    const showTags = (strTags) => {
        if(strTags) {
            let arr = strTags.split(',')
            return arr.map((val, i) => <p className="dish-tag" key={i}>{val}</p> )
        } else return (<p className="dish-tag">No Tags</p>)
    }

    return (
        <div className="t-dish">
            <div className="t-dish-title">Today's Dish</div>
            <div className="t-dish-box">
                { displayDish() }
            </div>
        </div>
    )
}

export default TodaysDish
