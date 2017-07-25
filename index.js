/*
* @Author: user
* @Date:   2017-07-25 15:27:26
* @Last Modified by:   user
* @Last Modified time: 2017-07-25 16:41:27
*/
window.onload = function(){
//获取相关事件源
var pointer = document.querySelector('#pointer');
var turntable = document.querySelector('#turntable');
var messageBox = document.querySelector('.message');
//定义相关变量
var cat = 51.4;
var num = 0;
var offOn = true;

//pointer点击事件触发转盘转动
pointer.onclick = function(){
	if(offOn){
		turntable.style.transform="rotate(0deg)";
		offOn = !offOn;
		rotateing();
	}
	else{
		alert("您已经抽过奖了！！！")
	}
}
//转盘转动事件
function rotateing(){
	var timer = null;
	var rdm = 0;
	timer = setInterval(function(){
		if(rdm/360<1){
			rdm = Math.floor(Math.random()*1800);
		}
		else{
			turntable.style.transform="rotate("+rdm+"deg)";
			setTimeout(function(){
			  num = rdm%360;
			  if(num<=cat*1){
			  	messageBox.style.display = "block";
                messageBox.innerHTML = "4999元" ;
			  }
			  else if(num<=cat*2){
			  	messageBox.style.display = "block";
                messageBox.innerHTML = "免单50元" ;
			  }
			  else if(num<=cat*3){
			  	messageBox.style.display = "block";
                messageBox.innerHTML = "免单10元" ;
			  }
			  else if(num<=cat*4){
			  	messageBox.style.display = "block";
                messageBox.innerHTML = "免单5元" ;
			  }
			  else if(num<=cat*5){
			  	messageBox.style.display = "block";
                messageBox.innerHTML = "免分期服务费" ;
			  }
			  else if(num<=cat*6){
			  	messageBox.style.display = "block";
                messageBox.innerHTML = "提高白条额度" ;
			  }
			  else{
			  	messageBox.style.display = "block";
                messageBox.innerHTML = "未中奖" ;
			  }
			}, 3000);
		}
	}, 30)

}
}
