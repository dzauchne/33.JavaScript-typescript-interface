// 3) Создать интерфейс для объекта 
// student = {
//     name: "",
//     surname: "",
//     id: ,
//     course: ,
//     adress: {
// city: "",
//           street: ""
//         }
//     }
// В котором город не обязателен а имя и айди только для чтения




let a: number = 10;

interface IAdress {
    city?: string;
    street: string
}

interface IStudent {
    readonly name: string;
    surname: string;
    readonly id: number;
    course: number;
    adress: IAdress
}

let vasa:IStudent = {
    name: 'vasa',
    surname: 'vasiliev',
    id: 1,
    course: 32,
    adress: {

        street: 'lenina'
    }
}

vasa.surname = 'dadushka'





// 4) Создать функцию, которая принимает дату в формате timestamp, и возвращает дату в стандартном формате, и описать все типы этой функции
const nameFunction = (date: Date): string => {
    const today = new Date();
    return  today.toLocaleString('ru-RU');
  }
  console.log(nameFunction(new Date()))
