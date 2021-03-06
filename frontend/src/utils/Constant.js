export const AUTHORIZATION = "AUTHORIZATION";
export const DASHBOARD_URL = "/dashboard";

// URLs
export const BASE_BACKEND_URL = "http://127.0.0.1:8000";
export const BASE_FRONTEND_URL = "http://localhost:3000"
export const LOGIN_URL = "/api/auth/v1/jwt/create/";
export const GET_USER_URL = "/api/auth/v1/users/me/";
export const SIGNUP_URL = "/api/auth/v1/users/";
export const LOGOUT_URL = "/api/auth/v1/token/logout/";
export const AUTH_LOGIN_REDIRECT_URL = "/login/?next=";
export const ACTIVATE_ACCOUNT_URL = "/api/auth/v1/users/activation/";
export const VERIFY_TOKEN_URL = "/api/auth/v1/jwt/verify/";
export const REFRESH_TOKEN_URL = "/api/auth/v1/jwt/";
export const RESET_PASSWORD_URL = "/api/auth/v1/users/reset_password/";
export const RESET_PASSWORD_CONFIRM_URL = "/api/auth/v1/users/reset_password_confirm/";
export const ACTIVATE_USER_UPDATE_PROFILE_URL = "/api/auth/v1/update-profile/";
export const ACTIVATE_USER_REDIRECT_URL = "/activate/uid/token";
export const SUBMIT_REPORT_URL = "/api/report/v1/";
export const GET_IMAGES_URL = "/api/report/v1/download/"
