const express =require("express");
const isloggedIn = require("../middlewares/isloggedIn");
const router = express.Router();


router.get("/",(req,res)=>{
    let success= req.flash("success");
    let error = req.flash("error");
    let isLogged=false;
    if(!req.cookies.token){
        return res.render("index",{success,error,isLogged});
    }
    isLogged=true;
    const findEle=(id)=>{
        let ob= document.querySelector('#id');
        console.log(ob);
    }
    res.render("index",{success,error,findEle,isLogged});
})

router.get("/learnMore",(req,res)=>{
    let isLogged=false;
    res.render("learnMore",{isLogged});
})

router.get("/confirmUser",(req,res)=>{
    let isLogged=false;
    let success= req.flash("success");
    let error = req.flash("error");
    res.render("confirmUser",{success,error,isLogged});
})

router.get("/login",(req,res)=>{
    let isLogged=false;
    let success= req.flash("success");
    let error = req.flash("error");
    res.render("login",{success,error,isLogged});
})

router.get("/loginAdmin",(req,res)=>{
    let isLogged=false;
    let success= req.flash("success");
    let error = req.flash("error");
    res.render("loginAdmin",{success,error,isLogged});
})

module.exports= router;