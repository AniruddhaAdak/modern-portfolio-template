"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactFormAnimated() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 animate-fade-in">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-800/30 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-green-800 dark:text-green-400">Message Sent!</h3>
            <p className="text-green-700 dark:text-green-300">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <Button
              variant="outline"
              className="mt-4 border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                {errors.name && (
                  <span className="text-xs text-red-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`transition-all duration-300 ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-primary/20 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    formState.name ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                {errors.email && (
                  <span className="text-xs text-red-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`transition-all duration-300 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-primary/20 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    formState.email ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="subject"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subject
              </label>
              {errors.subject && (
                <span className="text-xs text-red-500 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.subject}
                </span>
              )}
            </div>
            <div className="relative">
              <Input
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`transition-all duration-300 ${
                  errors.subject
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-primary/20 focus:border-primary focus:ring-primary/20"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  formState.subject ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message
              </label>
              {errors.message && (
                <span className="text-xs text-red-500 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.message}
                </span>
              )}
            </div>
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message"
                className={`min-h-[150px] transition-all duration-300 ${
                  errors.message
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-primary/20 focus:border-primary focus:ring-primary/20"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  formState.message ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
          {submitError && (
            <div className="p-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm animate-fade-in">
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                {submitError}
              </div>
            </div>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 button-hover ${
              isSubmitting ? "opacity-80" : ""
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Sending...
              </div>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
