import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { 
    createTheme, ThemeProvider 
} from '@mui/material/styles';
import { 
    CheckCircleIcon, ExclamationCircleIcon 
} from "@heroicons/react/24/outline";
import { useStateContext } from "../../contexts/ContextProvider";
import { blueGrey, grey } from "@mui/material/colors";



export default function DialogModal({ toast }) {
    const { hideToast } = useStateContext();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        hideToast();
    };

    const theme = createTheme({
        palette: {
          primary: {
            main: '#333333',
            light: '#666666',
            contrastText: '#ffffff',
          },
        },
      });

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                
            >
                <DialogTitle>
                    { toast.type === "error" ? 
                        <div className="flex items-center justify-center text-red-500">
                            <ExclamationCircleIcon className="h-24 w-24 mt-10"/>
                            <span  className="mt-10 ml-2 text-5xl">Ops!</span>
                        </div> : null
                    }
                    { toast.type === "success" ? 
                        <div className="flex items-center justify-center text-green-500">
                            <CheckCircleIcon className="h-24 w-24 mt-10"/>
                            <span  className="mt-10 ml-2 text-5xl">Yeah!</span>
                        </div> : null
                    }
                </DialogTitle>
                <DialogContent className="m-5 ">
                    <DialogContentText id="alert-dialog-description" className="text-black flex items-center justify-center">
                        
                        <span className="font-bold text-center text-black">{ toast.message }</span>
                    </DialogContentText>
                </DialogContent>
                <div className="flex items-center justify-center mb-3">
                    <ThemeProvider theme={theme}>
                        <Button onClick={handleClose} color="primary" variant="contained">
                            OK
                        </Button>
                    </ThemeProvider>
                </div>
            </Dialog>
        </div>
    )
}