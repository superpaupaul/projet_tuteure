import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {User} from "../Modeles/USER";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor( private http: HttpClient) {}

  getUserFromId(id:any) {
    return this.http.get<User>(`http://localhost:8080/user/${id}`).pipe(map((res)=>{
      return res.getId();
    }))
  }

  getUserFromUsername(username :String) {
    return this.http.get<User>(`http://localhost:8080/user/${username}`).pipe(map((res)=>{
      return res
    }))
  }
}
