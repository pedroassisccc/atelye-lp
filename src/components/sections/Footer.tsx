import { useState } from "react";
import LegalModal, { LegalSection } from "@/components/LegalModal";
import atelyeWordmark from "@/assets/atelye-wordmark.svg";

type LegalKey = "termos" | "privacidade" | "cookies" | null;

const UPDATED = "01/01/2026";

export default function Footer() {
  const [open, setOpen] = useState<LegalKey>(null);
  const close = () => setOpen(null);

  return (
    <footer className="relative border-t border-gray-200 bg-[#ecece9] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,56,1,0.18), rgba(214,45,0,0.10) 35%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none"
      >
        <img
          src={atelyeWordmark}
          alt=""
          style={{
            width: "min(94%, 1400px)",
            transform: "translateY(22%)",
            opacity: 0.18,
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 100%)",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 100%)",
            filter: "drop-shadow(0 0 40px rgba(255,56,1,0.18))",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 pt-16 sm:pt-20 pb-32 sm:pb-40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[11.5px] font-medium text-[#D63300] uppercase tracking-wider mb-3">
              atelye é um produto Walks
            </p>
            <p className="text-[13.5px] text-gray-900 leading-relaxed max-w-md">
              Walks Serviços de Marketing e Consultoria Ltda
            </p>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-md mt-2">
              Edifício Trademark Faria Lima · Sala 301 e 302
              <br />
              Pinheiros, São Paulo · SP · 05407-004
              <br />
              CNPJ 56.103.636/0001-13
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="text-[11.5px] font-medium text-gray-500 uppercase tracking-wider mb-3">
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => setOpen("termos")}
                  className="text-[13px] text-gray-700 hover:text-[#D63300] transition-colors duration-200"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setOpen("privacidade")}
                  className="text-[13px] text-gray-700 hover:text-[#D63300] transition-colors duration-200"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setOpen("cookies")}
                  className="text-[13px] text-gray-700 hover:text-[#D63300] transition-colors duration-200"
                >
                  Política de Cookies
                </button>
              </li>
              <li>
                <a
                  href="mailto:privacidade@walks.com.br"
                  className="text-[13px] text-gray-700 hover:text-[#D63300] transition-colors duration-200"
                >
                  Encarregado de dados (DPO)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[12px] text-gray-500">
            © {new Date().getFullYear()} Walks Serviços de Marketing e
            Consultoria Ltda. Todos os direitos reservados.
          </p>
          <p className="text-[12px] text-gray-400">
            Feito em São Paulo · Conformidade LGPD
          </p>
        </div>
      </div>

      <LegalModal
        open={open === "termos"}
        onClose={close}
        title="Termos de Uso"
        updatedAt={UPDATED}
      >
        <p>
          Estes Termos de Uso (“Termos”) regem o acesso e o uso da plataforma
          atelye (“Plataforma”), de titularidade da{" "}
          <strong>Walks Serviços de Marketing e Consultoria Ltda.</strong>,
          inscrita no CNPJ sob o nº 56.103.636/0001-13, com sede no Edifício
          Trademark Faria Lima, Salas 301 e 302, Pinheiros, São Paulo/SP, CEP
          05407-004 (“Walks”).
        </p>

        <LegalSection title="1. Aceitação dos termos">
          <p>
            Ao acessar ou utilizar a Plataforma, contratar planos, preencher o
            formulário de aplicação ou interagir com qualquer canal oficial da
            Walks, você declara ter lido, compreendido e aceito integralmente
            estes Termos. Caso não concorde com qualquer disposição, você não
            deverá utilizar a Plataforma.
          </p>
        </LegalSection>

        <LegalSection title="2. Descrição do serviço">
          <p>
            atelye é uma infraestrutura de inteligência artificial composta por
            agentes especializados que executam atividades operacionais de
            marketing (estratégia, conteúdo, distribuição, análise e
            orquestração). O escopo, prazos, integrações e entregáveis de cada
            contratação serão detalhados em proposta comercial específica.
          </p>
        </LegalSection>

        <LegalSection title="3. Elegibilidade e cadastro">
          <p>
            O uso da Plataforma é destinado a pessoas jurídicas ou indivíduos
            maiores de 18 anos atuando em nome de empresa. O usuário se
            compromete a fornecer informações verdadeiras, completas e
            atualizadas, assumindo responsabilidade pela veracidade dos dados.
          </p>
        </LegalSection>

        <LegalSection title="4. Conta, credenciais e segurança">
          <p>
            O usuário é responsável pela guarda e confidencialidade de suas
            credenciais de acesso e por toda atividade realizada com sua conta.
            A Walks deve ser comunicada imediatamente em caso de uso não
            autorizado.
          </p>
        </LegalSection>

        <LegalSection title="5. Propriedade intelectual">
          <p>
            Todo o conteúdo, software, código-fonte, modelos, design, marcas e
            sinais distintivos relacionados à Plataforma são de titularidade
            exclusiva da Walks ou de seus licenciadores e estão protegidos pela
            legislação brasileira e internacional. É vedada qualquer reprodução,
            cópia, engenharia reversa, redistribuição ou exploração comercial
            não autorizada.
          </p>
          <p>
            Conteúdos produzidos pela Plataforma para o cliente, no âmbito da
            execução do serviço, serão licenciados ao cliente conforme termos
            específicos da contratação.
          </p>
        </LegalSection>

        <LegalSection title="6. Uso adequado">
          <p>É vedado ao usuário utilizar a Plataforma para:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Praticar atos ilícitos, fraudulentos ou que violem direitos de terceiros;</li>
            <li>Distribuir spam, malware, conteúdo ofensivo, discriminatório ou ilegal;</li>
            <li>Tentar burlar mecanismos de segurança, limites técnicos ou cotas;</li>
            <li>Realizar engenharia reversa, scraping massivo ou uso automatizado abusivo;</li>
            <li>Revender, sublicenciar ou disponibilizar acesso a terceiros sem autorização escrita.</li>
          </ul>
        </LegalSection>

        <LegalSection title="7. Planos, pagamentos e cancelamento">
          <p>
            Os valores, periodicidade de cobrança, prazos contratuais e
            condições de reajuste serão definidos em proposta comercial. A falta
            de pagamento poderá ensejar suspensão de acesso e rescisão.
          </p>
          <p>
            O cliente poderá solicitar cancelamento mediante aviso prévio
            previsto em contrato. Reembolsos, quando aplicáveis, seguirão o
            Código de Defesa do Consumidor (Lei nº 8.078/1990) para os casos
            cabíveis.
          </p>
        </LegalSection>

        <LegalSection title="8. Limitação de responsabilidade">
          <p>
            A Walks emprega esforços razoáveis para manter a Plataforma
            disponível e estável, mas não garante operação ininterrupta ou
            isenta de erros. Na máxima extensão permitida pela lei aplicável, a
            Walks não responde por: (i) lucros cessantes; (ii) danos indiretos;
            (iii) interrupções decorrentes de caso fortuito ou força maior; ou
            (iv) ações ou omissões de terceiros, incluindo provedores de
            infraestrutura ou plataformas integradas.
          </p>
        </LegalSection>

        <LegalSection title="9. Modificações dos termos">
          <p>
            A Walks poderá alterar estes Termos a qualquer momento para refletir
            mudanças no serviço, na legislação ou em boas práticas. Alterações
            relevantes serão comunicadas pelos canais oficiais, e o uso
            continuado da Plataforma após a publicação implica concordância.
          </p>
        </LegalSection>

        <LegalSection title="10. Lei aplicável e foro">
          <p>
            Estes Termos são regidos pelas leis da República Federativa do
            Brasil. Fica eleito o foro da Comarca de São Paulo/SP para dirimir
            quaisquer controvérsias decorrentes, com renúncia a qualquer outro,
            por mais privilegiado que seja.
          </p>
        </LegalSection>

        <LegalSection title="11. Contato">
          <p>
            Dúvidas sobre estes Termos podem ser enviadas para{" "}
            <a
              href="mailto:contato@walks.com.br"
              className="text-[#D63300] hover:text-[#B82A00]"
            >
              contato@walks.com.br
            </a>
            .
          </p>
        </LegalSection>
      </LegalModal>

      <LegalModal
        open={open === "privacidade"}
        onClose={close}
        title="Política de Privacidade"
        updatedAt={UPDATED}
      >
        <p>
          Esta Política descreve como a{" "}
          <strong>Walks Serviços de Marketing e Consultoria Ltda.</strong>{" "}
          (CNPJ 56.103.636/0001-13) trata dados pessoais coletados por meio do
          site, da plataforma atelye e dos demais canais de relacionamento, em
          conformidade com a Lei Geral de Proteção de Dados Pessoais — Lei nº
          13.709/2018 (“LGPD”).
        </p>

        <LegalSection title="1. Controlador dos dados">
          <p>
            A Walks é a controladora dos dados pessoais tratados no âmbito
            desta Política, sediada no Edifício Trademark Faria Lima, Salas 301
            e 302, Pinheiros, São Paulo/SP, CEP 05407-004.
          </p>
        </LegalSection>

        <LegalSection title="2. Dados que coletamos">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Cadastrais:</strong> nome, e-mail, empresa, cargo, site,
              redes sociais.
            </li>
            <li>
              <strong>Comerciais:</strong> faixa de faturamento, tamanho da
              equipe, plano de interesse, mensagens enviadas em formulários.
            </li>
            <li>
              <strong>Navegação:</strong> endereço IP, identificadores de
              dispositivo, páginas visitadas, origem do tráfego, cookies (ver
              Política de Cookies).
            </li>
            <li>
              <strong>Comunicação:</strong> histórico de interação por e-mail,
              chamadas e mensagens.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Finalidades do tratamento">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Avaliar e responder à sua aplicação;</li>
            <li>Executar contrato, prestar o serviço e oferecer suporte;</li>
            <li>Enviar comunicações comerciais e informativos relevantes;</li>
            <li>Melhorar a Plataforma, medir performance e prevenir fraude;</li>
            <li>Cumprir obrigações legais, regulatórias e contratuais.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Bases legais (art. 7º da LGPD)">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Consentimento do titular (inciso I);</li>
            <li>Cumprimento de obrigação legal ou regulatória (inciso II);</li>
            <li>Execução de contrato ou procedimentos preliminares (inciso V);</li>
            <li>Exercício regular de direitos (inciso VI);</li>
            <li>Legítimo interesse (inciso IX), sempre observados seus direitos.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Compartilhamento">
          <p>
            A Walks não vende dados pessoais. Compartilhamos dados apenas com:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Operadores e fornecedores que apoiam a operação (hospedagem,
              e-mail transacional, CRM, analytics, processadores de pagamento),
              sob obrigação contratual de sigilo e proteção;
            </li>
            <li>Autoridades públicas, mediante requisição legal;</li>
            <li>
              Sucessores em eventual reorganização societária, fusão ou
              aquisição, sempre com manutenção das salvaguardas.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Transferência internacional">
          <p>
            Eventuais transferências internacionais ocorrem apenas para países
            com nível adequado de proteção ou mediante salvaguardas previstas
            no art. 33 da LGPD.
          </p>
        </LegalSection>

        <LegalSection title="7. Retenção e eliminação">
          <p>
            Os dados são mantidos pelo tempo necessário para cumprir as
            finalidades descritas e pelos prazos legais aplicáveis (ex.: prazo
            tributário e prescricional). Após esse período, os dados são
            eliminados ou anonimizados.
          </p>
        </LegalSection>

        <LegalSection title="8. Direitos do titular (art. 18 da LGPD)">
          <p>Você pode, a qualquer tempo, solicitar:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade a outro fornecedor;</li>
            <li>
              Informação sobre compartilhamentos e sobre a possibilidade de não
              fornecer consentimento;
            </li>
            <li>Revogação do consentimento, quando aplicável.</li>
          </ul>
        </LegalSection>

        <LegalSection title="9. Segurança">
          <p>
            Adotamos medidas técnicas e organizacionais para proteger os dados
            contra acessos não autorizados, perda, alteração ou divulgação
            indevida — incluindo controles de acesso, criptografia em trânsito
            e em repouso quando aplicável, monitoramento e treinamento de
            equipe.
          </p>
        </LegalSection>

        <LegalSection title="10. Encarregado de dados (DPO)">
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento
            de dados, contate o nosso Encarregado:{" "}
            <a
              href="mailto:privacidade@walks.com.br"
              className="text-[#D63300] hover:text-[#B82A00]"
            >
              privacidade@walks.com.br
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="11. Atualizações desta política">
          <p>
            Esta Política pode ser revisada periodicamente. A versão vigente
            estará sempre disponível neste rodapé, com a data da última
            atualização.
          </p>
        </LegalSection>
      </LegalModal>

      <LegalModal
        open={open === "cookies"}
        onClose={close}
        title="Política de Cookies"
        updatedAt={UPDATED}
      >
        <p>
          Esta Política explica como utilizamos cookies e tecnologias similares
          no site e na plataforma atelye, mantidos pela{" "}
          <strong>Walks Serviços de Marketing e Consultoria Ltda.</strong>
        </p>

        <LegalSection title="1. O que são cookies">
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu
            navegador, que permitem reconhecer o dispositivo, lembrar
            preferências e medir o uso do site.
          </p>
        </LegalSection>

        <LegalSection title="2. Tipos de cookies que usamos">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Essenciais:</strong> necessários para o funcionamento do
              site (sessão, segurança, balanceamento). Não podem ser desativados.
            </li>
            <li>
              <strong>Analíticos:</strong> ajudam a entender como os visitantes
              utilizam o site, de forma agregada e anônima (ex.: páginas mais
              vistas, tempo de permanência).
            </li>
            <li>
              <strong>Marketing:</strong> usados para mensurar campanhas e
              entregar conteúdo relevante. Só são ativados com o seu
              consentimento.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Como gerenciar cookies">
          <p>
            Você pode bloquear ou apagar cookies a qualquer momento nas
            configurações do navegador. Caso desative cookies essenciais, parte
            da experiência poderá ficar prejudicada.
          </p>
        </LegalSection>

        <LegalSection title="4. Atualizações">
          <p>
            Esta Política pode ser atualizada periodicamente. A data da última
            revisão é exibida no topo.
          </p>
        </LegalSection>

        <LegalSection title="5. Contato">
          <p>
            Dúvidas:{" "}
            <a
              href="mailto:privacidade@walks.com.br"
              className="text-[#D63300] hover:text-[#B82A00]"
            >
              privacidade@walks.com.br
            </a>
            .
          </p>
        </LegalSection>
      </LegalModal>
    </footer>
  );
}
