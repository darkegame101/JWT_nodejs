import express from "express";
import path from "path";
/**
 * 
 * @param {*} app = express app
 */
const configviewEngine =(app)=>{
    //config static file 
    app.use(express.static(path.join('./src', 'public')));
    app.set('views', path.join('./src', 'views')); // Đảm bảo thư mục là 'views'
    app.set('view engine', 'ejs');//Đặt file ejc làm file view engine mặt định
    
}

export default configviewEngine ;