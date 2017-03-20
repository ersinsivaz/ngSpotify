import { Album } from './album';

export class Artist{
    id:number;
    name:string;
    genres: string[];
    albums:Album[];
}