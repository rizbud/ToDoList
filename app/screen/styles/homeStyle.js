import { connect } from '../../themes/OsmiProvider'

export default connect({
    container: 'flex bg-white-100',
    modal: 'm-0 justify-end',
    modalContainer: 'bg-white rounded-t-lg px-4 py-2',
    close: 'self-end mr-2 mb-1',
    titleModal: 'text-3xl font-bold mb-1',
    date: 'pb-1',
    desc: 'border-t border-dark-100 pt-2',
    delete: 'self-end pr-1',
    header: 'px-4 py-5 bg-blue-600 full z-0 rounded-br-full',
    headerTitle: 'text-white font-bold text-3xl',
    addBtn: 'w-60 h-60 flex items-center justify-center pb-1 rounded-full bg-blue-600 absolute bottom-15 right-15',
    left: 'flex',
    card: 'flex row mt-1 mb-2 mx-2 py-2 px-4 bg-white rounded-lg shadow-md'
})