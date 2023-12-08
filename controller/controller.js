const { error } = require("console");
const userdb = require("../model/login");

const regisVal = require("../model/registration")

const bcrpt = require("bcrypt");

const jwt = require("jsonwebtoken");

const SECRET_KEY= "NOTESAPI";
exports.create =  async(req,resp)=>{
    if(!req.body){

        resp.status(404).render("registartion",{mess:"incomplete input "})
    }

    try{
        const{password}= req.body;

        const hashedPassword = await bcrpt.hash(password,10);
        const user = new regisVal({

            name:req.body.name,
            profession:req.body.profession,
            email:req.body.email,
            password:hashedPassword,
            city:req.body.city,
            country:req.body.country,
            about:req.body.about

        }
            )

            
          const data  = await user.save();
          const token = jwt.sign({email:user.email},SECRET_KEY);
        //   resp.json({ token });


          resp.render("registration",{mess:" Registration sucessfull"})


    }
    catch{

       resp.status(404).render("registration",{mess:"error"})
       console.log(error)
    }



}

exports.login = async(req,resp)=>{

    if(!req.body){

        resp.status(404).render("login",{mess:"incomplete input "})
    }
    try{

     const email = req.body.email;
     const password = req.body.password;

       const values = await regisVal.findOne({email});

       const matchedPassword = await bcrpt.compare(password,values.password)

       if(matchedPassword){

        resp.render("profile",{values})
       }
       else {

        resp.render("login",{mess:" please do registration "})
       }
       const token = jwt.sign({email:values.email},SECRET_KEY);
    //    if(values){

    //     resp.render("profile",{values})
    //    }
    //    else {

    //     resp.render("login",{mess:" please do registration "})
    //    }
    }
    catch{

        resp.status(400).render("login",{mess:" please do registration "})

    }

}