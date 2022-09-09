var maxLengthWanted = 16;
var totalBeforSpace = 4;
var separator = "-";

const allInput = this.document.querySelectorAll(".param_input");
allInput.forEach((input) => {
    input.addEventListener("keypress", (e) => {
        // updateGlobalVar();
        //         console.log(maxLengthWanted)

})

})
var inputVar = this.document.getElementById("card_value");
inputVar.addEventListener("keypress", (e) => {
         updateGlobalVar();
    if (e.key == separator) {
        e.preventDefault()
    } else {
        if(inputVar.value.length  > 1 && e.keyCode != 8){
                    inputVar.value = insertSpace(inputVar.value, totalBeforSpace, maxLengthWanted);
                }   
    }
       
        
})

function insertSpace(value, charNumber, maxLength){
    
    if(value.length == charNumber){
        return value + separator; 
    } else if(value.length < charNumber){
        return value.trim();
    } else if(value.length <= maxLength && value.replaceAll(separator, "").length % charNumber == 0){
        return value + separator    ;
    } else if(value.replaceAll(separator, "").length > maxLength){
        return value.substring(0, maxLength );
    } else {
        return value;
    }
}

function updateGlobalVar() {
   
    separator = this.document.getElementById("separator").value == ""? " " : this.document.getElementById("separator").value;
    maxLengthWanted = this.document.getElementById("max_input_lenght").value == "" ? 16 : parseInt(this.document.getElementById("max_input_lenght").value);
    totalBeforSpace = this.document.getElementById("before_space").value == "" ? 4 : parseInt(this.document.getElementById("before_space").value);
    inputVar.maxLength = maxLengthWanted + ( maxLengthWanted / totalBeforSpace) - 1 ;

    // console.log(maxLengthWanted);

}
