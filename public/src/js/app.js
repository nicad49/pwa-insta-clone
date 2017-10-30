var deferredPrompt;
// check if Service Workers are supported in the browser and if so, register one
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js',{scope: '/'}) // scope is an optional property that allows further definition of scope
    .then(function() {
      console.log("Service Worker registered!");
  });
}

// Delay showing the "Install on Homescreen" prompt
window.addEventListener('beforeinstallprompt', function(event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});