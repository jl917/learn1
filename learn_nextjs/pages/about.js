import Link from 'next/link'
import dynamic from 'next/dynamic'

const Button = dynamic(import('./button'),{
  ssr: true,
  loading: ()=> <div>loading</div>
})


// example header component
export default () =>
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>

    <div>about</div>
    <Button />
    <img src="/static/a.JPG" width="40" height="40" alt="my image" />

  </nav>