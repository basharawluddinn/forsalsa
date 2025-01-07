document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const form = document.getElementById('form');
    const namaInput = document.getElementById('nama');
    const containerUcapan = document.getElementById('container-ucapan');
    const tauEnggak = document.getElementById('tau-gak');
    const tau = document.getElementById('tau');
    const enggak = document.getElementById('enggak');
    const lanjut = document.getElementById('lanjut');
    const containerKisah = document.getElementById('container-kisah');
    const kisahRight = document.getElementById('kisah-right');
    const kisahLeft = document.getElementById('kisah-left');
    const kisahRightEnd = document.getElementById('kisah-right-end');
    const kataKisah = document.getElementById('kata-kisah');
    
    containerKisah.style.display = 'none';
    kisahRight.style.display = 'none';
    kisahLeft.style.display = 'none'
    kisahRightEnd.style.display = 'none';

    startTypewriterLabel();
    playAnimationKenangan();

    function startTypewriterLabel() {
        const typewriter = new Typewriter('#ketik', {
            loop: false,
            delay: 75,
            cursor: "|",
        });
        typewriter.typeString('Ketik Nama Kamu').start();
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nama = namaInput.value;

        form.style.display = 'none';
        form.style.animation = 'fadeOut 1s ease-out';
    
        containerUcapan.style.display = 'flex';
        containerUcapan.style.flexDirection = 'column';
        containerUcapan.style.animation = 'fadeIn 1s ease-in';

        startTypewriterUcapan(nama);
        playAudio();
    });

    function startTypewriterUcapan(nama) {
        const typewriter = new Typewriter('#teks-ucapan', {
            loop: false,
            delay: 75,
            cursor: "|",
        });

        typewriter
            .pauseFor(1000)
            .typeString(`<span>Halo Sayangku, ${nama}!</span>`)
            .pauseFor(1000)
            .typeString('<br><span>Tau gak aku bikin apa? 😅</span>')
            .callFunction(() => {
                
                tauEnggak.style.display = 'flex';
                tauEnggak.style.animation = 'fadeIn 2s ease-in forwards';
                

                tau.addEventListener('click', function() {
                    tau.style.display = 'none';
                    enggak.style.display = 'none';
                    typewriter
                    .deleteAll(10)
                    .typeString('Ah gak seruu bangettt')
                    .pauseFor(1000)
                    .typeString('<br>tapi gak papa hehe,')
                    .pauseFor(500)
                    .typeString('<br>disini aku cuman mau ngucapin sesuatu aja kok, mau liat gak ?🙂')
                    .callFunction(() => {
                        const lihat = document.createElement('button');
                        const tidak = document.createElement('button');
                        lihat.classList.add('tau');
                        lihat.textContent = 'Boleh';
                        lihat.style.animation = 'fadeIn 2s ease-in forwards';
                        tauEnggak.appendChild(lihat);
                        
                        tidak.classList.add('enggak');
                        tidak.textContent = 'Tidak';
                        tidak.style.animation = 'fadeIn 2s ease-in forwards';
                        tauEnggak.appendChild(tidak);
                        
                        lihat.addEventListener('click', function() {
                            lihat.style.display = 'none';
                            tidak.style.display = 'none';
                            typewriter
                              .deleteAll(10)
                              .typeString('I want to say something')
                              .pauseFor(1000)
                              .typeString('<br>boleh?')
                              .callFunction(() => {
                                lanjut.style.display = 'block';
                                lanjut.style.animation = 'fadeIn 2s ease-in forwards';
                              })
                              .start();
                        });
                        
                        let i = 0;
                        const eitss = document.createElement('p'); // Buat elemen di luar event listener agar tidak dibuat ulang
                        
                        tidak.addEventListener('click', function() {
                            i++;
                        
                            if (i === 1) {
                                tidak.style.position = 'absolute';
                                tidak.style.left = '20px'; // Tambahkan 'px' ke nilai left
                            } else if (i === 2) {
                                tidak.style.transform = 'rotate(-90deg)'; // Gunakan transform untuk rotasi
                                eitss.textContent = 'eitsss';
                                eitss.style.position = 'absolute';
                                eitss.style.left = '80px';
                                eitss.style.color = 'white';
                                if (!tauEnggak.contains(eitss)) {
                                    tauEnggak.appendChild(eitss);
                                }
                            } else if (i === 3) {
                                if (tauEnggak.contains(eitss)) {
                                    eitss.remove();
                                }
                                
                                tidak.style.transform = 'rotate(45deg)';
                                tidak.textContent = 'Harus dilihat';
                            } else if (i === 4) {
                                tidak.style.position = 'static'; // Kembali ke posisi semula
                                tidak.style.left = ''; // Hapus nilai left
                                tidak.style.transform = 'rotate(0deg)'; // Hapus rotasi
                                tidak.textContent = 'Tidak';
                                i = 0;
                            }
                        });
                    })
                    .start();
                });

                enggak.addEventListener('click', function() {
                    tau.style.display = 'none';
                    enggak.style.display = 'none';
                    
                    typewriter
                      .deleteAll(10)
                      .typeString('I want to say something')
                      .pauseFor(1000)
                      .typeString('<br>boleh?')
                      .callFunction(() => {
                        const boleh = document.createElement('button');
                        boleh.classList.add('tau');
                        boleh.textContent = 'Boleh';
                        boleh.style.animation = 'fadeIn 2s ease-in forwards';
                        tauEnggak.appendChild(boleh);

                        const cepet = document.createElement('button');
                        cepet.classList.add('enggak');
                        cepet.textContent = 'cepet';
                        cepet.style.animation = 'fadeIn 2s ease-in forwards';
                        tauEnggak.appendChild(cepet);

                        boleh.addEventListener('click', function () {
                          boleh.style.display = 'none';
                          cepet.style.display = 'none';
                          typewriter
                            .deleteAll(10)
                            .typeString('I LOVE U SOO')
                            .pauseFor(500)
                            .typeString('<br>BUT')
                            .callFunction(() => {
                              const lihat = document.createElement('button');
                              const tidak = document.createElement('button');
                              lihat.classList.add('tau');
                              lihat.textContent = 'Lanjut';
                              lihat.style.animation = 'fadeIn 2s ease-in forwards';
                              tauEnggak.appendChild(lihat);

                              tidak.classList.add('enggak');
                              tidak.textContent = 'Tidak';
                              tidak.style.animation = 'fadeIn 2s ease-in forwards';
                              tauEnggak.appendChild(tidak);

                              lihat.addEventListener('click', function () {
                                lihat.style.display = 'none';
                                tidak.style.display = 'none';
                                typewriter
                                  .deleteAll(10)
                                  .typeString('aku gak ngerti')
                                  .pauseFor(500)
                                  .typeString('<br>aku sayaangg bangeett sama kamu')
                                  .callFunction(() => {
                                    lanjut.style.display = 'block';
                                    lanjut.style.animation = 'fadeIn 2s ease-in forwards';
                                  })
                                  .start();
                              });

                              let i = 0;
                              const eitss = document.createElement('p'); // Buat elemen di luar event listener agar tidak dibuat ulang

                              tidak.addEventListener('click', function () {
                                i++;

                                if (i === 1) {
                                  tidak.style.position = 'absolute';
                                  tidak.style.left = '20px'; // Tambahkan 'px' ke nilai left
                                } else if (i === 2) {
                                  tidak.style.transform = 'rotate(-90deg)'; // Gunakan transform untuk rotasi
                                  eitss.textContent = 'eitsss';
                                  eitss.style.position = 'absolute';
                                  eitss.style.left = '80px';
                                  eitss.style.color = 'white';
                                  if (!tauEnggak.contains(eitss)) {
                                    tauEnggak.appendChild(eitss);
                                  }
                                } else if (i === 3) {
                                  if (tauEnggak.contains(eitss)) {
                                    eitss.remove();
                                  }

                                  tidak.style.transform = 'rotate(45deg)';
                                  tidak.textContent = 'Harus dilihat';
                                } else if (i === 4) {
                                  tidak.style.position = 'static'; // Kembali ke posisi semula
                                  tidak.style.left = ''; // Hapus nilai left
                                  tidak.style.transform = 'rotate(0deg)'; // Hapus rotasi
                                  tidak.textContent = 'Tidak';
                                  i = 0;
                                }
                              });
                            })
                            .start();
                        });

                        cepet.addEventListener('click', function () {
                          boleh.style.display = 'none';
                          cepet.style.display = 'none';
                          typewriter
                            .deleteAll(10)
                            .typeString('Iya iya,sabar dong')
                            .pauseFor(500)
                            .deleteAll(10)
                            .typeString('I LOVE U SOO')
                            .pauseFor(500)
                            .typeString('<br>BUT')
                            .callFunction(() => {
                              const lihat = document.createElement('button');
                              const tidak = document.createElement('button');
                              lihat.classList.add('tau');
                              lihat.textContent = 'Iya';
                              lihat.style.animation = 'fadeIn 2s ease-in forwards';
                              tauEnggak.appendChild(lihat);

                              tidak.classList.add('enggak');
                              tidak.textContent = 'Tidak';
                              tidak.style.animation = 'fadeIn 2s ease-in forwards';
                              tauEnggak.appendChild(tidak);

                              lihat.addEventListener('click', function () {
                                lihat.style.display = 'none';
                                tidak.style.display = 'none';
                                typewriter
                                  .deleteAll(10)
                                  .typeString('aku gak ngerti')
                                  .pauseFor(500)
                                  .typeString('<br>aku sayaangg bangeett sama kamu')
                                  .callFunction(() => {
                                    lanjut.style.display = 'block';
                                    lanjut.style.animation = 'fadeIn 2s ease-in forwards';
                                  })
                                  .start();
                              });

                              let i = 0;
                              const eitss = document.createElement('p'); // Buat elemen di luar event listener agar tidak dibuat ulang

                              tidak.addEventListener('click', function () {
                                i++;

                                if (i === 1) {
                                  tidak.style.position = 'absolute';
                                  tidak.style.left = '20px'; // Tambahkan 'px' ke nilai left
                                } else if (i === 2) {
                                  tidak.style.transform = 'rotate(-90deg)'; // Gunakan transform untuk rotasi
                                  eitss.textContent = 'eitsss';
                                  eitss.style.position = 'absolute';
                                  eitss.style.left = '80px';
                                  eitss.style.color = 'white';
                                  if (!tauEnggak.contains(eitss)) {
                                    tauEnggak.appendChild(eitss);
                                  }
                                } else if (i === 3) {
                                  if (tauEnggak.contains(eitss)) {
                                    eitss.remove();
                                  }

                                  tidak.style.transform = 'rotate(45deg)';
                                  tidak.textContent = 'Harus dilihat';
                                } else if (i === 4) {
                                  tidak.style.position = 'static'; // Kembali ke posisi semula
                                  tidak.style.left = ''; // Hapus nilai left
                                  tidak.style.transform = 'rotate(0deg)'; // Hapus rotasi
                                  tidak.textContent = 'Tidak';
                                  i = 0;
                                }
                              });
                            })
                            .start();
                        });
                      })
                      .start();
                });
                
                lanjut.addEventListener('click', function() {
                    lanjut.style.display = 'none';
                    typewriter
                      .deleteAll(10)
                      .typeString('hmmm...')
                      .pauseFor(500)
                      .typeString('<br>tapi aku ngerasa cuma aku yang sayang ke kamu, kamunya mungkin engga')
                      .pauseFor(500)
                      .typeString('<br>kenapa kita gabisa ngelkuin hal hal seru ya? kayak kamu ke orang lain')
                      .pauseFor(500)
                      .typeString('<br>kamu gak pernah cerita tentang kegiatan kamu')
                      .pauseFor(500)
                      .typeString('<br>hal-hal random kamu')
                      .pauseFor(500)
                      .typeString('<br>pertanyaan pertanyaan kamu')
                      .pauseFor(500)
                      .typeString('<br>excited yang kamu kasih ')
                      .pauseFor(500)
                      .callFunction(() => {
                        const lanjut1 = document.createElement('button');
                        lanjut1.classList.add('lanjut');
                        lanjut1.textContent = 'Lanjut';
                        lanjut1.style.display = 'block';
                        tauEnggak.appendChild(lanjut1);

                        lanjut1.addEventListener('click', function () {
                          lanjut1.style.display = 'none';
                          typewriter
                            .deleteAll(3)
                            .typeString('aku rasa, rasa sayang kamu jauh lebih besar ke zacky di banding aku')
                            .pauseFor(500)
                            .typeString('<br>dari awal kita pacaranpun, sampe sekarang')
                            .pauseFor(500)
                            .typeString('<br>jujur sebenernya aku pengen banget bertahan')
                            .pauseFor(500)
                            .typeString('<br>tapi aku gak bisa maksa kamu buat sama aku terus')
                            .pauseFor(500)
                            .typeString('<br>tapi aku mau terus sama kamu')
                            .pauseFor(500)
                            .typeString('<br>tapi aku gabisa maksa orang yang aku sayang masih besar sayangnya ke orang lain')
                            .pauseFor(500)
                            .typeString('<br>aku bingung aku harus apa')
                            .pauseFor(500)
                            .typeString('<br>jujur aku iri sama zacky')
                            .pauseFor(500)
                            .typeString('<br>zakcy dapet rasa sayang dari kamu yang begitu besar dan tulus.')
                            .pauseFor(500)
                            .typeString('<br>segala hal kamu ajak zacky')
                            .pauseFor(500)
                            .typeString('<br>kamu selalu cerita apapun ke dia')
                            .pauseFor(500)
                            .typeString('<br>emot,stiker dll kamu kasih ke dia dengan rasa sayang, sepertinya ke aku engga')
                            .pauseFor(500)
                            .typeString('<br>kamu ajak dia malem tahun baru, ngopi bareng, tiktokan bareng dll, ke aku engga')
                            .callFunction(() => {
                              const lanjut2 = document.createElement('button');
                              lanjut2.classList.add('lanjut');
                              lanjut2.textContent = 'Lanjut';
                              lanjut2.style.display = 'block';
                              tauEnggak.appendChild(lanjut2);

                              lanjut2.addEventListener('click', function () {
                                lanjut2.style.display = 'none';
                                typewriter
                                  .deleteAll(10)
                                  .typeString('aku baru sadar, ternyata orang yang kamu mau adalah zacky')
                                  .pauseFor(500)
                                  .typeString('<br>aku kalah, aku pikir aku jadi satu satunya, setelah aku minta hal itu, ternyata aku salah')
                                  .pauseFor(500)
                                  .typeString('<br>maaf kalo selama sama aku kamu selalu terpaksa buat komunikasi,')
                                  .pauseFor(500)
                                  .typeString('<br>kamu gak dapet dari aku kayak yang zacky kasih ke kamu.')
                                  .pauseFor(500)
                                  .typeString('<br>makasih banget udah nerima aku :)')
                                  .pauseFor(500)
                                  .typeString('<br>aku seneng banget')
                                  .pauseFor(500)
                                  .typeString('<br>aku ngerasa aku kayak bersemangat dan hidup lagi')
                                  .pauseFor(500)
                                  .typeString('<br>pas kita bersama')
                                  .pauseFor(500)
                                  .callFunction(() => {
                                    const lanjut3 = document.createElement('button');
                                    lanjut3.classList.add('lanjut');
                                    lanjut3.textContent = 'Lanjut';
                                    lanjut3.style.display = 'block';
                                    tauEnggak.appendChild(lanjut3);

                                    lanjut3.addEventListener('click', function () {
                                      lanjut3.style.display = 'none';
                                      typewriter
                                        .deleteAll(10)
                                        .typeString('kamu inget?')
                                        .pauseFor(500)
                                        .typeString('<br>Janji yang pernah kita buat bersama?')
                                        .pauseFor(500)
                                        .typeString('<br>pas lomba DSF dan pas telponan?')
                                        .pauseFor(500)
                                        .typeString('<br>aku pikir itu beneran sebuah janji')
                                        .pauseFor(500)
                                        .typeString('<br>tepi ternyata sekedar kalimat penenang untuk aku')
                                        .pauseFor(500)
                                        .typeString('<br>mungkin ini kamu anggap sedikit alay')
                                        .pauseFor(500)
                                        .typeString('<br>tapi gapapa kok')
                                        .pauseFor(500)
                                        .callFunction(() => {
                                          const lanjut4 = document.createElement('button');
                                          lanjut4.classList.add('lanjut');
                                          lanjut4.textContent = 'Lanjut';
                                          lanjut4.style.display = 'block';
                                          tauEnggak.appendChild(lanjut4);

                                          lanjut4.addEventListener('click', function () {
                                            lanjut4.style.display = 'none';
                                            typewriter
                                              .deleteAll(10)
                                              .typeString('tapi ini perasaan aku yang belum tersampaikan sama kamu,')
                                              .pauseFor(500)
                                              .typeString('<br>jujur, masih banyak hal yang aku tau sendiri')
                                              .pauseFor(500)
                                              .typeString('<br>dari awal kita pacaran')
                                              .pauseFor(500)
                                              .typeString('<br>masih banyak juga hal yang masih ingin aku sampein ke kamu')
                                              .pauseFor(500)
                                              .typeString('<br>tapi aku rasa cukup, biar aku aja yang tau')
                                              .pauseFor(500)
                                              .callFunction(() => {
                                                const lanjut5 = document.createElement('button');
                                                lanjut5.classList.add('lanjut');
                                                lanjut5.textContent = 'Lanjut';
                                                lanjut5.style.display = 'block';
                                                tauEnggak.appendChild(lanjut5);

                                                lanjut5.addEventListener('click', function () {
                                                  lanjut5.style.display = 'none';
                                                  typewriter
                                                    .deleteAll(10)
                                                    .typeString('aku juga masih punya harapan')
                                                    .pauseFor(500)
                                                    .typeString('<br>harapan untuk kita terus grow up ')
                                                    .pauseFor(500)
                                                    .typeString('<br>aku jadi bingung ')
                                                    .pauseFor(500)
                                                    .typeString('<br>aku harus bertahan atau engga, walaupun kayak gini')
                                                    .pauseFor(500)
                                                    .typeString('<br>sisilain aku sayang banget sama kamu')
                                                    .pauseFor(500)
                                                    .typeString('<br>sisi lain kamu sayang banget ke zacky begitupun zacky ke kamu')
                                                    .pauseFor(500)
                                                    .callFunction(() => {
                                                      const lanjut6 = document.createElement('button');
                                                      lanjut6.classList.add('lanjut');
                                                      lanjut6.textContent = 'Lanjut';
                                                      lanjut6.style.display = 'block';
                                                      tauEnggak.appendChild(lanjut6);

                                                      lanjut6.addEventListener('click', function () {
                                                        lanjut6.style.display = 'none';
                                                        typewriter
                                                          .deleteAll(10)
                                                          .typeString('kamu baik baik yaa')
                                                          .pauseFor(500)
                                                          .typeString('<br>sehat sehat terus yaa sayangkuu')
                                                          .pauseFor(500)
                                                          .typeString('<br>bahagia terus pastinya ya')
                                                          .pauseFor(500)
                                                          .typeString('<br>terimakasih banyak unutk segala hal yang pernah kita lakuin ')
                                                          .pauseFor(500)
                                                          .typeString('<br>maafin aku kalo ada kata yang kurang enak')
                                                          .pauseFor(1000)
                                                          .typeString('<br>maafin aku kalo apa yang aku utarakan ini salah')
                                                          .pauseFor(1000)
                                                          .typeString('<br>ini tentang apa yang aku rasain selama ini')
                                                          .pauseFor(1000)
                                                          .typeString('<br>maafin aku kalo ada perbuatan yang kamu gak suka juga ya')
                                                          .pauseFor(1000)
                                                          .typeString('<br>and then, kalo perlu apapun wa aku aja ya')
                                                          .pauseFor(1000)
                                                          .typeString('<br>tugas ataupun hal lain.')
                                                          .pauseFor(1000)
                                                          .typeString('<br>aku pasti bantu dan luangin waktu buat kamu')
                                                          .pauseFor(1000)
                                                          .callFunction(() => {
                                                            const lanjut7 = document.createElement('button');
                                                            lanjut7.classList.add('lanjut');
                                                            lanjut7.textContent = 'Lanjut';
                                                            lanjut7.style.display = 'block';
                                                            tauEnggak.appendChild(lanjut7);

                                                            lanjut7.addEventListener('click', function () {
                                                              lanjut7.style.display = 'none';
                                                              typewriter
                                                                .deleteAll(10)
                                                                .typeString('<br><br>--WO AI NI 🤍--')
                                                                .callFunction(() => {
                                                                  const lanjut8 = document.createElement('button');
                                                                  lanjut8.classList.add('lanjut');
                                                                  lanjut8.textContent = 'Lanjut';
                                                                  lanjut8.style.display = 'block';
                                                                  tauEnggak.appendChild(lanjut8);

                                                                  lanjut8.addEventListener('click', function () {
                                                                    containerUcapan.style.animation = 'fadeOut 3s ease-out forwards';
                                                                    containerUcapan.addEventListener('animationend', function () {
                                                                      containerUcapan.display = 'none';
                                                                      container.style.display = 'none';
                                                                      containerKisah.style.display = 'flex';
                                                                    });
                                                                  });
                                                                })
                                                                .start();
                                                            });
                                                          })
                                                          .start();
                                                      });
                                                    })
                                                    .start();
                                                });
                                              })
                                              .start();
                                          });
                                        })
                                        .start();
                                    });
                                  })
                                  .start();
                              });
                            })
                            .start();
                        });
                      })
                      .start();
                });
            })
            .start();
    }
    
function playAnimationKenangan() {
  kisahRight.style.display = 'flex';
  kisahRight.style.animation = 'fadeIn 2s ease-in forwards';
  kisahRight.addEventListener('animationend', function () {
    kisahLeft.style.display = 'flex';
    kisahLeft.style.animation = 'fadeIn 2s ease-in forwards';

    kisahLeft.addEventListener('animationend', function () {
      kataKisah.style.display = 'flex';
      kataKisah.style.justifyContent = 'center'; // Tambahkan ini
      kataKisah.style.alignItems = 'center'; // Tambahkan ini
      kataKisah.style.textAlign = 'center'; // Tambahkan ini
      kisahRightEnd.style.display = 'flex';
      kisahRightEnd.style.animation = 'fadeIn 2s ease-in forwards';

      kisahRightEnd.addEventListener('animationend', function () {
        const typewriter = new Typewriter(kataKisah, {
          loop: false,
          delay: 75,
          cursor: '',
        });

        typewriter
          .typeString('<span class="highlight">I Love u soo</span>')
          .pauseFor(500)
          .typeString('<br><p class="highlight-name">Salsa Putri Rahmadani</p>')
          .callFunction(() => {
            const waButton = document.querySelector('.whatsapp-button');
            waButton.style.display = 'inline-flex';
            waButton.style.animation = 'fadeIn 2s ease-in forwards';
          })
          .start();
      });
    });
  });
}

    
    function playAudio() {
        const audio = document.getElementById('instrumen');
        audio.volume = 0; // Mengatur volume awal ke 0
        audio.play(); // Memutar audio
    
        // Mengatur efek fade in
        let volume = 0;
        const fadeInInterval = setInterval(function() {
            if (volume < 0.5) { // Volume target adalah 50%
                volume = Math.min(volume + 0.01, 0.5);
                audio.volume = volume;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 100); // Menyesuaikan kecepatan fade in dalam milidetik (100ms = 0.1 detik)
    }
});
