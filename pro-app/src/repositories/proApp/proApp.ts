import { ProApplication } from "../../entities";
import { mockData } from "../mock/data";

export class MockProApplicationRepository {
  private data: ProApplication[];

  constructor() {
    this.data = mockData;
  }

  async find(): Promise<ProApplication[]> {
    return this.data;
  }

  async findOne(id: number): Promise<ProApplication | undefined> {
    return this.data.find((item) => item.id === id);
  }

  async save(proApplication: ProApplication): Promise<ProApplication> {
    const existingIndex = this.data.findIndex((item) => item.id === proApplication.id);
    if (existingIndex !== -1) {
      this.data[existingIndex] = proApplication;
    } else {
      this.data.push(proApplication);
    }
    return proApplication;
  }
}
