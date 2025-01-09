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
            .typeString('<br><span>Tau gak aku bikin apa? </span>')
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
                    .typeString('<br>disini aku cuman mau ngucapin sesuatu aja kok, mau liat gak ?')
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
                            .typeString('I LOVE U ')
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
                                  .typeString('<br>kenapa aku sayaangg bangeett sama kamu')
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
                            .typeString('I LOVE U ')
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
                                  .typeString('<br>kenapa aku sayaangg bangeett sama kamu')
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
                      .typeString('Sal')
                      .pauseFor(500)
                      .typeString('<br>sebelumnya aku mau minta maaf ya atas kesalahan yang pernah aku perbuat ke kamu')
                      .pauseFor(500)
                      .typeString('<br>terus kesannya juga kayak aku yang butuh kamu banget')
                      .pauseFor(500)
                      .typeString('<br>maaf juga kalo aku menggangu dan nenuntut waktu kamu')
                      .pauseFor(500)
                      .typeString('<br>maaf juga kamu jadi risih semenjak sama aku')
                      .pauseFor(500)
                      .typeString('<br>dan maaf juga kamu jadi terpaksa  buat komunikasi sama aku.')
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
                            .typeString('jujur aku seneeeng bangeeet bisa kenal kamu')
                            .pauseFor(500)
                            .typeString('<br>bisa milikin kamu juga walaupun sebentar hehe')
                            .pauseFor(500)
                            .typeString('<br>semenjak ada kamu, aku jadi lebih bersemangat dan kayak hidup lagi')
                            .pauseFor(500)
                            .typeString('<br>yang sebelumnya aku gatau harus cerita kesiapa dan pulang kemana, aku jadi bisa pulang ke kamu')
                            .pauseFor(500)
                            .typeString('<br>aku juga mau ngucapin makasih banget udah mau nerima aku, nemenin aku, dengerin cerita aku, misuh misuh aku, hal hal random aku yang sering kamu bales gak jelas itu hehe,')
                            .pauseFor(500)
                            .typeString('<br>aku senengg bangeett. ')
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
                                  .typeString('Sal, aku kalah ya?')
                                  .pauseFor(500)
                                  .typeString('<br>kalah dari orang yang kamu mau')
                                  .pauseFor(500)
                                  .typeString('<br>aku pikir waktu aku ngirim vt buat jadi satu satunya itu bener, ternyata enggak ya?')
                                  .pauseFor(500)
                                  .typeString('<br>aku baru sadar, ternyata orang yang kamu mau adalah zacky ya?')
                                  .pauseFor(500)
                                  .typeString('<br>ini feeling aku aja sii')
                                  .pauseFor(500)
                                  .typeString('<br>tapi aku rasa, rasa sayang kamu jauh lebih besar ke zacky dibanding aku,')
                                  .pauseFor(500)
                                  .typeString('<br>kamu selalu excited ke zacky dalam hal apapun, komunikasi, candaan, hal hal random dari kamu dll, banyak hal yang gak aku dapet dan zacky selalu dapet dari kamu.')
                                  .pauseFor(500)
                                  .typeString('<br>jujur aku iri banget sama zacky')
                                  .pauseFor(500)
                                  .typeString('<br>rasanya dia dapet sayang yang begitu besar dan tulus dari kamu')
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
                                        .typeString('Sal,')
                                        .pauseFor(500)
                                        .typeString('<br>aku gatau aku harus apa')
                                        .pauseFor(500)
                                        .typeString('<br>sisi lain aku masih sayang banget sama kamu, pengen bangeet bertahan, tapi sisi lain kayaknya gak bisa,')
                                        .pauseFor(500)
                                        .typeString('<br>kamu jauh lebih dominan ke zacky di banding aku dari awal kita deket bahkan yaa?')
                                        .pauseFor(500)
                                        .typeString('<br> jadi aku minta maaf kalo adanya aku jadi penghalang buat kalian')
                                        .pauseFor(500)
                                        .typeString('<br>kamu juga selalu ketemu sama dia, kamu selalu  yang ngajak duluan buat ketemu atau jajan bareng')
                                        .pauseFor(500)
                                        .typeString('<br>cara kamu respon juga aku rasa beda jauh antara ke aku sama zacky')
                                        .pauseFor(500)
                                        .typeString('<br>maaf kalo aku jadi penghalang kamu sama zacky ya.')
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
                                              .typeString('jujur banyak hal yang aku tau dengan sendirinya, dari awal kita jadian')
                                              .pauseFor(500)
                                              .typeString('<br>dan masih banyak sebenernya yang mau aku sampein ke kamu')
                                              .pauseFor(500)
                                              .typeString('<br>tapi aku rasa cukup, lewat web yang aku buat ini.')
                                              .pauseFor(500)
                                              .typeString('<br>aku juga masih punya harapan kalo kita bisa terus grow up bareng-bareng')
                                              .pauseFor(500)
                                              .typeString('<br>tapi kayaknya gabisa deh, kamu jauh lebih tulus ke zacky dari pada aku. ')
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
                                                    .typeString('maafin aku ya kalo kesannya juga, aku maksa kamu buat terus sama aku')
                                                    .pauseFor(500)
                                                    .typeString('<br>kamu sehat sehat yaa sayangg')
                                                    .pauseFor(500)
                                                    .typeString('<br>makasih banyak yaa untuk segala hal yang penah kita lakuin dan aku seneng banget bisa ngelakuin itu bareng kamu,')
                                                    .pauseFor(500)
                                                    .typeString('<br>and then, kalo kamu butuh aku langsung wa aja ya. pasti aku luangin waktu buat kamu,')
                                                    .pauseFor(500)
                                                    .typeString('<br>aku masih sama kok, alwyas fsat respon buat kamu, dan kamu masih jadi notif favorit aku')
                                                    .pauseFor(500)
                                                    .typeString('<br>aku sayaangg bangeett sama kamu.')
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
                                                          .typeString('terimakasih yaa udah mau dan jadi peran penting di hidup aku yang bikin aku seneng setiap harinya.')
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
                                                                .typeString('<br><br>Semoga kita bisa terus bareng ya🤍')
                                                                .pauseFor(500)
                                                                .typeString('<br>I LOVE U SAL🤍')
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
