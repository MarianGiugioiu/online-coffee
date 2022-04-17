# Online coffee shop
O aplicatie web pentru vizualizarea si gestionarea produselor dintr-o cafenea. Aplicatia a fost realizata folosind Angular pentru frontend, Express.js pentru backend si MySQL pentru baza de date.

## Setup
* Este nevoie de instalarea dependentelor atat in folderul `frontend` cat si in folderul `backend` folosind comanda:
```
npm install
```
* Credentialele bazei de date se ragasesc in fisierul `.env` din folderul `backend` in cele doua variabile:
```
DB_USER=<Database user>
DB_PASSWORD=<Database password>
```
* Scriptul pentru realizarea schemei si tabelelor, impreuna cu inserarea catorva inregistrari, se regaseste in fisierul `db.sql`;


## Pornirea aplicatiei
* Pentru pornirea aplicatiei Angular se va folosi in folderul `frontend` comanda:
```
npm run start
```
* Pentru pornirea serverului Express se va folosi in folderul `backendend` comanda:
```
npm run dev
```

## Mod de utilizare
Aplicatia poate fi regasita accesand [http://localhost:4200/](http://localhost:4200/)


Din bara de navigare se poate naviga catre pagina principala si pagina de autentificare. Exista doua tipuri de utilizatori: simpli si administratori.

Pagina principala contine o sectiune dedicata listei de produse disponibile si o sectiune dedicata cosului de produse selectate de utilizator.

Pe pagina sunt afisate maxim 4 produse disponibile, fiind posibila navigarea intre paginile de produse.

Atat datele despre utilizatorul curent autentificat si datele despre cosul de cumparaturi sunt salvate in **local storage**.

Lista de cumparaturi poate fi modificata fara ca un utilizator sa fie conectat si va persista atunci cand un utilizator se conecteaza. Aceasta va fi resetata totusi cand utilizatorul curent se deconecteaza.

Apasand pe imaginea unui produs va redirectiona utilizatorul catre pagina de detalii a produsului.

Daca utilizatorul este un administrator atunci acesta poate sa editeze detaliile unui produs, sa il stearga sau sa creeze un nou produs.

Filtrarea produselor se realizeaza introducand o valoare in campul *Search* si alegand coloana pentru care se doreste filtrarea.

Sortarea se realizeaza alegand o coloana in sectiune *Sort by:*. Checkboxul *DESC* ofera posibilatea sortarii in mod descrescator

Sortarea si filtrarea se pot realiza simultan. La fiecare schimbare a optiunilor de filtrare si sortare se revine la prima pagina de produse care respecta conditiile.



