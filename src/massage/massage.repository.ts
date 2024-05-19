import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";

export class MasssageRepository{
    async findOne(id:string){
        const contents =  await readFile('massage.json','utf8');
        const massages = JSON.parse(contents);

        return massages[id];
    }

    async findAll(){
        const contents =  await readFile('massage.json','utf8');
        const massages = JSON.parse(contents);

        return massages;
    }

    async create(massage:string){
        const contents = await readFile('massage.json','utf8');
        const massages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);

        massages[id] = { id, contents:massage};

        await writeFile('massage.json',JSON.stringify(massages));
    }
}