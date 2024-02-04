import React, { useState } from 'react'

const Form = ({createTodo}) => {
    const [value,setValue]=useState('')
    const handleSubmit=e=>{
        e.preventDefault() //tüm sayfanın değil sadece formun yenilenmesi için.
        createTodo(value)
        setValue('') //inputu sıfırlıyor.
    }
  return (
    <form className='d-flex w-100 justify-content-center gap-3 p-3' onSubmit={handleSubmit}>
        <input type="text" className='form-control ' style={{width:'auto'}} placeholder='Adınız' onChange={(e)=>setValue(e.target.value)} value={value} /> 
        {/* //targetla formu seçiyoruz.value inputa yazılan değer. */}
        <button className='text-white btn btn-success ' >Görev Ekle</button>
    </form>
  )
}

export default Form
