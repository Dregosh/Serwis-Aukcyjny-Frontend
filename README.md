Aplikacja "Serwis Aukcyjny" (frontend UI)

Projekt grupowy wykonany na zakończenie kursu Java w Software Development Academy.
Autorzy projektu (kolejność alfabetyczna): Całka Mateusz, Piękoś Rafał, Sadzyński
Marek, Żmijewski Adam.

Okres realizacji projektu: grudzień 2020 - styczeń 2021.

Stack technologiczny: Angular, Angular-Material, Bootstrap 4.
(w oddzielnym repozytorium dostępna jest aplikacja Java Spring stanowiąca backend
REST API przeznaczone do konsumowania dla niniejszego UI).

Krótki opis zawartych funkcjonalności:
Aplikacja udostępnia prezentację i możliwość filtrowania aukcji dla wszystkich
odwiedzających serwis. Ponadto użytkownicy, którzy założyli konto i potwierdzili swój
adres e-mail, po zalogowaniu otrzymują dodatkowe możliwości: mogą zakładać nowe
aukcje, brać udział w licytacjach, korzystać z opcji "Kup Teraz", a także wystawiać
komentarze do przeprowadzanych transakcji.
<br><br><br>
** INSTRUKCJA URUCHOMIENIA **

Przed uruchomieniem tego projektu, należy najpierw pobrać, skonfigurować i uruchomić
backendowe REST API z oddzielnego repozytorium GIT "Serwis-Aukcyjny-backend" (
instrukcja jest dostępna w pliku Readme tamtego projektu).

Gdy REST API zostało uruchomione, należy skompilować i uruchomić niniejszy projekt.
Następnie w przeglądarce można przejść pod adres:

http://localhost:4200

Pojawi się ekran powitalny aplikacji. Należy wybrać opcję "Zaloguj się" z górnego
paska menu, i zarejestrować się jako nowy użytkownik (wiadomość z kodem
potwierdzającym konto będzie wysłana na podany adres e-mail, więc powinien on być
prawdziwy).

Konto można oczywiście potwierdzić również manualnie, bez podawania prawdziwego
adresu e-mail. Można to wykonać logując się do konsoli Keycloak (adres:
localhost:8000, l/p: admin:admin) i przestawiając w sekcji users parametr "email
verified" przy wybranym użytkowniku.

Po potwierdzeniu założonego konta można korzystać z pełni możliwości aplikacji.

** KONIEC INSTRUKCJI **
