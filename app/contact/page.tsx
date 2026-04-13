"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground">
              Contact Us
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Have a question or need assistance? We&apos;re here to help. 
              Reach out to our team and we&apos;ll get back to you soon.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Visit Us</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        123 Design Street<br />
                        Portland, OR 97201
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Call Us</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email Us</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        hello@nordicliving.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Hours</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Mon - Fri: 9am - 6pm<br />
                        Sat: 10am - 4pm<br />
                        Sun: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    {submitted ? (
                      <div className="text-center py-12">
                        <h3 className="font-serif text-2xl font-semibold text-foreground">
                          Thank You!
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          We&apos;ve received your message and will get back to you within 24 hours.
                        </p>
                        <Button
                          className="mt-6"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({ name: "", email: "", subject: "", message: "" });
                          }}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({ ...formData, subject: e.target.value })
                            }
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            required
                            rows={6}
                            className="mt-1"
                          />
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
