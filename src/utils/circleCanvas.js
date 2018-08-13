let drawMain=function(drawing_elem, percent, forecolor, bgcolor) {
	/*
			@drawing_elem: 绘制对象
			@percent：绘制圆环百分比, 范围[0, 100]
			@forecolor: 绘制圆环的前景色，颜色代码
			@bgcolor: 绘制圆环的背景色，颜色代码
	*/
	var context = drawing_elem.getContext("2d");
	var center_x = drawing_elem.width / 2;
	var center_y = drawing_elem.height / 2;
	var rad = Math.PI*2/100; 
	var speed = 0;

	// 绘制背景圆圈
	function backgroundCircle(){
			context.save();
			context.beginPath();
			context.lineWidth = 20; //设置线宽
			var radius = center_x - context.lineWidth;
			context.lineCap = "round";
			context.strokeStyle = bgcolor;
			context.arc(center_x, center_y, radius, 0, Math.PI*2, false);
			context.stroke();
			context.closePath();
			context.restore();
	}

	//绘制运动圆环
	function foregroundCircle(n){
		context.save();
		context.strokeStyle = forecolor;
		context.lineWidth = 20;
		// context.lineCap = "round";
		var radius = center_x - context.lineWidth;
		context.beginPath();
		context.arc(center_x, center_y, radius , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
		context.stroke();
		context.closePath();
		context.restore();
	}

	//绘制文字
	function text(n){
			context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
			context.fillStyle = forecolor;
			var font_size = 40;
			context.font = font_size + "px Helvetica";
			var text_width = context.measureText(n.toFixed(0)).width;
			//context.fillText(n.toFixed(0)+"%", center_x-text_width/2, center_y + font_size/2);
			context.fillText(n.toFixed(0), center_x-text_width/2, center_y + font_size/2);
			context.restore();
	}

	//执行动画
	(function drawFrame(){
			window.requestAnimationFrame(drawFrame);
			context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
			backgroundCircle();
			text(speed);
			foregroundCircle(speed);
			if(speed >= percent) return;
			speed += 1;
	}());
}
export default drawMain;	