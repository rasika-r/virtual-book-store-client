import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import Progress from "./progress";
import { identifier } from "@babel/types";
import ProgressCart from "./progressCart";

const ProgressList = () => {
    const [data,setdata] = useState([])
    const [pagecount,setcount] = useState(0)
    const [ctrpage,setctr] = useState(0)
    const [value,setvalue] = useState([])
    useEffect(() => {
        console.log("entered");
        const userId = localStorage.getItem("id")
        axios.get(`http://localhost:8000/transactions/user_transactions/${userId}`).then(result => {
            console.log("result");
            const help = [...data];
            const books = [];
            result.data.res.bought && result.data.res.bought.forEach((id) => {
                help.push(id.book_id);
                books.push(id.book_id);
            });
            result.data.res.rented && result.data.res.rented.forEach((id) => {
                help.push(id.book_id);
                books.push(id.book_id);
            });
            setdata(help);
            // Fetch book details and progress for each book sequentially
            Promise.all(books.map(id =>
                axios.get(`http://localhost:8000/books/${id}`).then(req => {
                    const bookName = req.data.res.book_name;
                    const pages = req.data.res.pages;
                    return axios.post('http://localhost:8000/progress/', {
                        user_id: userId,
                        book_id: id
                    }).then(res => {
                        const currentPage = res.data.message;
                        return [bookName, pages, currentPage];
                    });
                }).catch(error => console.log(error))
            )).then(bookDetails => {
                setvalue(bookDetails);
            }).catch(error => console.log(error));
        });
    }, []);
    
    console.log(value);
    return ( 
        <div>
           {value ? value.map((id)=>{
            console.log(id);
            console.log(Math.round((id[2]/id[1])*100),"%value");
            return (<ProgressCart name={id[0]} value={Math.round((id[2]/id[1])*100)}></ProgressCart>)
           }): ''}
        </div>
     );
}
 
export default ProgressList;