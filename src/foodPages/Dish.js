import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Layout from '../components/Layout'

const Dish = (props) => {
    const [dish, setDish] = useState()

    const getDishDetails = async () => {
        let id = props.match.params.id
        if(id) {
            await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => setDish(res.data.meals))
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getDishDetails()
    }, [])

    const displayDish = () => {
        return dish && dish.map((data, i) => (
            <div className="dish-item" key={i}>
                {/* <div className="dish-main-title">{data.strMeal}</div> */}
                <div className="dish-im-b">
                    <div className="dish-img-box">
                        <img src={data.strMealThumb} alt="Meal Thumbnail" className="dish-img" />
                        <div className="dish-video">
                            <a href={data.strYoutube} className="dish-yt-link">Watch Video</a> 
                        </div>
                    </div>
                </div>
                <div className="dish-cont">
                    <div className="dish-title">{data.strMeal}</div>
                    <div className="dish-category">
                        Category
                        <Link to={`/category/${data.strCategory}`} className="dish-cat-link">{data.strCategory}</Link> 
                    </div>
                    <div className="dish-area">
                        Cuisine 
                        <Link to={`/cuisine/${data.strArea}`} className="dish-area-link">{data.strArea}</Link> 
                    </div>
                    <div className="dish-tags">
                        <div className="dish-tags-text">Tags</div>
                        <div className="dish-tags-cont">
                            {showTags(data.strTags)} 
                        </div>
                    </div>
                </div>
                <div className="dish-inst-ing">
                    <div className="dish-desc">
                        <div className="dish-desc-text">Instructions</div>
                        <div className="dish-desc-cont">
                            {data.strInstructions}
                        </div>
                    </div>
                    <div className="dish-ing">
                        <div className="dish-ing-title">Ingredients List</div>
                        <ul className="dish-ing-list">
                            {data.strIngredient1 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient1}`} className="dish-ing-link">{data.strIngredient1}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure1}</span>
                                </li>
                            )}
                            {data.strIngredient2 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient2}`} className="dish-ing-link">{data.strIngredient2}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure2}</span>
                                </li>
                            )}
                            {data.strIngredient3 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient3}`} className="dish-ing-link">{data.strIngredient3}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure3}</span>
                                </li>
                            )}
                            {data.strIngredient4 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient4}`} className="dish-ing-link">{data.strIngredient4}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure4}</span>
                                </li>
                            )}
                            {data.strIngredient5 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient5}`} className="dish-ing-link">{data.strIngredient5}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure5}</span>
                                </li>
                            )}
                            {data.strIngredient6 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient6}`} className="dish-ing-link">{data.strIngredient6}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure6}</span>
                                </li>
                            )}
                            {data.strIngredient7 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient7}`} className="dish-ing-link">{data.strIngredient7}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure7}</span>
                                </li>
                            )}
                            {data.strIngredient8 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient8}`} className="dish-ing-link">{data.strIngredient8}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure8}</span>
                                </li>
                            )}
                            {data.strIngredient9 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient9}`} className="dish-ing-link">{data.strIngredient9}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure9}</span>
                                </li>
                            )}
                            {data.strIngredient10 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient10}`} className="dish-ing-link">{data.strIngredient10}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure10}</span>
                                </li>
                            )}
                            {data.strIngredient11 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient11}`} className="dish-ing-link">{data.strIngredient11}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure11}</span>
                                </li>
                            )}
                            {data.strIngredient12 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient12}`} className="dish-ing-link">{data.strIngredient12}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure12}</span>
                                </li>
                            )}
                            {data.strIngredient13 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient13}`} className="dish-ing-link">{data.strIngredient13}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure13}</span>
                                </li>
                            )}
                            {data.strIngredient14 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient14}`} className="dish-ing-link">{data.strIngredient14}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure14}</span>
                                </li>
                            )}
                            {data.strIngredient15 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient15}`} className="dish-ing-link">{data.strIngredient15}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure15}</span>
                                </li>
                            )}
                            {data.strIngredient16 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient16}`} className="dish-ing-link">{data.strIngredient16}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure16}</span>
                                </li>
                            )}
                            {data.strIngredient17 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient17}`} className="dish-ing-link">{data.strIngredient17}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure17}</span>
                                </li>
                            )}
                            {data.strIngredient18 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient18}`} className="dish-ing-link">{data.strIngredient18}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure18}</span>
                                </li>
                            )}
                            {data.strIngredient19 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient19}`} className="dish-ing-link">{data.strIngredient19}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure19}</span>
                                </li>
                            )}
                            {data.strIngredient20 && (
                                <li className="dish-ing-item">
                                    <Link to={`/ingredient/${data.strIngredient20}`} className="dish-ing-link">{data.strIngredient20}</Link> 
                                    <span className="dish-ing-quan">{data.strMeasure20}</span>
                                </li>
                            )}
                        </ul>
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
        <Layout>
            <div className="dish-page">
                {displayDish()}
            </div>
        </Layout>
    )
}

export default Dish
