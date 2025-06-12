import { useNavigate } from 'react-router-dom';

export const BeyondBasicsPage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: '/assets/rastreamento.png',
      title: 'Rastreamento',
      description:
        'Acompanhamos a localização de cada veículo com precisão através de GPS, facilitando a coordenação e garantindo uma resposta rápida a incidentes. Com essas informações valiosas, é possível direcionar motoristas para serviços de forma ágil e eficaz.',
    },
    {
      icon: '/assets/combustivel.png',
      title: 'Combustível',
      description:
        'Monitoramos o consumo de combustível de cada veículo para identificar padrões e irregularidades. Além disso, estamos sempre atentos às datas e os volumes de abastecimento para garantir que os veículos estejam sempre com o combustível necessário e evitar interrupções nos serviços.',
    },
    {
      icon: '/assets/manutencao.png',
      title: 'Manutenção',
      description:
        'Indicamos através de checklists obtidos, manutenções preventivas de acordo com cada veículo indiviualmente, facilitando e evitando transtornos e manutenções corretivas.',
    },
  ];

  return (
    <section
      id="alem-do-basico"
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
          <source src="/assets/videos/bg_alem_do_basico.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pt-32 md:pb-0">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light">
            <span className="slash-blink">/</span>Além do Básico
          </h1>
        </div>

        <div className="mb-16">
          <div className="w-full max-w-6xl mx-auto flex justify-start mb-16">
            <div className="max-w-md">
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#972620]"></div>
                <p className="text-white text-base leading-relaxed">
                  O Sistema SIG está em constante aprimoramento para incorporar
                  as mais novas tecnologias do mercado. Assim, garantimos
                  eficiência e inovação aliada a uma gestão moderna e eficaz.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center md:justify-between gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-4xl p-8 w-full max-w-xs flex flex-col hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col">
                    <img
                      className="size-18 mb-4"
                      src={card.icon}
                      alt={card.title}
                    />
                    <h3 className="text-2xl font-medium text-white mb-4">
                      {card.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-white/90 text-body leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <p
                className="text-white text-sm transition-colors"
                onClick={() => {
                  navigate('/solucoes');
                }}
              >
                Conheça mais um <br /> pouco das nossas
                <br />
                <span className="font-bold">soluções</span>
              </p>
              <img
                className="size-10"
                src="/assets/link-icon.png"
                alt="Link icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
