
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useGoogleCalendar } from '@/hooks/useGoogleCalendar';
import { AppointmentData } from '@/types/appointment';
import TimeSlotPicker from './TimeSlotPicker';
import { CalendarDays, Clock, User, Mail, Phone, Briefcase, MessageSquare, Send } from 'lucide-react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    service: '',
    description: '',
    date: undefined as Date | undefined,
    time: '',
    duration: 60
  });

  const { createCalendarEvent, isLoading } = useGoogleCalendar();

  const services = [
    'Criação de Sites',
    'Landing Pages',
    'E-commerce',
    'Micro-SaaS',
    'Consultoria',
    'Outro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.time) {
      return;
    }

    const appointmentData: AppointmentData = {
      title: `${formData.service} - ${formData.clientName}`,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      duration: formData.duration,
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      clientPhone: formData.clientPhone,
      service: formData.service
    };

    const success = await createCalendarEvent(appointmentData);
    
    if (success) {
      // Reset form
      setFormData({
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        service: '',
        description: '',
        date: undefined,
        time: '',
        duration: 60
      });
    }
  };

  const isFormValid = formData.clientName && formData.clientEmail && 
                     formData.service && formData.date && formData.time;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white-soft mb-4">
          Agendar Reunião
        </h2>
        <p className="text-gray-light text-lg">
          Vamos conversar sobre seu projeto! Escolha o melhor horário para você.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informações do Cliente */}
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white-soft flex items-center gap-3">
                <User className="w-5 h-5 text-blue-light" />
                Suas Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="clientName" className="text-gray-light">Nome Completo *</Label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400 mt-2"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <Label htmlFor="clientEmail" className="text-gray-light">E-mail *</Label>
                <input
                  type="email"
                  id="clientEmail"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400 mt-2"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="clientPhone" className="text-gray-light">Telefone</Label>
                <input
                  type="tel"
                  id="clientPhone"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400 mt-2"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-gray-light">Serviço de Interesse *</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft mt-2"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-light">Descrição do Projeto</Label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400 resize-vertical mt-2"
                  placeholder="Conte-nos um pouco sobre seu projeto..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Seleção de Data e Hora */}
          <div className="space-y-6">
            {/* Calendário */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white-soft flex items-center gap-3">
                  <CalendarDays className="w-5 h-5 text-blue-light" />
                  Escolha a Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => setFormData(prev => ({ ...prev, date, time: '' }))}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  className="rounded-md border border-slate-600/50 bg-slate-700/30"
                />
              </CardContent>
            </Card>

            {/* Horários */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white-soft flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-light" />
                  Escolha o Horário
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TimeSlotPicker
                  selectedTime={formData.time}
                  onTimeSelect={(time) => setFormData(prev => ({ ...prev, time }))}
                  date={formData.date}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resumo e Botão de Agendamento */}
        {isFormValid && (
          <Card className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white-soft mb-4">
                Resumo do Agendamento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-light mb-6">
                <div>
                  <strong>Cliente:</strong> {formData.clientName}
                </div>
                <div>
                  <strong>Serviço:</strong> {formData.service}
                </div>
                <div>
                  <strong>Data:</strong> {formData.date?.toLocaleDateString('pt-BR')}
                </div>
                <div>
                  <strong>Horário:</strong> {formData.time}
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                {isLoading ? "Criando Agendamento..." : "Agendar no Google Calendar"}
              </Button>
            </CardContent>
          </Card>
        )}
      </form>
    </div>
  );
};

export default AppointmentForm;
