import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoginService } from "../Services/login.service";
export const Auth:HttpInterceptorFn= (req,next) => {
    const loginService =inject(LoginService);

    const token=loginService.getAuthToken();
  
    const authReq=req.clone({
        setHeaders: { 
            Authorization: `Bearer ${token}`  // Bearer is a prefix for token
         }
    });
    return next(authReq);
}
