


function changeText(){
let textArea = document.getElementById('paragraph');
if(textArea.innerText=='Updated Paragraph Text'){
	textArea.style.display='block';
	textArea.innerText = 'Testing DOM'; 
	
}

else 
{
	textArea.style.display='block';
	textArea.innerText = 'Updated Paragraph Text';
}

};



function triggerEvent(){
	
	let eventButton=document.getElementById('eventButton');
	let textArea = document.getElementById('paragraph');
	
	eventButton.addEventListener('click',function(){
		
		textArea.style.display='none';

	});
		
};






