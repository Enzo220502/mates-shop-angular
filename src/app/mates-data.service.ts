import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, toArray } from 'rxjs';
import { Mate } from './mates-list/Mate';

const URL = "https://668d49f5099db4c579f272eb.mockapi.io/api/mates/mates";

@Injectable({
  providedIn: 'root'
})
export class MatesDataService {
 
  listaMates$: Observable<Mate[]> = new Observable<Mate[]>();

  constructor(private http:HttpClient) { }

  getAll():Observable<Mate[]>{
    this.listaMates$ = this.http.get<Mate[]>(URL).pipe(tap((mates:Mate[]) => mates.forEach(mate => mate.quantity = 0)));
    return this.listaMates$;
  }
 
}
