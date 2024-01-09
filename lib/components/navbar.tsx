import Link from 'next/link';
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED, GENERATE_ENABLED } from '../config';

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="container">
        <div className="app-name align-center">
          <Link href="/">{APP_NAME}</Link>
        </div>
      </div>
    </div>
  )
}
