import { Contact } from "../../entities/contact";
import ContactRepository from "../../interfaces/repositories/contact-repository";
import { GetAllContactsUseCase } from "../../interfaces/use-cases/contact/get-all-contacts";

export class GetAllContacts implements GetAllContactsUseCase {
  contactRepository: ContactRepository;

  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(): Promise<Contact[]> {
    const result = await this.contactRepository.getContacts();
    return result;
  }
}
