export const ClientsPage = () => {
  const clients = [
    {
      logo: '/assets/consolare.svg',
      alt: 'Consolare',
    },
    {
      logo: '/assets/zelo.svg',
      alt: 'Grupo Zelo',
    },
    {
      logo: '/assets/cemfy.svg',
      alt: 'Cemfy',
    },
    {
      logo: '/assets/fpass.svg',
      alt: 'FPass Assistência',
    },
    {
      logo: '/assets/atuant.svg',
      alt: 'Atuant',
    },
    {
      logo: '/assets/fvb.svg',
      alt: 'FVB',
    },
    {
      logo: '/assets/gnasser.svg',
      alt: 'GN Nasser Advogados',
    },
    {
      logo: '/assets/franco_da_rocha.svg',
      alt: 'Prefeitura Franco da Rocha',
    },
    {
      logo: '/assets/guaruja_prefeitura.svg',
      alt: 'Prefeitura de Guarujá',
    },
    {
      logo: '/assets/guaruja.svg',
      alt: 'Câmara Municipal de Guarujá',
    },
    {
      logo: '/assets/sao_bernardo_do_campo.svg',
      alt: 'São Bernardo do Campo',
    },
    {
      logo: '/assets/taboao.svg',
      alt: 'Taboão da Serra',
    },
  ];

  return (
    <section
      id="clientes"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-left object-cover md:object-cover"
        >
          <source src="/assets/videos/clientes.webm" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light">
            /Clientes
          </h1>
        </div>

        <div className="mb-16">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-12 lg:gap-16">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 transition-all duration-300 transform hover:scale-110"
                >
                  <img
                    className="max-w-full max-h-16 md:max-h-20 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                    src={client.logo}
                    alt={client.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
