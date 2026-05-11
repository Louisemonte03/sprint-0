# Sprint 0 — Louise Monte

## Project Overzicht

Ontwerp en bouw een persoonlijke website waarmee je jezelf voorstelt, je startniveau overstijgt en je doelen voor de minor presenteert.

**Concept: Drie sporten, drie doelen**
Mijn drie hobbies (hockey, fietsen en padel) en voetbal (real madrid) vormen de rode draad van de website. Elke sport is gekoppeld aan een leerdoel voor de minor. Zo is de site niet alleen een introductie van wie ik ben, maar ook een concreet plan van wat ik wil leren.

## Leerdoelen

### Leerdoel 1 — Werken met API's

**Wat:** Externe data ophalen via een API en dynamisch tonen op een pagina.
**Waarom:** Ik wil mijn websites niet statisch maken. Door API's te begrijpen kan ik live data tonen en echte gebruikerservaringen bouwen.

### Leerdoel 2 — CSS Animaties & Scroll

**Wat:** Scroll-driven animations en CSS keyframes leren bouwen.
**Waarom:** Ik wil de gebruiker een natuurlijke esthetische beweging laten ervaren met de scroll functie.

### Leerdoel 3 — Esthetisch en clean design

**Wat:** Interfaces bouwen die er verzorgd en rustig uitzien met goede typografie, witruimte en een goede visuele balans.
**Waarom:** Ik wil dat mijn websites er niet rommelig uitzien. Een clean design trekt aandacht op de juiste manier en voelt prettig aan voor de gebruiker.

## Procesverslag

### Dag 1 — Dinsdag 3 februari

- **Wat heb ik gedaan?** Gebrainstormd over het concept. Begonnen met het idee "Mini → Volwassen → Oma Ik" om drie generaties van mezelf te tonen met muziek via de Spotify API.
- **Hoe lang duurde het?** 3 uur (tijdens de les).
- **Wat heb ik geleerd?** Dat ik eerst een duidelijk concept nodig heb voordat ik ga bouwen.
- **Wat ga ik morgen doen?** Characters zoeken die op mij lijken voor op de website.

![Schetsen van mijn ideeën](/images/readme/sketch-1.png)
![Schetsen van mijn ideeën](/images/readme/sketch-2.png)

---

### Dag 2 — Woensdag 4 februari

Op deze dag was ik ziek en niet aanwezig.

- **Wat heb ik gedaan?** Afbeeldingen gezocht die mij representeren. Moodboard gemaakt.
- **Hoe lang duurde het?** Niet bijgehouden.
- **Wat heb ik geleerd?** Bronvermeldingen bijhouden van gevonden beeldmateriaal.
- **Wat ga ik morgen doen?** Beginnen met de technische opzet.

![Moodboard](/images/readme/moodboard.png)
![Eerste idee](/images/readme/1-idea.png)
![Mijn elementen](/images/readme/elementen.png)

---

### Dag 3 — Donderdag 5 februari

Op deze dag was ik ziek en niet aanwezig.

- **Wat heb ik gedaan?** Geëxperimenteerd met een card swiper via scroll-driven animations.
- **Hoe lang duurde het?** Ongeveer 2 uur.
- **Wat heb ik geleerd?** Hoe `animation-timeline` en sticky positionering werken in combinatie met een brede `ul` (400vw) voor horizontale scroll. De animatie werkte nog niet zoals bedoeld.
- **Wat ga ik morgen doen?** Verder experimenteren met de swiper of switchen naar een ander design.

---

### Dag 4 — Vrijdag 6 februari

Op deze dag was ik ziek en niet aanwezig.

- **Wat heb ik gedaan?** Verder geëxperimenteerd met de card swiper. Ook gezocht naar een werkende muziek-API als alternatief voor Spotify — zonder resultaat.
- **Hoe lang duurde het?** Niet bijgehouden.
- **Wat heb ik geleerd?** Dat niet elke API vrij toegankelijk is en dat je soms moet accepteren dat iets niet werkt.
- **Wat ga ik morgen doen?** De knoop doorhakken: doorgaan of switchen?

### Week 1 — Reflectie

Ondanks dat ik een groot deel van de week ziek was, heb ik een duidelijk concept neergezet. De focus lag op het technisch verkennen van de card swiper via scroll-driven animations. Hoewel dit nog niet perfect werkte, is de basis voor de interactie gelegd. De Spotify API bleek niet haalbaar, dus ik ga op zoek naar een alternatief.

---

### Dag 5 — Maandag 9 februari

- **Wat heb ik gedaan?** De knoop doorgehakt: de swiper werkte niet naar verwachting. Geswitcht naar een design met flip cards.
- **Hoe lang duurde het?** De hele dag, ook 's avonds.
- **Wat heb ik geleerd?** Hoe `perspective` en `rotateY` werken in CSS. Soms is een simpeler design krachtiger.
- **Wat ga ik morgen doen?** De header en de dark/light mode uitwerken.

---

### Dag 6 — Dinsdag 10 februari

- **Wat heb ik gedaan?** Dark/light mode toegevoegd met CSS custom properties (`:root` en `body.dark-mode`). Flip cards technisch uitgewerkt.
- **Hoe lang duurde het?** De hele schooldag.
- **Wat heb ik geleerd?** Werken met CSS Custom Properties voor thema-switches en het belang van `backface-visibility: hidden` bij kaart-animaties.
- **Wat ga ik morgen doen?** README aanvullen en de studentensectie toevoegen.

![Dark/light mode CSS](/images/readme/darklightmode-css.png)
![Dark/light mode JS](/images/readme/darklightmode-js.png)
![Dark/light mode HTML](/images/readme/darklightmode-html.png)
![Resultaat light/dark](/images/readme/light-dark.png)

---

### Dag 7 — Woensdag 11 februari

- **Wat heb ik gedaan?** Sectie "Mijn team in de minor" toegevoegd met een random-student knop via de FDND API. Header verbeterd met mijn eigen foto via de API.
- **Hoe lang duurde het?** De hele schooldag.
- **Wat heb ik geleerd?** DOM-manipulatie: het ophalen van API-data en tonen in een specifiek element met `insertAdjacentHTML` en `innerHTML`.

![Student HTML](/images/readme/student-html.png)
![Student JS](/images/readme/student-js.png.png)

### Week 2 — Reflectie

Deze week stond in het teken van een grote beslissing: na urenlang experimenteren met de scroll-swiper ben ik overgestapt naar flip cards. Dat bleek de juiste keuze — het design werkt beter en ik heb er meer van geleerd. Dark/light mode via CSS custom properties was nieuw voor mij en werkt nu goed. De FDND API heb ik op twee plekken gebruikt: voor mijn eigen profielfoto en naam, en voor de random medestudent-knop.

## Herkansing — aanvulling (mei 2026)

### Wat ik heb aangepast

Na de feedback van Sanne heb ik de website opnieuw bekeken en het volgende veranderd:

**Concept toegevoegd**
De website had geen duidelijk concept. Ik heb het idee "Drie sporten, drie doelen" uitgewerkt: mijn drie hobbies (hockey, fietsen, padel) zijn elk gekoppeld aan een leerdoel. Ook persoonlijk gemaakt met mijn favoriete voetbal club.

**Leerdoelen compleet gemaakt**
De leerdoelen hadden geen waarom. Ik heb elk leerdoel herschreven met een duidelijk wat ga ik leren en waarom is dat voor mij relevant.

**Geen random clipart meer**
De generieke illustraties baby, kind, volwassen en oud heb ik verwijderd. In plaats daarvan gebruik ik mijn eigen sport-icoontjes die al onderdeel waren van de site.

**Studentensectie verbonden aan het concept**
De sectie heette "Student Favorite Emoji" en had geen relatie met de rest van de site. Nu heet het "mijn team in de minor" dat past bij het sport-concept. Team is een mede student

### Feedback van medestudenten

**Student 1 — Sela**
Datum: 24 april 2026
Feedback: Ze vond het concept drie sporten en drie doelen meteen duidelijk. De flip cards werkten goed op desktop, maar op haar telefoon kon ze ze niet omdraaien. Ook miste ze een beetje meer over wie ik ben en wat ik leuk vind.

**Student 2 — Luna Jay**
Datum: 6 mei 2026
Feedback: Ze vond het kleurgebruik rustig en verzorgd. Ze vroeg of de profielfoto soms niet laadde, dat bleek een bug in de API-koppeling. Ze miste ook een foto bij de medestudenten-knop, die voelde wat leeg nu gaf die alleen een emoji. En waarom zou die een emoji geven?

## Bronnenlijst

### API's

FDND Directus API. (z.d.). Persoonlijke data en minor-studenten. https://fdnd.directus.app

### Code & tutorials

Coding2GO. (2024, 28 juli). Create a Dark Mode Switch with HTML, CSS, JavaScript [Video]. YouTube. https://www.youtube.com/watch?v=_gKEUYarehE

Refert, J. [xplodivity]. (2023, 27 februari). CSS 3D Flip Card Effect [Video]. YouTube. https://www.youtube.com/watch?v=IZIMGn1Usrw

W3Schools. (z.d.). How TO - Flip a Card. Geraadpleegd op 11 februari 2026, van https://www.w3schools.com/howto/howto_css_flip_card.asp

Scroll-Driven Animations. (n.d.). Scroll-driven animations. https://scroll-driven-animations.style/
