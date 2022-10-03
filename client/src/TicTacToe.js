import React from 'react'
 var choice = 'X';
 var isWon = false;
 const plates = document.getElementsByName('area');
 var ServerInfo = {choice:""};
 var SortPlates = [];
 var data = {winLine:[],isWon:false};

class TicTacToe extends React.Component {
async Click(event) {
    if (!data.isWon) {
        if (event.target.innerHTML == '') {
                if (choice == 'X') {
                    event.target.innerHTML = 'X';   
                    console.log("Clicked! - X");
                    ServerInfo.choice = 'X';
                }
                else {
                    event.target.innerHTML = 'O';
                    console.log("Clicked! - O");
                    ServerInfo.choice = 'O';
                }
                choice = choice == 'X' ? 'O' : 'X';
                for(let i=0;i<plates.length;i++){
                    SortPlates[i] = plates[i].innerHTML;
                }
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: ServerInfo , colectionPlates:SortPlates})
                };
                await fetch('/api/checkTicTacToe', requestOptions)
                    .then(response => response.json())
                    .then(res=>data=res.result)
                    console.log(data);
                    for(let i=0;i<data.winLine.length;i++){
                        plates[data.winLine[i]].style.backgroundColor='green';
                    }
            }
            else {
                alert("You cant stay here!");
            }
        }
       
    }
  render() {
    return (
        
        <div id="TicTacToe">
            <div onClick={this.Click} name = 'area' className='area' id='1'></div>
            <div onClick={this.Click} name = 'area' className='area' id='2'></div>
            <div onClick={this.Click} name = 'area' className='area' id='3'></div>
            <div onClick={this.Click} name = 'area' className='area' id='4'></div>
            <div onClick={this.Click} name = 'area' className='area' id='5'></div>
            <div onClick={this.Click} name = 'area' className='area' id='6'></div>
            <div onClick={this.Click} name = 'area' className='area' id='7'></div>
            <div onClick={this.Click} name = 'area' className='area' id='8'></div>
            <div onClick={this.Click} name = 'area' className='area' id='9'></div>
      </div>
        
    );
  }
}
 
export default TicTacToe;