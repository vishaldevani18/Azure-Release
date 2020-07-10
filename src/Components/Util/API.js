import axios from 'axios';
// export default axios.create({
//     baseURL:'https://vishal-nodejs.herokuapp.com/'
// })
let baseURL = 'http://localhost:3001/';
const API = {
    MakeRequest: function (endpoint, method, SuccessBlock, CatchBlock, FinallyBlock) {
        let url = baseURL + endpoint;
        return axios({
            method: method,
            url: url,
        })
            .then((response) => {
                if (SuccessBlock) {
                    return SuccessBlock(response);
                }
                return null;
            })
            .catch((error) => {
                if (CatchBlock) {
                    return CatchBlock(error);
                }
                return null;
            })
            .finally(() => {
                if (FinallyBlock) {
                    return FinallyBlock()
                }
                return null;
            });
    },
    MakeRequestWithBody: function (endpoint, method, values, SuccessBlock, CatchBlock, FinallyBlock) {
        let url = baseURL + endpoint;
        return axios({
            method: method,
            url: url,
            data: values
        })
            .then((response) => {
                if (SuccessBlock) {
                    return SuccessBlock(response);
                }
                return null;
            })
            .catch((error) => {
                if (CatchBlock) {
                    return CatchBlock(error);
                }
                return null;
            })
            .finally(() => {
                if (FinallyBlock) {
                    return FinallyBlock()
                }
                return null;
            });
    }
}
export default API;