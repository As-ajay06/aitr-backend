
const jwt = require("jsonwebtoken");
// user authentication

function adminAuthentication () {
    // check token 

    const token = localStorage.getItem('token');
    if(!token){
        return res.json("please login")
    }
    
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    /*
    decoded = {
        facultyId : wsdsfsg34q3rwet3w4t3rt,
        role: "admin", "superadmin"
    }
    */
    if(decoded){
        res.facultyId = decoded.facultyId ;
        next()
    }else{
        res.json("You are not authorized")
    }
    

    // get the facultuId
}


module.exports = adminAuthentication;