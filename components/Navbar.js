import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={80} height={80} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/dashboard/"><a>Dashboard</a></Link>
      <Link href="/leaderboard/"><a>Leaderboard</a></Link>
    </nav>
  );
}
 
export default Navbar;