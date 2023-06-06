import { v4 as uuidv4 } from "uuid";

class ProductRepository {
  public memoryDb: any[] = [];

  public insert(data: any) {
    data = {
      ...data,
      id: uuidv4(),
    };

    this.memoryDb.push(data);

    return data
  }

  public list() {
    return this.memoryDb;
  }

  public findById(id:string){
    return this.memoryDb.find(element =>{
        return element.id === id
    })
  }
}

export default ProductRepository;
