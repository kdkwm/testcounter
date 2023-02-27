let count = 0

function increaseCount() {
	count += 1
	document.getElementById ("counter").innerText = count
}

function saveCount() {
	document.getElementById("save-count").textContent += count + " / "
}

function refreshCount() {
	count = 0
	document.getElementById("counter").textContent = count
	document.getElementById("save-count").textContent = "You have saved: "
}