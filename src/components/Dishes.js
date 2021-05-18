import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from './Layout'
// import FilterDishes from '../foodPages/FilterDishes'
// import SearchDishes from '../foodPages/SearchDishes'

import { getCategories, getAreas } from '../foodPages/Common_Func'

const Dishes = () => {
    const[init, setInit] = useState()
    const[categ, setCateg] = useState()
    const[areas, setAreas] = useState()
    const[dishes, setDishes] = useState()
    const[title, setTitle] = useState("Dishes that start with Letter : A")
    const[isLoading, setIsLoading] = useState(false)
    const[noSearchData, setNoSearchData] = useState(false)
    const[select, setSelect] = useState()
    const[searchInput, setSearchInput] = useState("")

    // Pagination 
    const[minVal, setMinVal] = useState(0)
    const[limit, setlimit] = useState(6)
    const[maxVal, setMaxVal] = useState(6)
    const[displayPrev, setDisplayPrev] = useState(false)
    const[displayNext, setDisplayNext] = useState(true)

    useEffect(() => {
        setFilters()
    }, [])

    useEffect(() => {
        getDishes()
    }, [init])

    useEffect(() => {
        checkMinMax()
    }, [minVal, maxVal])
    
    const getDishes = async () => {
        await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(res => {
            if(res){
                setMinVal(0)
                setMaxVal(limit)
                setDishes(res.data.meals)
                if(res.data.meals.length <= limit) setDisplayNext(false)
                else setDisplayNext(true)
            }
        })
        .catch(err => console.log(err))
    }

    const setFilters = () => {
        getCategories()
        .then(data => setCateg(data))
        .catch(err => console.log(err))
        getAreas()
        .then(data => setAreas(data))
        .catch(err => console.log(err))
    }

    const getData = (min, max) => {
        let arr = []
        if(dishes) {
            arr = dishes.filter((val, i) => i >= min && i < max)
            return arr
        } else return arr
    }

    const pagniPrev = () => {
        let val1 = minVal - limit
        let val2 = maxVal - limit
        setMinVal(val1)
        setMaxVal(val2)
    }

    const pagniNext = () => {
        let val1 = minVal + limit
        let val2 = maxVal + limit
        setMinVal(val1)
        setMaxVal(val2)
    }

    const checkMinMax = () => {
        if(minVal > 0) setDisplayPrev(true)
        else setDisplayPrev(false)

        if(dishes) {
            if(maxVal + limit >= dishes.length) setDisplayNext(false)
            else setDisplayNext(true)
        }
    }

    const ChangeDataCateg = async (cat) => {
        setMinVal(0)
        setMaxVal(limit)
        setIsLoading(true)
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
        await axios.get(url)
        .then(res => {
            if(res){
                setDishes(res.data.meals)
                setTitle(`Dish Category : ${cat} - ${res.data.meals.length} dishes`)
                setIsLoading(false)
                if(res.data.meals.length <= limit) setDisplayNext(false)
                else setDisplayNext(true)
            }
        })
        .catch(err => console.log(err))
    }

    const ChangeDataArea = async (area) => {
        setMinVal(0)
        setMaxVal(limit)
        setIsLoading(true)
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
        await axios.get(url)
        .then(res => {
            if(res){
                setDishes(res.data.meals)
                setTitle(`Dish Cuisine : ${area} - ${res.data.meals.length} dishes`)
                setIsLoading(false)
                if(res.data.meals.length <= limit) setDisplayNext(false)
                else setDisplayNext(true)
            }
        })
        .catch(err => console.log(err))
    }

    const ChangeSearchDataAlpha = async (val) => {
        setMinVal(0)
        setMaxVal(limit)
        setIsLoading(true)
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`
        await axios.get(url)
        .then(res => {
            if(res.data.meals){
                setDishes(res.data.meals)
                setTitle(`Dishes that start with Letter : ${val} - ${res.data.meals.length} dishes`)
                setIsLoading(false)
                if(res.data.meals.length <= limit) setDisplayNext(false)
                else setDisplayNext(true)
            }
            else {
                setIsLoading(false)
                setNoSearchData(true)
                setTitle("NO Data is Available with the Chosen Parameters. Please Try again.")
            }
        })
        .catch(err => console.log(err))
    }

    const ChangeSearchDataName = async (val) => {
        setMinVal(0)
        setMaxVal(limit)
        setIsLoading(true)
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
        await axios.get(url)
        .then(res => {
            if(res.data.meals){
                setDishes(res.data.meals)
                setTitle(`Dishes with Name : ${val} - ${res.data.meals.length} dishes`)
                setIsLoading(false)
                if(res.data.meals.length <= limit) setDisplayNext(false)
                else setDisplayNext(true)
            }
            else {
                setIsLoading(false)
                setNoSearchData(true)
                setTitle("NO Data is Available with the Chosen Parameters. Please Try again.")
            }
        })
        .catch(err => console.log(err))
    }

    const ChangeSearchDataIng = async (val) => {
        setMinVal(0)
        setMaxVal(limit)
        setIsLoading(true)
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${val}`
        await axios.get(url)
        .then(res => {
            if(res.data.meals){
                setDishes(res.data.meals)
                setTitle(`Dishes that start with Letter : ${val} - ${res.data.meals.length} dishes`)
                setIsLoading(false)
                if(res.data.meals.length <= limit) setDisplayNext(false)
                else setDisplayNext(true)
            }
            else {
                setIsLoading(false)
                setNoSearchData(true)
                setTitle("NO Data is Available with the Chosen Parameters. Please Try again.")
            }
        })
        .catch(err => console.log(err))
    }

    const SelectChange = event => {
        // setNoSearchData(false)
        setSelect(event.target.value)
    }

    const InputChange = event => {
        // setNoSearchData(false)
        setSearchInput(event.target.value)
    }

    const SearchDishes = () => {
        setNoSearchData(false)
        if(select === '1') {
            ChangeSearchDataAlpha(searchInput)
            //console.log("Alpha" + searchInput)
        }
        else if(select === '2') {
            ChangeSearchDataName(searchInput)
            //console.log("Name" + searchInput)
        }
        else if(select === '3') {
            ChangeSearchDataIng(searchInput)
            // console.log("Ing" + searchInput)
        }
        else {
            setNoSearchData(true)
        }
    }

    const showCateg = () => {
        return categ && categ.map((val, i) => (
            <button className="categ" key={i} onClick={() => ChangeDataCateg(val.strCategory)}>{val.strCategory}</button>
        ))
    }

    const showAreas = () => {
        return areas && areas.map((val, i) => (
            <button className="areas" key={i} onClick={() => ChangeDataArea(val.strArea)}>{val.strArea}</button>
        ))
    }

    const showDishes = () => {
        let arr = getData(minVal, maxVal)
        return arr && arr.map((food, i) => (
            <a href={`/dish/${food.idMeal}`} className="food-item-link" key={i}>
                <div className="food-item">
                    <div className="food-img-box">
                        <img src={food.strMealThumb} alt="" className="food-img" />
                    </div>
                    <div className="food-cont-box">
                        <p className="food-title">{food.strMeal}</p>
                    </div>
                </div>
            </a>
        ))
    }

    const showLoading = () => {
        return <p className="loading">Loading ...</p>
    }

    // const showNoSearchData = () => {
    //     return (
    //         <div className="no-search">
    //             <p className="no-sear">NO Data is Available with the Chosen Parameters</p>
    //             <p className="no-sear">Please Try again.</p>
    //         </div>
    //     )
    // }

    return (
        <Layout>
            <div className="dishes">
                <div className="dishes-search">
                    <select className="search-search" onChange={(e) => SelectChange(e)}>
                        <option className="search-search-option" value="0">Select Search Type</option>
                        <option className="search-search-option" value="1">Alphabet</option>
                        <option className="search-search-option" value="2">Name</option>
                        <option className="search-search-option" value="3">Ingredients</option>
                    </select>
                    <div className="search-box">
                        <input className="search-search-input" type="text" onChange={(e) => InputChange(e)} value={searchInput} />
                        <button className="search-search-btn" onClick={() => SearchDishes()}><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="dishes-filter">
                    <div className="fil">
                        <div className="fil-head" data-target="fil-cat">Categories</div>
                        <div className="fil-cont" id="fil-cat">
                            { showCateg() }
                        </div>
                    </div>
                    <br />
                    <div className="fil">
                        <div className="fil-head" data-target="fil-area">Cuisines</div>
                        <div className="fil-cont" id="fil-area">
                            { showAreas() }
                        </div>
                    </div>
                </div>
                <div className="dishes-main">
                    <div className="dishes-title">
                        {title}
                    </div>
                    { isLoading && showLoading() }
                    {/* { noSearchData && showNoSearchData() } */}
                    { !isLoading && !noSearchData && showDishes() }
                    <div className="pagni-btns">
                        { displayPrev && (<button className="pagni-prev-btn" onClick={() => pagniPrev()}><i className="fas fa-arrow-left"></i> &nbsp; Prev</button>)}
                        { displayNext && (<button className="pagni-next-btn" onClick={() => pagniNext()}>Next &nbsp; <i className="fas fa-arrow-right"></i></button>)}
                        {/* <button className="pagni-prev-btn" onClick={() => pagniPrev()}>&lt; Prev</button>
                        <button className="pagni-next-btn" onClick={() => pagniNext()}>Next &gt;</button> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dishes
