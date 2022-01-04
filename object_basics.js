(function() {
    ('use strict');
    const body = document.querySelector('body');

    //OBJECT 1

    function object1 () {
        const section = document.createElement('section');
        body.appendChild(section);
          
          // Put your code here
          
          let cat = {
            name : 'Bertie',
            breed : 'Cymric',
            color : 'white',
            greeting: function() {
              console.log('Meow!');
            }
          }
          
          // Put your code here
          
          const catName = cat['name'];
          console.log(cat.greeting);
          cat.color = 'black';
          
          // Don't edit the code below here
          
          let para1 = document.createElement('p');
          let para2 = document.createElement('p');
          
          para1.textContent = `The cat's name is ${ catName }.`;
          para2.textContent = `The cat's color is ${ cat.color }.`;
          
          section.appendChild(para1);
          section.appendChild(para2);
              
              
    }
    object1();

 //OBJECT 2

 function object2 () {
    const section = document.createElement('section');
    body.appendChild(section);

    let bandInfo;

    // Put your code here
    
    bandInfo = {
        name: 'Pheonix',
        nationality: 'French',
        genre: 'Indie pop',
        members: 4,
        formed: 1997,
        split: false,
        albums: [{name: 'United', released: 2000,}, {name: 'Wolfgang Amadeus Phoenix', released: 2009}, {name: 'Bankrupt!', released: 2013}]};
    
        bandInfo = `The band ${bandInfo.genre} ${bandInfo.name} is made up of ${bandInfo.members} members and they got their start in ${bandInfo.formed}. They've released the following albums: ${Object.values(bandInfo.albums[0])}, ${Object.values(bandInfo.albums[1])}, and ${Object.values(bandInfo.albums[2])}.`;
    
    // Don't edit the code below here
    
    let para1 = document.createElement('p');
    para1.textContent = bandInfo;
    section.appendChild(para1);
}
object2();


//OJBECT 3
function object3 () {
    let bandInfo;
        const section = document.createElement('section');
        body.appendChild(section);

        let cat = {
            name : 'Bertie',
            breed : 'Cymric',
            color : 'white',
            greeting: function() {
              console.log(`"Hello, said ${this.name} the ${this.breed}."`);
            }
          };
          
          let cat2 = {
           name: 'Shadow',
           breed: 'Gray Tabby',
           color: 'gray',
           greeting: function() {
              console.log(`"Hello, said ${this.name} the ${this.breed}."`);
          }
          };
          console.log(cat.greeting());
          console.log(cat2.greeting());
}

object3();

}) ();
