const getStoredApp=()=>{
    const storedApp=localStorage.getItem('Installed')
    if(storedApp){
        const storedAppData=JSON.parse(storedApp)
        return storedAppData
    }
    else{
        return [];
    }
}
const addToDb=(id)=>{
       const storedAppData=getStoredApp();
       if (storedAppData.includes(id)) {
      alert('already exist')
       } else {
        storedAppData.push(id)
         const data=JSON.stringify(storedAppData);
         localStorage.setItem("Installed",data)
       }
    
}
export {addToDb,getStoredApp}