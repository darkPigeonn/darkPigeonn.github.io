(function(){
  function build(){
    const output = [];

    pertanyaan.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div style="background-color:#FFDA7B;" class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');
	const questionContainers = quizContainer.querySelectorAll('.question');

    let numCorrect = 0;

    pertanyaan.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
		
		questionContainers[questionNumber].style.color = 'black';
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
		//answerContainers[questionNumber].style.color = 'red';
        questionContainers[questionNumber].style.color = 'red';
      }
    });
	var kategori_nilai = "";
	if(numCorrect>=1 && numCorrect<=4){
		var kategori_nilai = "kurang";
	}else if(numCorrect>=5 && numCorrect<=7){
		var kategori_nilai = "Baik";
	}else if(numCorrect>=8 && numCorrect<=10){
		var kategori_nilai = "Sangat Baik";
	}

    resultsContainer.innerHTML = `<h3 style="background-color:#FFDA7B;">Nilai</h3><h3 id="nilai" style="background-color:#96FA97;">✔ ${numCorrect*10} (${kategori_nilai})</h3>`;
	
	kategori_nilai = "";
	
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const pertanyaan = [
    {
      question: "1. Di bawah ini yang merupakan bagian penyusun kelopak mata, kecuali...",
      answers: {
        a: "Kulit elastis",
        b: "Tarsus",
        c: "Tulang orbita",
		d: "Otot pembuka dan penutup mata",
		e: "Konjungtiva tarsalis"
      },
      correctAnswer: "c"
    },
    {
      question: "2. Papila yang tersebar secara merata di permukaan lidah adalah...",
      answers: {
        a: "Papila tidak beraturan",
        b: "Papila bentuk bulat",
        c: "Papila bentuk benang",
		d: "Papila yang terbenam",
		e: "Papila bentuk lingkaran"
      },
      correctAnswer: "c"
    },
    {
      question: "<div class=\"tg-wrap\"><table style=\"undefined;table-layout: auto; width: 100%\"><tbody><tr><td>3. Perhatikan gambar disamping!<br><h6>Bagian lidah yang ditunjukkan oleh nomor 4 dan 1 secara berurutan dapat peka terhadap rasa...</h6></td><td><img src=\"https://i.postimg.cc/c1m267bf/yrjtjjtrjsr.png\" style=\"width: 100%; height: auto;\"></td></tr></tbody></table></div>",
      answers: {
        a: "Manis dan Asin",
        b: "Pahit dan Manis",
        c: "Asam dan Pahit",
        d: "Asin dan Manis",
		e: "Manis dan Pahit"
      },
      correctAnswer: "e"
    },
	{
      question: "<div class=\"tg-wrap\"><table style=\"undefined;table-layout: auto; width: 100%\"><tbody><tr><td>4. Perhatikan gambar disamping!<br><h6>Bagian struktur hidung yang ditunjukkan oleh huru X adalah...</h6></td><td><img src=\"https://i.postimg.cc/Y0WvD2ZH/rewhetrhh.png\" style=\"width: 100%; height: auto;\"></td></tr></tbody></table></div>",
      answers: {
        a: "Selepitalium",
        b: "Olfaktori ",
        c: "Kemoreseptor",
        d: "Silia",
		e: "Tulang hidung"
      },
      correctAnswer: "d"
    },
	{
      question: "5. Jenis reseptor yang terdapat pada kulit dan peka terhadap rasa sakit disebut...",
      answers: {
        a: "Mekanoreseptor",
        b: "Nosiseptor",
        c: "Prioreseptor",
        d: "Termoreseptor",
		e: "Anoreseptor"
      },
      correctAnswer: "b"
    },
	{
      question: "<div class=\"tg-wrap\"><table style=\"undefined;table-layout: auto; width: 100%\"><tbody><tr><td>6. Perhatikan gambar disamping!<br><h6>Bagian yang berfungsi sebagai reseptor yang peka terhadapat rasa nyeri dan suhu terdapat pada...</h6></td><td><img src=\"https://i.postimg.cc/9XnsHdgb/yrijytjky.png\" style=\"width: 100%; height: auto;\"></td></tr></tbody></table></div>",
      answers: {
        a: "Meissner",
        b: "Ruffini",
        c: "Krause",
        d: "Merkel",
		e: "Paccini "
      },
      correctAnswer: "c"
    },
	{
      question: "7. Mata memiliki tiga lapisan yaitu lapisan luar, lapisan tengah dan juga lapisan dalam. Pada lapisan bagian luar tersusun atas...",
      answers: {
        a: "Kornea dan Sklera",
        b: "Koroid dan Iris",
        c: "Retina dan sel saraf",
        d: "Badan bersilia dan koroid",
		e: "Kornea dan Retina"
      },
      correctAnswer: "a"
    },
	{
      question: "8. Kelainan pada indra penghidu dimana indra kurang mampu atau bahkan kehilangan kemampuan untuk membau. Kelainan tersebut dapat terjadi karena...",
      answers: {
        a: "Keturunan",
        b: "Tertular",
        c: "Rongga hidung tersumbat",
        d: "Pengaruh obat-obatan",
		e: "Kebiasaan"
      },
      correctAnswer: "c"
    },
	{
      question: "9. Penggunaan kaca mata cekung dapat membantu penderita...",
      answers: {
        a: "Astigmatisme",
        b: "Katarak",
        c: "Miopia",
        d: "Rabun senja",
		e: "Buta warna"
      },
      correctAnswer: "c"
    },
	{
      question: "10. Gangguan pendengaran dengan penurunan dari ketidakmampuan seseorang untuk mendengarkan suara disebut dengan...",
      answers: {
        a: "Tuna rungu/Tuli",
        b: "Furunkulosis",
        c: "Otitis Media",
        d: "Mastoiditis",
		e: "Frunkolusis"
      },
      correctAnswer: "a"
    }
  ];

  build();

  submitButton.addEventListener('click', showResults);
})();
