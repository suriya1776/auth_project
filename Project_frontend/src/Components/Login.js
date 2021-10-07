import React, { useState, useEffect } from 'react'
import './Login.css'

import api from '../Axios/axios'

function Login(props) {
  const [data, setData] = useState([])

  const [id, setId] = useState('')
  const [Name, setName] = useState('')

  const [usertype, setUsertype] = useState('')
  const fetchUrl = '/admin/post'

  useEffect(() => {
    api
      .get(fetchUrl)
      .then((res) => {
        setData(res.data[0].id)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const res = data.find((item) => {
    return item === id
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id && usertype && Name) {
      if (res) {
        props.history.push(`/${usertype}/${id}`)
      } else {
        alert('please check your ID')
        setId('')
      }
    } else {
      alert('input boxes should not be left empty')
    }
  }

  return (
    <>
      <article>
        <h1 className='form_heading'>LOGIN PAGE</h1>
        <form className='form'>
          <div className='form_name'>
            <label htmlFor='id'>ID:</label>

            <input
              className='id_input'
              type='text'
              id='id'
              name='id'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className='form_name'>
            <label htmlFor='Name'>Name:</label>
            <input
              className='name_input'
              type='text'
              id='Name'
              name='Name'
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form_name'>
            <label htmlFor='usertype'>User type:</label>
            <input
              className='user_input'
              type='text'
              id='usertype'
              name='usertype'
              value={usertype}
              onChange={(e) => setUsertype(e.target.value)}
            />
          </div>

          <button type='submit' className='form_submit' onClick={handleSubmit}>
            Login
          </button>
        </form>
      </article>
    </>
  )
}

export default Login
