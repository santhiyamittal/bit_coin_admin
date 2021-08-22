import { Injectable } from '@angular/core';
import {  EventEmitter, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { map } from "rxjs/operators";
import * as pako from "pako";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //LIVE
  baseURL: string = "https://www.bitconia.com/api/v1/";
  headers: any = new HttpHeaders({ "Content-Type": "application/json" });
//Api
userloginurl: string = "admin/auth/login";
  logout: string ="admin/auth/logout";
  userOTPUrl: string="admin/g2f/auth/get";
  setOTPUrl: string="admin/g2f/auth/enable";
  changepassword : string="admin/auth/changepassword";
  activityuser : string="admin/auth/activity";
  getprofile: string="admin/auth/getprofile";
  resetpassword : string="admin/auth/resetpassword";
  forgetpassword: string="admin/auth/forgotpassword";
  //user
  getuser: string="admin/user/list";
  createuser: string="admin/user/create";
  updateuser: string="admin/user/update";
deleteuser: string="admin/user/delete";
searchuser:string="admin/user/listbyid";
statususer:string="admin/user/status";
//Draw
getdraw:string="admin/draw/list";
createdraw:string="admin/draw/create";
updatedraw:string="admin/draw/update";
deletedraw:string="admin/draw/delete";
searchdraw:string="admin/draw/listbyid";
//variables
errorCount: number;

  constructor(
    public http: HttpClient,
    public toastr: ToastrService,
    public router: Router,

  ) { }
 
  // errorCallBack(apiResp) {
  //   if (!apiResp) {
  //     this.errorCount++;
  //     /** spinner ends after 10 seconds */
  //     if (this.errorCount < 1) {
  //       // this.loader.stop();
  //       // this.toastr.error("Something went wrong..Please try after somtime!")
  //       // this.toastr.error("Please try after somtime!", "", {
  //       //   positionClass: "toast-bottom-right",
  //       //   closeButton: true,
  //       //   timeOut: 5000,
  //       // });
  //     }
  //   }
  // }
  getUserId() {
    if (localStorage.getItem("userid")) {
      var userId = JSON.parse(localStorage.getItem("userid"));
      return userId;
    }
  }
  getSessionToken() {
    var tokenId = JSON.parse(localStorage.getItem("data"));
    return tokenId;
  }
  // getAuthHeaders() {
  //   return this.headers.append(
  //     "Authorization", + this.getSessionToken()
  //   );
  // }
  getAuthHeaders() {
    return this.headers.append(
      "Authorization", this.getSessionToken()
    );
  }
  userLogin(jsonObj: any): Observable<any> {
    // debugger
    return this.http.post(this.baseURL + this.userloginurl, jsonObj, {
      headers: this.headers,
    });
  }
  
  generateMobileOTP(): Observable<any> {
    return this.http.get(this.baseURL + this.userOTPUrl, {
      headers: this.getAuthHeaders(),
    });
  }
  setUserOTP(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.setOTPUrl, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  logoutSession(jsonObj: any): Observable<any> {
    // debugger
    return this.http.post(this.baseURL + this.logout, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  resetPassword(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.resetpassword, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  forgetPassword(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.forgetpassword, jsonObj, {
      // headers: this.getAuthHeaders(),
    });
  }
  changePassword(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.changepassword, jsonObj, 
      {
        headers: this.getAuthHeaders(),
      });
  }
  getUser(): Observable<any> {
    return this.http.get(this.baseURL + this.activityuser, {
      headers: this.getAuthHeaders(),
    });
  }
  getProfile(): Observable<any> {
    return this.http.get(this.baseURL + this.getprofile, {
      headers: this.getAuthHeaders(),
    });
  }
  getUserlist(): Observable<any> {
    return this.http.get(this.baseURL + this.getuser, {
      headers: this.getAuthHeaders(),
    });
  }
  getStatusUser(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.statususer,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getcreate(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.createuser, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getupdate(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.updateuser, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getdelete(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.deleteuser, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getsearch(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.searchuser, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getdrawlist(){
    return this.http.get(this.baseURL + this.getdraw, {
      headers: this.getAuthHeaders(),
    });
  }
  getdrawdelete(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.deletedraw,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getsearchdraw(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.searchdraw,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getcreatedraw(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.createdraw,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getUpdatedraw(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.updatedraw,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
}
