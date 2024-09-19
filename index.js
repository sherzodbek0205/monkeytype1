
function addItem() {
	var itemInput = document.getElementById("itemInput");
	var loremDiv = document.getElementById("loremDiv");
	var itemValue = itemInput.value;

	if (itemValue.trim() !== "") {
		loremDiv.innerHTML = itemValue;
		loremDiv.style.display = "block";
	}

	itemInput.value = "";
}
var textDisplay = document.getElementById("loremDiv");
    var textInput = document.getElementById("text-to-search");

    textInput.addEventListener("input", function() {
        var inputText = textInput.value;
        var displayText = textDisplay.textContent;

        var inputLength = inputText.length;
        var displayLength = displayText.length;

        var commonLength = 0;
        var correctLength = 0;

        for (var i = 0; i < inputLength; i++) {
            if (inputText[i] === displayText[i]) {
                commonLength++;
                correctLength++;
            } else {
                break;
            }
        }

        var remainingLength = displayLength - commonLength;

        textDisplay.innerHTML = '<span class="correct">' + displayText.substr(0, correctLength) +
                                '</span><span class="remaining">' + displayText.substr(correctLength) +
                                '</span>';

        if (inputText === displayText) {
            textDisplay.classList.add("finished");
        } else {
            textDisplay.classList.remove("finished");
        }
    });
