const intialState = {
  token: "",
  isAunticate: false,
  error: null,
};

const loginReducer = (state = intialState,action)=>{
    switch (action.type) {
        case "VALID_USER":
            return{
                ...state,
                token:action.payload,
                isAunticate:true,
                error:""
            }
        case "FAIL_VALID":
            return{
                ...state,
                token:"",
                isAunticate:false,
                error:action.payload
            }
        case "LOGOUT":
            return{
                ...state,
                token:'',
                isAunticate:false,
                error:""
            }

            
            
    
        default:
            return state;
    }
};
export default loginReducer