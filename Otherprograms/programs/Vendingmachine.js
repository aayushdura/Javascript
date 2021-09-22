function Welcomescreen() {
    Display("Hi there\n *******Quench your thirst*******");
    vendingmachine();
}
function vendingmachine() {
    Displaychoices();
    GetUserschoices()
    {
        choice = prompt('What are you on a mood for drinking?');
    }
    Displaycost(choice)
    {
        Case(choice)
        {
            Display("Please pay " + amount + "For" + choice + "drink");
        }
    }
    Getpayment()
    {
        pay = prompt('Please enter coins or change if possible:');
        if (pay > amount) {
            Return(pay - cost);
        }
        else {
            providedrink();
        }
    }
    providedrink(choice, amount)
    {
        DisplayReciept(amount, choice);
        ejectdrink(choice);
    }

}
