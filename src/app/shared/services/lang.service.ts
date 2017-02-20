import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LangService {
  private _lang: string;

  private _langMap = new Map()

  private _json = new Subject<any>()

  private _currentJson: any;

  public get json() {
    return this._json.asObservable();
  }

  constructor(private _http: Http, private _router: Router) {
    this._router.events.subscribe(data => {
      if (typeof this._currentJson !== 'undefined') {
        this._json.next(this._currentJson);
      }
    })
  }

  private _getJson(lang: string): Observable<Object> { // TODO: подумать на счет типа
    return this._http.get(`/lang/${lang}.json`)
  }

  public getLang(): string {
    return this._lang;
  }

  public setLang(lang = 'en'): void {
    if (this._langMap.has(lang)) {
      this._lang = lang;
      this._currentJson = this._langMap.get(lang)
      this._json.next(this._currentJson);
      return;
    }

    this._getJson(lang).subscribe(
      (request: Response) => {
        this._lang = lang;
        this._currentJson = request.json()
        this._langMap.set(lang, this._currentJson)
        this._json.next(this._currentJson);
      },
      (error: Response) => {
        if (error.status === 404) {
          this.setLang('en');
        }
      }
    );
  }
}
