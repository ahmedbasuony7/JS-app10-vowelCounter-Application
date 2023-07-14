
function countVowels(){
    var text = document.getElementById("inputText").value;
    var vowelsCount = 0;

    text = text.toLowerCase();
    for(var i =0 ; i < text.length ; i++){
        var char = text.charAt(i);
        if(isVowel(char)){
            vowelsCount++;
        }
    }
    var result = document.getElementById("result");
    result.textContent = "total Vowels: " + vowelsCount ;
}
function isVowel(char){
    var vowels = ["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z"," ","A","B","C","D","E","F","G","H","I","G","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return vowels.includes(char);
}