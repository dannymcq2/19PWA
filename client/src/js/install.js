const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;


  butInstall.style.display = 'block';

  butInstall.addEventListener('click', () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
  });
});


window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});