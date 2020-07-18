import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-censor',
  templateUrl: './censor.component.html',
  styleUrls: ['./censor.component.scss']
})
export class CensorComponent implements OnInit {
  badWords:string;
  // arrBadWord:string[];
  arrBadWord: Array<string>;
  showBadW: string;
  // input:HTMLElement;
  value:string;
  text:string;
  arrText: Array<string>;
  checkWord:boolean;
  arrCheckWord:Array<string>;
  arrCheckWordChange:Array<string>;
  arrCheckWordChangeStr:string;

  constructor() { }
  
  ngOnInit(): void {
    this.badWords=this.badWords,
    this.arrBadWord =[],
    // this.input=document.querySelector('#inputValue'),
    this.arrText=[],
    this.arrCheckWordChange=[]
    this.text=''
    // this.value=''
  };
  showBadWords(badWords):void{
    this.arrBadWord.push(badWords.toLowerCase())
    // console.log(this.badWords)
    // console.log(badWords)
    // console.log(this.arrBadWord)
    this.badWords=''
  };
  clearInput():string{
    this.badWords=''
    // this.input.innerText=''
    // console.log(this.input)
    return this.badWords
  };
  addText():void{
    this.arrText=this.text.toLowerCase().split(' ')
    console.log(this.arrText)
    this.arrText.forEach((key, index, arr)=>{
     this.checkWord= this.arrBadWord.indexOf(key)!==-1;
    //  this.arrBadWord.indexOf(key)!==-1;
      if(this.checkWord){
        // console.log(arr[index].split(''))
        this.arrCheckWord=arr[index].split('')
        console.log(this.arrCheckWord.length)
        for(let i=0; i<this.arrCheckWord.length; i++){
        //   console.log(this.arrCheckWord)
        
        this.arrCheckWordChange.push('*')
        this.arrCheckWordChangeStr=this.arrCheckWordChange.join('')
        }
        this.arrText.splice(index,1,this.arrCheckWordChangeStr)
        console.log(this.arrCheckWordChangeStr)
        console.log(this.arrText)
        this.arrCheckWordChange=[]
      }
      this.text=this.arrText.join(' ')
    })
  }

}
