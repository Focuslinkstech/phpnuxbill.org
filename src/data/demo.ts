// The demo logins shown on the /demo page. Edit this file to change what visitors see.
// A login without a username or a password is shown without that row, and the build prints a warning for it.
import { COMMUNITY } from '../site';

export interface DemoLogin {
  id: 'admin' | 'customer';
  url: string;       // the sign-in page the "Open" button goes to
  username: string;
  password: string;
}

export const DEMO_LOGINS: DemoLogin[] = [
  { id: 'admin', url: `${COMMUNITY.demo}/admin`, username: 'admin', password: 'admin' },
  { id: 'customer', url: `${COMMUNITY.demo}/login`, username: 'user', password: '123456' },
];
