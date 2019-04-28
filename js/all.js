var check = document.querySelector('.postResult');
check.addEventListener('click',counting);
var today = new Date();
var hhh = document.querySelector('#height');
var www = document.querySelector('#weight');
var eva = "";
var data = JSON.parse(localStorage.getItem('yourBMI')) || [];
var check_holder = document.querySelector('.result_list');
check_holder.addEventListener('click',del);
var seeResult_reload = document.querySelector('.seeResult_reload');
var seeResult_reload_IMG = document.querySelector('.seeResult_reload IMG');
var postResult_bmi = document.querySelector('.postResult_bmi');
seeResult_reload.addEventListener('click',again);
posting(data);
function counting(e) {
    e.preventDefault();
    if (hhh.value == "" || www.value == "") {alert("請輸入正確數字");return;}
	var height = (hhh.value / 100) * (hhh.value / 100);
	var weight = www.value;
	var x = (weight / height);
	x = x.toFixed(1);
	var nowtime = (today.getFullYear()-1911) + '/' + (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getHours() + ':' + today.getMinutes();
	console.log(nowtime);
	var txt = {
		BMI:x,
		height:hhh.value,
		weight:www.value,
		day:nowtime
	};
	data.push(txt);
	localStorage.setItem('yourBMI',JSON.stringify(data));
	posting(data);
	inputChg(txt);
}
function posting(data){
	var str = "";
	var bmiValue = "";
	var color = "";
	for (var i = 0; i < data.length; i++) {
		if (data[i].BMI < 18.5) {
			eva = "體重過輕";
			color = "color_1";
		}else if (data[i].BMI > 18.5 && data[i].BMI <= 25) {
			eva = "體重正常";
			color = "color_2";

		}else if (data[i].BMI > 25 && data[i].BMI <= 30){
			eva = "體重過重";
			color = "color_3";

		}else if (data[i].BMI > 30 && data[i].BMI <= 35){
			eva = "中等肥胖";
			color = "color_4";

		}else if (data[i].BMI > 35 && data[i].BMI <= 40){
			eva = "嚴重肥胖";
			color = "color_5";

		}else if (data[i].BMI > 40){
			eva = "非常嚴重肥胖";
			color = "color_6";
		};
		str += 
			'<li data-num="'+i+'" class="'+ color +'">'+
				'<table>'+
					'<tr>'+
						'<td>'+eva+
						'</td>'+
						'<td>'+'<span>BMI</span>'+data[i].BMI+
						'</td>'+
						'<td>'+'<span>weight</span>'+data[i].weight+"kg"+
						'</td>'+
						'<td>'+'<span>height</span>'+data[i].height+"cm"+
						'</td>'+
						'<td>'+'<span>' + data[i].day + '</span>'+
						'</td>'+
					'</tr>'+
				'</table>'+
				'<a href="#" class="lidel">'+
				'<i data-num="'+i+'" class="fas fa-trash-alt"></i>'+
				'</a>'+
			'</li>';
	}
	check_holder.innerHTML = str;
}

// 按鈕變換
function inputChg(txt){
	console.log("ok");
	var inputHide = document.querySelector('.postResult');
	inputHide.setAttribute('style','display:none');
	var str = '<li>' + txt.BMI + '</li>' +'<li>' + eva + '</li>';
	switch(eva){
		case '體重過輕':
		postResult_bmi.setAttribute('class','postResult_bmi_act');
		postResult_bmi.setAttribute('style','border:6px solid #31BAF9; color:#31BAF9;');
		seeResult_reload.setAttribute('style','background:#31BAF9;display:block;')
		console.log('1');
		break;
		case '體重正常':
		postResult_bmi.setAttribute('class','postResult_bmi_act');
		postResult_bmi.setAttribute('style','border:6px solid #86D73F; color:#86D73F;');
		seeResult_reload.setAttribute('style','background:#86D73F;display:block;')
		console.log('2');
		break;
		
		case '體重過重':
		postResult_bmi.setAttribute('class','postResult_bmi_act');
		postResult_bmi.setAttribute('style','border:6px solid #FF982D; color:#FF982D;');
		seeResult_reload.setAttribute('style','background:#FF982D;display:block;')
		console.log('3');
		break;
		
		case '中等肥胖':
		postResult_bmi.setAttribute('class','postResult_bmi_act');
		postResult_bmi.setAttribute('style','border:6px solid #FF6C02; color:#FF6C02;');
		seeResult_reload.setAttribute('style','background:#FF6C02;display:block;')
		console.log('4');
		break;


		case '嚴重肥胖':
		postResult_bmi.setAttribute('class','postResult_bmi_act');
		postResult_bmi.setAttribute('style','border:6px solid #FF6C02; color:#FF6C02;');
		seeResult_reload.setAttribute('style','background:#FF6C02;display:block;')
		console.log('5');
		break;


		case '非常嚴重肥胖':
		postResult_bmi.setAttribute('class','postResult_bmi_act');
		postResult_bmi.setAttribute('style','border:6px solid #FF1200; color:#FF1200;');
		seeResult_reload.setAttribute('style','background:#FF1200;display:block;')
		console.log('6');
		break;

	}
	postResult_bmi.innerHTML = str;
}

function del(e){
	if (e.target.nodeName !== 'I' && e.target.nodeName !== 'A') {console.log('不是A連結或I唷'); return;}
		var index = e.target.dataset.num;
		data.splice(index,1);
		localStorage.setItem('yourBMI',JSON.stringify(data));
		posting(data);
}

function again(e){
	e.preventDefault();
	window.location.reload();
	console.log('bingo');
}

var con = document.querySelector('Body');
con.addEventListener('click',searching);
function searching(e){
	console.log(e.target.nodeName);
}