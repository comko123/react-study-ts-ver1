/*eslint-disable*/
import "../css/SemeDetaill.moudule.scss";
export interface semiDetail {
    like_count:number
    description_full:string 
    title_long:string
    runtime:number
    rating:number
    genres:string[]
    medium_cover_image:string
}
const SemeDetail = ({like_count,description_full,title_long,runtime,
rating,genres,medium_cover_image}:semiDetail)=>{
return(<>
<div className="container">
<img src={medium_cover_image} alt ="no"/>
<div className="parts">
<h1 className="title">제목 : {title_long}</h1>
<ul style = {{fontSize : "25px"}}>
<li>샹영시간 :{runtime}분</li>
<li>평점 : {rating}</li>
<li>추천수 : {like_count}</li>
<li>장르: { genres.map((k,index)=><span style = {{"marginLeft":"10px"}}key ={index}>{k} </span>)}</li>
</ul>
<h3 className="description">상세내용 : <br/><br/>{description_full}</h3>
</div>
</div>
</>)
    
}
export default SemeDetail