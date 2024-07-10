import {create} from 'zustand';

export const userAuthStore=create((set)=>({

    isAuth: !!localStorage.getItem('token'),
    loggedIn:(token)=>{
    localStorage.setItem('product-token',token);
    set({isAuth:true})

    },
    loggedOut:()=>{
        localStorage.removeItem('product-token');
        set({isAuth:false})
    }
}))