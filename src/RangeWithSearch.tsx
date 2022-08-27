/*eslint-disable*/
import React, { useState,lazy, Suspense } from "react"
const Page = lazy(()=>import("./movieList/Page"))
import "./css/RangeWithSearch.moudule.scss"

const RangeWithSearch = () => {
    const [data,setData] = useState(6)
    const [text,setText] = useState("")
    return(<>
        <form onSubmit={e=>e.preventDefault()}>
    <div className="may">
    <div className="leftBox">
    <input className = "inputType" type = "range" min='30' max='90'step='10' defaultValue="60"
    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(Number.isInteger(Number(e.target.value)/10)){
        return setData(Number(e.target.value)/10)}}}/>
    <h1 className="defaultRat">평점 : {data}</h1>
    </div>

    <div className="rightBox">
    <input placeholder="영화 제목" className = "inputType" type ="text" onChange={e=>setText(e.target.value)}/> 
    <h1 className="defaultTit">제목 : {text}</h1>
    </div>
    </div>
    </form>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Page ratingDefault={data} textDefault ={text}/>
    </Suspense>
    </>)
    }
      
    
    export default RangeWithSearch
    