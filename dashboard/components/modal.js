import { useRouter } from 'next/router'

const Modal = ({ closeModal, children }) => {
	const close = (e) => {
		e.persist()
		if(e.target.id === 'modal-overlay') {
			closeModal()
		}
	}

	return (
		<div id="modal-overlay" className="absolute inset-0 z-20" onClick={(e) => close(e)} style={{
			backgroundColor: `rgba(0,0,0,0.3)`
		}}>
			{ children }
		</div>
	)
}

export default Modal