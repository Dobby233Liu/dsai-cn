String.prototype.replaceAll = function(s1,s2){
　　return this.replace(new RegExp(s1,"gm"),s2);
}
function init(){
while(true)
    alert('答案：'+prompt('问题：').replaceAll('？','！').replaceAll('可不','').replaceAll('喜不','').replaceAll('会不','').replaceAll('你','我').replaceAll('吗',''))
}
