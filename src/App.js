import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    console.log("This is constructor")
    this.state= {
      apiInfo: []
    
    };


  }
  componentDidMount(props){
    fetch('https://jsonplaceholder.typicode.com/posts/').then((res)=>{
      if (!res.ok){
        throw Error(res.statusText)
      }
      return res.json()
    }).then((result)=>{
      this.setState({apiInfo:result})
     
              
   this.setState({ apiInfo: result })
  
      }

    ).catch((error)=>{
      console.log(error)
    })
  }
  render() {
    return (
      <>

   
 { 
 this.state.apiInfo.map((item) => (
   
   <div style={{color:'red',margin:'60px'}}>
     
       <h2>{item.id}</h2>
       <h3>{item.title}</h3>
     
  </div>
 )
 )
  }
 

{/* 
{
      this.apiInfo.data.map((post, i) =>
          <div key={i}>
             <h2>{post.id} </h2>
           
          
             <hr/>
           </div>
         )
        
       } */}
      </>
    )
  }
}



// export default class App extends Component {
//   state = {
//       books: []
//   }
  
//   componentDidMount() {
//       fetch('https://jsonplaceholder.typicode.com/posts/')
//       .then((response) => response.json())
//       .then(booksList => {
//           this.setState({ books: booksList });
//       });
//   }
  
//   render() {
//       return (
//           <ul>
//               {this.state.books.map((book) => (
//                   <li key={book.id}>{book.id}</li>
               
//               ))}
//           </ul>
//       )
//   }
// }