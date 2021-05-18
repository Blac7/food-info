import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Layout from './Layout'

const Ingredients = () => {
    const [ing, setIng] = useState()
    const [searchInput, setSearchInput] = useState()
    const [srIng, setSrIng] = useState()
    const [searchDiv, setSearchDiv] = useState(false)

    // Pagination 
    const[minVal, setMinVal] = useState(0)
    const[limit, setlimit] = useState(12)
    const[maxVal, setMaxVal] = useState(12)
    const[displayPrev, setDisplayPrev] = useState(false)
    const[displayNext, setDisplayNext] = useState(true)

    const getIng = async () => {
        await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
                    .then(res => setIng(res.data.meals))
                    .catch(err => console.log(err))
    }

    useEffect(() => {
        getIng()
    }, [])

    useEffect(() => {
        checkMinMax()
    }, [minVal, maxVal])

    const getData = (min, max, arr2) => {
        let arr = []
        if(ing) {
            arr = arr2.filter((val, i) => i >= min && i < max)
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

        if(ing) {
            if(maxVal + limit > ing.length) setDisplayNext(false)
            else setDisplayNext(true)
        }
    }

    const ChangeInput = event => {
        setSearchInput(event.target.value)
    }

    const searchIng = () => {
        let arr = []
        if(ing && searchInput) {
            arr = ing.filter((val, i) => val.strIngredient.toLowerCase().includes(searchInput.toLowerCase()))
            setSearchDiv(true)
            setSrIng(arr)
        }
    }

    const showIng = () => {
        if(ing) {
            let arr = getData(minVal, maxVal, ing)
            return arr && arr.map((data, i) => (
                <Link className="ing-link" key={i} to={`/ingredient/${data.strIngredient}`}>
                    <div className="ing-box">
                        <img src={`https://www.themealdb.com/images/ingredients/${data.strIngredient}.png`} alt={data.strIngredient} className="ing-img" />
                        <div className="ing-name">
                            <p className="ing-name-head">{data.strIngredient}</p>
                            <p className="ing-name-desc">{data.strDescription ? data.strDescription : ("No Description")}</p>
                        </div>
                    </div>
                </Link>
            ))
        }
    }

    const getAllIng = () => {
        return (
            <div className="all-ing-box">
                <button className="all-ing" onClick={() => revertIng()}>
                    Get All Ingredients
                </button>
            </div>
        )
    }

    const revertIng = () => {
        setSearchDiv(false)
    }

    const showSearchIng = () => {
        if(srIng) {
            let arr = getData(minVal, maxVal, srIng)
            return arr && arr.map((data, i) => (
                <Link className="ing-link" key={i} to={`/ingredient/${data.strIngredient}`}>
                    <div className="ing-box">
                        <img src={`https://www.themealdb.com/images/ingredients/${data.strIngredient}.png`} alt={data.strIngredient} className="ing-img" />
                        <div className="ing-name">
                            <p className="ing-name-head">{data.strIngredient}</p>
                            <p className="ing-name-desc">{data.strDescription ? data.strDescription : ("No Description")}</p>
                        </div>
                    </div>
                </Link>
            ))
        }
    }

    return (
        <Layout>
            <div className="ing">
                <div className="ing-title">
                    <div className="ing-title-head">Ingredients</div>
                    <div className="ing-title-search">
                        <input type="text" className="ing-search-input" onChange={(e) => ChangeInput(e)} value={searchInput} placeholder="Enter Ingredient's Name" />
                        <button className="ing-search-btn" onClick={() => searchIng()}><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="ing-cont">
                    { !searchDiv && showIng() }
                    { searchDiv && getAllIng() }
                    { searchDiv && showSearchIng() }
                    <div className="pagni-btns">
                        { displayPrev && (
                            <button className="pagni-prev-btn" onClick={() => pagniPrev()}>
                                <i className="fas fa-arrow-left"></i> &nbsp; Prev
                            </button>
                        )}
                        { displayNext && (
                            <button className="pagni-next-btn" onClick={() => pagniNext()}>
                                Next &nbsp; <i className="fas fa-arrow-right"></i>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Ingredients
