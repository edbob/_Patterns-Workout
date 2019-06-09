// print out a language model
function languageModel() {
 
  var inputString = document.charNGramForm.inputArea.value;
  var outputString = "";
  var charCount = new Object();
  var temp = 0;
  var ngram = "";
 
  // parameter: n-gram model to create
  var nModelCountIndex = document.charNGramForm.nModelCount.selectedIndex;
  var ngramLength =  document.charNGramForm.nModelCount.options[nModelCountIndex].value;
 
 
  // parameter: style to show it in: full or abbreviated
  var nModelStyleIndex = document.charNGramForm.nModelStyle.selectedIndex;
  modelStyle =  document.charNGramForm.nModelStyle.options[nModelStyleIndex].value;
 
 
 
  // iterate through string, counting number of times n-gram occurs
  for ( var i=0; i < inputString.length; i++ ) {
 
    // identify the n-gram at this location in the string
    if ( ngramLength != 1 ) {
        ngram = "";
        if ( i < inputString.length - (ngramLength-1) ) {
           for ( var j=0; j < ngramLength; j++ ) {
              ngram += inputString.charAt(i+j);
           }
           //ngram = inputString.charAt(i) + inputString.charAt(i+1) ;
        } else {
           break;
        }
 
    } else {
       // assume ngram is 1
       ngram = inputString.charAt(i);
    }
 
    // add it to the data structure
    if ( charCount.hasOwnProperty(ngram) ) {
      temp = charCount[ngram];
      temp++;
    } else {
      temp = 1;
    }
    charCount[ngram] = temp;
  }
 
 
  // make alphabetical array of "keys" and sort
  var alphaKeys = new Array();
  for ( c in charCount ) {
    alphaKeys.push(c);
  }
  alphaKeys.sort();
 
 
  // iterate through the sorted keys to prepare the output
  // determine how to print it
  for ( var x=0; x< alphaKeys.length; x++ ) {
    
    var key = alphaKeys[x];
    var keyPrint = key;
 
    if ( modelStyle == "spacePlain" ) {
 
      keyPrint = keyPrint.replace(/[\n\r]/g, "\\n");
      keyPrint = keyPrint.replace(/\t/g, "\\t");
      keyPrint = keyPrint.replace(/ /g, "\\s");
 
    } else     if ( modelStyle == "spaceBracket" ) {
      keyPrint = keyPrint.replace(/[\n\r]/g, "[NEWLINE]");
      keyPrint = keyPrint.replace(/\t/g, "[TAB]");
      keyPrint = keyPrint.replace(/ /g, "[SPACE]");
    } 
 
    outputString += keyPrint + " " + charCount[key] + ", \n";
  }
 
 
  // set the form element to the desired output
  document.charNGramForm.detailsArea.value = outputString;
 
}

languageModel();