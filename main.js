var mod_path = '';
var TelegramBot = require(`${mod_path}node-telegram-bot-api`);

require('./node_color');

var GetLotterySysFun = new function() {
    var init = function() {
        console.log("hello user");
        var token = '523159931:AAGb0oEGxtAKk1uEqiXe9ZiHUJ3z4JdDLf0';

        var bot = new TelegramBot(token, { polling: true });

        //收到Start訊息時會觸發這段程式
        bot.onText(/\/start/, function(msg) {
            var chatId = msg.chat.id; //用戶的ID
            var resp = '你好'+chatId; //括號裡面的為回應內容，可以隨意更改
            bot.sendMessage(chatId, resp); //發送訊息的function
        });

        //收到/cal開頭的訊息時會觸發這段程式
        bot.onText(/\/cal (.+)/, function(msg, match) {
            var fromId = msg.from.id; //用戶的ID
            var resp = match[1].replace(/[^-()\d/*+.]/g, '');
            // match[1]的意思是 /cal 後面的所有內容
            resp = '計算結果為: ' + eval(resp);
            // eval是用作執行計算的function
            bot.sendMessage(fromId, resp); //發送訊息的function
        });

    }
    init()
};
