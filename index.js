//Dependencies
const ProjectName_G = require("project-name-generator")
const Express = require("express")
const J2Url = require("j2url")

//Variables
const Web = Express()
const Port = process.env.Port || 8080

//Main
Web.get("/", function(req, res){
    const amount = J2Url.getParam(req.originalUrl, "amount")

    if(!amount){
        return res.json({
            "status": "fail",
            "message": "Invalid amount.",
            "code": 406,
            "data": []
        }).end()
    }

    if(isNaN(amount)){
        return res.json({
            "status": "fail",
            "message": "The amount is not a number.",
            "code": 406,
            "data": []
        }).end()
    }

    if(amount <= 1){
        return res.json({
            "status": "fail",
            "message": "The amount should be greater than 1.",
            "code": 406,
            "data": []
        }).end()
    }

    res.json({
        "status": "success",
        "message": `Successfully generated ${amount} project names.`,
        "code": 200,
        "data": ProjectName_G({ words: amount, alliterative: true }).raw
    }).end()
})

//Listener
Web.listen(Port, ()=>{
    console.log(`Server is running in port ${Port}`)
})