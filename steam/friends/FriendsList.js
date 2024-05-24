// Text content
let searchText = "Search for a friend...";

//Create a mutation that edit the search bar
const obs = new MutationObserver((mutation) => {
    if(!document.querySelector(".tabSearchTransitionGroup").hasChildNodes()) {
        document.querySelector(".tabSearchTransitionGroup").innerHTML = `<div class='searchPlaceholder'>${searchText}</div>`;
    }
}).observe(document.body, { childList:true, subtree:true });