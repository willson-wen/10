import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [evtolData] = useState([
    { model: 'EH216-S', maxRange: 35.0, maxSpeed: 130.0, passengerCapacity: 2 },
    { model: 'EH216-F', maxRange: 40.0, maxSpeed: 130.0, passengerCapacity: 0 },
    // ... 其他数据
  ])

  return (
    <div>
      <Head>
        <title>eVTOL数据库</title>
        <meta name="description" content="发现全球领先的电动垂直起降航空器制造商" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <nav>
            <div className="logo">EVTOL管理后台</div>
            <div className="nav-items">
              <a href="#">Home</a>
              <a href="#">用户管理</a>
              <a href="#">EVTOL公司</a>
              <a href="#">EVTOL产品</a>
              <a href="#">招聘信息</a>
            </div>
          </nav>
        </header>

        <div className="container">
          <h1>探索 eVTOL 的未来</h1>
          <p>发现全球领先的电动垂直起降航空器制造商</p>
          
          <div className="search-box">
            <input 
              type="text" 
              placeholder="搜索EVTOL公司或产品..."
            />
            <button>搜索</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Model Name</th>
                <th>Max Range</th>
                <th>Max Speed</th>
                <th>Passenger Capacity</th>
              </tr>
            </thead>
            <tbody>
              {evtolData.map((item, index) => (
                <tr key={index}>
                  <td>{item.model}</td>
                  <td>{item.maxRange}</td>
                  <td>{item.maxSpeed}</td>
                  <td>{item.passengerCapacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
} 