const express = require("express");// http server
const cors = require("cors");// to get from any server
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
       "https://api.chatengine.io/users/",
       {username: username, secret: username, first_name: username},
       {headers: {"private-key": "a4fb2974-c03f-4e01-bee3-13c28d328848"} }
    );
    return res.status(r.status).json(r.data)
  }
  catch(e)
  {
    return res.status(e.response.status).json(e.response.data)
  }
 
});// req username and return data

app.listen(3001);// running port