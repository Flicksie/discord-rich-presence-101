const Dicksword = require('discord.js')
const me = new Dicksword.Client()

process.on('uncaughtException', e => {console.log(e)})
process.on('unhandledRejection', rj => {console.log(rj)})

me.login("SUA_TOKEN_VAI_AQUI");

me.on('ready', () => {
    me.user.setPresence({ 
        status: 'dnd'                          
        ,game: { 
           type: 0                                   
           ,name: "NOME DO JOOJ"
           ,state: "ESTADO"
           ,details: "SUB"
           ,application_id: "APPLICATION_ID_AQUI"
           ,assets: { 
               large_image:  "ID_DA_IMAJONA"
              ,small_image:  "ID_DA_IMAGINHA"
              ,large_text:   "ALT_TEXT_DA_IMAJONA" 
              ,small_text:   "ALT_TEXT_DA_IMAGINHA"
              }
          }
      })
  
  console.log("OK!")
  
})