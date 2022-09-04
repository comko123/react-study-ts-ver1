/*eslint-disable*/
import "../css/MoviePage.moudule.scss";
import { Link } from "react-router-dom";
interface cli {
    medium_cover_image:string
    genres:string[]
    summary:string
    title_long:string
    id:string
    rating:string
    textDefault:string
}
type parm = [string,string[],string,string,string,string]
const movieData = (...rest:parm) => {
return <>
<img src = {rest[0]} alt = {rest[4]}/>
<div className = "cont">
<Link to ={`/movie/${rest[5]}`}>
<h1 className="link" style={{color:"aqua"}}>제목 : {rest[3]}</h1>
</Link>
<h3>평점 : {rest[4]}</h3>
<ul>장르 : {rest[1].map((G:string,index:number)=><li key = {index}>{G}</li>)}</ul>
<h2>줄거리 : {rest[2]}</h2>
</div></>}

const MoviePage = ({medium_cover_image,genres,summary,id,title_long,rating,textDefault}:cli) => {
return (<div className = "movie">
{!!textDefault ?
(title_long.includes(textDefault)||title_long.toLowerCase().includes(textDefault))?
movieData(medium_cover_image,genres,summary,title_long,rating,id):null
: movieData(medium_cover_image,genres,summary,title_long,rating,id)}
</div>)}
export default MoviePage


