import type { Contact, InsertContact, Newsletter, InsertNewsletter } from "../shared/schema"
import { randomUUID } from "crypto"

export interface IStorage {
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>
  getAllContacts(): Promise<Contact[]>

  // Newsletter
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>
  getAllNewsletters(): Promise<Newsletter[]>
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>
  private newsletters: Map<string, Newsletter>

  constructor() {
    this.contacts = new Map()
    this.newsletters = new Map()
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID()
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    }
    this.contacts.set(id, contact)
    return contact
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = Array.from(this.newsletters.values()).find((n) => n.email === insertNewsletter.email)

    if (existing) {
      return existing
    }

    const id = randomUUID()
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date(),
    }
    this.newsletters.set(id, newsletter)
    return newsletter
  }

  async getAllNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values()).sort((a, b) => b.subscribedAt.getTime() - a.subscribedAt.getTime())
  }
}

export const storage = new MemStorage()
