let Cities = require('../../models/v1/cities')
module.exports = {
    getCity: async(ctx, next) => {
		console.log(ctx.request.query)
		const type = ctx.request.query.type;
		ctx.cookies.set('hello', 'test')
        let cityInfo;
		try{
			switch (type){
                case 'guess': 
                    const city = await this.getCityName(ctx);
                    cityInfo = await Cities.cityGuess(city);
					break;
                case 'hot': 
                    console.log('hot')
                    cityInfo = await Cities.cityHot();
                    console.log('--------hot')
					break;
				case 'group': 
					cityInfo = await Cities.cityGroup();
					break;
				default: 
					ctx.body = {
						name: 'ERROR_QUERY_TYPE',
						message: '参数错误',
					}
					return
			}
			ctx.body = cityInfo
		}catch(err){
			ctx.body = {
				name: 'ERROR_DATA',
				message: '获取数据失败',
			}
		}
    },
    getCityName: async(req) =>{
		try{
			const cityInfo = await this.guessPosition(req);
			/*
			汉字转换成拼音
			 */
	    const pinyinArr = pinyin(cityInfo.city, {
		  	style: pinyin.STYLE_NORMAL,
			});
			let cityName = '';
			pinyinArr.forEach(item => {
				cityName += item[0];
			})
			return cityName;
		}catch(err){
			return '北京';
		}
	}
}