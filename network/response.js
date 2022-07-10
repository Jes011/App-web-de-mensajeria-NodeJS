

module.exports = (req,res,content,statusCode)=>{
    res.status(statusCode);
    res.send({content: content});
}