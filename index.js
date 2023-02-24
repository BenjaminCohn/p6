
const express = require("express")
const app = express()
const cors = require("cors")
const port = 3000

//middleware
app.use(cors())
app.use(express.json())
//routes
app.post("api/auth/Signup", (req, res)=> {
    console.log("Signup request:", req.body )
    res.send("message: Utilisateur enregistrer")
})

app.get('/', (req, res) => res.send('hello world!')) 


app.listen(port,() => console.log("Listenig on port " + port))