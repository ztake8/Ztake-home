import type { Express } from "express"
import { createServer, type Server } from "http"
import { storage } from "./storage"
import { insertContactSchema, insertNewsletterSchema } from "../shared/schema"
import { fromError } from "zod-validation-error"

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body)
      const contact = await storage.createContact(validatedData)
      res.json({ success: true, contact })
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error)
        return res.status(400).json({
          success: false,
          message: validationError.toString(),
        })
      }
      res.status(500).json({
        success: false,
        message: "Failed to submit contact form",
      })
    }
  })

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body)
      const newsletter = await storage.subscribeNewsletter(validatedData)
      res.json({ success: true, newsletter })
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error)
        return res.status(400).json({
          success: false,
          message: validationError.toString(),
        })
      }
      res.status(500).json({
        success: false,
        message: "Failed to subscribe to newsletter",
      })
    }
  })

  // Get all contacts (for admin/testing)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts()
      res.json({ success: true, contacts })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts",
      })
    }
  })

  const httpServer = createServer(app)

  return httpServer
}
