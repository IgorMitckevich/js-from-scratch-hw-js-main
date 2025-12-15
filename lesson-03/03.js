// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(first_value, second_value, third_value) {
    
    if(first_value>second_value && first_value>third_value){
        return first_value
    }
    else if(second_value>first_value && second_value>third_value){
        return second_value
    }else{
        return third_value
    }
}