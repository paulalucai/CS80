/*
 * diceSaveResults.js - roll a die n times. Save all results.
 */
 
// register handler for window load event
window.onload = function() {

// Model
    var allResults = [];

// Controller

    // get references to widgets
    var numN = document.getElementById("numN");
    var divResult = document.getElementById("divResult");
    var btnRoll = document.getElementById("btnRoll");
    var btnShowAllResults = document.getElementById("btnShowAllResults");
    var btnSave = document.getElementById("btnSave");
    var btnRetrieve = document.getElementById("btnRetrieve");
    
    
    // register handler for 'Roll' button click event
    btnRoll.onclick = function() {
    
        // get input data
        var n = +numN.value;
        
        // roll die n times
        var result = [];
        for(var i = 0; i < n; i += 1) {
            var face = Math.floor(Math.random() * 6) + 1; // simulate roll of die
            result.push(face);
        }
        
        // display result
        divResult.innerHTML = n + " rolls: " + result.join(" ");
        
        // append this result to allResults
        allResults = allResults.concat(result);
    }; // end 'Roll' button click event handler
    
    
    // register handler for 'Show All Results' button click event
    btnShowAllResults.onclick = function() {

        // display all results
        divResult.innerHTML = "All rolls: " + allResults.join(" ");
    }; // end 'Show All Results' button click event handler
    
    // Check browser support
    if (typeof(Storage) != "undefined") {
        // Store
        // register handler for 'Save' button click event
        btnSave.onclick = function() {

            // save array as string in local storage
            localStorage["allResults"] = JSON.stringify(allResults);
        }; // end 'Save' button click event handler
        // Retrieve
        btnRetrieve.onclick = function() {

            // display all results in local storage
            document.getElementById("divStorage").innerHTML = "Results in storage: " + localStorage.getItem("allResults"); 
        }; // end 'Retrieve' button click event handler
    } else {
        document.getElementById("divStorage").innerHTML = "Sorry, your browser does not support Web Storage...";
    };
}; // end window load event handler
