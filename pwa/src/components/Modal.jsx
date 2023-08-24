import {Modal, Box} from "@mui/material"
export default function CustomModal({open, onClose, variant }) {
    function handleSubmit() {

    }
  return (
    <Modal open={open} onClose={onClose}>
                <Box className="modal">
                    <header>
                        <span
                            className="material-symbols-outlined"
                            onClick={onClose}>
                            close
                        </span>
                    </header>
                    <form method="dialog">
                        <input type="text" placeholder={`Enter ${variant} name`}/>
                        <select name="subject" id="subject">
                            <option value="subject1">chemistry</option>
                        </select>
                        <select name="subject" id="subject">
                            <option value="subject1">chemistry</option>
                        </select>
                        <button className="btn btn--block" onClick={handleSubmit}>{`Add ${variant}`}</button>
                    </form>
                </Box>
            </Modal>
  )
}
