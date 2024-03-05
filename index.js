// Identitas
const nama = 'Andi Sutena' // String
const jurusan = 'Informatika' // String

// Naming Convention = Snake_Case

// Soal
const questions = [
    {
        no_question: 1, // Number
        question: 'Berapakah hasil dari 2 * 3?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 2 // Number
            },
            {
                opsi: 'b', // String
                desc: 4 // Number
            },
            {
                opsi: 'c', // String
                desc: 6 // Number
            },
            {
                opsi: 'd', // String
                desc: 8 // Number
            }
        ],
        correct_answer: 6
    },
    {
        no_question: 2, // Number
        question: 'Berapa hasil dari 1 + 1?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 2 // Number
            },
            {
                opsi: 'b', // String
                desc: 4 // Number
            },
            {
                opsi: 'c', // String
                desc: 6 // Number
            },
            {
                opsi: 'd', // String
                desc: 8 // Number
            }
        ],
        correct_answer: 2
    },
    {
        no_question: 3, // Number
        question: 'Kapan hari pancasila?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: '1 Juni' // String
            },
            {
                opsi: 'b', // String
                desc: '22 Desember' // String
            },
            {
                opsi: 'c', // String
                desc: '28 Oktober' // String
            },
            {
                opsi: 'd', // String
                desc: '1 Januari' // String
            }
        ],
        correct_answer: '1 Juni'
    },
    {
        no_question: 4, // Number
        question: 'Berapa hasil dari perhitungan 6 / 3?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 2 // Number
            },
            {
                opsi: 'b', // String
                desc: 4 // Number
            },
            {
                opsi: 'c', // String
                desc: 6 // Number
            },
            {
                opsi: 'd', // String
                desc: 8 // Number
            }
        ],
        correct_answer: 2
    },
    {
        no_question: 5, // Number
        question: '10 + 1?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 22 // Number
            },
            {
                opsi: 'b', // String
                desc: 11 // Number
            },
            {
                opsi: 'c', // String
                desc: 21 // Number
            },
            {
                opsi: 'd', // String
                desc: 1 // Number
            }
        ],
        correct_answer: 11
    },
    {
        no_question: 6, // Number
        question: '3 * 3?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 2 // Number
            },
            {
                opsi: 'b', // String
                desc: 4 // Number
            },
            {
                opsi: 'c', // String
                desc: 9 // Number
            },
            {
                opsi: 'd', // String
                desc: 19 // Number
            }
        ],
        correct_answer: 9
    },
    {
        no_question: 7, // Number
        question: '18 - 17?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 1 // Number
            },
            {
                opsi: 'b', // String
                desc: 2 // Number
            },
            {
                opsi: 'c', // String
                desc: 3 // Number
            },
            {
                opsi: 'd', // String
                desc: 4 // Number
            }
        ],
        correct_answer: 1
    },
    {
        no_question: 8, // Number
        question: 'Singkatan dari apa HTML?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 'HyperText Mobile Language' // String
            },
            {
                opsi: 'b', // String
                desc: 'HiperText Mockup Language' // String
            },
            {
                opsi: 'c', // String
                desc: 'HyperText Markup Language' // String
            },
            {
                opsi: 'd', // String
                desc: 'HiperText Markup Language' // String
            }
        ],
        correct_answer: 'HyperText Markup Language'
    },
    {
        no_question: 9, // Number
        question: '100 - 100?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 92 // Number
            },
            {
                opsi: 'b', // String
                desc: 99 // Number
            },
            {
                opsi: 'c', // String
                desc: 0 // Number
            },
            {
                opsi: 'd', // String
                desc: 3 // Number
            }
        ],
        correct_answer: 0
    },
    {
        no_question: 10, // Number
        question: '2 + 3?', // String
        choice: [
            {
                opsi: 'a', // String
                desc: 1 // Number
            },
            {
                opsi: 'b', // String
                desc: 5 // Number
            },
            {
                opsi: 'c', // String
                desc: 10 // Number
            },
            {
                opsi: 'd', // String
                desc: 15 // Number
            }
        ],
        correct_answer: 5
    }
]

// Inputan Jawaban yang Diisi
const answer_input_user = [
    {
        no_soal: 1,
        answer_input: {
            opsi: 'c',
            desc: 6
        }
    },
    {
        no_soal: 2,
        answer_input: {
            opsi: 'b',
            desc: 4
        }
    },
    {
        no_soal: 3,
        answer_input: {
            opsi: 'a',
            desc: '1 Juni'
        }
    },
    {
        no_soal: 4,
        answer_input: {
            opsi: 'a',
            desc: 2
        }
    },
    {
        no_soal: 5,
        answer_input: {
            opsi: 'b',
            desc: 11
        }
    },
    {
        no_soal: 6,
        answer_input: {
            opsi: 'c',
            desc: 9
        }
    },
    {
        no_soal: 7,
        answer_input: {
            opsi: 'a',
            desc: 1
        }
    },
    {
        no_soal: 8,
        answer_input: {
            opsi: 'c',
            desc: 'HyperText Markup Language'
        }
    },
    {
        no_soal: 9,
        answer_input: {
            opsi: 'c',
            desc: 0
        }
    },
    {
        no_soal: 10,
        answer_input: {
            opsi: 'b',
            desc: 5
        }
    }
]

// Jawaban yang benar
// const correct = [
//     {
//         no_soal: 1,
//         answer: 6
//     },
//     {
//         no_soal: 2,
//         answer: 2
//     },
//     {
//         no_soal: 3,
//         answer: '1 Juni'
//     },
//     {
//         no_soal: 4,
//         answer: 2
//     },
//     {
//         no_soal: 5,
//         answer: 11
//     },
//     {
//         no_soal: 6,
//         answer: 9
//     },
//     {
//         no_soal: 7,
//         answer: 1
//     },
//     {
//         no_soal: 8,
//         answer: 'HyperText Markup Language'
//     },
//     {
//         no_soal: 9,
//         answer: 0
//     },
//     {
//         no_soal: 10,
//         answer: 5
//     }
// ]

// Poin Default
let correct_question = 0
let wrong_question = 0

// Function soal dan jawaban user
const tampil_question = () => {
    for (let i = 0; i < questions.length; i++) {
        console.log('No. ' + questions[i].no_question)
        console.log('Soal: ' + questions[i].question)
        console.log('Pilihan:')

        for (let j = 0; j < 4; j++) {
            console.log("   " + questions[i].choice[j].opsi + '. ' + questions[i].choice[j].desc)
        }
        console.log('\n')
        
        // Tampil Jawaban User
        for (let k = 0; k < 1; k++) {
            console.log('Jawaban: ' + answer_input_user[i].answer_input.opsi + '. ' + answer_input_user[i].answer_input.desc)

            if (answer_input_user[i].answer_input.desc == questions[i].correct_answer) {
                console.log('Periksa: Jawaban Benar')
                correct_question++
            } else {
                console.log('Periksa: Jawaban Salah')
                wrong_question++
            }
        }
        console.log('======================')
        console.log('\n')
    }
}

// Function QuizProgram
const quiz = () => {
    console.log("Nama : " + nama)
    console.log("Jurusan : " + jurusan + "\n")
    tampil_question()

    console.log('Terima kasih ' + nama.substring(0, 4) + " telah mengikuti Quiz.")
    console.log('Dengan total jawaban benar: ' + correct_question + ' jawaban, dan')
    console.log('Total jawaban salah: ' + wrong_question + ' jawaban')
    console.log('\n')
    const hasil = correct_question * 10
    console.log('Nilai yang diperoleh: ' + hasil)
}

// Tampil hasil
quiz()