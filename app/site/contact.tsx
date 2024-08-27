import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="flex-col text-center h-full py-8 mt-6 flex justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <form action="" className="flex flex-col gap-8">
        <div className="formGroup">
          <label htmlFor="Nome" hidden>
            Nome
          </label>
          <input
            type="text"
            name="Nome"
            id="Nome"
            placeholder="Nome"
            required
            className="h-12 pl-4 w-64 md:w-96 lg:w-96 rounded-2xl border-4 border-gray-400 bg-gray-900 text-white placeholder-white"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="h-12 pl-4 w-64 md:w-96 lg:w-96 rounded-2xl border-4 border-gray-400 bg-gray-900 text-white placeholder-white"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Mensagem" hidden>
            Mensagem
          </label>
          <textarea
            name="Mensagem"
            id="Mensagem"
            placeholder="Mensagem"
            required
            className="h-[250px] pt-4 pl-4 w-64 md:w-96 lg:w-96 resize-none rounded-2xl border-4 border-gray-400 bg-gray-900 text-white placeholder-white"
          ></textarea>
        </div>
        <input
          className="bg-[var(--btn-color)] text-[var(--btn-text-color)] border-none rounded-2xl w-32 h-12 text-xl font-bold shadow-lg transition-transform transform hover:scale-105 active:translate-y-1 active:shadow-md mx-auto"
          type="submit"
          value="Enviar"
        />
      </form>
    </section>
  );
};

export default Contact;
