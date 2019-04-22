var check = document.querySelector('.seeResult');
check.addEventListener('click',counting);
var hhh = document.querySelector('#height');
var www = document.querySelector('#weight');
var data = JSON.parse(localStorage.getItem('yourBMI')) || [];
var check_holder = document.querySelector('.result_list');
function counting(e) {
    e.preventDefault();
    
	var height = (hhh.value / 100) * (hhh.value / 100);
	var weight = www.value;
	var x = (weight / height).toFixed(2);
	console.log(x);
	var txt = {
		BMI:x,
		height:hhh.value,
		weight:www.value
	};
	data.push(txt);
	posting(data);
	localStorage.setItem('yourBMI',JSON.stringify(data));
}
function posting(data){
	var str = "";
	var eva = "";
	for (var i = 0; i < data.length; i++) {
		if (data[i].BMI < 18.5) {
			eva = "體重過輕"
		}else if (data[i].BMI > 18.5 && data[i].BMI <= 25) {
			eva = "體重正常"
		}else if (data[i].BMI > 25 && data[i].BMI <= 30){
			eva = "體重過重"
		}else if (data[i].BMI > 30 && data[i].BMI <= 35){
			eva = "中等肥胖"
		}else if (data[i].BMI > 35 && data[i].BMI <= 40){
			eva = "嚴重肥胖"
		}else if (data[i].BMI > 40){
			eva = "非常嚴重肥胖"
		};
		str += 
			'<li data-num="'+i+'">'+
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
						'<td>'+'<span>時間</span>'+
						'</td>'+
					'</tr>'+
				'</table>'+
			'</li>'
	}
	check_holder.innerHTML = str;
}



var con = document.querySelector('Body');
con.addEventListener('click',searching);
function searching(e){
	console.log();
}