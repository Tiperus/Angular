import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-censor',
  templateUrl: './censor.component.html',
  styleUrls: ['./censor.component.scss']
})
export class CensorComponent implements OnInit {
  badWords:string;
  arrBadWord: Array<string>;
  stringBadWord:string;
  showBadW: string;
  value:string;
  text:string;
  arrText: Array<string>;
  checkWord:boolean;
  arrCheckWord:Array<string>;
  arrCheckWordChange:Array<string>;
  arrCheckWordChangeStr:string;
  placeholderText:string;
  className:string;
  classNameTextaria:string;

  constructor() { }
  
  ngOnInit(): void {
    this.badWords='',
    this.arrBadWord =[],
    this.stringBadWord='',
    this.arrText=[],
    this.arrCheckWordChange=[],
    this.text='',
    this.placeholderText='Bad word here',
    this.className='inputValue',
    this.classNameTextaria='textarea'
  };
  showBadWords(badWords):void{
    if( badWords.length==0 ){
      this.placeholderText='Put bad word'
      this.className='emptyInputValue'
    }
    else{
    this.arrBadWord.push(badWords.toLowerCase())
    this.stringBadWord=this.arrBadWord.join(' ')
    this.badWords=''
    this.placeholderText='Bad word here'
    this.className='inputValue'
    }
  };
  clearInput():string{
    this.badWords=''
    return this.badWords
  };
  addText():void{
    if( this.text.length==0 ){
      // this.placeholderText='Put bad word'
      this.classNameTextaria='empty_textarea'
    }
    else{
    this.arrText=this.text.toLowerCase().split(' ')
    this.classNameTextaria='textarea'
    // console.log(this.arrText)
    this.arrText.forEach((key, index, arr)=>{
     this.checkWord= this.arrBadWord.indexOf(key)!==-1;
    
      if(this.checkWord){
        
        this.arrCheckWord=arr[index].split('')
        // console.log(this.arrCheckWord.length)
        for(let i=0; i<this.arrCheckWord.length; i++){
       
        
        this.arrCheckWordChange.push('*')
        this.arrCheckWordChangeStr=this.arrCheckWordChange.join('')
        }
        this.arrText.splice(index,1,this.arrCheckWordChangeStr)
        // console.log(this.arrCheckWordChangeStr)
        // console.log(this.arrText)
        this.arrCheckWordChange=[]
      }
      this.text=this.arrText.join(' ')
    })
  }
  }
}
