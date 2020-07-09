var jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    var header = req.get('x-access-token');
      if (header) {
        var token = header.split(" ");
  
        if (!token) {
          return res.status(403).send({ auth: false, message: 'No token provided.' });
        }
        else {
          jwt.verify(token[1], "jlEyuXwnNDTtDBoWojRxkwuLlpA5dop0", function (err, decoded) {
            if (err) {
              return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }
            else {
              req.userId = decoded.data.userid;
              usersSchema.findById(decoded.data.userid)
                .then(result => {
                  if ( result._id== decoded.data.userid) {
           
                    req.userRole=result._id;
                    next();
                  }
                  else {
  
                    console.log("invalid user");
  
                  }
                }).catch(err => {
                })
              // next();
  
            }
            // if everything good, save to request for use in other routes
  
          });
        }
      }
      else {
        res.json({
          error: true,
          success: false,
          msg: "Invalid Request"
        })
  
      }
    
  }
  
  module.exports = (verifyToken);
  
  