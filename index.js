
    let person = {
        //Add one or more K,V pairs
        name: "Mosh",
        ageOfMosh: 30
    };
    console.log(person);

    //Dot Notation
    person.name = 'John';
    console.log(person);

    //Bracket Notation
    let selection = "name";
    person[selection] = 'Mary';
    console.log(person.name);
