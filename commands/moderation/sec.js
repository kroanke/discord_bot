const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name = "sec",
    category: "moderation",
    description: "Belirli bir sayida insandan olusan topluluk arasindan belirli sayida insan sec",
    usage: '[command name]',
    run: (client, message, args) => {
        var kisi_sayisi = [];
        
         function a(){
            
            
            message.channel.send("Toplamda kac kisi var?");
            var toplam_kisi_sayisi = collected.first().content;
            message.channel.send(toplam_kisi_sayisi);

            // const filter = m => m.author.id ===  message.author.id;
            // message.channel.awaitMessages(filter, {
            //     max: 1, // leave this the same
            //     time: 10000, // time in MS. there are 1000 MS in a second
            // }).then(async(collected) => {
            //         if(!isNaN(collected.first().content)){
            //             kisi_sayisi_secme(collected.first().content);
            //             message.reply("\n"+kisi_sayisi);
            //         }

            //                             }).catch(() => {
            //                 // what to do if a user takes too long goes here 
            //                                     message.reply('Yazman cok uzun surdu') 
            //                             });
        }
        
        function  kisi_sayisi_secme(y){
            randomNumber(y);            
            kisi_sayisi.sort(function(a, b){
                return a - b;
            })
        }
        
        function randomNumber(x){
            while(kisi_sayisi.length < x){
                var kazananlar = Math.floor(Math.random() * (x*2)) + 1;
                if(kisi_sayisi.indexOf(kazananlar) === -1)kisi_sayisi.push(kazananlar);
            }
        }			
        a();
}
    
}