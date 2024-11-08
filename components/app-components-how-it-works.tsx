'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Calendar, CheckCircle } from "lucide-react"

export function HowItWorksComponent() {
  const steps = [
    {
      title: "Créez un compte",
      icon: UserPlus,
      description: "Inscrivez-vous rapidement et facilement"
    },
    {
      title: "Choisissez un service",
      icon: Calendar,
      description: "Sélectionnez l'espace et la date qui vous conviennent"
    },
    {
      title: "Confirmez votre réservation",
      icon: CheckCircle,
      description: "Finalisez votre réservation en quelques clics"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Réserver en trois étapes simples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-12 max-w-2xl mx-auto text-lg text-muted-foreground">
          Avec ReserVite, réservez votre espace en quelques minutes, recevez des notifications et organisez vos événements en toute simplicité.
        </p>
      </div>
    </section>
  )
}