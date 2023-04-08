    // let allows us to reassign variables, unlike const
    let interestRate = 0.3;
    interestRate = 1;
    console.log(interestRate);

        // Results in uncaught TypeError 
        const interestRateOne = 0.3;
        interestRateOne = 1;
        console.log(interestRateOne);