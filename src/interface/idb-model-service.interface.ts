export interface IdbModelService<T, dtoT> {
    
    getAll(): Promise<T[]>;
    
    getOne(id: string): Promise<T>;

    update(id: string);

    remove(id: string);

    insert(entity: dtoT): Promise<T>;
}
