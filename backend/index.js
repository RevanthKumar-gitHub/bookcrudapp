import express from "express"
import mysql from "mysql"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const db= mysql.createConnection({
    host : "localhost",
    user  :"root",
    password : "1812",
    database : "AddressBook"
});

app.delete("/contacts/:id",(req,res)=>{
    const q = "Delete from contacts where id=?";
    const bid = req.params.id;
    db.query(q,[bid],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Data deleted");
    })
})

app.get("/contacts",(req,res)=>{
    const q = "SELECT * FROM contacts";

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/contacts",(req,res)=>{
    const q = "Insert into contacts(`name`,`phone`,`mail`,`profile`) values(?)";
    const values=[
        req.body.name,
        req.body.phone,
        req.body.mail,
        req.body.profile,
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("inserted!");
    })
})

app.put("/contacts/:id",(req,res)=>{
    const cid = req.params.id;
    const q = "Update contacts set `name`=?,`mail`=?,`phone`=?,`profile`=? where id=?";
    const values = 
    [
        req.body.name,
        req.body.mail,
        req.body.phone,
        req.body.profile,
    ]

    db.query(q,[...values,cid],(err,data)=>{
        try{
            if(err) return res.json(err);
            return res.json("Updated");
        }catch(err)
        {
            console.log(err);
        }
    })
})

app.get("/",(req,res)=>{
    res.json("Hello backend");
})

app.listen(8000,()=>{
    console.log("backend started");
})