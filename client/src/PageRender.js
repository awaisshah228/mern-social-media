
import React from 'react'
import {useParams} from 'react-router-dom'
import Notfound from './components/NotFound'
const  generatePage=(pageName)=>{
    const component=()=>require(`./pages/${pageName}`).default
    try {
        return React.createElement(component())
    } catch (error) {
        return <Notfound/>
    }
}
const PageRender = () => {
    const {page,id}=useParams()
    console.log(useParams())
    let pageName=''
    if(id){
        pageName=`${page}/[id]`
    }
    else{
        pageName=`${page}`
    }
    return generatePage(pageName)
}

export default PageRender
