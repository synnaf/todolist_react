//vi skapar upp en class som fungerar som en modell för våra objekt i listan. 
// react kräver att vi sätter ett default värde på egenskaperna, om vi inte väljer att definiera dem genom en konstruktor. 

export default class Todo {
    id: number = 0; 
    text: string = ''; 
    done: boolean = false; 
}