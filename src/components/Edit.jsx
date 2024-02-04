import React, { useState } from 'react'

const Edit = ({editTodo,task}) => {
    const [value,setValue]=useState('')
    const handleSubmit=e=>{
        e.preventDefault() //tüm sayfanın değil sadece formun yenilenmesi için.
        editTodo(value,task.id)
        setValue('') //inputu sıfırlıyor.
    }
  return (
    <form className='d-flex w-100 justify-content-start gap-3 p-3' onSubmit={handleSubmit}>
        <input type="text" className='form-control 'style={{width:'auto'}} placeholder='Düzenle' onChange={(e)=>setValue(e.target.value)} value={value} /> 
        {/* //targetla formu seçiyoruz.value inputa yazılan değer. */}
        <button className='text-white btn btn-success '>Görev Düzenle</button>
    </form>
  )
}

export default Edit
