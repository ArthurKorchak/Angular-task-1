import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { MainSelectors } from "src/app/_core/state/main.selectors";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private token = '';

  constructor(private store$: Store) {
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      if (resp?.token) this.token = resp.token;
    });
  };

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let clonedReq = req;

    if (this.token) clonedReq = req.clone({ headers: req.headers.set('X-Token', this.token) });

    return next.handle(clonedReq);
  };
};