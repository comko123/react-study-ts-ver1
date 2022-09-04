/*eslint-disable*/
import {useEffect,useState,lazy,Suspense, useDeferredValue} from "react"
import axios from "axios"

 export interface torrents {
    date_uploaded: string
date_uploaded_unix: number
hash: string
peers: number
quality: string
seeds: number
size: string
size_bytes: number
type: string
url: string
}
interface allMovie {
background_image: string
background_image_original:string
date_uploaded: string
date_uploaded_unix: number
description_full:string
genres: string[]
id: string
imdb_code: string
language: string
large_cover_image:string
medium_cover_image: string
mpa_rating: string
rating:string
runtime:number
slug: string
small_cover_image: string
state: string
summary: string
synopsis:string
title:string
title_english: string
title_long: string
torrents: torrents[]
url: string
year:number
yt_trailer_code: string
}
interface propstype  {
    ratingDefault:number
    textDefault:string
}
const MoviePage = lazy(()=>import("./MoviePage"))
const Page = ({ratingDefault,textDefault}:propstype) => {
const [data,setData] =useState<allMovie[]>()
const state = useDeferredValue(data) 
useEffect(()=>{(async()=>{try{
    const {data:{data:{movies}}} = await axios(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${ratingDefault}&sort_by=year`)
     setData(movies)
}catch(e){console.log(e)}    
})()},[ratingDefault])
return (
<>
{!!state?state.map((item:allMovie)=>{
if(ratingDefault===Math.floor(Number(item.rating))){
return <Suspense key = {item.id} fallback={<h1>Loading...</h1>}>
<MoviePage {...item} textDefault={textDefault}/>
</Suspense>
}}):<h1>Loading.....</h1>
}
</>
)}
export default Page