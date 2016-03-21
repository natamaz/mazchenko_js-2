/**
 * Created by Нафтуся on 21.03.2016.
 */
var arr = [];
var name;
var finallName;
for (i = 0; i<5; i++) {
    arr.push(prompt ("Введите имя "));
}
name=prompt('Введите имя');
finallName='Ошибка ввода';
for (i = 0; i<5; i++) {
    if (name === arr[i]){
        finallName=(name+', вы успешно вошли')
    }
}
alert(finallName);