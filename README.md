# the_blog

Stwórz prostego bloga z listą postów oraz z formularzem do dodawania

Artykuł powinien składać się z

- id
- title
- body
- likesCount → każdy post na początku ma 0 like’ów

### To do:

- Wyświetl kilka pre-definiowanych artykułów
- Dodaj formularz do tworzenia nowych postów
- Dodaj prostą notyfikacje o tym, że nowy post dostał dodany, niech notyfikacja wyświetla się 3 sekundy
- Stwórz prosty system głosowania
    - Dodaj like +5
    - Odejmij like -10
- Zaimportuj artykuły [https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1) po kliknięciu w button, przy implementacji skorzystaj z FETCH API
    - Zaimportowane artykuły dodaj na sam koniec listy
    - Z zaimportowanych artykułów usuń pole `userId` i dodaj `likesCount`
    - Upewnij się, że pola `id` nie pokrywają się z istniejącymi już
- Dodaj fukcjonalność usuwania postów
- Wyświetl ilość postów
