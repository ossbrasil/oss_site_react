import { Link } from "react-router-dom";
import notfound from "/assets/videos/404notfound.webm";

export const NotFoundPage = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={notfound} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-gradient-to-r from-[#972620] to-red-500 bg-clip-text leading-none">
            404
          </h1>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-6">
            Página não encontrada
          </h2>
          <div className="relative pl-6 max-w-md mx-auto">
            <div className="absolute left-0 top-0 w-1 h-full bg-[#972620]"></div>
            <p className="text-white/80 text-lg leading-relaxed text-left">
              A página que você está procurando não existe ou foi movida.
              Verifique o endereço ou volte para a página inicial.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="bg-[#972620] hover:bg-[#7a1e1a] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Voltar ao Início
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-white/30 hover:border-[#972620] text-white hover:text-[#972620] px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Página Anterior
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 mb-4">Ou explore outras páginas:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/alem-do-basico"
              className="text-white/80 hover:text-[#972620] transition-colors duration-300 underline decoration-transparent hover:decoration-current"
            >
              Além do Básico
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
