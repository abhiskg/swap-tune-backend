export {}; // to make the file a module and avoid the TypeScript error
declare module "express-serve-static-core" {
  interface Request {
    validId?: Record<string>;
    decoded?: string | jwt.JwtPayload;
    isAdmin: boolean;
    userEmail: string;
  }
  interface Response {
    myField?: string;
  }
}
