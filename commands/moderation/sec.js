const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name : "cekilis",
    category: "moderation",
    description: "Belirli bir sayida insandan olusan topluluk arasindan belirli sayida insan sec",
    usage: '[command name]',
    run: (client, message, args) => {
        
         var toplam_kisi = [];
         var rand_secilenler = [];
        
         function a(){
            
            
            message.channel.send("Toplamda kac kisi var?");

                
                const filter = m => m.author.id ===  message.author.id;
                message.channel.awaitMessages(filter, {
                    max: 1, // leave this the same
                    time: 10000, // time in MS. there are 1000 MS in a second
                }).then(async(collected) => {
                        if(!isNaN(collected.first().content)){
                            var toplam_kisi_sayisi = collected.first().content;

                            message.channel.send("Kac kisi secilecek?");
                            
                            const filter2 = m2 => m2.author.id === message.author.id;
                            message.channel.awaitMessages(filter2, {
                                max: 1, // leave this the same
                                time: 10000, // time in MS. there are 1000 MS in a second
                            }).then(async(collected2) => {

                                var secilecek_kisi_sayisi = collected2.first().content;
                                
                                // message.channel.send(secilecek_kisi_sayisi + " kisinin secilme olasiligi: " + combination(toplam_kisi_sayisi, secilecek_kisi_sayisi));
                                // message.channel.send(toplam_kisi_sayisi);
                                // message.channel.send(secilecek_kisi_sayisi);
                                // message.channel.send(value);
                                // message.channel.send(randomNumber(secilecek_kisi_sayisi, toplam_kisi_sayisi));
                                randomNumber(secilecek_kisi_sayisi,toplam_kisi_sayisi);
                                message.reply("\n" + rand_secilenler);


                            
                        })
                    }
                    
                                            }).catch(() => {
                                // what to do if a user takes too long goes here 
                                                    message.reply('Yazman cok uzun surdu') 
                                            });
            

            
        }
        function randomNumber(secilen_kisi_sayisi,toplam_kisi_sayisi){
            var i;
            var a =1;
            if(toplam_kisi_sayisi != ""){
                for(i = 0; i<toplam_kisi_sayisi; i++){
                    toplam_kisi[a-1] = a;
                    a++;
                }
                randomChosenFromArray(secilen_kisi_sayisi);
            }

        }
        // function factorial(number){
        //     var value = number;
        //     for ( var i = number; i > 1; i-- )
        //       value *= i - 1;
        //     return value;
        // };

        function randomChosenFromArray(x){
            do{
                rand_secilenler[rand_secilenler.length] = toplam_kisi.splice(
                    Math.floor(Math.random() * toplam_kisi.length), 1)[0];
            } while(rand_secilenler.length<x);
            rand_secilenler.sort(function(a,b){
                return a-b;
            })
        }




        // function combination(n, r){
        //     if ( n == r) return 1;
        //     return factorial(n) / (factorial(r) * factorial(n - r));
        // };
        
        		
        a();
}
    
}
