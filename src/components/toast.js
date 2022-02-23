import { toast } from 'react-toastify';


export const notify = (text , type) => {
    if(type === 'suceess') {
        toast.success(text,{theme:'colored'})
    } else {
        toast.error(text, {theme:'colored'})
    }
}
// other futer set in notify for more information go to npm notify
// position: "top-right",
// autoClose: 5000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,

