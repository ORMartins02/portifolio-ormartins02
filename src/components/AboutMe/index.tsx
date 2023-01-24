import { Container } from "@/styles/Global";
import { AboutSection, AboutSectionContent, AboutSectionText } from "./style";
import { useRef } from "react";
import { Text } from "@/styles/Text";

export const AboutMe = () => {
  const ref = useRef(null);

  return (
    <AboutSection id="about-me">
      <Container>
        <AboutSectionContent ref={ref}>
          <AboutSectionText>
            <Text id="about" as="h2" type="heading4" color="grey4">
              Sobre mim
            </Text>
            <Text type="body3" color="grey2">
              Sou o Ricardo Fernando Martins, brasileiro, tenho 35 anos, casado
              com a Janaína e juntos temos dois filhos, Guilherme e Henrique.
              Sou formado em Técnico em Redes de computadores pelo SENAC de
              Santa Catarina. No último ano decidi fazer um upgrade na minha
              carreira de TI, porque sempre tive o sonho de ser programador, já
              possuo domínio em várias áreas de TI e programação sempre foi o
              meu desafio e objetivo pessoal e profissional e sendo programador
              poderei colaborar para além de códigos. Hoje presto serviço na
              área de redes e servidores para um pequeno canal de TV, quando
              entrei, tive que reestruturar a rede de dados e servidor de
              arquivos, enfrentei inúmeros desafios para implementar a estrutura
              que a empresa precisava, à qual dispõe hoje. Graças à estabilidade
              encontrada no serviço implementado, esta estrutura hoje demanda de
              pouca manutenção e por isso estou diponível para prestar serviço a
              mais de uma empresa. No decorrer dos meus 15 anos no mercado de
              trabalho, desenvolvi minhas habilidades de comunicação e
              organização. Atualmente, estou finalizando o curso da Kenzie como
              programador Full Stack. A Kenzie é uma escola que simula o mercado
              de trabalho, neste último ano desenvolvi mais de 40 projetos entre
              front end e back end, além de realizar projetos em equipe para
              desenvolvermos nossas habilidades de soft skills. Por ter um
              desempenho exemplar no curso, fui convidado a trabalhar como
              monitor de turma em um período de 5 meses, no qual tive contato
              diário e direto com os novos devs, auxiliando-os no entendimento
              da linguagem para resolução de atividades e avaliando-os em testes
              técnicos ao vivo, experiência na qual pude crescer muito com a
              linguagem de JS e também na comunicação e em resoluções de
              problemas.
            </Text>
          </AboutSectionText>
        </AboutSectionContent>
      </Container>
    </AboutSection>
  );
};
