export const DifferentialsPage = () => {
  const services = [
    {
      icon: '/assets/sofware.png',
      title: 'Software',
      description: 'Personalizado de acordo com a necessidade do negócio.',
    },
    {
      icon: '/assets/consultoria.png',
      title: 'Consultoria de TI',
      description:
        'Suporte direto com a equipe interna de desenvolvimento para ter clareza e velocidade no progresso de novos módulos.',
    },
    {
      icon: '/assets/analise.png',
      title: 'Análise de Dados',
      description:
        'Processamento em tempo real para otimizar a eficiência operacional e aprimorar a gestão.',
    },
  ];

  return (
    <section
      id="diferenciais"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/bg_diferenciais.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light">
            <span className="slash-blink">/</span>Diferenciais
          </h1>
        </div>

        <div className="flex items-center justify-center min-h-[60vh] mb-15 md:mb-0">
          <div className="flex flex-col items-center lg:items-stretch lg:flex-row justify-center gap-10 w-full max-w-6xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xs border max-h-fit border-white/20 rounded-4xl p-8 py-15 flex-1 max-w-xs flex flex-col hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col mb-3">
                  <img
                    className="w-16 h-16 mb-4 object-contain"
                    src={service.icon}
                    alt={service.title}
                  />
                  <h3 className="text-2xl font-medium text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="flex-1">
                  <p className="text-white/90 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
