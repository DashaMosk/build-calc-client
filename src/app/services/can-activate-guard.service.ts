import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire4/auth';

@Injectable()
export class CanActivateGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log(this.afAuth.authState);
    return this.afAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(auth => !auth ? this.router.navigate(['welcome']) : true);
  }


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

}
