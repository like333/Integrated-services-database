var aul = document.getElementsByClassName('imglist');
var aImg=aul[0].getElementsByTagName('img');
var aLi = aul[0].getElementsByTagName('li');
var achk = aul[0].getElementsByTagName('dd');
//初始化
aLi[0].className = 'selected';
achk[0].className = 'imgchecked';
achk[0].getElementsByTagName('input')[0].checked = true;

//鼠标滑过：Li有边框，显示选择框

//常态：li无边框，不显示选择框，选择框未选中
//选中状态：Li有边框，显示选择框，选中
function xuanzhong(oli, odd) {
	oli.className = 'selected';
	odd.className = 'imgchecked';
	odd.getElementsByTagName('input')[0].checked = true;
}
//				全选按钮
function chkAll() {
	for(var i = 0; i < aLi.length; i++) {
		aLi[i].className = 'selected';
		achk[i].className = 'imgchecked';
		achk[i].getElementsByTagName('input')[0].checked = true;
	}
}
//				取消全选
function unChk() {
	for(var i = 0; i < aLi.length; i++) {
		aLi[i].className = '';
		achk[i].className = 'imgcheck';
		achk[i].getElementsByTagName('input')[0].checked = false;
	}
}

//反选
function otherChk() {
	for(var i = 0; i < aLi.length; i++) {
		if(achk[i].getElementsByTagName('input')[0].checked == true) {
			aLi[i].className = '';
			achk[i].className = 'imgcheck';
			achk[i].getElementsByTagName('input')[0].checked = false;
		} else {
			aLi[i].className = 'selected';
			achk[i].className = 'imgchecked';
			achk[i].getElementsByTagName('input')[0].checked = true;
		}
	}
}

var chk;
for(var i = 0; i < aLi.length; i++) {
	//鼠标移入
	aLi[i].index=i;
	aLi[i].onmouseover = function() {
			//chk = this.getElementsByTagName('dd')[0];
			achk[this.index].className='imgchecked'
			//chk.className = 'imgchecked';
			var m = achk[this.index].getElementsByTagName('input')[0];
			if(m.checked) {
				this.className = 'selected';
			}
		}
		//	鼠标移出
	aLi[i].onmouseout = function() {
		chk = this.getElementsByTagName('dd')[0];
		var m = chk.getElementsByTagName('input')[0];
		if(m.checked == false) {
			chk.className = 'imgcheck';
			this.className = '';
		}
	}
}
//鼠标点击查看图片
var overlay = document.getElementById('viewImgBox');
var closeBox = document.getElementById('closebox');
var imgBox = document.getElementById('viewImg');
var pic = imgBox.getElementsByTagName("img")[0];

//图片路径
var imgData = {
	url: ['../../image/test/1.png',
		'../../image/test/2.jpg',
		'../../image/test/3.png',
		'../../image/test/4.png',
		'../../image/test/1.png',
		'../../image/test/2.png',
		'../../image/test/3.png',
		'../../image/test/4.png',
		'../../image/test/1.png',
		'../../image/test/2.png',
		'../../image/test/3.png'
	]
};
//点击显示图片
for(var i = 0; i < aLi.length; i++) {
	aImg[i].index = i;
	aImg[i].onclick = function() {
		showOverlay();
		pic.src = imgData.url[this.index];
		var w=-pic.width/2;
		var h=-pic.height/2;
		pic.style.marginLeft=w+'px';
		pic.style.marginTop=h+'px';
		//得到当前图片的宽高
　	　}
	
}

//点击关闭按钮，遮罩消失
closeBox.onclick = hideOverlay;
closeBox.onmouseover=function(){
	this.style.cursor='pointer';
}
closeBox.onmouseout=function(){
	this.style.cursor='default';
}
//aLi[1].bind('click',function(){
//	hideOverlay();
//});
//};
//显示遮罩层
function showOverlay() {
	overlay.className = 'show';
}
/* 隐藏覆盖层 */
function hideOverlay() {
	overlay.className = '';
}