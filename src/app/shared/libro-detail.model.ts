import { AutorDetail } from './autor-detail.model';
import { CategoriaDetail } from './categoria-detail.model';

export class LibroDetail {
    Id: number;
    Nombre_Libro: string;
    AutorId: number;
    Autor: AutorDetail;
    CategoriaId: number;
    Categoria: CategoriaDetail;
    ISBN: string;
}
