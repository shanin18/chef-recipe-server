const express = require('express')
const app = express();
const port = process.env.PORT || 5000
const allChef = require("./data/chef.json");
const recipes = require("./data/chefRecipe.json");
const cors = require("cors");

app.use(cors());

app.get('/', (req, res) => {
  res.send('Savory selections Running...')
});

app.get("/chef", (req, res)=>{
    res.send(allChef)
})

app.get("/recipes", (req, res)=>{
    res.send(recipes)
})

app.get("/chef/:id", (req, res)=>{
    const id = req.params.id;
    const selectedItem = allChef.find(chef => chef.id == id)
    res.send(selectedItem)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})