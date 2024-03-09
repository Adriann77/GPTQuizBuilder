import React from 'react';
import styles from './Quiz.module.scss'


const quiz = [
	{
		pytanie1: {
			treść: 'Jakie są funkcje enzymów?',
			odpowiedzi: {
				a: 'Transport materiałów wewnątrzkomórkowych',
				b: 'Regulacja temperatury ciała',
				c: 'Udział w procesach metabolicznych',
				d: 'Synteza DNA',
			},
			poprawna: 'c',
			opis_poprawnej:
				'Enzymy są białkami, które uczestniczą w procesach metabolicznych, przyspieszając reakcje chemiczne w organizmie.',
		},
		pytanie2: {
			treść: 'Co to są mitochondria i jaka jest ich rola w komórce?',
			odpowiedzi: {
				a: 'Organella odpowiedzialna za synteze białek',
				b: 'Miejsce, gdzie zachodzi fotosynteza',
				c: 'Struktury odpowiedzialne za produkcję energii w postaci ATP',
				d: 'Materiał genetyczny komórki',
			},
			poprawna: 'c',
			opis_poprawnej:
				'Mitochondria są organellami odpowiedzialnymi za produkcję energii w postaci ATP poprzez oddychanie komórkowe.',
		},
		pytanie3: {
			treść: 'Co to jest fotosynteza i gdzie zachodzi ten proces?',
			odpowiedzi: {
				a: 'Proces produkcji energii w mitochondriach',
				b: 'Proces, w którym komórki roślinne przetwarzają dwutlenek węgla i wodę w obecności światła słonecznego',
				c: 'Proces trawienia pokarmu',
				d: 'Mechanizm replikacji DNA',
			},
			poprawna: 'b',
			opis_poprawnej:
				'Fotosynteza to proces, w którym komórki roślinne przetwarzają dwutlenek węgla i wodę w obecności światła słonecznego, wykorzystując do produkcji glukozy.',
		},
	},
];

export const Quiz = () => {
	return (
		<div className={styles.quizContainer}>
			{Object.keys(quiz[0]).map((pytanie, index) => (
				<div key={index}>
					<p className={styles.questionHeading}>{quiz[0][pytanie].treść}</p>
					<ul>
						{Object.keys(quiz[0][pytanie].odpowiedzi).map((odpowiedz, index) => (
							<li className={styles.questionAnswers} key={index}>{`${odpowiedz}: ${quiz[0][pytanie].odpowiedzi[odpowiedz]}`}</li>
						))}
					</ul>
					<p >Poprawna odpowiedź: {quiz[0][pytanie].poprawna}</p>
					<p className={styles.correctAnswer}>Opis poprawnej odpowiedzi: {quiz[0][pytanie].opis_poprawnej}</p>
				</div>
			))}
		</div>
	);
};
