
import React from 'react';
import { Button } from '@/components/ui/button';

interface TimeSlotPickerProps {
  selectedTime: string;
  onTimeSelect: (time: string) => void;
  date: Date | undefined;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  selectedTime,
  onTimeSelect,
  date
}) => {
  // Horários disponíveis (9h às 18h, intervalos de 1 hora)
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const isWeekend = date && (date.getDay() === 0 || date.getDay() === 6);
  const isPastDate = date && date < new Date(new Date().setHours(0, 0, 0, 0));

  if (!date) {
    return (
      <div className="text-center text-gray-500 py-8">
        Selecione uma data primeiro
      </div>
    );
  }

  if (isWeekend) {
    return (
      <div className="text-center text-gray-500 py-8">
        Não atendemos nos finais de semana.<br />
        Por favor, selecione um dia útil.
      </div>
    );
  }

  if (isPastDate) {
    return (
      <div className="text-center text-gray-500 py-8">
        Não é possível agendar para datas passadas.<br />
        Por favor, selecione uma data futura.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white-soft">
        Horários Disponíveis
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {timeSlots.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? "default" : "outline"}
            onClick={() => onTimeSelect(time)}
            className={`${
              selectedTime === time
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-slate-800/50 border-slate-600 text-white-soft hover:bg-slate-700/50'
            } transition-all duration-200`}
          >
            {time}
          </Button>
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-4">
        * Horário de atendimento: Segunda a Sexta, 9h às 18h
      </p>
    </div>
  );
};

export default TimeSlotPicker;
