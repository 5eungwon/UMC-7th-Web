import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Details from "./Details";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        
    },
    {
        path:"/details/:id",
        element:<Details/>
    }
])

const Root = ()=>{
    return <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>

}
export default Root