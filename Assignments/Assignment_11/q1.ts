// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.
// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.


type PaymentState = | {status : "pending" , createdAt : Date} 
                    | {status : "sucess" , transactionId : string , amount : number} 
                    | {status : "failed" , error : string }

function handlePayment(state : PaymentState){
    switch (state.status){
        case "pending" :
            return "Payment is pending ..."
            break
        case "sucess" : 
            return "Payment is successfully Done !"
            break
        case "failed" :
            return "Payment is failed....."
        default :
              const never_exits : never = state
              return never_exits
    }

}


interface Product {
  id: string;
  name: string;
  price: number;
}


type ApiResponse<T> = | { success: true, data: T }
                      | { success: false, error: string }


const product1: ApiResponse<Product> = {
  success: true,
  data: {
    id: "p1",
    name: "Laptop",
    price: 1200,
  },
}

function handleApiResponse<T>(response: ApiResponse<T>): T | string {
  if (response.success) {
    return response.data;
  }
  else {
    return response.error
  }
}

handleApiResponse(product1)