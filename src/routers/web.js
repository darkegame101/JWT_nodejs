import express from "express";

const router= express.Router();

/**
 * 
 * @param {*} app =express app
 */
const initwebRouters =(app)=>{
    router.get("/",(req,res)=>{
        return res.send("hi bae");
    })

    return app.use("/",router)
}

export default initwebRouters;