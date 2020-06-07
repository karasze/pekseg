# **Pékség franchise**
Saját termékek értékesítésének vonatkozásában szeretnénk optomalizálni az üzletlánc működését. Minden adatot adatbázisban tárolunk, a feladat csupán annyi, hogy kinyerjük belőle a szükséges információt! 

A megvalósítás során ergonómikus célszoftverekkel  adjuk meg a vezetőségben felmerült kérdésekre a választ. 

Az eredményeket vagy a C# nyelven megírt szoftverben, vagy weboldalon jelenítjük meg. 

***Termékek felvétele az adatbázisba:***
```sql
/*
A termékpaletta bővítésére egy C# ablakos alkalmazás készült, amely a meglévő adatbázisban 
megkeresi az eddigi legnagyobb termékazonosítót:
*/
SELECT `termek_id` 
FROM `termek` 
ORDER BY `termek_id` DESC 
LIMIT 1;

/*
majd lehetőséget teremt az új termék felvételére: 
*/
INSERT INTO `termek` (`termek_id`, `neve`, `gluten_M`, `laktoz_M`, `cukor_M`, `ar`, `tomeg`)
VALUES('10000', 'PéldaPerec', 0, 0, 0, 120, 250)

/*
A magújult termékpaletta és a hozzá tartozó adatok az alábbi lekérdezéssel kerülnek a weboldalra
*/
SELECT * FROM `termek`
```

***Az alábbi kérdésekre keressük a válaszokat:***

- Kik vezették és melyik napon az alábbiakben megadott rendszámú járművet?

```sql
SELECT 
    `kereszt_nev`, `vezetek_nev`, `szallitas_datum`
FROM 
    `szemelyzet`  INNER JOIN `rendeles` 
    ON `rendeles`.`dolg_id` = `szemelyzet`.`dolg_id`
WHERE 
    `rendszam` LIKE 'ABC-101' ;
```

- Kik a bejáró dolgozók?

- Kik, honnan és hová járnak be dolgozni?
- Hány rendelést szállítottak az alábbiakben megadott rendszámú járművel?
- Üzlet kereső, adjon meg egy városnevet!
- Hány rendelést szállítottak az alább megadott városba?
- Van-e olyan termék, amit senki sem vásárolt?
- Melyek a laktóz mentes termékek?
- Melyik termékből rendeltek legtöbbet?
- Melyik termékből rendeltek legtöbbet Szegeden?

***Programnyelvek, szoftverek, technológia melyet a megvalósítás során használtunk:***

- HTML és CSS
- Javascript
- MySQL
- C#
- GitHUB verziókezelés
- Visual Studio
- Visual Studio Code és kiterjesztései
- XAMPP

***Készítették:***

Németh Bálint és Karasz Endre
