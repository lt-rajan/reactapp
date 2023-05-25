import Navbar from "./Navbar";
import logo from "../logo.svg";
import '../App.css';

export default function Home(){
    return(
        <>
            <Navbar title={'HOME'}/>            
            <h1 style={{textAlign:"center", paddingTop:"40px"}}>this is the home page</h1>
            <img src={logo}/>
        </>
    )
}