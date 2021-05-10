import { AbstractControl, ValidatorFn } from "@angular/forms";

//validator function is A function that receives a control and synchronously returns a map of validation errors if present, otherwise null.
export function firstLetterUppercase(): ValidatorFn
{
    //abstract control is the base class for formControl, form group and form array so 
    // i think this is creating an instance of a form control that will be able to cerate a custom error handler on the string thats passed in.
    return (control: AbstractControl) => {
        const value = <string>control.value;
        if(!value) return;
        if(value.length === 0 ) return;

        const firstLetter = value[0];
        if (firstLetter !== firstLetter.toUpperCase()){
            return{
                firstLetterUppercase :{
                    //this is like the c# version of exception.ex => ex.message
                    message: 'The fist letter must be uppercase'
                }
            }
        }
        return;
    }
}
