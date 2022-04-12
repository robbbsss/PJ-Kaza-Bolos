import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const termsModal = ({modalVisible, setModalVisible}) => {
 
  return (
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText2}>TERMO DE USO E POLÍTICA DE PRIVACIDADE</Text>
            <Text style={styles.modalText}>
 Kaza Bolos estabelece neste Termo de Uso e Política de Privacidade as condições para utilização do seu aplicativo por meio das quais o Usuário poderá acessar os conteúdos operacionais e institucionais, tais como textos, imagens e apresentações disponibilizados no mesmo.
Os Termos de Uso e Política de Privacidade definem as principais regras de uso do Aplicativo. Ao acessar os conteúdos do Aplicativo da Kaza Bolos através de dispositivo móvel, você concorda automaticamente com (i) os presentes Termos de uso, (ii) e com a nossa Política de privacidade.
Se você não concorda com os Termos de Uso e Política de Privacidade, não utilize o Aplicativo.
{"\n"}<Text style={styles.modalText3}>1. Definições:</Text>
{"\n"}1.1 Internet: meio através do qual o Usuário acessa os conteúdos operacionais e institucionais disponibilizados no Aplicativo da Kaza Bolos.{"\n"}
1.2 Aplicativo: local virtual onde estão disponibilizados ao Usuário os conteúdos operacionais e institucionais da Kaza Bolos.{"\n"}
1.3 Usuário: toda pessoa física que acessar o Aplicativo.
1.4 Informação Pessoal: são eventuais informações fornecidas espontaneamente pelo Usuário e que o identificam, incluindo, por exemplo, seu nome completo, endereço, telefone e endereço de e-mail.{"\n"}
{"\n"}<Text style={styles.modalText3}>2. Termos de Uso:</Text>{"\n"}
2.1 Todas as informações constantes no Aplicativo da Kaza Bolos, incluindo mas não limitado aos textos, fotografias, desenhos, imagens, estão protegidos pela Constituição Federal e pela Lei de Direitos Autorais (Lei Federal n.º 9.610, de 19.02.98) e só poderão ser reproduzidas mediante autorização expressa da Kaza Bolos.{"\n"}
2.2 Qualquer direito autoral e outros direitos de propriedade intelectual contidos no Aplicativo são de propriedade da Kaza Bolos ou foram a ela licenciados ou cedidos pelos seus proprietários para que pudessem ser reproduzidos no Aplicativo da Kaza Bolos.{"\n"}
2.3 Pertencem à Kaza Bolos: (i) todo e qualquer software ou funcionalidade empregado pela Kaza Bolos referente ao Aplicativo; (ii) a identidade visual do Aplicativo (incluindo o projeto de arte gráfico-visual de quaisquer de suas páginas); (iii) o nome empresarial, marca, nome de domínio, slogan ou expressão de propaganda ou qualquer sinal distintivo de sua titularidade inserido no Aplicativo; e (iv) todo e qualquer conteúdo criado e produzido pela Kaza Bolos, por si ou por terceiros, os quais não poderão ser reproduzidos, sob qualquer meio ou forma, pelos Usuários.{"\n"}
2.4 As informações operacionais e institucionais publicadas no Aplicativo da Kaza Bolos são destinadas ao público geral.
2.5 É terminantemente proibida:{"\n"}
2.5.1 A reprodução, tradução, modificação, venda, publicação, distribuição ou qualquer outro uso, total ou parcial, comercial ou não comercial, dos conteúdos do Aplicativo, sem prévia autorização por escrito da Kaza Bolos.{"\n"}
 
2.5.2 A cópia total ou parcial das bases de dados contidas no Aplicativo da Kaza Bolos.{"\n"}
2.5.3. A reprodução ou imitação, total ou parcial, com ou sem acréscimo, das marcas, emblemas, figuras, símbolos, gravuras, logotipos ou qualquer outro signo distintivo contido no Aplicativo.{"\n"}
{"\n"}<Text style={styles.modalText3}>3. Política de Privacidade de dados do Usuário:</Text>{"\n"}
3.1 A presente Política de Privacidade se aplica à obtenção, uso, guarda e revelação de Dados e Informações Pessoais eventualmente fornecidas pelos Usuários no Site e no Aplicativo da Kaza Bolos.{"\n"}
3.2 O objetivo da Kaza Bolos ao obter os dados e eventuais informações pessoais dos Usuários visa tão somente:{"\n"}
3.2.1 Atender as solicitações dos Usuários, retornar os contatos e prestar suporte, dentro das possibilidades da Kaza Bolos;{"\n"}
3.3 Atendendo a legislação em vigor, é garantida aos Usuários do Aplicativo a privacidade dos dados pessoais por eles fornecidos. Para tanto, a Kaza Bolos declara expressamente não dispor de quaisquer mecanismos que identifiquem pessoalmente os Usuários e/ou seus respectivos endereços eletrônicos. Todos os dados e informações pessoais aos quais a Kaza Bolos tem acesso pelo Aplicativo são, necessariamente, informados pelos próprios Usuários de forma voluntária no campo “CADASTRE-SE”.{"\n"}
3.4 Também podemos usar e processar os dados e informações pessoais eventualmente fornecidas pelos usuários, para as seguintes finalidades:{"\n"}
i. Aplicar os Termos de Uso ou a Política de Privacidade;	{"\n"}
ii. Entrar em contato com você quando a Kaza Bolos achar necessário;	{"\n"}
iii. Obedecer a qualquer legislação aplicável e auxiliar os órgãos de cumprimento da lei nos termos da legislação, e quando a Kaza Bolos acreditar de boa-fé que a cooperação com esses órgãos é exigida por lei ou atende aos padrões e procedimentos legais aplicáveis;{"\n"}
iv. Detectar abusos e atividades ilegais, encontrar e prevenir fraudes, apropriações indébitas, violações, roubos de identidade e outras atividades e usos indevidos dos Serviços;	{"\n"}
v. Solucionar danos e mau funcionamento;	{"\n"}
vi. Protocolar quaisquer ações em caso de disputa ou processo judicial de qualquer tipo entre você e os Serviços, outros usuários ou terceiros com relação a esses Serviços;	{"\n"}
vii. Cumprir os termos desta Política de Privacidade e dos Termos de Uso;	{"\n"}
viii. Ajudar a melhorar a segurança e a confiabilidade dos nossos Serviços, incluindo detectar, prevenir e resolver riscos de segurança e problemas técnicos que podem prejudicar a Kaza Bolos, nossos usuários ou o público.{"\n"}
3.5 A Kaza Bolos não divulgará ou repassará a terceiros qualquer dado ou Informação Pessoal dos Usuários, exceto quando (i) houver autorização expressa pelo Usuário; (ii) por força de lei; ou (iii) ordem judicial ou administrativa emanada pela Autoridade Pública.{"\n"}
3.6 O Usuário se responsabiliza pela precisão e veracidade dos dados informados e reconhece que estará sujeito às penalidades legais caso envolva terceiros alheios a relação Kaza Bolos – Usuário{"\n"}.
3.7 O Usuário declara estar ciente e concordar com a coleta, armazenamento, tratamento, processamento e uso das Informações enviadas e/ou transmitidas pelo Usuário nos termos acima estabelecidos.{"\n"}
3.8 Solicitaremos o consentimento do Usuário antes de usar as informações para finalidades que não estiverem abordadas nesta Política de Privacidade.{"\n"}
{"\n"}<Text style={styles.modalText3}>4. Tolerância:</Text>{"\n"}
4.1 Eventual tolerância ao descumprimento de quaisquer das disposições destes Termos de Uso e Política de Privacidade por qualquer Usuário não constituirá renúncia ao direito de exigir o cumprimento da obrigação, nem perdão, nem alteração do que consta aqui previsto.{"\n"}
5. Alterações e atualizações:{"\n"}
5.1 A Kaza Bolos, a qualquer tempo, a seu exclusivo critério e sem necessidade de qualquer aviso prévio ou posterior de qualquer Usuário ou terceiros, poderá: (i) suspender, cancelar ou interromper o acesso ao Aplicativo e (ii) remover, alterar e/ou atualizar o Aplicativo no todo ou em parte bem como seus respectivos conteúdos e/ou Termo de Uso e Política de Privacidade.{"\n"}
5.2 Qualquer alteração e/ou atualização deste Termo de Uso e Política de Privacidade passará a vigorar a partir da data de sua publicação no Aplicativo e deverá ser integralmente observada pelos Usuários.{"\n"}
{"\n"}<Text style={styles.modalText3}>6. Segurança das informações:</Text>{"\n"}
6.1 A Kaza Bolos trata a segurança das informações como prioridade máxima. Analisamos nossas práticas de coleta, armazenamento e processamento de dados, incluindo medidas de segurança física, para minimizar o risco de o acesso não autorizado aos nossos sistemas. Além disso, restringimos o acesso às informações pessoais aos funcionários e contratados da Kaza Bolos que precisam processá-las. Todas as pessoas com esse acesso estão sujeitas a rigorosas obrigações contratuais de confidencialidade, podendo ser processadas ou dispensadas se deixarem de cumpri-las.{"\n"}
6.2 Os insights que recebemos na manutenção dos nossos Serviços nos ajudam a detectar e bloquear automaticamente ameaças de segurança para que elas não cheguem até o Usuário. No entanto, mesmo com essas medidas, não é possível fornecer garantia absoluta. Portanto, embora a Kaza Bolos envide todos os esforços razoáveis para proteger os dados e eventuais informações pessoais fornecidas pelos Usuários, não podemos garantir e o Usuário não pode esperar que nossos bancos de dados estejam imunes a violações, irregularidades, falhas, interceptações ou acessos ilegais ou outros tipos de abuso e uso indevido.{"\n"}
6.3 A Kaza Bolos não é responsável por falhas, interrupções ou pelo mau funcionamento dos Serviços do fornecedor de acesso à Internet do Usuário, assim como por qualquer causa externa ao Site ou Aplicativo que poderia interromper ou prejudicar o acesso aos Serviços do Site ou Aplicativo.{"\n"}
{"\n"}<Text style={styles.modalText3}>7. Vedação a fins comerciais:</Text>{"\n"}
7.1 O Usuário se compromete a utilizar o Aplicativo unicamente para fins pessoais.{"\n"}
7.2 É vedada a exploração do Aplicativo para fins comerciais, promocionais, eleitorais, e de recrutamento. {"\n"}
{"\n"}<Text style={styles.modalText3}>8. Contato com a Kaza Bolos:</Text>{"\n"}
8.1 Se você tiver alguma dúvida sobre esta Política de Privacidade ou se acreditar que sua privacidade foi comprometida durante o uso dos Serviços, entre em contato com a Kaza Bolos pelo e-mail kazabolos@gmail.com. Você pode enviar outras solicitações, respostas, perguntas e reclamações para a Kaza Bolos pelo e-mail kazabolos@gmail.com.{"\n"}
 
{"\n"}<Text style={styles.modalText3}>9. Disposições Finais:</Text>{"\n"}
A <Text style={styles.modalText4}>KAZA BOLOS OFERECE O SERVIÇO "NO ESTADO EM QUE SE ENCONTRA", "CONFORME DISPONÍVEL" E NA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, E NÃO CONCEDE GARANTIAS DE QUALQUER TIPO, EXPRESSAS, IMPLÍCITAS, ESTATUTÁRIAS OU DE OUTRA FORMA COM RELAÇÃO AO SERVIÇO (INCLUINDO TODO O CONTEÚDO CONTIDO NO MESMO E ESPECIALMENTE DESATUALIZAÇÕES PONTUAIS DE CONTEÚDO DECORRENTES DO DINAMISMO DO SISTEMA OU DO GRANDE NÚMERO DE INTERCORRÊNCIAS EXTERNAS A QUE ESTAMOS EXPOSTOS).
EM TODA A EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, EM NENHUMA CIRCUNST NCIA, A KAZA BOLOS, FUNCIONÁRIOS, LICENCIADORES OU PRESTADORES DE SERVIÇOS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, LUCROS CESSANTES, EXEMPLARES, INCIDENTAIS, ESPECIAIS OU PUNITIVOS, INCLUSIVE, ENTRE OUTROS, INCORRIDA DIRETA OU INDIRETAMENTE, OU PERDA DE DADOS, USO, CLIENTELA E OUTRAS PERDAS INTANGÍVEIS, RESULTANTES DO SEGUINTE: (I) O SEU ACESSO, UTILIZAÇÃO OU INCAPACIDADE DE ACESSO OU UTILIZAÇÃO DOS SERVIÇOS, (II) A CONDUTA OU CONTEÚDO DE OUTROS USUÁRIOS OU TERCEIROS NA UTILIZAÇÃO DOS SERVIÇOS; OU (III) ACESSO, USO OU ALTERAÇÃO NÃO AUTORIZADA DO SEU CONTEÚDO, AINDA QUE A KAZA BOLOS TENHA SIDO AVISADA DA POSSIBILIDADE DOS REFERIDOS DANOS.
ESTES TERMOS CONSTITUEM O REGRAMENTO ESTABELECIDO ENTRE VOCÊ E A KAZA BOLOS SOBRE O USO DO SERVIÇO. SE QUALQUER DISPOSIÇÃO DESTES TERMOS FOR CONSIDERADA INVÁLIDA, AS DEMAIS DISPOSIÇÕES PERMANECERÃO EM PLENO VIGOR E EFEITO. </Text>


</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Ok, estou ciente</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
   
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: 15,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#602e1c',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    
    fontSize: 4,
    color:"#602e1c",
    marginBottom: 10,
    textAlign: 'left',
    padding:10
  },
  modalText2: {
    fontSize: 7,
    color:"#602e1c",
    fontWeight: 'bold',
    marginBottom: -5,
    textAlign: 'center',
    padding:5
  },
  modalText3: {
    fontSize: 5,
    color:"#602e1c",
    fontWeight: 'bold',
    marginBottom: -5,
    textAlign: 'left',
    padding:10
  },
  modalText4: {
    fontSize: 4,
    fontStyle: 'italic',
    color:"#602e1c",
    fontWeight: 'bold',
    marginBottom: -5,
    textAlign: 'left',
    padding:10
  },
});

export default termsModal;