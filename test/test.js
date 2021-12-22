//Dependencies
const Got = require("got")

//Main
describe("In requesting correctly", ()=>{
    it("should return random projects name", async()=>{
        var { body } = await Got("http://localhost:8080?amount=2")
        body = JSON.parse(body)

        expect(body.data.length).toEqual(2)
    })
})

describe("In requesting invalidly", ()=>{
    it("should return an error", async()=>{
        var { body } = await Got("http://localhost:8080")
        body = JSON.parse(body)

        expect(body.code).not.toEqual(200)
    })
})