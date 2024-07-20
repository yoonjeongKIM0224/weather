import axios from 'axios';

const BASE_URL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";

var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'FJKlMr8vIXHMp/Qxkj548ivu3ao406ZHfCdEGiOzK1BOme/H8MwQBqhh8BR1dhlsqIwgn6G5wpQ2pzadx3zUow=='; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /**/
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20210628'); /**/
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/

export default {
    getAricles: function(page){
        console.log(page)
        console.log(BASE_URL + queryParams)
        return axios.get(BASE_URL + queryParams);
    }
}