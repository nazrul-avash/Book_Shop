import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Homepage from "./Homepage";
import Books from "./Books";
import ErrorPage from "./ErrorPage";
import BookDetails from "./BookDetails";

export const router = createBrowserRouter([
  {
    path:"/",
    Component: MainLayOut,
    children:[
        {
            index:true,
            element:<Homepage></Homepage>
        },
        {
            path:"/books",
            element:<Books></Books>
        },
        {
            path:"/bookDetails/:id",
            loader:({params})=>fetch('/booksData.json')
            .then((res)=>res.json())
            .then((data)=>data.find((expectedBook)=>expectedBook.bookId == params.id)),
            element:<BookDetails></BookDetails>
        }
       
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);