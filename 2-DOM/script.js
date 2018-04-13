
function changeText(){
let textArea = document.getElementById('paragraph');
if(textArea.innerText=='Updated Paragraph Text'){
	textArea.innerText = 'Testing DOM'; 
}

else 
{
	textArea.innerText = 'Updated Paragraph Text';
}

}
