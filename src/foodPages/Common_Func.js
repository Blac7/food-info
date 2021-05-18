import axios from 'axios'

export const getCategories = async () => {
    let temp = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
                .then(res => res.data.meals)
                .catch(err => console.log(err))
    return temp
}

export const getAreas = async () => {
    let temp = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
                .then(res => (res.data.meals))
                .catch(err => console.log(err))
    return temp
}

export const getIngredients = async () => {
    let temp = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
                .then(res => (res.data.meals))
                .catch(err => console.log(err))
    return temp
}