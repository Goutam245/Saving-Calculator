
   //  Add Event Listener For Calculate Button
   
const calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function(){
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpences = software + courses + internet;
    const NewBalance = income - totalExpences
   

    const totalExpencesElement = document.getElementById('total-expenses')
    totalExpencesElement.innerText = totalExpences.toFixed(2);

    const balanceElement = document.getElementById('balance')
    balanceElement.innerText= NewBalance.toFixed(2)

    const results = document.getElementById('results')
    results.classList.remove('hidden')
});

      //  Add Event Listener For Saving Button
const calculatesavingbutton= document.getElementById('calculate-savings')
.addEventListener('click', function(){
    

    const savingspercentage = parseFloat(document.getElementById('savings').value);
    const income = parseFloat(document.getElementById('income').value);
   const software = parseFloat(document.getElementById('software').value);
   const courses = parseFloat(document.getElementById('courses').value);
   const internet = parseFloat(document.getElementById('internet').value);
     //console.log(savingspercentage);

     const totalExpences = software + courses + internet;
     const NewBalance = income - totalExpences;

     const Savingamount = (savingspercentage * NewBalance) /100;
     const remainingBalance = NewBalance- Savingamount
     //console.log(Savingamount);

     const savingElement = document.getElementById('savings-amount');
     savingElement.innerText= Savingamount.toFixed(2)

     const remainigElement = document.getElementById('remaining-balance');
     remainigElement.innerText= remainingBalance.toFixed(2)


})