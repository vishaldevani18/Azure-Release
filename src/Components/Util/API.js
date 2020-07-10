import axios from 'axios';
let baseURL = 'https://vishal-nodejs.herokuapp.com/';
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