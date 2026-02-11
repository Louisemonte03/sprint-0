# sprint-01
# **Project sprint **

## **Project Overview**
Ontwerp en bouw een **persoonlijke website** waarmee je **jezelf voorstelt**, waarmee je jouw **startniveau overstijgt** en waarmee je **jouw doelen** voor de minor presenteert.
## **Technische Specificaties**



## **Dag 1 dinsdag**
- **Wat heb ik gedaan?** Gebrainstormd over het concept "Mini → Volwassen → Oma Ik". Besloten om 3 generaties van mezelf te tonen met bijbehorende muziek via de Spotify API.
- **Hoe lang duurde het ?** Ik was hier de 3 uurtjes mee bezig in de les. 
- **Wat heb ik geleerd?** Ik heb geleerd dat ik er eerst achter moet komen hoe ik mij zelf ga voorstellen.
- **Wat ga ik morgen doen** Ik ga alvast zoeken naar chracters die op mij lijken zodat ik die kan kan passen en in mijn website kan zetten.

## **Dag 2 woensdag**
Op deze dag was ik ziek. En was ik niet aanwezig geweest in de les
- **Wat heb ik gedaan?** Images gevonden die mij represententern. Bron vermeldingen staan onderaan in het document.
- **Hoe lang duurde het ?** Geen tijd bijgehouden 
- **Wat heb ik geleerd?** /
- **Wat ga ik morgen doen** /

## **Dag 3 donderdag**
Op deze dag was ik ziek. En was ik niet aanwezig geweest in de les
- **Wat heb ik gedaan?** Geëxperimenteerd metde gard swiper. Codes gebruikt zoals:

card-swiper ul {
    position: sticky;
    top: 20vh;
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    width: 400vw; 
    animation-name: move-cards;
    animation-fill-mode: forwards;
    animation-timeline: --section;
    animation-range: entry 100vh exit 100vh;
}

Werkte niet helemaal zoals het ging. 

- **Hoe lang duurde het ?** Geen tijd bij gehouden. Denk rond de 2 uurtjes
- **Wat heb ik geleerd?** De moving cards doormiddel van de scroll driven animation. En hoe sticky positionering werkt in combinatie met een brede ul (400vw) voor horizontale scroll.
- **Wat ga ik morgen doen** /


## **Dag 4 vrijdag**
Op deze dag was ik ziek. En was ik niet aanwezig geweest in de les
- **Wat heb ik gedaan?** Nog steeds geexperimenteerd metde gard swipe/scroller. Op zoek naar Spotify API voor mijn API in de website. Lukte niet. Kon geen goeie open muziek API vinden. Was daar ook naar op zoek en mee aan het experimenteren.
- **Hoe lang duurde het ?** Geen tijd bijgehouden 
- **Wat heb ik geleerd?** Bronvermeldingen bijhouden van gevonden beeldmateriaal.
- **Wat ga ik morgen doen** /

### **Week 1 voortgang**
Ondanks dat ik een groot deel van de week ziek was, heb ik een duidelijk concept neergezet. De focus lag op het technisch verkennen van de card-swiper via scroll-driven animations. Hoewel dit nog niet perfect werkte, is de basis voor de interactie gelegd.


## **Dag 5 maandag**
- **Wat heb ik gedaan?** De knoop doorgehakt: de swiper was te moeilijk en werkte niet naar verwachting. Geswitcht naar een design met Flip Cards.
- **Hoe lang duurde het ?** 8 uur. Ben de hele dag mee bezig geweest om de scroll swiper. Ook in de avond en het lukte niet. 
- **Wat heb ik geleerd?** Hoe perspective en rotateY werken in CSS. Soms is een simpeler design krachtiger.
- **Wat ga ik morgen doen** De header en hobby-interacties maken.

## **Dag 6 dinsdag**
- **Wat heb ik gedaan?** Dark/Light mode toegevoegd met CSS variabelen (:root en body.dark-mode). En de Flip Cards technisch uitgewerkt met perspective en rotateY.
- **Hoe lang duurde het ?** Hele school dag
- **Wat heb ik geleerd?** Werken met CSS Custom Properties voor thema-switches en het belang van backface-visibility: hidden bij kaart-animaties.
- **Wat ga ik morgen doen** Read me bij werken. + 

## **Dag 7 woensdag**
- **Wat heb ik gedaan?** Nieuwe sectie toegevoegd: Student Favorite Emoji API. Een button (#random-btn) gemaakt die random studentendata ophaalt en toont in het #student-display. En de header met mij zelf introducen verbeterd. Ook de code overview verbeterd die we op woensdag ochtend hadden
- **Hoe lang duurde het ?** Hele schooldag
- **Wat heb ik geleerd?** DOM-manipulatie het tonen van API-data in een specifiek element

### **Week 2 voortgang**
Deze week stond in het teken van de grote "pivot". Nadat ik op maandag na urenlang experimenteren concludeerde dat de scroll-swiper te complex was voor de huidige opzet, ben ik overgestapt naar een robuuster design met Flip Cards. Dit bleek een slimme keuze: ik heb succesvol een Dark/Light mode geïmplementeerd en mijn technische vaardigheden uitgebreid met CSS Custom Properties. Daarnaast heb ik de Spotify API-zoektocht vervangen door een goed werkende Student Emoji API, waardoor ik mijn leerdoel voor DOM-manipulatie en het werken met externe data alsnog heb behaald. De website is nu een persoonlijk en technisch verzorgd geheel.

## **Bronnen lijst**

### **Beeldmateriaal**

Baby illustratie: Freepik. (z.d.). Flat pack babies with round faces [Vectorillustratie]. Geraadpleegd op 11 februari 2026, van https://www.freepik.com/free-vector/flat-pack-babies-with-round-faces_1013717.htm

Volwassen illustratie: Freepik. (z.d.). Flat hand drawn black girl in different poses [Vectorillustratie]. Geraadpleegd op 11 februari 2026, van https://www.freepik.com/free-vector/flat-hand-drawn-black-girl-different-poses_12428947.htm

Oma illustratie: Freepik. (z.d.). Black women collection different ages [Vectorillustratie]. Geraadpleegd op 11 februari 2026, van https://www.freepik.com/free-vector/black-women-collection-different-ages_2555507.htm

Sport icons: Freepik. (z.d.). Padel tennis sport & Field hockey design logo [Vectorillustraties]. Geraadpleegd op 11 februari 2026, van https://www.freepik.com

### **Software & Code**

Coding2GO. (2024, 28 juli). Create a Dark Mode Switch with HTML, CSS, JavaScript [Video]. YouTube. https://www.youtube.com/watch?v=_gKEUYarehE

Refert, J. [xplodivity]. (2023, 27 februari). CSS 3D Flip Card Effect [Video]. YouTube. https://www.youtube.com/watch?v=IZIMGn1Usrw

W3Schools. (z.d.). How TO - Flip a Card. Geraadpleegd op 11 februari 2026, van https://www.w3schools.com/howto/howto_css_flip_card.asp

Uiverse. (z.d.). Community-built UI elements (buttons & cards). Geraadpleegd op 11 februari 2026, van https://uiverse.io