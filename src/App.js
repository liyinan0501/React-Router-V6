import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Article from './Article'
import Board from './Board'
import Layout from './Layout'
import Login from './Login'
import NotFound from './NotFound'

function App() {
  return (
    <div>
      App Component
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 定义二级路由嵌套 */}
            {/* 定义默认二级 添加index属性，把path去掉。 */}
            {/* <Route path="/board" element={<Board />}></Route> */}
            <Route index element={<Board />}></Route>
            <Route path="/article" element={<Article />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
