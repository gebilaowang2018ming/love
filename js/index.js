window.onload=function(){
	var img=document.getElementById("img");
	var h2=document.getElementById("h2");
	var p=document.getElementById("p");
	var p1=document.getElementById("p1");
	var span=document.getElementById("span");
	var yes=document.getElementById("yes");
	var no=document.getElementById("no");
	var text=document.getElementById("text");
	function y(){
			var z=new Array("为什么不可以，你这么傲娇？？","就占用你一会儿","你不看会后悔的","好吧，只能用强了");
		var i=0
		function x(){
			p.innerHTML="";
			h2.innerHTML="问题1：你感觉我怎么样？？"
			span.innerHTML="<p><input type='checkbox'>很帅</p><p><input type='checkbox'>幽默</p><p><input type='checkbox'>有气质</p>"
			var checked=span.getElementsByTagName('input');
			setTimeout(function(){
					for(i=0;i<checked.length;i++){
						checked[i].checked=true;
					}
				},2000);
			setTimeout(function(){
				p1.innerHTML="我就知道我在你心里一定是很帅、很幽默、有气质的····";
				h2.innerHTML="问题2：做我女朋友吧？？";
				span.innerHTML="<button id=\'ok\'>好啊</button>&nbsp;<button id=\'ok1\'>不好</button>";
				var ok=document.getElementById("ok");
				var ok1=document.getElementById("ok1");
				ok.onclick=function(){
					text.innerHTML="噢耶，我就知道你会同意，毕竟我这么优秀。<span style=\'color:red;font-weight: bold;\'>你说呢，媳妇</span>";
				}
				var b=new Array("为什么不好，我这么优秀。","你在好好想想。","在好好看看我。","好吧，我不想这样的。");
				var r=0;
				ok1.onclick=function(){
					p.innerHTML +=b[r]+"<br>";
					if(r>2){
						this.style.display="none";
						ok.onclick=function(){
							text.innerHTML="哎，虽然知道强扭的瓜不甜，但是扭回来，总比没有强，慢慢就甜了。<span style=\'color:red;font-weight: bold;\'>你说呢，媳妇</span>";
						}
					}else{
						r++
					}
				}
			},3000);
		}
		no.onclick=function(){
			p.innerHTML +=z[i]+"<br>";
			if(i>2){
				x();
			}else{
				i++;
			}
		}
		yes.onclick=function(){
			x();
		}
	}
	if(window.innerWidth>650){
		y();
	}else{
		img.src="img/bj1.jpg";
		h2.style.color="#0a95f1";
		p.style.color="goldenrod";
		p1.style.color="#0a95f1";
		span.style.color="#000000"
	
		y();
	}
}
