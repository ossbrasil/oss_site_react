import { InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col justify-around`}
    >
      <nav className="px-8 pt-8 mt-8">
        <ul className="space-y-5">
          <li>
            <a
               onClick={() => navigate("/solucoes")}
              className="text-3xl text-black hover:text-[#972620] transition-colors cursor-pointer"
            >
              Soluções
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/alem-do-basico")}
              className="text-3xl text-black hover:text-[#972620] transition-colors cursor-pointer"
            >
              Além do básico
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/diferenciais")}
              className="text-3xl text-black hover:text-[#972620] transition-colors cursor-pointer"
            >
              Diferenciais
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/clientes")}
              className="text-3xl text-black hover:text-[#972620] transition-colors cursor-pointer"
            >
              Clientes
            </a>
          </li>
        </ul>
      </nav>

      <div className="px-8">
        <p className="contact-phone mb-2">
          <a
            href="tel:+551150394303"
            className="text-3xl text-[#972620] no-underline"
          >
            +55 11 5039-4303
          </a>
        </p>
        <p className="mb-2">
          <a
            href="mailto:pedro@ossbrasil.com.br"
            className="text-xl text-gray-800 underline"
          >
            pedro@ossbrasil.com.br
          </a>
        </p>
        <p className="mb-4">
          <a
            href="mailto:silvio@ossbrasil.com.br"
            className="text-xl text-gray-800 underline"
          >
            silvio@ossbrasil.com.br
          </a>
        </p>
        <div className="flex space-x-4 mt-3">
          <a href="https://www.instagram.com/oss.brasil/">
            <InstagramLogoIcon size={64} color="#972620" />
          </a>
          <a href="https://www.linkedin.com/company/ossbrasil">
            <LinkedinLogoIcon size={64} color="#972620" />
          </a>
        </div>
      </div>

      <div className="px-8 text-left text-xl text-gray-800">
        <p>
          Rua dos Chanés, 278
          <br />
          Indianópolis - São Paulo - SP
        </p>
      </div>
    </div>
  );
};
