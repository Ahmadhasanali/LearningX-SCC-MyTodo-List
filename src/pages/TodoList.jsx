import React from 'react'
import Layout from '../components/layout/Layout'
import Header from '../components/header/Header'
import List from '../components/list/List'
import Form from '../components/form/Form'
import { useState } from 'react'

function TodoList() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      title: "Learning",
      body: "React.",
      isDone: false,
    },
    {
      id: 2,
      title: "Learning",
      body: "Web Scrapping.",
      isDone: true,
    }
  ])

  return (
    <Layout>
      <Header />
      <Form />
      <List datas={datas} setDatas={setDatas}/>
    </Layout>
  )
}

export default TodoList