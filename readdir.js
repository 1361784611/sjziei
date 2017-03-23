var fs=require('fs');
var ary=[];
fs.readdir('./',function(err,files) {
	files=files.map(function(item,index){
		if(item==='.git') return;
		return 'https://zhufengpeixun.github.io/sjziei/'+item+'/';
	});
	fs.writeFileSync('./list.json',JSON.stringify(files));
});

