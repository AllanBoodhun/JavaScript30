// Get your shorts on - this is an array workout!
   // ## Array Cardio Day 1
   // Some data we can work with
   const inventors = [
     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
   ];
   const people = [
     'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
     'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
     'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
     'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
     'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
   ];




   // Array.prototype.filter()

   // 1. Filter the list of inventors for those who were born in the 1500's
   const filter = inventors.filter(inventor => (inventor.year > 1500 && inventor.year < 1600));
   console.table(filter); // créer un tableauu




   // Array.prototype.map()

   // 2. Give us an array of the inventors first and last names
   function fullName(person) {
    let name = [person.first, person.last].join(" ");
    return name
   }
    console.log(inventors.map(fullName));
   



   // Array.prototype.sort()

   // 3. Sort the inventors by birthdate, oldest to youngest
   // .sort prend les items 2 par 2 et les comparent. Le 1 et -1 permet d'attribuer une valeur.
   sort = inventors.sort((fistPerson, secondPerson) => fistPerson.year > secondPerson.year ? 1 : -1 );
   console.table(sort);





   // Array.prototype.reduce()

   // 4. How many years did all the inventors live all together?
   totalYears = inventors.reduce((total, inventor) => {
     return total + (inventor.passed - inventor.year);
   }, 0);

   console.log(totalYears);




   // 5. Sort the inventors by years lived
   const sortByLived = inventors.sort((firstPersone, secondPerson) => (firstPersone.passed - firstPersone.year) > (secondPerson.passed - secondPerson.year) ? -1 : 1 ); 
   console.table(sortByLived)





   // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
   // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

   
    const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));
    //         same as [...category.querySelectorAll('a')];
    const de = links
                    .map(link => link.textContent)
                    .filter(streetName => streetName.includes('de'));






   // 7. sort Exercise
   // Sort the people alphabetically by last name
   const alphaSort = people.sort(function(a,b) {
     // Sépare les noms de famille des prénoms
    const [aLast, aFirst] = a.split(', ');
    const [bLast ,bFirst] = b.split(', ');
     // Compare les noms de famille ('>' permet de comparer les arrays alphabetiquement)
    return aLast > bLast ? 1 : -1; 
   })
   console.log(alphaSort);



   // 8. Reduce Exercise
   // Sum up the instances of each of these
   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

   const transportation = data.reduce(function(obj, item) {
     // si l'objet n'exite pas, il faut le créer et la mettre à 0
    if (!obj[item]){
      obj[item] = 0; 
    }
    // On ajoute 1 à chaque occurence et on return
    obj[item]++;
    return obj;
      //on donne un objet vide en argument
   }, {});

   console.log(transportation);
   