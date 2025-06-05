import { useState, useRef, useEffect, useCallback } from 'react';

export const SolutionsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      title: 'Atendimento de chamados',
      description:
        'Asseguramos respostas rápidas e melhora na qualidade dos serviços públicos com nossa gestão de solicitações dos munícipes. Através de um processo ágil e eficiente, otimizamos atendimentos nas áreas de GCM, SAMU, Trânsito e Defesa Civil, garantindo uma entrada simples e repasse direto para as equipes. Experimente a inovação que faz a diferença e proporcione um serviço excepcional à sua comunidade.',
      technologies: ['PHP', 'MYSQL', 'JAVASCRIPT'],
      computerImage: '/assets/solutions/atendimento01.png',
      systemImage: '/assets/solutions/atendimento02.png',
    },
    {
      title: 'Ouvidoria',
      description:
        'Nossa solução gerencia queixas e sugestões de maneira eficiente, promovendo transparência e aprimorando os serviços públicos. Possibilitamos que os cidadãos registrem reclamações de forma anônima ou identificada, com seriedade e confidencialidade, além de oferecer um canal direto para a participação cidadã. Junte-se a nós e transforme a maneira como sua cidade ouve e responde às necessidades da população.',
      technologies: ['NODE JS', 'REACT', 'MYSQL'],
      computerImage: '/assets/solutions/ouvidoria_01.png',
      systemImage: '/assets/solutions/ouvidoria_02.png',
    },
    {
      title: 'Estoque',
      description:
        'Otimizamos processos desde a catalogação até auditorias e relatórios detalhados. Com uma rastreabilidade eficiente dos itens, identificamos rapidamente faltas ou extravios, mantendo todos os ativos monitorados com eficácia. Os relatórios gerados fornecem soluções valiosas que apoiam decisões estratégicas e garantem a precisão dos estoques. Invista na inteligência que sua empresa merece e maximize seu potencial.',
      technologies: ['NODE', 'REACT', 'MYSQL'],
      computerImage: '/assets/solutions/estoque_01.png',
      systemImage: '/assets/solutions/estoque_02.png',
    },
    {
      title: 'Solução SMP',
      description:
        'Aumentamos suas vendas e a eficiência da produção com nosso inovador aplicativo SMP (Sistema de Monitoramento de Produção). Seus vendedores poderão selecionar clientes, apresentar catálogos e realizar pedidos de forma simples e ágil. A gestão tem total controle ao aprovar pedidos e monitorar cada etapa do processo, incluindo a escolha do frete. Potencialize seu negócio elevando a satisfação do cliente com a transformação que o SMP oferece.',
      technologies: ['NODE', 'REACT', 'MYSQL'],
      computerImage: '/assets/solutions/smp_01.png',
      systemImage: '/assets/solutions/smp_02.png',
    },
    {
      title: 'Veículo de remoção',
      description:
        'Coordenamos chamados e gestão de viaturas com total controle sobre motoristas e veículos. Acompanhamos guias de remoção e asseguramos conformidade com os padrões estabelecidos, tudo isso integrado à prefeitura para monitorar SLAs (Acordo de Nível de Serviço) e outras métricas cruciais. Com nosso sistema, você garante uma gestão transparente e eficaz dos recursos e serviços.',
      technologies: ['PHP', 'MYSQL', 'JAVASCRIPT'],
      computerImage: '/assets/solutions/remocao_de_veiculo01.png',
      systemImage: '/assets/solutions/remocao_de_veiculo02.png',
    },
    {
      title: 'Aplicativo de guincho',
      description:
        'Agilizamos o transporte de veículos com nossa plataforma, permitindo que os administradores criem e gerenciem requisições de serviço de forma eficiente. E o diferencial: motoristas recebem as demandas em tempo real diretamente no aplicativo, garantindo uma execução rápida e eficiente das tarefas. A solução perfeita para quem busca um novo nível de excelência no controle operacional.',
      technologies: ['NODE', 'REACT NATIVE', 'MYSQL'],
      computerImage: '/assets/solutions/app_guincho01.png',
      systemImage: '/assets/solutions/app_guincho02.png',
    },
    {
      title: 'Locadora',
      description:
        'Gerenciamos a frota de forma completa e eficiente, cuidando da manutenção preventiva, corretiva e do provisionamento de combustível, tudo em uma única plataforma. Nossa ferramenta se integra perfeitamente com o CTE (Conhecimento de Transporte Eletrônico), SEFAZ e manifestos de carga, garantindo total conformidade fiscal e logística. Através dessa integração, você melhora significativamente operações e processos.',
      technologies: ['NODE', 'REACT', 'MYSQL'],
      computerImage: '/assets/solutions/locadora_001.png',
      systemImage: '/assets/solutions/locadora_002.png',
    },
    {
      title: 'Checklist',
      description:
        'Monitoramos de forma segura e detalhada, itens essenciais como pneus, faróis e freios. Nossa plataforma permite a inclusão de fotos do veículo, controle preciso da quilometragem e nível de combustível. Com essas informações, você assegura que sua frota esteja sempre em condições ideais, maximizando a performance e minimizando riscos com proatividade.',
      technologies: ['NODE', 'REACT NATIVE', 'MYSQL'],
      computerImage: '/assets/solutions/check_list_app_01.png',
      systemImage: '/assets/solutions/check_list_app_02.png',
    },
    {
      title: 'SIG',
      description:
        'Transformamos a logística com o Sistema Integrado de Gestão (SIG), que automatiza processos desde a recepção de ordens até a gestão de expedição e movimentação de veículos. Com monitoramento em tempo real, controle eficiente de combustível e rastreamento preciso de veículos, garantimos eficiência, precisão e transparência nas operações. Mantenha-se à frente da concorrência aproveitando as mais recentes tecnologias para impulsionar sua gestão.',
      technologies: ['NODE', 'REACT', 'MYSQL'],
      computerImage: '/assets/solutions/sig_01.png',
      systemImage: '/assets/solutions/sig_02.png',
    },
  ];

  // Captura a posição do mouse para o efeito parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && !isDragging) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isDragging]);

  // Scroll wheel para navegação
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: number;

    const handleWheel = (e: WheelEvent) => {
      if (isDragging) return;
      e.preventDefault();

      if (isScrolling) return;
      if (Math.abs(e.deltaY) < 10) return;

      isScrolling = true;

      if (e.deltaY > 0) {
        setCurrentSlide((prev) => (prev + 1) % solutions.length);
      } else {
        setCurrentSlide(
          (prev) => (prev - 1 + solutions.length) % solutions.length,
        );
      }

      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 600);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
        clearTimeout(scrollTimeout);
      };
    }
  }, [solutions.length, isDragging]);

  // Funções para drag/swipe
  const handleDragStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;

    const deltaX = clientX - dragStart.x;
    const containerWidth = containerRef.current?.offsetWidth || 1;
    const dragPercentage = (deltaX / containerWidth) * 100;

    setDragOffset(dragPercentage);
  };

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;

    const threshold = 15; // 15% da largura da tela para trocar slide

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Arrastar para direita - slide anterior
        setCurrentSlide(
          (prev) => (prev - 1 + solutions.length) % solutions.length,
        );
      } else {
        // Arrastar para esquerda - próximo slide
        setCurrentSlide((prev) => (prev + 1) % solutions.length);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, solutions.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Listener global para mouse up (caso o mouse saia da área)
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mouseleave', handleGlobalMouseUp);
      return () => {
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.removeEventListener('mouseleave', handleGlobalMouseUp);
      };
    }
  }, [handleDragEnd, isDragging]);

  const goToSlide = (index: number) => {
    if (!isDragging) {
      setCurrentSlide(index);
    }
  };

  const calculateTransform = () => {
    const baseTransform = currentSlide * 100;
    const dragTransform = isDragging ? dragOffset : 0;
    return baseTransform - dragTransform;
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gray-900 select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-left object-cover md:object-cover pointer-events-none"
        >
          <source src="/assets/videos/solucoes.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center py-12 sm:py-16 pb-24 sm:pb-32">
        <div
          className={`flex w-full ${
            isDragging
              ? 'transition-none'
              : 'transition-transform duration-500 ease-in-out'
          }`}
          style={{
            transform: `translateX(-${calculateTransform()}%)`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center px-4 sm:px-6"
            >
              <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight">
                      {solution.title}
                    </h1>

                    <div className="relative pl-4 sm:pl-6">
                      <div className="absolute left-0 top-0 w-1 h-full bg-[#972620]"></div>
                      <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                        {solution.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {solution.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 sm:px-6 lg:px-10 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-xs border border-white/20 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex justify-center order-1 lg:order-2">
                    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl">
                      <img
                        src={solution.computerImage}
                        alt="Computer"
                        className="w-full h-auto relative z-10 pointer-events-none"
                        draggable={false}
                      />
                      <div
                        className="absolute inset-0 z-20 transition-transform duration-300 ease-out"
                        style={{
                          transform: `translate(${(mousePosition.x - 0.5) * (window.innerWidth >= 768 ? 20 : 10)}px, ${(mousePosition.y - 0.5) * (window.innerWidth >= 768 ? 20 : 10)}px)`,
                        }}
                      >
                        <img
                          src={solution.systemImage}
                          alt={`Sistema ${solution.title}`}
                          className="w-full h-auto pointer-events-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 px-4 w-full max-w-md sm:max-w-full">
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 overflow-x-auto scrollbar-hide pb-2">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 flex items-center justify-center shrink-0 ${
                index === currentSlide
                  ? 'bg-[#972620] px-3 sm:px-4 py-2 sm:py-2 min-w-max shadow-lg'
                  : 'bg-white/20 hover:bg-white/40 w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 backdrop-blur-sm'
              }`}
            >
              {index === currentSlide ? (
                <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap px-1">
                  {solution.title}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
