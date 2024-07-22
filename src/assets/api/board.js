import axios from 'axios';

let keyId = '11b9987ef570445ca30d';
let serviceId = 'COOKRCP01';
let dataType = 'json';
let startIdx = 1;
let endIdx = 10;

const BASE_URL = `http://openapi.foodsafetykorea.go.kr/api/${keyId}/${serviceId}/${dataType}/${startIdx}/${endIdx}`;

// let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'11b9987ef570445ca30d';
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000');
// queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('JSON');

export default {
    getAricles: function(){
        return axios.get(BASE_URL);
    }
}