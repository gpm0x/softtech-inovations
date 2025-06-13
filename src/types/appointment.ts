
export interface AppointmentData {
  title: string;
  description: string;
  date: Date;
  time: string;
  duration: number; // em minutos
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: string;
}

export interface GoogleCalendarEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees: Array<{
    email: string;
    displayName?: string;
  }>;
}
