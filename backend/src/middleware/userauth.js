import jwt from 'jsonwebtoken'

const userAuth=(req,res,next)=>{

try{
  const token=req.headers.token
  const response=jwt.verify(token,process.env.jwt_secret )
if(response){
      req.body = req.body || {};
req.body.userId=response.id;
next();

}
else{
res.json({
message:"invalid credintial"

})


}
}

catch(error){
console.log(error);
    res.json({
message:"server error from auth"

    })


}

}

export default userAuth;