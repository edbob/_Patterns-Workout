/**
 * список изображений
 * (предположим, что изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg существуют, а
 * fake.jpg - нет)
 * 
 * @type {string[]}
 */
var imgList = ["img/1.jpg", "img/2.jpg", "img/fake.jpg", "img/3.jpg", "img/4.jpg"];

/**
 *
 * подгружаем изображение по указанному url
 *
 * @param url
 * @returns {Promise}
 */
function loadImage(url)
{
	//объект "обещание"
	return new Promise(function(resolve, reject)
	{
		var img = new Image();
		img.onload = function()
		{
			//в случае успешной загрузки изображения, результат "обещания" будет url этого изображения
			return resolve(url);
		}
		img.onerror = function()
		{
			//в случае не успешной загрузки изображения, результат "обещания" будет url этого изображения
			return reject(url);
		}
		img.src = url;
	});
}

//считаем, что на странице есть элемент с id="images", например, div
loadImage(imgList[0])
.then(function(url)
{
	$('#images').append('<img src="'+url+'" style="width: 200px;" />');
})
.catch(function(url)
{
	//как и сообщалось выше, не обязательно, чтобы сюда передавался объект типа Error
	//например, вы захотите сохранить в отдельный массив пути к картинкам , которые не подгрузились, и потом что-нибудь с ним сделать...
	console.log("не удалось загрузить изображение по указанному пути: ", url);
});