var oForm = document.getElementById('modalContent'); //表单
var aButton = oForm.getElementsByClassName('close'); //表单删除按钮
var aInput = oForm.getElementsByClassName('form-control'); //表单
var bAddText = document.getElementById('addText'); //添加表单按钮
var bEditModal = document.getElementById('editModal'); //编辑模板按钮
 var bClear=document.getElementById('clearOut');//清空按钮
 var textArea=document.getElementsByTagName('textarea');

 
//表单创建信息
var oInfo = document.getElementById('modalInfo');
var aInfoInput = oInfo.getElementsByTagName('input');

//var bNewModal=document.getElementById('newModal');
var bSave = document.getElementById('save');//保存按钮
var bCancel = document.getElementById('cancel');//取消按钮
//alert(aInfoInput.length);
//初始化
//记录当前初始值
var str0=textArea[0].innerHTML;
var str1=oInfo.innerHTML;
var str2=oForm.innerHTML;
unEdit();
//不可编辑状态
function unEdit() {
	for(var i = 0; i < aButton.length; i++) {
		aButton[i].style.display = 'none';
		aInput[i].disabled = 'true';
	}
	bAddText.disabled = 'true';
	bClear.disabled = 'true';
	textArea[0].disabled='true';
	for(var j=0;j<aInfoInput.length;j++){
		aInfoInput[j].disabled='true';
	}
}
//添加
//bAddText.onclick=function(){
//	oForm.append('<div class="form-group alert"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><input type="text" class="form-control" value=""></div>');
//}
//修改模板事件
function edit() {
	for(var i = 0; i < aButton.length; i++) {
		aButton[i].style.display = 'block';
		aInput[i].disabled = '';
	}
	bAddText.disabled = '';
	bClear.disabled = '';
	textArea[0].disabled='';
	for(var j=0;j<aInfoInput.length;j++){
		aInfoInput[j].disabled='';
	}
}
//点击修改按钮
bEditModal.onclick = edit;
//点击取消按钮
bCancel.onclick = function() {
	oForm.innerHTML = str2;
	oInfo.innerHTML=str1;
	textArea[0].value=str0;
	unEdit();
};
//清空按钮事件
bClear.onclick=function(){
	for(var i = 0; i < aButton.length; i++) {
		aInput[i].value = '';
	}
	for(var j=0;j<aInfoInput.length;j++){
		aInfoInput[j].value='';
	}
}

//获取当前时间作为创建时间
var today=new Date();
var oTime=document.getElementById('currentTime');
var month=today.getMonth()+1;
oTime.value=today.getFullYear()+'-'+month+'-'+today.getDate();

//创建新模板弹出框
var newInfo=document.getElementById('modalBody');
var newBCancel=document.getElementById('newCancel');
var bNewInfo=document.getElementById('addNewText');//添加项按钮
var newContent=document.getElementById('newContent');
var newmodalContent=document.getElementById('newmodalContent');
var aNewInput=newmodalContent.getElementsByTagName('input');
var str3=newContent.innerHTML;

newBCancel.onclick=function(){
	newContent.innerHTML=str3;
	aNewInput[0].value=aNewInput[1].value=textArea[1].value='';
}



