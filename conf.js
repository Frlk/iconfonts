/*
* @by helondeng, moxhe
* config info
*/

module.exports = {
	// 监听端口
	port: 4001,
	// svg path
	svgPath: './store/ke.qq.com-svg',
	allSvgZipPath: 'download/svgs.zip',
	// mongodb info
	dbInfo: {
		IP: '127.0.0.1',
		port: 27017,
		dbName: 'iconfonts'
	},
    diff: 32,
	auth: {
		upload: 1,
        business: 2,
        updateIcon: 4
	}
};
