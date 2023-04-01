const quotes = [
  "A vida é uma jornada, aproveite cada passo.",
  "A felicidade é a chave para uma vida saudável e longa.",
  "Sonhe grande e ouse falhar.",
  "Nunca é tarde demais para se tornar o que você poderia ter sido.",
  "Não deixe o medo te impedir de seguir seus sonhos.",
  "A verdadeira felicidade é encontrada em coisas simples.",
  "Se você quer algo, vá lá e conquiste!",
  "A perseverança é a chave para alcançar seus objetivos.",
  "Tudo é possível se você acreditar em si mesmo.",
  "As maiores recompensas vêm dos maiores desafios.",
  "Faça mais do que você pensa que pode fazer.",
  "Viva cada dia como se fosse o último.",
  "O fracasso é apenas uma oportunidade para começar de novo com mais experiência.",
  "Siga seus sonhos, eles conhecem o caminho.",
  "A imaginação é a única arma na guerra contra a realidade.",
  "O sucesso é construído sobre falhas, frustrações e perseverança.",
  "O melhor modo de prever o futuro é inventá-lo.",
  "O sucesso não é o resultado de um jogo de azar, é o resultado de habilidade.",
  "Acredite em si mesmo e em tudo que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo.",
  "A vida é curta, faça cada dia contar.",
  "A única forma de fazer um bom trabalho é amar o que você faz.",
  "Tudo o que você pode imaginar é real.",
  "O sucesso não é para os preguiçosos.",
   "A falsidade é um sinal de fraqueza e insegurança.",
"A falsidade é uma mácula na alma da pessoa que a pratica.",
"A falsidade é uma porta aberta para o fracasso e a decepção.",
"A falsidade é uma escolha que sempre trará consequências negativas.",
"A falsidade é um vício que precisa ser combatido com sinceridade e honestidade.",
"A falsidade é um buraco negro que suga tudo ao seu redor.",
"A falsidade é como uma nuvem que encobre a verdadeira natureza da pessoa.",
"A falsidade é um engano que ilude a si mesmo e aos outros.",
"A falsidade é um câncer que corrói a alma e o caráter da pessoa.",
"A falsidade é uma ferida que só pode ser curada com a verdade.",
"A falsidade é uma máscara que pode ser facilmente removida pela honestidade.",
"A falsidade é um obstáculo que impede o crescimento e o progresso.",
"A falsidade é uma traição que não pode ser perdoada facilmente.",
"A falsidade é uma sombra que obscurece a luz da verdade e da honestidade.",
"A falsidade é um problema que precisa ser resolvido com sinceridade e transparência.",
"Não deixe para amanhã o que pode ser feito hoje.",
"O tempo é um recurso precioso, não o desperdice procrastinando.",
"Não adie suas metas e sonhos, comece a trabalhar nelas agora.",
"Não espere pelo futuro para agir, comece a construí-lo agora.",
"Não perca tempo com coisas triviais, concentre-se no que é realmente importante.",
"Não se contente com a mediocridade, busque a excelência em tudo o que faz.",
"Não deixe para o último minuto o que pode ser feito com antecedência.",
"Não seja um espectador passivo da sua vida, assuma o controle e tome ações concretas.",
"Não se arrependa pelo que poderia ter feito, faça o que precisa ser feito agora.",
"Não procrastine, comece a agir e coloque suas ideias em prática.",
"Não se contente com o status quo, busque a melhoria contínua em tudo o que faz.",
"Não permita que a preguiça e a procrastinação impeçam você de alcançar seus objetivos.",
"Não deixe as oportunidades passarem, agarre-as com firmeza e determinação.",
"Não espere pelo momento perfeito, crie o momento perfeito com sua ação.",
"Não deixe para amanhã o que pode ser feito hoje, porque amanhã pode ser tarde demais.",
"Não fique estagnado, busque constantemente desafios e novas oportunidades.",
"Não adie o que pode ser feito agora, pois o tempo é um recurso limitado.",
"Não permita que a procrastinação roube seus sonhos e sua felicidade.",
"Não deixe o medo paralisar suas ações, enfrente-o e supere-o com coragem.",
"Não espere por ninguém para agir, tome a iniciativa e comece você mesmo.",
  "Não há nada impossível para aquele que tenta.",
"A realidade é o que nos faz crescer e aprender.",
"A realidade é como um rio que flui, não podemos detê-lo, apenas segui-lo.",
"A realidade é como um fogo que queima, mas também nos aquece.",
"A realidade pode ser dolorosa, mas é a base para a verdadeira felicidade.",
"O verdadeiro caráter de uma pessoa é revelado em momentos difíceis.",
"As palavras podem ferir mais do que uma espada.",
"A gratidão é a atitude mais nobre que podemos ter.",
"O que fazemos pelos outros é o que realmente importa na vida.",
"A verdadeira beleza está dentro de nós.",
"A humildade é a chave para o sucesso duradouro.",
"A perseverança é a arma dos fortes.",
"O amor é a força mais poderosa do universo.",
"O respeito é a base de qualquer relacionamento saudável.",
"A sabedoria é a chave para a paz interior.",
"A esperança é a luz que guia nossos caminhos.",
"A honestidade é o alicerce da confiança.",
"O perdão é a libertação da alma.",
"A coragem é a qualidade mais importante em tempos difíceis.",
"O tempo é um recurso valioso, não o desperdice.",
"A bondade é uma virtude que nunca sai de moda.",
"A paciência é uma virtude que traz grandes recompensas.",
"A compaixão é o que nos torna humanos.",
"A mudança começa com uma simples decisão.",
"A fé é a luz que nos guia nas trevas.",
"A honestidade é uma virtude que deve ser cultivada.",
"O perdão é a chave para a paz interior.",
"A disciplina é o caminho para o sucesso.",
"A felicidade é uma escolha que fazemos todos os dias.",
"A empatia é o que nos conecta com o mundo ao nosso redor.",
"A gentileza é uma virtude que custa pouco e vale muito.",
"A autodisciplina é a chave para alcançar nossos objetivos.",
"A gratidão é a atitude que mais atrai coisas boas para nossa vida.",
"O sucesso é o resultado de pequenas ações realizadas todos os dias.",
"A sabedoria é uma fonte inesgotável de conhecimento e crescimento.",
"A inveja é o veneno que mata a alma.",
"Quem tem inveja não prospera.",
"A inveja é uma confissão de inferioridade.",
"A inveja é um mal que corrói o coração.",
"Quando a inveja bate à porta, a felicidade sai pela janela.",
"A inveja é um fardo que não vale a pena carregar.",
"Invejar alguém é desperdiçar sua própria vida.",
"A inveja é o tributo que a mediocridade paga ao talento.",
"A inveja é a tristeza pela prosperidade alheia.",
"A inveja é o reconhecimento implícito da superioridade do outro.",
"A inveja é a arma dos fracos e dos que não têm fé.",
"A inveja é uma emoção que cega a mente e envenena a alma.",
"A inveja é um estado mental de insatisfação constante.",
"A inveja é a admiração do sucesso alheio.",
"A inveja é a inimiga da felicidade e do bem-estar.",
"A inveja é o veneno que mata a amizade.",
"A inveja é a arma do mal e da maldade.",
"A inveja é uma doença que precisa ser curada com amor e compaixão.",
"A inveja é a tristeza pela felicidade do outro.",
"A inveja é um sinal de fraqueza e falta de confiança em si mesmo.",
"Um amigo é alguém que te conhece como você é, compreende onde você esteve, aceita quem você se tornou e ainda assim, te permite crescer.",
"A amizade é o ingrediente mais importante na receita da vida.",
"Amigos são a família que escolhemos para nós mesmos.",
"Amizade é quando você não precisa dizer nada, e mesmo assim tudo é entendido.",
"A amizade é a coisa mais difícil de se explicar. Não é algo que você aprende na escola. Mas se você não aprendeu o significado da amizade, você realmente não aprendeu nada.",
"Um amigo verdadeiro é alguém que entra quando todos os outros saem.",
"Amigos de verdade são aqueles que caminham ao seu lado quando o resto do mundo te abandona.",
"A amizade é o começo, meio e fim de tudo que é bom na vida.",
"A amizade é a flor mais rara e bela do jardim da vida.",
"A verdadeira amizade é como uma pedra preciosa: rara, valiosa e duradoura.",
"Amigos são como estrelas: nem sempre podemos vê-los, mas sabemos que estão sempre lá.",
"A amizade é a luz que ilumina os caminhos da vida.",
"Amigos são como tesouros: difíceis de encontrar, mas preciosos quando encontrados.",
"A amizade é a chave que abre as portas da felicidade.",
"Amizade não é sobre quem veio primeiro ou quem ficou mais tempo. É sobre quem veio e nunca saiu.",
"Um amigo é alguém que te dá total liberdade para ser você mesmo.",
"A amizade é o abraço que conforta nos momentos difíceis.",
"Um amigo verdadeiro é aquele que te ama mesmo quando você não se ama.",
"A amizade é como uma música: algumas notas altas, outras baixas, mas sempre bela.",
"Amigos são como âncoras: nos mantêm firmes quando tudo parece estar desmoronando.",
"Um verdadeiro amigo é aquele que entra na sua vida quando todos os outros estão saindo.",
"A amizade é o remédio que cura a solidão.",
"Amigos são como pilares: nos sustentam quando tudo parece estar caindo.",
"Um amigo verdadeiro é aquele que te ama mesmo quando você comete erros.",
"A amizade é a base sólida em que construímos nossas vidas.",
"Amigos são como presentes: não importa o tamanho ou o valor, o que importa é o amor que foi colocado neles.",
"A amizade é como uma flor que precisa ser regada todos os dias para continuar a florescer.",
"Amigos são como espelhos: nos mostram quem realmente somos e nos ajudam a melhorar.",
"A amizade é o elo mais forte que une as almas.",
"Um amigo verdadeiro é aquele que não julga, mas apoia e incentiva.",
"A falsidade é como uma doença contagiosa, se não for tratada, se espalha rapidamente.",
"Quando a falsidade está presente, a confiança desaparece.",
"A falsidade é uma máscara que esconde a verdadeira face da pessoa.",
"Quem é falso não merece o seu tempo ou a sua confiança.",
"A falsidade não é apenas uma mentira, é uma traição à confiança que depositamos em alguém.",
"A falsidade é como uma faca que pode cortar profundamente, deixando cicatrizes para sempre.",
"A falsidade é um veneno que destrói a alma e a mente.",
"A falsidade é uma sombra que segue a pessoa onde quer que vá.",
"A falsidade é a marca dos fracos, que não têm coragem de serem verdadeiros.",
"A falsidade é um escudo que as pessoas usam para se protegerem da verdade.",
"Quando a falsidade é descoberta, a máscara cai e a verdade é revelada.",
"A falsidade é como uma doença crônica que afeta o caráter da pessoa.",
"A falsidade é uma faceta feia da humanidade que precisamos combater.",
"A falsidade é uma traição à amizade, à lealdade e à honestidade.",
"A falsidade é um comportamento que só traz dor e sofrimento para todos os envolvidos.",
"Seja feliz com o que você tem e está trabalhando para alcançar." ,
"A felicidade não é algo feito. Vem das suas próprias ações." ,
"A felicidade é uma escolha que você faz todos os dias." ,
"A felicidade é deixar ir o que você pensa que sua vida deveria ser e celebrar a vida que você tem." ,
"A felicidade não é algo que você adquire, é algo que você cria." ,
"A felicidade é quando o que você pensa, o que você diz e o que você faz estão em harmonia." ,
"A felicidade não é algo pronto. Vem das suas próprias ações." ,
"A felicidade é a consequência de personalidade correta." ,
"A felicidade é um perfume que você não pode derramar sobre os outros sem ficar algumas gotas em si mesmo." ,
"Se você quer ser feliz, seja." ,
"A felicidade é como uma borboleta, quanto mais você a persegue, mais ela irá eludir você. Mas se você voltar sua atenção para outras coisas, ela virá e suavemente pousará em seu ombro." ,
"A felicidade não é ter o que você quer, mas querer o que você tem." ,
"A felicidade não é algo que vem pronto. Ela vem das suas próprias ações." ,
"Quando você é feliz, você desfruta a música. Mas quando você é triste, você entende as letras.",
"A felicidade é uma viagem, não um destino.",
"A felicidade é estar em paz com você mesmo. Não deixe as pessoas fazerem você se sentir mal por ser quem você é.",
"A felicidade é a arte de nunca se render à tristeza.",
"A felicidade é a chave para o sucesso. Se você ama o que está fazendo, será bem-sucedido.",
"A felicidade é uma borboleta que, quando perseguida, está sempre além do seu alcance, mas que, se você se sentar silenciosamente, pode pousar em você.",
"A escolha é sua: você pode ficar no fundo do poço esperando a escada aparecer ou pode começar a subir usando os seus próprios pés.",
"Cada escolha que fazemos tem um resultado, uma consequência.",
"Nossas escolhas mostram o que realmente somos, muito mais do que nossas habilidades.",
"Toda escolha tem uma renúncia. O importante é ter claro o que se está renunciando para não se arrepender depois.",
"O que você escolhe para hoje pode afetar todos os seus amanhãs.",
"Não existem escolhas perfeitas, apenas escolhas conscientes.",
"As melhores escolhas são aquelas que fazemos com o coração.",
"Não tenha medo de fazer escolhas, afinal, é isso que nos move para frente.",
"Às vezes, a melhor escolha é deixar ir.",
"As escolhas que fazemos são o que nos tornam quem somos.",
"Escolha ser feliz, não importa o que aconteça.",
"Você não pode controlar todas as coisas que acontecem na vida, mas pode controlar as escolhas que faz.",
"A vida é feita de escolhas. Faça as suas e viva com elas.",
"A escolha não é entre o sucesso e o fracasso. É entre coragem e medo.",
"As escolhas são os degraus da escada para o sucesso.",
"Não existe escolha certa ou errada, apenas caminhos diferentes.",
"Escolha sempre o amor, mesmo quando parecer difícil.",
"A cada escolha, um novo caminho se abre.",
"As escolhas que fazemos hoje definem o nosso amanhã.",
"Às vezes, a melhor escolha é simplesmente seguir em frente.",
"Todas as escolhas têm consequências, é preciso estar preparado para elas.",
"Cada escolha que fazemos é uma oportunidade para sermos melhores.",
"Escolha sempre a esperança, mesmo quando tudo parecer perdido.",
"As escolhas que fazemos moldam o nosso destino.",
"O poder de escolha é um presente que recebemos todos os dias.",
"As escolhas que fazemos refletem quem somos e quem queremos ser.",
"Não deixe que as escolhas dos outros determinem o seu caminho.",
"A vida é uma sucessão de escolhas. Escolha sabiamente.",
"Toda escolha é uma chance de mudar o rumo da sua vida.",
"As escolhas difíceis são as que nos fazem crescer.",
"Somos livres para fazer escolhas, mas prisioneiros das consequências.",
"Nunca subestime o poder de suas escolhas.",
"As escolhas que fazemos, moldam o nosso destino.",
"O que somos é o resultado de nossas escolhas.",
"Escolhas não são fáceis, mas são necessárias.",
"A vida é uma série de escolhas, faça sempre as melhores.",
"O sucesso é o resultado de escolhas bem feitas.",
"Todas as escolhas têm suas consequências, boas ou ruins.",
"As escolhas que você faz determinam quem você se torna.",
"Não tenha medo de fazer escolhas, elas podem te levar para lugares incríveis.",
"Nossas escolhas são o reflexo de quem somos.",
"A vida é feita de escolhas, faça as que te fazem feliz.",
"Escolhas difíceis levam a uma vida fácil, escolhas fáceis levam a uma vida difícil.",
"Não deixe as suas escolhas serem controladas pelo medo.",
"Escolhas não definem apenas a sua vida, mas também a dos outros.",
"As escolhas podem ser difíceis, mas a felicidade é o resultado de escolhas bem feitas.",
"Todas as escolhas têm um preço, cabe a você decidir se é um preço que está disposto a pagar.",
"A vida é cheia de escolhas, cabe a você decidir qual caminho seguir.",
"Não tenha medo de errar em suas escolhas, os erros fazem parte do aprendizado.",
"Suas escolhas mostram quem você é, muito mais do que suas palavras.",
"A vida é uma jornada de constante evolução, e ser uma pessoa melhor é o objetivo final.",
"Não se preocupe em ser a melhor pessoa do mundo, mas em ser uma pessoa melhor a cada dia.",
"A verdadeira mudança começa de dentro para fora.",
"Não espere que os outros mudem, mude você mesmo.",
"Seja a mudança que você deseja ver no mundo.",

"O sucesso é fazer o que você ama e ajudar os outros a fazerem o mesmo.",
"A verdadeira medida de um homem é como ele trata alguém que pode fazer absolutamente nada por ele.",
"Não é sobre ser o melhor. É sobre ser melhor do que você era ontem.",
"Se você quer algo que nunca teve, precisa estar disposto a fazer algo que nunca fez.",
"A vida é uma oportunidade, aproveite-a. A vida é uma beleza, admire-a. A vida é um sonho, realize-o.",
"Quando você muda a maneira como olha para as coisas, as coisas que você olha mudam.",
"Não espere por oportunidades, crie-as.",
"A vida é um eco, o que você envia volta para você.",
"O sucesso não é o resultado do esforço único, mas sim do esforço contínuo.",
"O sucesso não é medido pelo que você realiza, mas pelos obstáculos que você supera.",
"A maior glória em viver não está em nunca cair, mas em se levantar toda vez que caímos.",
"A chave para o sucesso é focar na meta, não no obstáculo.",
"Se você quer ter sucesso, precisa ser persistente.",
"Tudo o que você precisa é de coragem e vontade de tentar.",
"Você é o arquiteto de seu próprio destino; você é quem decide quem será e o que fará.",
"O maior inimigo da excelência é a zona de conforto.",
"Não deixe que o medo de falhar o impeça de tentar.",
"Acredite em si mesmo e tudo será possível.",
"A vida é um presente. Use-o para fazer a diferença.",
"O sucesso é alcançado por aqueles que não têm medo de falhar.",
"A mudança é inevitável. O crescimento é opcional.",
"A vida é uma jornada, não um destino.",
"Mude seus pensamentos e você mudará seu mundo.",
"A vida é curta demais para desperdiçar tempo em coisas que não importam.",
"O sucesso é a soma de pequenos esforços repetidos dia após dia.",
"Não desista até que você esteja orgulhoso.",
"Para alcançar o sucesso, é preciso ter fé em si mesmo e em seus sonhos.",
"A maior recompensa na vida é ser a melhor versão de si mesmo.",
"Seja a mudança que você deseja ver no mundo.",
"O sucesso é a soma de pequenos esforços repetidos dia após dia.",
"As dificuldades são oportunidades para superação e crescimento.",
"Faça hoje melhor do que ontem e amanhã melhor do que hoje.",
"Acredite que você pode e você já está no meio do caminho.",
"O fracasso é apenas uma oportunidade para começar de novo com mais sabedoria.",
];


const quoteText = document.querySelector("#quote p");
const likeButton = document.getElementById("like-button");
const nextButton = document.getElementById("new-quote");

let currentQuoteIndex = 0;
let likes = 0;

function showRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerHTML = quotes[currentQuoteIndex];
  likes = 0;
}

showRandomQuote();

likeButton.addEventListener("click", () => {
  likes++;
  const message = `Você curtiu a citação "${quotes[currentQuoteIndex]}". Ela agora tem ${likes} curtida(s).`;
  const alertContainer = document.createElement("div");
  alertContainer.classList.add("alert-container");
  const alertMessage = document.createElement("p");
  alertMessage.innerText = message;
  const closeButton = document.createElement("button");
  closeButton.innerText = "Fechar";
  closeButton.addEventListener("click", () => {
    alertContainer.remove();
  });
  alertContainer.appendChild(alertMessage);
  alertContainer.appendChild(closeButton);
  document.body.appendChild(alertContainer);
});

nextButton.addEventListener("click", () => {
  showRandomQuote();
});

