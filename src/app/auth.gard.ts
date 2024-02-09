import { inject } from "@angular/core";
import { AuthService } from "./services/auth.service";

export const CanActivate = () => {
  const authService = inject(AuthService)
  try {
    let token = JSON.parse(window.localStorage.getItem("key"))
    if (token == null) {
      return false
    }
    else {
      return true
    }
  } catch (error) {
    return error
  }
}
