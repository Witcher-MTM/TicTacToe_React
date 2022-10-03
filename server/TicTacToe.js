
   function Check(plates) {  
        result ={winLine:[],isWon:false};
       
            for (let i = 0; i < 7; i++) {
                if (plates[i] == plates[i + 1] && plates[i + 2] == plates[i] && plates[i] != '') {
                    this.result.winLine=[i,i+1,i+2];
                    this.result.isWon = true;
                }
                if (plates[i] == plates[i + 4] && plates[i + 8] == plates[i] && plates[i] != '') {
                    this.result.winLine=[i,i+4,i+8];
                    this.result.isWon = true;
                }
                if (plates[i] == plates[i + 3] && plates[i + 6] == plates[i] && plates[i] != '') {
                    this.result.winLine=[i,i+3,i+6];
                    this.result.isWon = true;
                }
                if (plates[i + 2] == plates[i + 4] && plates[i + 6] == plates[i + 2] && plates[i + 2] != '') {
                    this.result.winLine=[i+2,i+4,i+6];
                    this.result.isWon = true;
                }
            }
        
        return this.result;
    }

module.exports = Check;