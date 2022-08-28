/*eslint-disable*/
import {useEffect,useState,lazy, Suspense} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { torrents } from "../movieList/Page"
interface allDetail {
background_image: string
background_image_original: string
date_uploaded: string
date_uploaded_unix: number
description_full: string
description_intro: string 
download_count: number
genres: string[]
id: number
imdb_code: string
language: string
large_cover_image: string
like_count: number
medium_cover_image: string
mpa_rating: string
rating: number
runtime: number
slug: string
small_cover_image:string
title: string
title_english: string
title_long:string
torrents: torrents[]
url: string
year: number
yt_trailer_code: string
}
const SemeDetail = lazy(()=>import("./SemeDetail"))
const Detail = () => {
const [state,setState] =useState<allDetail>()
const {id}=useParams()
useEffect(()=>{(async()=>{
    try{setState(
await(await axios(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).data.data.movie)    
    }catch(e){console.log(e)}
    })()},[])
return(<>{<Suspense fallback={<h1>Loading...</h1>}>
{!!state?<SemeDetail 
like_count={state.like_count}
description_full={state.description_full}
title_long={state.title_long}
genres={state.genres}
runtime={state.runtime}
rating={state.rating}
medium_cover_image={state.medium_cover_image}
/>:<h1>Loading...</h1>}
</Suspense>}</>   
)}
export default Detail