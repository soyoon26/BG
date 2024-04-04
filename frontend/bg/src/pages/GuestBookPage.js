import { useCallback } from "react";
import { Navigate, createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Read from "../components/GuestBook/Read"

const GuestBookPage () => {
    const moveToList = useCallback(()=>{
        Navigate({pathname:`/`})
    })
}