searchThesaurus = function(word){
    let query = word.selectionText;
    chrome.tabs.create({url: "https://www.thesaurus.com/browse/" + query});
 };

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
     id: "1",
     title: "search on thesaurus.com",
     contexts:["selection"],  // ContextType
    }); })

chrome.contextMenus.onClicked.addListener(searchThesaurus);
