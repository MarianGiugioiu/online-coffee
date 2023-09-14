Sigur, iată textul cu diacritice adăugate:

# Magazin de cafea online
O aplicație web pentru vizualizarea și gestionarea produselor dintr-o cafenea. Aplicația a fost realizată folosind Angular pentru frontend, Express.js pentru backend și MySQL pentru baza de date.

## Configurare
* Este nevoie de instalarea dependențelor atât în folderul `frontend` cât și în folderul `backend` folosind comanda:
```
npm install
```
* Credențialele bazei de date se regăsesc în fișierul `.env` din folderul `backend` în cele două variabile:
```
DB_USER=<Database user>
DB_PASSWORD=<Database password>
```
* Scriptul pentru realizarea schemei și tabelelor, împreună cu inserarea câtorva înregistrări, se regăsește în fișierul `db.sql`;

## Pornirea aplicației
* Pentru pornirea aplicației Angular se va folosi în folderul `frontend` comanda:
```
npm run start
```
* Pentru pornirea serverului Express se va folosi în folderul `backend` comanda:
```
npm run dev
```

## Mod de utilizare
Aplicația poate fi regăsită accesând [http://localhost:4200/](http://localhost:4200/)

Din bara de navigare se poate naviga către pagina principală și pagina de autentificare. Există două tipuri de utilizatori: simpli și administratori.

Pagina principală conține o secțiune dedicată listei de produse disponibile și o secțiune dedicată coșului de produse selectate de utilizator.

Pe pagina sunt afișate maxim 4 produse disponibile, fiind posibilă navigarea între paginile de produse.

Atât datele despre utilizatorul curent autentificat și datele despre coșul de cumpărături sunt salvate în **local storage**.

Lista de cumpărături poate fi modificată fără ca un utilizator să fie conectat și va persista atunci când un utilizator se conectează. Aceasta va fi resetată totuși când utilizatorul curent se deconectează.

Apăsând pe imaginea unui produs va redirecționa utilizatorul către pagina de detalii a produsului.

Dacă utilizatorul este un administrator atunci acesta poate să editeze detaliile unui produs, să îl șteargă sau să creeze un nou produs.

Pentru conectarea cu un cont de administrator se pot folosi email-ul `alin.ion@admin.com` și parola `123`. Pentru conectarea cu un cont simplu se pot folosi email-ul `alin.andrei@gmail.com` și parola `123`.

Filtrarea produselor se realizează introducând o valoare în câmpul *Search* și alegând coloana pentru care se dorește filtrarea.

Sortarea se realizează alegând o coloană în secțiunea *Sort by:*. Checkbox-ul **DESC** oferă posibilitatea sortării în mod descrescător.

Sortarea și filtrarea se pot realiza simultan. La fiecare schimbare a opțiunilor de filtrare și sortare se revine la prima pagină de produse care respectă condițiile.