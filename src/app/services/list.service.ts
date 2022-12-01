import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  diminuirIMC = [
    {
      nome: "Faça uma reeducação alimentar",
      texto: "Maus hábitos alimentares estão entre os principais causadores da obesidade.Por isso, para reduzir o índice, é fundamental fazer alterações na sua dieta.A reeducação alimentar é ideal para reaprender a comer de forma saudável e nutritiva. A reeducação alimentar não significa parar de comer e, sim, distribuir as refeições ao longo do dia em pequenas porções que saciem.",
    },
    {
      nome: "Pratique exercícios físicos",
      texto: "É normal adotar um novo estilo de alimentação e querer resultados, porém, somente a mudança na dieta não é o suficiente.Os exercícios físicos são aliados da reeducação alimentar e ajudam a acelerar o metabolismo.Basta praticar por 30 minutos, ao longo de 5 vezes por semana, para sentir a diferença. Com a prática de atividades físicas, é mais fácil diminuir e manter o peso, além de ser um auxílio no combate de problemas cardíacos, diabetes e obesidade.Fazer exercícios também traz benefícios para a mente, como o alívio da ansiedade, do estresse e dos sintomas ligados à depressão.Isso acontece porque eles estimulam a produção de serotonina, conhecida como o hormônio do bem - estar. As atividades físicas ainda ajudam a ter uma boa noite de sono e a manter a resistência muscular.Desse modo, você acorda bem - disposto e tem mais energia para encarar o dia.",
    },
    {
      nome: "Consulte um médico",
      texto: "Ao notar que está acima do peso, é importante consultar um médico para que ele possa pedir exames específicos a fim de saber se há algum problema de saúde.Além disso, apenas o médico especialista poderá medir o seu IMC corretamente e indicar que você está em uma faixa de risco.",
    },
    {
      nome: "Tenha o suporte de um nutricionista",
      texto: "Para que a reeducação alimentar seja bem - sucedida, é essencial contar com o suporte de um nutricionista.Apenas esse profissional poderá analisar o seu histórico de saúde e determinar os melhores alimentos para você. Além disso, com base em exames de sangue, o especialista pode avaliar a sua necessidade nutricional.Ou seja, é o caso de verificar se há alguma vitamina em baixa que a pessoa precisa consumir com maior regularidade, assim como demais nutrientes.",
    },
    {
      nome: "Evite o sedentarismo",
      texto: "O sedentarismo é um convite para a obesidade e pode, até mesmo, causar problemas emocionais.Ficar deitado o dia inteiro ou sentado na frente do computador sem fazer outras atividades é uma rotina muito prejudicial.Somado à má alimentação, o sedentarismo é um fator de risco para infartos e acidentes vasculares cerebrais(AVC).",
    },
    {
      nome: "Aposte na reeducação emocional",
      texto: "Consumir alimentos demasiadamente e optar pelos mais gordurosos também se associa a problemas emocionais.Prova disso é que esses foram os mais buscados por muitas pessoas durante a pandemia, o que intensificou os níveis de obesidade. Ela funciona ao entender o que você sente e busca suprir quando optar por consumir tais refeições, mesmo ciente que não é o mais recomendado.",
    },
    {
      nome: "Beba mais água",
      texto: "O maior consumo de água contribui com a hidratação corporal, que ajuda direta e indiretamente na diminuição do IMC.Isto é, o hábito controla a saciedade, facilita a liberação de toxinas no corpo e auxilia no processo de digestão.",
    }
  ];

  aumentarIMC = [
    {
      nome: 'Inclua mais proteína na dieta',
      texto:'As proteínas são indispensáveis ao corpo humano, pois além de contribuírem como fonte energética, são responsáveis pelo crescimento muscular e pela manutenção do organismo.Suas fontes mais ricas são os ovos, o queijo e as carnes de todos os tipos, porém a melhor opção são as mais magras, grelhadas ou assadas.Enquanto as leguminosas são as melhores fontes de proteína vegetal.Outras fontes vegetais incluem castanhas e nozes.Aumentar o consumo de proteínas leva a um ganho de peso saudável e sustentável.'
    },
    {
      nome: 'Fracione as refeições',
      texto: 'É importante manter a rotina de fazer três refeições principais por dia —café da manhã, almoço e jantar — e dois lanches intermediários.Dessa forma, aumenta - se a ingestão calórica, dividindo as refeições em maior número.'
    },
    {
      nome: 'Invista em atividades físicas',
      texto: 'As pessoas magras também precisam se exercitar.A atividade física ajuda a desenvolver massa muscular e consequentemente gera um aumento no peso saudável.Além disso, a prática de atividade física aumenta a disposição e até mesmo a fome.Há várias opções de atividade, mas para quem busca ganhar peso, os exercícios de força, como musculação, são os mais indicados.'
    },
    {
      nome: 'Não se esqueça das gorduras boas',
      texto: 'As gorduras consideradas boas são essenciais para o metabolismo e a manutenção de funções fisiológicas como a síntese de hormônios, e contêm micronutrientes indispensáveis para o ganho de peso.Elas são fontes de energia, além de ajudarem na absorção de vitaminas lipossolúveis(A, D, E e K).'
    },
    {
      nome: 'Alie - se aos carboidratos certos',
      texto: 'Os carboidratos complexos são fundamentais para o funcionamento do organismo e trazem muitos benefícios para a saúde.É importante evitar os carboidratos processados, que são menos nutritivos e sempre que possível optar por fontes naturais desse macronutriente.Por isso, vale investir em arroz, pão integral, quinoa, aveia e também alimentos como feijão, lentilha e batata - doce, por exemplo.'
    },
    {
      nome: 'Fique longe do cigarro',
      texto: 'É importante manter os hábitos saudáveis mesmo sendo uma pessoa magra, e por isso, é necessário ficar longe do cigarro.Sabe - se que a nicotina ajuda a diminuir o apetite por meio da ativação de um grupo específico de neurônios no cérebro.Além disso, fumar aumenta as chances do surgimento de outras doenças como câncer.'
    },
    {
      nome: 'Evite junk food',
      texto: 'É necessário ficar longe de fast foods para controlar a ingestão de sódio e evitar o consumo de alimentos processados e ultra processados.A recomendação é consumir com bastante moderação frituras e açúcar refinado.Esses alimentos podem até engordar, mas são pobres em nutrientes e levam ao aumento do colesterol ruim.'
    },
    {
      nome: 'Mantenha uma rotina e vá devagar',
      texto: 'A maneira mais segura de ganhar peso é mudar os hábitos de forma lenta e seguindo sempre um objetivo.Todos os dias, o corpo queima naturalmente as calorias consumidas e é importante comer um pouco mais de fontes de energia e criar o hábito de ter "excedente" para ganhar peso e músculos saudáveis.'
    },
  ];

  list = {
    pesoBaixo: {
      nome: 'Peso Baixo',
      descrition: 'Segundo o cálculo do IMC, o cálculo entre o seu peso e altura é abaixo do recomendado. Este valor pode ser um indicativo de alguma carência nutricional.',
      rec: this.aumentarIMC
    },
    pesoNormal: {
      nome: 'Peso Normal',
      descrition: 'De acordo com o cálculo do IMC, o seu peso está dentro da normalidade.Mantenha - o, seguindo uma dieta adequada e a praticando exercício físico com alguma regularidade.',
    },
    preObesidade: {
      nome: 'Pré obesidade',
      descrition: 'Tem algum excesso de peso em relação à sua altura. Comece por praticar exercício físico adequado, e melhorar os seus hábitos alimentares. A mudança está nas suas mãos!.',
    },
    obesidade: {
      nome: 'Obesidade',
      descrition: 'De acordo com o seu IMC, tem excesso de peso – obesidade. Consulte o seu médico de família para iniciar uma programa de perda de peso e melhorar a sua saúde.',
      rec: this.diminuirIMC
      
    },
    obesidadeGrave: {
      nome: 'Obesidade Grave',
      descrition: 'O seu peso é índice de obesidade mórbida, o que poderá trazer agravamentos à sua saúde. Consulte o seu médico para conseguir ajuda.',
      rec: this.diminuirIMC

    }
  };

  listDoc;
// public listObservable: BehaviorSubject<any>;


constructor(

  // public auth: AngularFireAuth,
  // public db: AngularFirestore
) {
  // this.listObservable = new BehaviorSubject(null);
}



  // real time collection data
//   onSnapshot(q, (snapshot)=> {
//     let books = [];
//     snapshot.docs.forEach((doc) => {
//       books.push({...doc.data})
//     });
// console.log(books)
// } );

  // getList() {
  //   this.list = this.db.collection("checagemImc").doc("objetcIMC");

  //   this.list.get().then((doc) => {
  //     if (doc) {
  //       this.listDoc = doc.data();
  //       this.listObservable.next(this.listDoc); return
  //       // console.log("Document data:", doc.data()); return
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!"); return
  //     }
  //   }).catch((error) => {
  //     console.log("Error getting document:", error); return
  //   });
  // }


  // getList() {
  //   this.list = this.db.collection("checagemImc").doc("objetcIMC");

  //   this.list.get().then((querySnapshot) => {

  //     querySnapshot.forEach((doc) => {
  //       this.listObservable.next(doc.data());
  //       console.log("doc=>", doc.data()); return
  //     });
  //   }).catch((error) => {
  //     console.log("Error getting documents: ", error);
  //   });
  // }
  // getList() {
  //   this.list = this.db.collection("checagemImc");

  //   this.list.get().then((querySnapshot) => {
  //     querySnapshot.docs.forEach(doc => {
  //       // console.log("doc=>", doc.data());
  //       return doc.data(); 
  //     })
  //     // this.listObservable.next(querySnapshot.docs);
  //     });
  // }
}
