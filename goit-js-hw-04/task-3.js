const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername: function (callback) {
        return this.username = callback
    },

    updatePlayTime: function(callback) {
        return this.playTime = this.playTime + callback
    },
    getInfo: function(){
        return `${this.username} has ${this.playTime} active hours!`
    }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"