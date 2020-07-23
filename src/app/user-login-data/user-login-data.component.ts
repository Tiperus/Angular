import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AddUser} from './user.interface';
import {User} from './user.model'

@Component({
  selector: 'app-user-login-data',
  templateUrl: './user-login-data.component.html',
  styleUrls: ['./user-login-data.component.scss']
})
export class UserLoginDataComponent implements OnInit {
  modalRegister: BsModalRef;
  userID=1;
  userLogin:string;
  userPassword:string;
  passwordControl:string;
  userEmail:string;
  userDataBase: Array<AddUser>=[];
  userStatus=false;
  idForEdit:number;
  addRed=false;


  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openRegister(template: TemplateRef<any>) {
    this.modalRegister = this.modalService.show(template);
  }

  addUser():void{
    if(this.userPassword===this.passwordControl){
    this.userStatus=true;
    let newUser:AddUser = new User(this.userID, this.userLogin, this.userPassword, this.userEmail, this.userStatus);
    this.userDataBase.push(newUser);
    this.userID++;
    this.userLogin='';
    this.userPassword='';
    this.passwordControl='';
    this.userEmail='';
    this.userStatus=false;
    this.modalRegister.hide()
    }
    else{
      this.addRed=true;
    }
  }
  editUser(id:number, template: TemplateRef<any>):void{

    this.idForEdit = (this.userDataBase.findIndex (item => item.id === id));

    this.userLogin=(this.userDataBase.map( item => {
      if(item.id===id) {
      return item.login;
      };
    })).join('')
    this.userPassword=(this.userDataBase.map( item => {
      if(item.id===id) {
      return item.password;
      };
    })).join('')
    this.passwordControl=(this.userDataBase.map( item => {
      if(item.id===id) {
      return item.password;
      };
    })).join('')
    this.userEmail=(this.userDataBase.map( item => {
      if(item.id===id) {
      return item.email;
      };
    })).join('')

    this.userStatus=(JSON.parse(this.userDataBase.map( item => {
      if(item.id===id) {
      return item.status;
      };
    }).join('')));
    console.log(this.userStatus)
       this.modalRegister = this.modalService.show(template);  
    // return this.userStatus
  };


  saveEdit(){

    this.userDataBase[this.idForEdit].login=this.userLogin;
    this.userDataBase[this.idForEdit].password=this.userPassword;
    this.userDataBase[this.idForEdit].email=this.userEmail;
    this.userLogin='';
    this.userPassword='';
    this.passwordControl=''
    this.userEmail='';
    this.modalRegister.hide()
  };


  deleteUser(id:number):void{
    this.userDataBase.forEach(function(item, index, array) {
     if(item.id===id) array.splice(index,1)
    });
  }

}
