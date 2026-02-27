
myform=document.getElementById('my-form')
myform.addEventListener('submit',(event)=>{
    event.preventDefault()
    form_data=new FormData(event.currentTarget)
    const first=form_data.get('firstName')
    const last=form_data.get('lastName')
    console.log(first,last)
})