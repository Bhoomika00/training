
export interface Ievent{
    id:number;
    name:string;
    date:string;
    time:string;
    price:number;
    imageUrl:string;
    location:{
        address:string,
        city:string,
        country:string
    },
    sessions:Isession[];
    
    

}
export interface Isession{
        id:number,
        name:string,
        presenter:string,
        duration:number,
        voters:string[]
}