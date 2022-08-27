/*eslint-disable*/
import Detail from "./detailPage/Detail";
import ErroePages from "./errorPage/ErrorPages";
import { Routes, Route } from "react-router-dom";
import RangeWithSearch from "./RangeWithSearch";
export default function App() {
  return (
    <Routes>
    <Route path="*" element={<ErroePages/>}/>
    <Route path="/" element={<RangeWithSearch/>}/>
    <Route path="/movie/:id" element={<Detail/>}/>
    </Routes>
  )
}

 
