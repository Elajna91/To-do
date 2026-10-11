Min ToDo-app
Om projektet:
Jag har byggt en ToDo-app med React och JavaScript. I appen kan man lägga till olika uppgifter, markera dem som klara och ta bort dem. Jag har också använt CSS för att bestämma hur sidan ser ut.

Funktioner:
Lägga till uppgifter.
Stoppa tomma uppgifter.
Markera uppgifter som klara.
Ta bort en uppgift.
Uppdatera listan direkt utan att ladda om sidan.

Tekniker:
React
JavaScript
CSS
Vite

1. Frågor om koden

State-hantering:
Jag använder useState för att kunna spara uppgifterna i en array som heter todos. Varje uppgift har en text och en status som visar om den är klar. När state uppdateras renderar React om de delar av sidan som behöver visa den nya informationen.

Oföränderlighet (Immutability):
Man ska inte ändra en lista direkt i React, utan man ska skapa en ny lista när man lägger till eller tar bort uppgifter. Jag använder till exmpeklt...todos för att lägga till en uppgift och filter() för att ta bort en uppgift. Då skapas en ny lista istället för att ändra den gamla.

2. Kodgranskning:
I koden används push() för att lägga till en uppgift i listan. Problemet är att den ändrar den gamla listan direkt istället. I React ska man helst skapa en ny lista när man ändrar state. Jag kan till exempel använda [...todos, newTodo] för att lägga till en ny uppgift utan att ändra i den gamla listan.

3. Problemlösning och reflektion:
När jag arbetade med det här projektet försökte jag lösa problem genom att testa koden och kontrollera resultatet i webbläsaren. Jag använde mig av tidigare material från lektioner och hjälp utav AI när jag behövde förstå hur React eller CSS fungerar. Ett exempel var att jag behövde undersöka hur state uppdateras när en uppgift läggs till eller tas bort. Jag testade då ändringarna för att se vad som hände och förstå varför lösningen fungerade. Jag bad AI förklara när jag inte förstod eller om jag inte lyckades lösa varför det blev fel i min kod. 


Länk till inspelning: 
https://funet-my.sharepoint.com/personal/3ggyhmu26_chanel_folkuniversitetet_nu/_layouts/15/stream.aspx?id=%2Fpersonal%2F3ggyhmu26%5Fchanel%5Ffolkuniversitetet%5Fnu%2FDocuments%2FInspelningar%2FM%C3%B6te%20med%20Elin%20Emma%20Kaili%20Chang%20Colon%20MU26%2D20261011%5F234220%2DM%C3%B6tesinspelning%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E10f7b924%2D3752%2D4fbf%2D840c%2D9a023ba0b5c0