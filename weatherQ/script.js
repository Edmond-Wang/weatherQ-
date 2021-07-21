/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
  new Vue({
    el: "#app",
    data: {
        city: "北京",
        forecastList: [],
        hotCitys: ["北京", "上海", "广州", "深圳"]
    },
    methods: {
        queryWeather() {
            this.forecastList = [];
            axios
                .get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.city}`)
                .then(res => {
                    this.forecastList = res.data.data.forecast;
                })
        },
        clickSearch(city) {
            this.city = city;
            this.queryWeather();
        }
    }
});