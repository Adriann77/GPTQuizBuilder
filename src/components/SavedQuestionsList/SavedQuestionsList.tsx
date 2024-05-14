import { useState } from 'react';

export default function SavedQuestionsList() {
  const [savedQuestions, _] = useState([
    {
      question: 'Która część komórki roślinnej jest odpowiedzialna za fotosyntezę?',
      description: `Częścią komórki roślinnej odpowiedzialną za fotosyntezę są chloroplasty. Chloroplasty to organella zawierające chlorofil, który jest niezbędny do przeprowadzania fotosyntezy. Chlorofil pochłania światło słoneczne, które jest wykorzystywane do przekształcenia dwutlenku węgla i wody w glukozę i tlen. 
        
 Glukoza jest następnie używana przez roślinę jako źródło energii, natomiast tlen jest uwalniany do atmosfery. Chloroplasty można przyrównać do małych fabryk w komórkach roślinnych, które produkują budulec i energię niezbędną do wzrostu i rozwoju rośliny, korzystając z surowców takich jak światło słoneczne, dwutlenek węgla i woda.`,
    },
    {
      question: 'Co jest głównym składnikiem błon komórkowych?',
      description: `Głównym składnikiem błon komórkowych są fosfolipidy. Fosfolipidy posiadają strukturę polarną i niepolarną. Polarna głowa fosfolipidów, która jest hydrofilowa, skierowana jest na zewnątrz, natomiast niepolarne ogony, które są hydrofobowe, skierowane są do środka błony. Taka organizacja cząsteczek umożliwia wytworzenie dwuwarstwy fosfolipidowej, która jest podstawową strukturą błon biologicznych.

Błony komórkowe zawierają również białka, które pełnią wiele różnych funkcji, takie jak transport substancji przez błonę, komunikacja międzykomórkowa, czy rozpoznawanie cząsteczek przez komórkę. 

Twój przykład z krwią jest bardzo odpowiedni! Błona komórkowa to jak bramka na stadionie - decyduje, co może wejść i wyjść, aby upewnić się, że tylko właściwe cząsteczki dostają się do komórki i pozostają tam. Biała błony komórkowej to zasady i struktury, które ustalają, jak ta bramka ma funkcjonować. `,
    },
    {
      question: 'Który z wymienionych organizmów jest prokariotem?',
      description: `Prokariotami są organizmy, które nie mają jądra komórkowego. Na przykład, bakterie są organizmami prokariotycznymi. Posiadają one jedną, zamkniętą w pierścieniu, molekułę DNA, która zawiesza się swobodnie w cytoplazmie. W przeciwieństwie do eukariotów, nie mają skomplikowanej struktury komórkowej: nie mają prawdziwego jądra komórkowego ani innych organelli otoczonych błonami, takich jak mitochondria czy aparat Golgiego. 

Wśród prokariotów można wyróżnić dwa główne typy: bakterie i archeony. Bakterie są najbardziej znanymi organizmami prokariotycznymi, ale archeony, choć mniej znane, są równie interesujące. Tak jak bakterie, archeony są jednokomórkowcami, które nie mają prawdziwego jądra komórkowego.

Zatem w kontekście biologicznym, prokarioty można porównać do podstawowych budowli - małe, proste, ale niezbędne dla funkcjonowania ekosystemu. Bakterie, jako prokarioty, są jak budowniczowie ziemi, wykonują wiele podstawowych funkcji, które wspierają życie na Ziemi.`,
    },
    {
      question: 'Która cząsteczka nie jest RNA?',
      description: `Cząsteczka DNA nie jest RNA. Oba to nukleotydy, ale różnią się strukturą i funkcją. DNA zawiera deoksyrybozę, jest długotrwałe i przechowuje informacje genetyczne organizmu. Natomiast RNA zawiera rybozę i zwykle pełni role tymczasowe, takie jak przekazywanie informacji genetycznej z DNA do rybosomów, gdzie informacja ta jest używana do budowy białek.

Można to porównać do różnicy między książką a listonoszem. DNA to jak książka, która przechowuje całą historię (informacje genetyczne). RNA natomiast to listonosz, który dostarcza fragmenty tej historii (informacje genetyczne z DNA) tam, gdzie są aktualnie potrzebne (do rybosomów do produkcji białek).`,
    },
    {
      question: 'Czemu to robie?',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis laudantium et assumenda iusto eveniet saepe facilis earum. Excepturi accusantium tenetur, commodi magnam fugit, officia incidunt mollitia, a labore eum maxime. Perspiciatis nihil optio illum explicabo quo magnam iure iste ipsa, alias id sed, nostrum maiores! Obcaecati aliquid quam iusto?',
    },
    {
      question: 'JEsze potrzebuje dwoch',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis laudantium et assumenda iusto eveniet saepe facilis earum. Excepturi accusantium tenetur, commodi magnam fugit, officia incidunt mollitia, a labore eum maxime. Perspiciatis nihil optio illum explicabo quo magnam iure iste ipsa, alias id sed, nostrum maiores! Obcaecati aliquid quam iusto?',
    },
  ]);

  return (
    <div className="my-10 flex max-w-[1000px] flex-col gap-2">
      {savedQuestions.map((question, key) => (
        <div key={key} className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-center text-xl font-medium">{question.question}</div>
          <div className="collapse-content  whitespace-pre text-wrap">
            <p>{question.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
