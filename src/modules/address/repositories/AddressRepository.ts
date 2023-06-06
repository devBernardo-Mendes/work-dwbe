import { v4 as uuidv4 } from "uuid";

class AddressRepository {
  public memoryDb: any[] = [];

  public insert(data: any) {
    data = {
      ...data,
      id: uuidv4(),
    };

    this.memoryDb.push(data);

    return data;
  }

  public list() {
    console.log(this.memoryDb);
    return this.memoryDb;
  }

  public findById(id: string) {
    const address = this.memoryDb.find((element) => {
      return element.id === id;
    });
    return address;
  }
}

export default AddressRepository;
