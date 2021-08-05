(function(){
  function build(){
    const output = ['<ol start="1" type="1">'];
   
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
          `
          <li class="question">${currentQuestion.question}</li>
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

//       if(userAnswer === currentQuestion.correctAnswer){
//         numCorrect++;
		
// 		questionContainers[questionNumber].style.color = 'black';
//         answerContainers[questionNumber].style.color = 'lightgreen';
//       }
//       else{
// 		//answerContainers[questionNumber].style.color = 'red';
//         questionContainers[questionNumber].style.color = 'red';
//       }
    });
// 	var kategori_nilai = "";
// 	  var nilaiAkhir = (numCorrext/30) * 100;
// 	if(numCorrect>=1 && numCorrect<=4){
// 		var kategori_nilai = "kurang";
// 	}else if(numCorrect>=5 && numCorrect<=7){
// 		var kategori_nilai = "Baik";
// 	}else if(numCorrect>=8 && numCorrect<=10){
// 		var kategori_nilai = "Sangat Baik";
// 	}

  resultsContainer.innerHTML = `<h3 style="background-color:#FFDA7B;">Nilai</h3><h3 id="nilai" style="background-color:#96FA97;"> ${numCorrect*10} (${kategori_nilai})</h3>`;
	
	  
	kategori_nilai = "";
	
  }

   const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const pertanyaan = [
    {
      // 1
      question: "Buku yang berjudul Historia Animalium, merupakan buku yang ditulis oleh....",
      answers: {
        a:	"Aristoteles", 
        b:	"Theoprastus",
        c:	"Dioscorides",
        d:	"Carolus Linnaeus",
        e:	"Theoprastus dan Dioscorides"
      },
      correctAnswer: "a"
    },
    {
      // 2
      question: "Carolus Linnaeus memperkenalkan sistem klasifikasi tumbuhan alami dan buatan dalam buku berjudul Species Plantarum Sistem  pada tahun...",
      answers: {
        a:	"1743",
        b:	"1953",
        c:	"1752",
        d:	"1753",
        e:	"1853"
      },
      correctAnswer: "d"
    },
    {
      // 3
      question: "Berikut ini yang merupakan pengertian dari klasifikasi makhluk hidup adalah...",
      answers: {
        a:	"Cabang ilmu tersendiri yang mempelajari penggolongan atau sistematika makhluk hidup.",
        b:	"Prinsip dan cara mengelompokkan makhluk hidup.",
        c:	"Suatu cara memilah dan mengelompokkan makhluk hidup menjadi golongan atau unit tertentu.",
        d:	"Cara pengelompokan dan pengkategorian yang didasarkan pada ciri-ciri tertentu.", 
        e:	"Merupakan ukuran variasi pada tingkat genetik, spesies, dan ekosistem."
      },
      correctAnswer: "c"
    },
	  //4
	{
      question: "Berikut ini yang <b><i>bukan</i></b> merupakan tujuan dari klasifikasi makhluk hidup adalah...",
       answers: {
        a:	"Mengetahui hubungan kekerabatan.",
        b:	"Mengetaui asal mula makhluk hidup.",
        c:	"Mengetahui jenis makhluk hidup yang berguna bagi manusia, misalnya sebagai sumber makanan dan obat-obatan.",
        d:	"Mengetahui nama makhluk hidup.",
        e:	"Mengetahui usia makhluk hidup."          
      },
      correctAnswer: "e"
    },
	  //5
	{
      question: "Urutan jenjang takson pada hewan mulai dari yang tertinggi ke terendah adalah...",
      answers: {
        a:	"Kerajaan- Filum – Kelas – Bangsa- Suku – Marga – Jenis",
        b:	"Filum - Kerajaan – Kelas – Bangsa- Suku – Marga – Jenis",
        c:	"Kerajaan- Filum – Kelas –Suku- Bangsa – Marga – Jenis",
        d:	"Kerajaan- Filum – Kelas – Bangsa- Suku – Spesies – Marga",
        e:	"Kerajaan- Kelas – Filum – Bangsa- Suku – Marga – Jenis"
      },
      correctAnswer: "a"
    },
	  //6
	{
      question: "Urutan jenjang takson pada tumbuhan mulai dari yang tertinggi ke terendah adalah...",
      answers: {
        a:	"Kerajaan - Divisi – Bangsa – Kelas - Suku – Marga – Jenis",
        b:	"Kerajaan - Filum – Kelas – Bangsa- Suku – Marga – Jenis",
        c:	"Kerajaan - Divisi – Kelas – Bangsa- Suku – Marga – Jenis",
        d:	"Kerajaan - Filum – Kelas – Suku- Bangsa – Marga – Jenis",
        e:	"Kerajaan - Divisi – Kelas – Bangsa- Suku – Jenis – Marga"
      },
      correctAnswer: "c"
    },
	  //7
	{
      question: "Klasifikasi yang disusun dengan melihat keturunan dan hubungan kekerabatan disebut sistem klasifikasi...",
      answers: {
        a:	"Ekologi",
        b:	"Filogenik", 
        c:	"Alami", 
        d:	"Taksonomi", 
        e:	"Buatan", 
      },
      correctAnswer: "b"
    },
	  //8
	{
      question: "Dasar klasifikasi tumbuhan dan hewan yang sekarang digunakan dirumuskan pertama kali oleh..",
      answers: {
        a:	"Charles Darwin",
        b:	"Aristoteles", 
        c:	"Robert Hooke",
        d:	"Carolus Linnaeus",
        e:	"Francesco Redi"
      },
      correctAnswer: "d"
    },
	  //9
	{
      question: "Beberapa kelompok tumbuhan terdapat <br></br>"+
      "1)	Tumbuhan biji tertutup <br></br>"+
      "2)	Tumbuhan terung- terungan <br></br>"+
      "3)	Tumbuhan berkeping dua <br></br>"+
      "4)	Tumbuhan kacang tanah <br></br>"+
      "5)	Tumbuhan rumput- rumputan <br></br>"+
      " Kelompok di atas yang merupakan takson terendah adalah..",
      answers: {
        a:	"2",
        b:	"1",
        c:	"5",
        d:	"3",
        e:	"4"        
      },
      correctAnswer: "e"
    },
	  //10
	{
      question: "Berikut ini yang <b><i>bukan</i></b> merupakan manfaat dari klasifikasi makhluk hidup adalah...",
      answers: {
        a:	"Mengetahui hubungan kekerabatan.",
        b:	"Mengetahui asal mula makhluk hidup.",
        c:	"Mengetahui jenis makhluk hidup yang berguna bagi manusia.",
        d:	"Mengetahui nama makhluk hidup.",
        e:	"Mengetahui populasi makhluk hidup."
        },
      correctAnswer: "e"
    },
	  //11
    {
      question: "Kingdom berikut ini yang semua anggotanya merupakan organisme heterotrof adalah..",
      answers: {
        a:	"Palntae, Animalia",
        b:	"Plantae, Fungi",
        c:	"Monera, Protista",
        d:	"Fungi, Animalia",
        e:	"Protista, Animalia"
      },
      correctAnswer: "d"
    },
	  //12
    {
      question: "Untuk mengidentifikasi makhluk hidup kita dapat menggunakan kunci dikotomi, yaitu..",
      answers: {
        a:	"Membagi suatu kelompok menjadi dua kelompok yang lebih kecil.",
        b:	"Membagi suatu kelompok menjadi dua atau lebih kelompok yang kecil.",
        c:	"Membagi suatu kelompok menjadi tiga kelompok yang lebih kecil.",
        d:	"Membagi suati kelompok menjadi tiga atau lebih kelompok yang lebih kecil.",
        e:	"Membagi suatu elompok menjadi empat kelompok yang lebih kecil."

      },
      correctAnswer: "a"
    },
	  //13
    {
      question: "Kucing anjing, dan harimau memiliki kesamaan antara lain struktur gigi dan jenis makanannya. Oleh karena itu, hewan tersebut dikelompokkan ke dalam satu takson, yaitu...",
      answers: {
        a:	"Filum",
        b:	"Kelas", 
        c:	"Bangsa", 
        d:	"Marga", 
        e:	"Suku"
          
      },
      correctAnswer: "d"
    },
	  //14
	{
      question: "Dalam melakukan identifikasi diperlukan hal- hal sebagai berikut, kecuali...",
      answers: {
        a:	"Pengetahuan tentang klasifikasi makhluk hidup.",
        b:	"Buku referensi atau sumber referensi lainnya.",
        c:	"Pedoman atau kunci determinasi.",
        d:	"Gambar organisme yang sudah diketahui dan telah memiliki nama.",
        e:	"Tempat dan penelitian"           
      },
      correctAnswer: "e"
    },
	  //15
	{
      question: "Beberapa sistem klasifikasi yag telah diperkenalkan oleh ahli taksonomi adalah sistem dua kingdom hingga enam kingdom. Makhluk hidup yang <b><i>tidak</i></b> ada di dalam kelompok sistem <u>empat</u> kingdom adalah...",
      answers: {
        a:	"Plantae", 
        b:	"Animalia", 
        c:	"Eubacteria", 
        d:	"Archabacteria", 
        e:	"Fungi" 
          
      },
      correctAnswer: "e"
    },
	  //16
	{
      question: "Perhatikan tahapan menggunakan kunci determinasi !"
      +"<br>I.	Mengambil objek yang lengkap, jika tumbuhan maka bagian yang diambil harus selengkap mungkin, mulai dari akar, batang, daun, bunga, buah, dan biji.</br>"
      +"<br>II.	Mencandra objek, jika perlu gunakan lup kunci pembesar objek.</br>"
      +"<br>III.	Mencocokan hasil pengamatan dengan kunci determinasi yang memuat ciri objek,</br>"
      +"<br>IV.	Menentukan nama atau kelompok objek dan menuliskan rumus determinasinya."
      +"<br>V.	Hindari pemakaian kisaran yang tumpang tindih atau hal-hal yang bersifat relatif dalam kuplet."
      +"<br></br>Kelima tahapan di atas, yang kurang tepat merupakan nomor......",
      answers: {
        a: "I",
        b:	"II",
        c:	"III",
        d:	"IV",
        e:	"V",
      },
      correctAnswer: "e"
    },
	  //17
	{
      question: "Tumbuhan kentang diberi nama <i>Solanum tuberosum</i>, sedangkan tumbuhan tomat diberi nama ilmiah <i>Solanum lycopercium</i>, ini berarti bahwa tumbuhan kentang dan tomat memiliki...",answers: {
        a:	"Jenis sama, genus berbeda",
        b:	"Genus sama, jenis berbeda",
        c:	"Genus sama, famili berbeda",
        d:	"Genus berbeda, famili sama",
        e:	"Jenis sama, genus dan famili berbeda."
      },
      correctAnswer: "b"
    },
	  //18
	{
      question: "Perhatikan gambar di bawah ini!<br><img src=\"https://i.postimg.cc/HxmR2TkB/mega1.jpg\" style=\"width: 100%; height: auto;\"> <br></br>"+
      "Gambar di atas dalam sistematika tata nama hewan diberi nama <i>Naja Haje</i>. Nama <i>Naja</i> dalam sistem tata nama hewan ini menunjukkan takson...",
      answers: {
        a:	"Bangsa",
        b:	"Kelas",
        c:	"Suku",
        d:	"Marga",
        e:	"Jenis"
      },
      correctAnswer: "d"
    },
	{
      question: "Sistem lima kingdom terdiri dari kingdom...",
      answers: {
        a:	"Monera, Protista, Fungi, Plantae, Eubacteria",
        b:	"Monera, Protista, Fungi, Archaeobacteria, Animalia",
        c:	"Monera, Protista, Fungi, Plantae, Animalia",
        d:	"Eubacteria, Protista, Archaeobacteria, Plantae, Animalia",
        e:	"Monera, Protista, Fungi, Plantae"
      },
      correctAnswer: "c"
    },
	{
      question: "Pada penamaan menggunakan sistem binomial nomenklatur, nama ilmiah spesies terdiri atas dua kata yang merupakan penunjuk...",
      answers: {
        a:	"Kelas, genus",
        b:	"Famili, genus",
        c:	"Genus, kelas",
        d:	"Famili, spesies",
        e:	"Genus, spesies"
        },
      correctAnswer: "e"
    },
    {
      question: "Perhatikan beberapa hewan berikut ini !<br></br>"+
      "1.	Macam <br></br>"+
      "2.	Kucing <br></br>"+
      "3.	Simpanse <br></br>"+
      "4.	Singa <br></br>"+
      "5.	Ayam <br></br>"+ 
      "Berdasarkan sistem filogenetik, hewan- hewan yang memiliki hubungan kekerabatan paling dekat adalah...",
      answers: {
        a:	"1, 2, dan 4",
        b:	"1,2, dan 3",
        c:	"3,4, dan 5",
        d:	"2, 3, dan 4",
        e:	"1,3, dan 4",
      },
      correctAnswer: "a"
    },
    {
      question: "Pada taksonomi dari kingdom ke spesies, jumlah makhluk hidup yang berbeda dalam setiap takson akan ….",
      answers: {
        a: "Semakin banyak",
        b:	"Semakin sedikit",
        c:	"Berubah-ubah",
        d:	"Tetap",
        e:	"Tidak terhitung"

      },
      correctAnswer: "b"
    },
    {
      question: "Semakin dekat hubungan kekerabatan makhluk hidup, maka akan semakin banyak …. ",
      answers: {
        a: "Perbedaan sifat", 
        b: "Keragamannya",
        c: "Populasinya",
        d: "Persamaan sifat",
        e: "Keunikannya"           
      },
      correctAnswer: "d"
    },
	{
      question: "Perhatikan hewan-hewan berikut ini!<br></br>"+
      "1) Bandeng <br> </br> "+
      "2) Paus <br> </br> "+
      "3) Singa laut <br> </br> "+
      "4) Salmon <br> </br> "+
      "Hewan yang termasuk anggota mamalia adalah ….",
      answers: {
        a: "1) dan 2)",
        b: "1) dan 3)",
        c: "2) dan 3)",
        d: "3) dan 4)",
        e: "2) dan 4)"
                 
      },
      correctAnswer: "c"
    },
	{
      question: "Perhatikan gambar di bawah ini!<br><img src=\"https://i.postimg.cc/KcWh7CCL/mega2.jpg\" style=\"width: 100%; height: auto;\"> <br></br>"+
      "Pernyataan di bawah ini yang tepat adalah...",
      answers: {
        a:	"Simpanse memiliki kemiripan yang paling dekat dengan manusia",
        b:	"Ikan memiliki kemiripan yang paling dekat dengan manusia",
        c:	"Simpanse memiliki kemiripan yang jauh dengan manusia",
        d:	"Ikan memiliki kemiripan yang sangat dekat dengan tikus",
        e:	"Salamander memiliki kemiripan yang jauh dengan ikan"
         
          
      },
      correctAnswer: "a"
    },
	{
      question: "Pengelompokkan makhluk hidup didasarkan pada....",
      answers: {
        a:	"Persamaan sifat atau ciri",
        b:	"Perbedaan sifat atau ciri",
        c:	"Kemiripan sifat atau ciri",
        d:	"Persamaan dan perbedaan sifat atau ciri",
        e:	"hubungan kekerabatan"
        
      },
      correctAnswer: "d"
    },
	{
      question: "Proses klasifikasi makhluk hidup adalah….",
      answers: {
        a:	"Proses pemisahan makhluk hidup berdasarkan golongannya",
        b:	"Proses pencatatan makhluk hidup berdasarkan golongannya",
        c:	"Proses pengenalan makhluk hidup berdasarkan golongannya",
        d:	"Proses mempelajari makhluk hidup berdasarkan golongannya",
        e:	"Proses pengelompokan makhluk hidup berdasarkan golongannya"
        
      },
      correctAnswer: "e"
    },
	{
      question: "Mekanisme pengklasifikasian makhluk hidup dapat dilakukan dengan mudah dan objektif dengan cara...",
      answers: {
        a:	"Membangun pohon filogenetik.",
        b:	"Membangun pohon kladistik",
        c:	"Membangun pohon klade",
        d:	"Menggunakan tata nama binomial nomenklatur",
        e:	"Menggunakan teknik identifikasi"
        
      },
      correctAnswer: "a"
    },
	{
      question: "<i>Hibiscus rosa-sinensis</i> merupakan nama latin dari tanaman...",
      answers: {
        a:	"Bunga sepatu",
        b:	"Bunga mawar",
        c:	"Bunga anggrek",
        d:	"Bunga melati",
        e:	"Bunga desember" 

      },
      correctAnswer: "a"
    },
	{
      question: "Nama divisi pada tata nama makhluk hidup biasanya diakhiri dengan....",
      answers: {
        a:	"–ales",
        b:	"–phyta",
        c:	"–inae",
        d:	"–aceae",
        e:	"-opsida"
        
        },
      correctAnswer: "b"
    }
  ];

  build();

  submitButton.addEventListener('click', showResults);
})();
