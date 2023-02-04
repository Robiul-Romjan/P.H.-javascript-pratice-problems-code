 3ta number er gunfol ber kore seti return kora---------------------------------------------------------------->
function mulOfThreeNumbers(num1, num2, num3){
    let result = num1 * num2 * num3;
    return result
}
let answer = mulOfThreeNumbers(3, 5, 2);
console.log(answer);

Array---------------------------------------------------------------------------------------------------------->
let nameOfAllah = ['Allahu', 'Rahmanu', 'Rahimu', 'Maliku', 'Kuddusu', 'Salamu', 'Mominu', 'Muhaiminu', 'Jobbaru'];
koita nam ache cheack--------
console.log(nameOfAllah.length);
4 number namta change kore onno nam bosanu------
console.log(nameOfAllah[3] = "Ajiju");
array tar modde 2 ta element jug kora-------
nameOfAllah.push("Kabir", "Hakim");
array tar modde 2 ta element ber kora kora-------
nameOfAllah.pop();
console.log(nameOfAllah);

for loop using arry to show all elements----------------------------------------------------------------------->
let nameOfAllah = ['Allahu', 'Rahmanu', 'Rahimu', 'Maliku', 'Kuddusu', 'Salamu', 'Mominu', 'Muhaiminu', 'Jobbaru'];
for(let i = 0; i < nameOfAllah.length; i++){
   console.log(nameOfAllah[i]);
}

kuno arry te 80 er theke beshi sonkha thakle segulu dekhau---------------------------------------------------->
let numbers = [1,33,66,88,99,44,55,77,98,80,444,666,777,111];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 80){
        console.log(numbers[i]);
    }
}