
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/booking/AppointmentForm';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';

const Booking = () => {
  return (
    <div className="min-h-screen bg-dark-blue">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dark-blue text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Agendamento Online
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white-soft animate-fade-in">
              Vamos <span className="text-blue-light">conversar</span> sobre seu projeto
            </h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto mb-12">
              Agende uma reunião conosco e vamos transformar sua ideia em uma solução digital incrível.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg">
                <Calendar className="w-8 h-8 text-blue-light mb-3" />
                <h3 className="font-semibold text-white-soft mb-2">Horário Flexível</h3>
                <p className="text-gray-light text-sm">Escolha o melhor horário para você</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg">
                <Users className="w-8 h-8 text-blue-light mb-3" />
                <h3 className="font-semibold text-white-soft mb-2">Atendimento Personalizado</h3>
                <p className="text-gray-light text-sm">Foco total no seu projeto</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg">
                <CheckCircle className="w-8 h-8 text-blue-light mb-3" />
                <h3 className="font-semibold text-white-soft mb-2">Sem Compromisso</h3>
                <p className="text-gray-light text-sm">Primeira reunião sempre gratuita</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6">
          <AppointmentForm />
        </div>
      </section>

      {/* Process Info */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white-soft mb-12">
              Como funciona o agendamento?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white-soft mb-2">Preencha o formulário</h3>
                <p className="text-gray-light">Informe seus dados e o serviço desejado</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white-soft mb-2">Escolha data e hora</h3>
                <p className="text-gray-light">Selecione o melhor horário na sua agenda</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white-soft mb-2">Confirme no Google</h3>
                <p className="text-gray-light">O evento será criado no seu Google Calendar</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-white-soft mb-2">Reunião marcada!</h3>
                <p className="text-gray-light">Nos encontramos no horário agendado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
