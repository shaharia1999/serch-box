if(product==null){
       return(<div>
           <h1>Result not Found</h1>
           <h1> 404...</h1>
       </div>)
    }else{
        return (
            <div>
                <h3>Serching Here</h3>
                 <input onChange={searchInput} type="text"></input>
                 <h2> result :{product.length}</h2>
                 <div className='container'>
                 {
                    
                     product.map(pro=><Product pro={pro}></Product>)
    
                 }
                 </div>
            </div>
        );
    }"# serch-box" 
