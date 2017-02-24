import mongoose from 'mongoose';
import Ponto from '../../models/ponto'

async function pontoSeeder() {
  const createPontoPromisses = [];
  await Ponto.remove({});

  const pontos = [
    {
      category: 0,
      lyrics: 'Ê, Caveira, firma seu ponto na folha da bananeira, Exú Caveira! (x2)<br><br>Quando o galo canta é madrugada,<br>Foi Exú na encruzilhada, batizado com dendê.<br>Rezo uma oração de traz pra frente,<br>Eu queimo fogo e a chama ardente aquece Exú , Ô Laroiê.<br>Eu ouço a gargalhada do Diabo,<br>É Caveira, o enviado do Príncipe Lúcifer.<br>É ele quem comanda o cemitério,<br>Catacumba tem mistério, seu feitiço tem axé. Ê Caveira!<br><br>Ê, Caveira, afirma ponto na folha da bananeira, Exú Caveira! (x2)<br><br>Na Calunga, quando ele aparece,<br>Credo e cruz, eu rezo prece pra Exú, dono da rua.<br>Sinto a força deste momento,<br>E firmo o meu pensamento nos quatros cantos da rua.<br>E peço a ele que me proteja,<br>Onde quer que eu esteja ao longo desta caminhada.<br>Confio em sua ajuda verdadeira,<br>Ele é Exú Caveira, Senhor das Encruzilhadas. Ê Caveira !<br><br>Ê, Caveira, afirma ponto na folha da bananeira, Exú Caveira! (x2)',
      audio: 'https://www.youtube.com/watch?v=3fJ_c4V1FY0'
    },
    {
      category: 1,
      lyrics: 'Lê, lele, Lere lere lere lere lerá<br>Lê, lere lere, Lê, lere lere, Caboclo 7 Flechas no congá<br>Saravá Sr. 7 Flechas, ele é o Rei da Mata<br>A sua bodoca atira paranga<br>Sua flecha mata!<br><br>Lê, lele, Lê lere lere lere lerá<br>(Okê meu Pai, Okê Caboclo!)<br>Lê, lele, Caboclo 7 Flechas no congá<br>Saravá Sr. 7 Flechas, ele é o Rei da Mata<br>A sua bodoca atira paranga<br>Sua flecha mata!<br><br>Lê, lele, Lere lere lere lere lerá<br>(Okê meu Pai!)<br>Lê, lele, Caboclo 7 Flechas no congá<br>Saravá Sr. 7 Flechas, ele é o Rei da Mata<br>A sua bodoca atira paranga<br>Sua flecha mata!<br><br>Lê, lele, Lere lere lere lere lerá<br>(Okê meu Pai, Okê Caboclo!)<br>Lê, lele, Caboclo 7 Flechas no congá<br><br>Lê, lele, Lere lere lere lere lerá<br>(Okê meu Pai, Okê Caboclo!)',
      audio: 'https://www.youtube.com/watch?v=BlaY3eB0xgQ'
    },
    {
      category: 2,
      lyrics: 'Ecoou um canto forte na senzala<br>Ecoou um canto forte na senzala<br><br>Negro canta, negro dança<br>Liberdade fez valer<br>Não existe sofrimento, não existe mais chibata<br>Só existe esperança para um novo amanhecer<br><br>Povo negro, povo forte<br>Trabalhavam pro senhor<br>E sofriam as maldades praticadas pelo feitor<br>O sangue, o suor e a lágrima<br>Renovavam a força pra lida<br>Pois sabiam que o sofrimento purificava pra nova vida<br><br>Do Congo ou de Angola ou de Minas<br>Bahia, Aruanda ou Cambinda<br>São os Velhinhos da Umbanda<br>Que encaminham nossas vidas<br>Esqueceram o terror da senzala<br>Do cativeiro, as crueldades<br>Pois voltaram pra essa terra<br>Pra prestar a caridade<br><br>Ecoou um canto forte na senzala<br>Ecoou um canto forte na senzala',
      audio: 'https://www.youtube.com/watch?v=-8Rkq5hZ7s8'
    }
  ];

  pontos.forEach(ponto => {
    createPontoPromisses.push(Ponto.create(ponto));
  });

  return Promise.all(createPontoPromisses);
}

const closeConnection = () => {
  mongoose.connection.close(() => {
    console.log('*** Done, connection with db closed ***')
  })
}

async function initSeed() {
  await mongoose.connect('mongodb://admin:admin@ds161099.mlab.com:61099/hinariovirtual');

  console.log('*** Seeding initial data ***')
  await pontoSeeder();

  closeConnection();
}

initSeed();
