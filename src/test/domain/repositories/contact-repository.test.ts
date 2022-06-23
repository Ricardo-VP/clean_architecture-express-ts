import { ContactDataSource } from "../../../data/interfaces/data-sources/contact-data-source";
import { Contact } from "../../../domain/entities/contact";
import ContactRepository from "../../../domain/interfaces/repositories/contact-repository";
import { ContactRepositoryImpl } from "../../../domain/repositories/contact-repository";

class MockContactDataSource implements ContactDataSource {
  create(contact: Contact): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Contact[]> {
    throw new Error("Method not implemented.");
  }
}

describe("Contact Repository", () => {
  let mockContactDataSource: ContactDataSource;
  let contactRepository: ContactRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactDataSource = new MockContactDataSource();
    contactRepository = new ContactRepositoryImpl(mockContactDataSource);
  });

  describe("getAllContacts", () => {
    test("should return data", async () => {
      const expectedData = [
        {
          id: "1",
          surname: "Smith",
          firstName: "John",
          email: "john@gmail.com",
        },
      ];
      jest
        .spyOn(mockContactDataSource, "getAll")
        .mockImplementation(() => Promise.resolve(expectedData));

      const result = await contactRepository.getContacts();
      expect(result).toBe(expectedData);
    });
  });

  describe("createContact", () => {
    test("should return true", async () => {
      const inputData = {
        id: "1",
        surname: "Smith",
        firstName: "John",
        email: "john@gmail.com",
      };

      jest
        .spyOn(mockContactDataSource, "create")
        .mockImplementation(() => Promise.resolve(true));

      const result = await contactRepository.createContact(inputData);
      expect(result).toBe(true);
    });
  });
});
