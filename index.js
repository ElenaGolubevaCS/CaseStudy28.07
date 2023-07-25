// Import stylesheets
import './style.css';



// Write Javascript code!

const appDivHeader = document.getElementById('header');
//appDivHeader.innerHTML = `<h1> Header </h1><img src="https://www.haw-landshut.de/fileadmin/Resources/Public/Images/landshut_logo.jpg"/><h4>TODO grüner Hintergrund</h4>`

const appDivMain = document.getElementById('main');
//appDivMain.innerHTML = `<p>Prüfungseinsichten Übersicht</p>`;

const appDivFooter = document.getElementById('footer');
//appDivFooter.innerHTML = `<h3>Footer</h3>`;


//NEW. Anmeldeformular.
//User Story: Als Benutzer möchte ich mich auf der Webseite anmelden, um auf personalisierte Funktionen zugreifen zu können
// function login() {
//  const username = document.getElementById('username').value;
//  const password = document.getElementById('password').value;
  // Hier erfolgt die Überprüfung der Anmeldedaten im Backend.
  // Falls die Anmeldedaten korrekt sind, erfolgt die Weiterleitung zur Hauptseite.
  // Andernfalls wird eine Fehlermeldung angezeigt.


//User Story: Als eingeloggter Benutzer möchte ich eine Liste von Prüfungseinsichtsterminen sehen.
// Beispiel-Daten für Prüfungstermine

// Als eingeloggte(r) Nutzer/in der Applikation möchte ich ein Bestätigungs-Popupfenster erhalten, 
//wenn ich eine Änderung meiner Anmeldung vornehme, damit keine unbeabsichtigten Änderungen gegen 
//meine Intention vorgenommen werden
function openPopup(title, text) {
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popupTitle');
  const popupText = document.getElementById('popupText');

  popupTitle.textContent = title;
  popupText.textContent = text;

  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function saveChanges() {
  // Hier kannst du den Code hinzufügen, der bei Klick auf "Speichern" ausgeführt werden soll.
  closePopup(); // Zum Schließen des Popups nach dem Speichern.
}

function discardChanges() {
  // Hier kannst du den Code hinzufügen, der bei Klick auf "Verwerfen" ausgeführt werden soll.
  closePopup(); // Zum Schließen des Popups nach dem Verwerfen.
}


document.getElementById("deine ID").addEventListener("click", function() 
{window.location.href = "NeueHTMLSEITE.html";});
