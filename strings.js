(function (){
    ('use strict');
    const body = document.querySelector('body');

    //STRINGS 1

    function strings1() {
        const section = document.createElement('section');
        body.appendChild(section);

        // Add your code here

        const quoteStart = 'Don\'t judge each day by the harvest you reap ';
        const quoteEnd = 'but by the seeds that you plant.';

        const finalQuote = quoteStart + quoteEnd;

        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = finalQuote;

        section.appendChild(para1);     
    }

    strings1();

    //STRINGS 2

    function strings2 () {
        const section = document.createElement('section');
        body.appendChild(section);

        const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
        const substring = 'green eggs and ham';

        // Add your code here
        const quoteLength = quote.length
        const index = quote.search(substring);
        const index2 = substring.length;

        const revisedQuote = quote.slice(0,(index + index2 + 1));

        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = `The quote is ${ quoteLength } characters long.`;
        const para2 = document.createElement('p');
        para2.textContent = revisedQuote;

        section.appendChild(para1);
        section.appendChild(para2);
    }

    strings2();

    //STRINGS 3
    function strings3() {
        const section = document.createElement('section');
        body.appendChild(section);

        const quote = 'I dO nOT lIke gREen eGgS anD HAM';

        // Add your code here

        const length = quote.length;
        const beginning = quote.slice(0,1); // first character
        const end = quote.slice(1, length); // all but the first character

        let fixedQuote = beginning + end.toLowerCase();
        fixedQuote = fixedQuote.replace('green eggs and ham', 'apples');

        const finalQuote = fixedQuote + "."

        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = fixedQuote;
        const para2 = document.createElement('p');
        para2.textContent = finalQuote;

        section.appendChild(para1);
        section.appendChild(para2);


    }

    strings3();

    //STRINGS 4
    function strings4() {
        const section = document.createElement('section');
        body.appendChild(section);
        const theorem = 'Pythagorean theorem';
        const a = 5;
        const b = 8;

        const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${ Math.sqrt((a*a) +(b*b))}.`;



        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = myString;

        section.appendChild(para1);
    
    }

    strings4();
}) ();