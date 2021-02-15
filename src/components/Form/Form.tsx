import React, { useRef, useState } from 'react'


enum formDataValues {
  name = 'name',
  image = 'image',
  message = 'message'
}

export const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  function handleSubmit() {
    fetch('http://localhost:8000/test', {
      method: 'POST',
      body: new FormData(form.current)
    })
      .then((e) => {
     console.log(e)
      })
      .catch((error) => console.log(error))
  }

  return (
    <form
    ref={form}
    encType="multipart/form-data"
      name="contact"
      className="form"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
        return
      }}
    >
      <label>
        Name
        <input
        className="name"
          type="text"
          name={formDataValues.name}
          id="name"
          required={true}
        />
      </label>
      <label>
        Message
        <textarea
          name={formDataValues.message}
          id="message"
          rows={5}
          required={true}
        />
      </label>
     
      <label>
        Photo
        <input
         className="hile"
          type="file"
          name={formDataValues.image}
          id="photo"
        />
      </label>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}