import { useNavigate } from "react-router-dom"

const navigate = useNavigate();

export const handleHomeClick=()=>{
    navigate("/",{replace: true})
  }
