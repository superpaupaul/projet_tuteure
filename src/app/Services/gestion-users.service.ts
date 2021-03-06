import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../Modeles/USER";

@Injectable({
  providedIn: 'root'
})
export class GestionUsersService {
  private router: Router;

  constructor(router: Router, private http: HttpClient) {this.router=router }

  createUser(username: string, email: string,name: string, surname:string,password:string) {
    let user = new User(username,email,name,surname,password,false,[])

    return this.http.post("/user",JSON.stringify(user)).pipe(map((res)=>{
      return res
    }))
  }

  resetPassword(user: User) {
    return this.http.put(`/user/resetpassword`,JSON.stringify(user)).pipe(map(res => {
      return res != null ? res:null;
    }))
  }

  removeUserFromIdOrUsername(id:number){
    return this.http.delete<number>(`/user/${id}`).pipe(map((res)=>{
      return res
    }))
  }

  getIdFromId(id:any) {
    return this.http.get<User>(`/user/${id}`).pipe(map((res)=>{
      return res != null ? res.id:null;
    }))
  }

  getUserFromId(id: number){
    return this.http.get<User>(`/user/${id}`).pipe(map((res)=>{
      return res != null ? res:null;
    }))
  }
}
