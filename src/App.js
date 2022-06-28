import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div>App Component</div>
      {/* 声明当前要用一个非hash模式的路由，BrowserRouter一个应用只需使用一次。 */}
      <BrowserRouter>
        {/* 指定跳转的组件：用来指定导航链接，完成路由跳转， to用来指定路由地址，最终会渲染成为a链接元素。 */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* 路由出口：满足条件的路由组件会渲染到组件内部 */}
        <Routes>
          {/* 指定路径和组件的对应关系 path代表url路径与上面to属性配合 element代表组件 */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Login() {
  const navigate = useNavigate()
  function goAbout1() {
    navigate('/about?id=1001&name=Jack', { replace: true })
  }
  function goAbout2() {
    navigate('/about/1002', { replace: true })
  }
  return (
    <div>
      Login
      <button onClick={goAbout1}>About1</button>
      <button onClick={goAbout2}>About2</button>
    </div>
  )
}

function About() {
  // 返回一个数组，数组里的params是一个对象。(推荐)
  let [params] = useSearchParams()
  let id = params.get('id')
  let name = params.get('name')

  // params2直接返回一个对象
  let params2 = useParams()
  let id2 = params2.id
  return (
    <div>
      About <br />
      Get from url: {id} {name}
      <br />
      Get from url: {id2}
    </div>
  )
}

function Home() {
  return <div>Home</div>
}
