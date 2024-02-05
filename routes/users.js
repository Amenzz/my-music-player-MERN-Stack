import express from 'express';

const router = express.Router();
const users= [
    {
        name:"aman",
        lastname: "john",
        age:25
    },
    {
        name:"bro",
        lastname: "new",
        age:30
    }
]
router.get('/',(req,res)=>{
    // console.log(users);
    res.send(users);
});
router.post('/',(req,res)=>{
    

    const user= req.body;
    users.push(user);
    res.send(`user with name ${user.name} added to the database`);
})
export default router;