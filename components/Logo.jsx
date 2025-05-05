import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/public'>
      <Image src='/about/logo.svg' alt='my-logo' width={54} height={54} priority />
    </Link>
  )
}

export default Logo;
