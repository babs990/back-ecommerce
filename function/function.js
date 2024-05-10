import {readFile} from 'node:fs/promises';

const path='storage/storage.json'

export async function findProduct(){
    const chemin = await readFile(path,'utf8')
    return JSON.parse(chemin)
}