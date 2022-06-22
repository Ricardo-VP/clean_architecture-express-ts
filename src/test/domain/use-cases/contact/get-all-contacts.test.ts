import { Contact } from "../../../../domain/entities/contact";
import ContactRepository from "../../../../domain/interfaces/repositories/contact-repository";
import { GetAllContacts } from "../../../../domain/use-cases/contact/get-all-contacts";

describe("Get all Contacts Use Case", () => {
  class MockContactRepository implements ContactRepository {
    createContact(contact: Contact): Promise<boolean> {
      throw new Error("Method not implemented.");
    }
    getContacts(): Promise<Contact[]> {
      throw new Error("Method not implementde.");
    }
  }

  let mockContactRepository: ContactRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactRepository = new MockContactRepository();
  });

  test("should return data", async () => {
    const ExpectedResult = [
      { id: "1", surname: "Smith", firstName: "John", email: "john@gmail.com" },
    ];

    jest
      .spyOn(mockContactRepository, "getContacts")
      .mockImplementation(() => Promise.resolve(ExpectedResult));

    const getAllContactsUseCase = new GetAllContacts(mockContactRepository);
    const result = await getAllContactsUseCase.execute();
    expect(result).toStrictEqual(ExpectedResult);
  });
});
