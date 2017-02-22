
/*用函数封装跳转*/
function startgame(){
	window.location.href="2.html";

}

function checknumber(){
	var check = window.document.getElementById("number");
	var number = check.value;
	if(number>18||number<4){
		confirm("请输入一个正确的玩家数量");
		return false;
	}
	else{
		var copnum;
		var villagernum;
		var killernum;
		if(number<=8){
			copnum = 1;
			killernum = 1;
			villagernum = number-copnum-killernum;
		}else if(number>=9&&number<11){
			copnum = 2;
			killernum = 2;
			villagernum = number-copnum-killernum;
		}else if(number>=12&&number<15){
			copnum = 3;
			killernum = 3;
			villagernum = number-copnum-killernum;
		}else{
			copnum = 4;
			killernum = 4;
			villagernum = number-copnum-killernum;
		}
		var villager = window.document.getElementById("villager");
		var killer = window.document.getElementById("killer");
		var cop = window.document.getElementById("cop");
		villager.innerHTML = villagernum;
		killer.innerHTML = killernum;
		cop.innerHTML = copnum;
	}
	
	return true;
} 

function idallocation(){
	var check = window.document.getElementById("number");
	var number = check.value;
	if(number<4||number>18){
		alert("人数设置不正确");
		return false;
	}
	var killernum = killer.innerHTML;
	var copnum = cop.innerHTML;
	var villagernum = villager.innerHTML;
	window.location.href="3.html?killernum="+killernum+"&villagernum="+villagernum+"&copnum="+copnum+"&number="+number;
}



/*重点：实现两个页面之间的传参*/
function showid(){
	var args = new Object( );
	/*var thisURL = document.URL;*//*获取跳转的路径*/
	var query = location.search.substring(1); //location.search返回URL的查询部分，从问号开始包括问号。
	var  pairs =query.split("&");  
  	
	for(var i = 0; i < pairs.length; i++) {
	var pos = pairs[i].indexOf('='); // Look for "name=value"
	if (pos == -1) continue; // If not found, skip
	var argname = pairs[i].substring(0,pos); // Extract the name
	var value = pairs[i].substring(pos+1); // Extract the value
	value = decodeURIComponent(value); // Decode it, if needed 可把字符串作为URI 组件进行编码
	args[argname] = value; // Store as a property

	}
	




	var number = args["number"];
	var killernum = args["killernum"];
	var villagernum = args["villagernum"];
	var copnum = args["copnum"]
	
	var player = new Array(number);//初始数组


	for(var i = 0 ; i<number;i++){
		player[i] = 0;
	}

	//值为1为杀手，2为警察,0为村民
	for(var i=0;i<killernum;){
		play = Math.floor(Math.random()*number);
		if(player[play]==0){
			player[play] = 1;
			i++;
		}
		else{
			continue;
		}
		
	}

	for(var i=0;i<copnum;){
		play = Math.floor(Math.random()*number);
		if(player[play]==0){
			player[play] = 2;
			i++;
		}
		else{
			continue;
		}
		
	}
}