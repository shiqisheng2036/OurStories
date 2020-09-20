
var userWord = prompt("Please enter some word");
alert(userWord);

const roomId = -1; //TODO: don't hardcode this value in

async function main() {
	document.getElementById("wordsDisplay").innerText = JSON.parse(await (await fetch(`http://127.0.0.1:3000/api/roomData?roomId=${roomId}`, {method: "GET"})).text());
}

main();
