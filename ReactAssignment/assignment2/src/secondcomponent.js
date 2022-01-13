import React from "react";
class secondcomponent extends React.Component
{
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render (){
        const { DataisLoaded, items } = this.state;
        return (<div>

 
            <h1>
                hello from secondcomponent
            </h1>
            <h1> Fetch data from an api in react </h1> 
            <table><tr>
                  <th>userid</th>
                  <th>id</th>
                  <th>title</th>
                </tr> 
                {
               
                items.map((item) => ( 
                <ol key = { item.id } >
                   
  <tr>
    <td>{ item.userId }</td>
    <td>{ item.id }</td>
    <td>{ item.title } </td>
  </tr>
  
  
                    {/* User_id: { item.userId }, 
                    Full_id: { item.id }, 
                    User_title: { item.title }  */}
                    </ol>
                ))
            }
            </table>
        </div>)
    }

}
export default secondcomponent;
