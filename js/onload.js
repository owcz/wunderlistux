var onReady = function(){
  var theme = localStorage.getItem("theme") || "elementary";
  jq("#bell").on("click", clickBell);
  jq("#conv").on("click", clickConversations);
  jq('#theme-selector option').removeAttr("selected");
  jq('#theme-selector option:contains("'+theme+'")').attr("selected", "selected");
  jq("#theme-selector").trigger("change")
};
jq(document).ready(onReady).on("turbolinks:load", onReady);

var onWebviewReady = function() {
  var onLoaded = function(){
    var theme = localStorage.getItem("theme") || "elementary";
    setCustomTheme(theme);
  }
  jq.wait = function(ms) {
    console.warn(ms)
      var defer = jq.Deferred();
      setTimeout(function() { defer.resolve(); }, ms);
      return defer;
  };
  jq.wait(100).then(onLoaded);
  jq.wait(300).then(onLoaded);
  jq.wait(1000).then(onLoaded);
  jq.wait(3000).then(onLoaded);
  jq.wait(6000).then(onLoaded);
  jq.wait(10000).then(onLoaded);
  jq.wait(15000).then(onLoaded);
};

getWebview().addEventListener('did-finish-load', onWebviewReady);
getWebview().addEventListener("dom-ready", onWebviewReady);
