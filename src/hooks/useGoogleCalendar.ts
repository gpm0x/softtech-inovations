
import { useState } from 'react';
import { AppointmentData, GoogleCalendarEvent } from '@/types/appointment';
import { useToast } from '@/hooks/use-toast';

export const useGoogleCalendar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const createCalendarEvent = async (appointmentData: AppointmentData): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Criar o objeto do evento para Google Calendar
      const startDateTime = new Date(appointmentData.date);
      const [hours, minutes] = appointmentData.time.split(':');
      startDateTime.setHours(parseInt(hours), parseInt(minutes));
      
      const endDateTime = new Date(startDateTime);
      endDateTime.setMinutes(startDateTime.getMinutes() + appointmentData.duration);

      const event: GoogleCalendarEvent = {
        summary: `${appointmentData.service} - ${appointmentData.clientName}`,
        description: `
Agendamento SoftTech Inovations

Cliente: ${appointmentData.clientName}
Email: ${appointmentData.clientEmail}
Telefone: ${appointmentData.clientPhone}
Serviço: ${appointmentData.service}

Descrição:
${appointmentData.description}

---
Agendado através do site SoftTech Inovations
        `.trim(),
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'America/Sao_Paulo'
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'America/Sao_Paulo'
        },
        attendees: [
          {
            email: appointmentData.clientEmail,
            displayName: appointmentData.clientName
          },
          {
            email: 'contato@softtech.com',
            displayName: 'SoftTech Inovations'
          }
        ]
      };

      // Criar URL do Google Calendar para adicionar evento
      const googleCalendarUrl = createGoogleCalendarUrl(event);
      
      // Abrir Google Calendar em nova aba
      window.open(googleCalendarUrl, '_blank');
      
      toast({
        title: "Agendamento criado!",
        description: "O Google Calendar foi aberto. Por favor, confirme o agendamento.",
      });
      
      return true;
    } catch (error) {
      console.error('Erro ao criar evento no calendário:', error);
      toast({
        title: "Erro ao agendar",
        description: "Não foi possível criar o agendamento. Tente novamente.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const createGoogleCalendarUrl = (event: GoogleCalendarEvent): string => {
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    
    const params = new URLSearchParams({
      text: event.summary,
      dates: `${formatDateForGoogle(event.start.dateTime)}/${formatDateForGoogle(event.end.dateTime)}`,
      details: event.description,
      add: event.attendees.map(attendee => attendee.email).join(','),
      ctz: 'America/Sao_Paulo'
    });

    return `${baseUrl}&${params.toString()}`;
  };

  const formatDateForGoogle = (dateTime: string): string => {
    return new Date(dateTime).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };

  return {
    createCalendarEvent,
    isLoading
  };
};
