import { Contact } from "../../entities/contact";
import ContactRepository from "../../interfaces/repositories/contact-repository";
import { CreateContactUseCase } from "../../interfaces/use-cases/contact/create-contact";

export class CreateContact implements CreateContactUseCase {
  contactRepository: ContactRepository;

  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(contact: Contact): Promise<boolean> {
    const result = await this.contactRepository.createContact(contact);
    return result;
  }
}
