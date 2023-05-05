import { create } from "zustand";
import {createModalStateHandler, IModalState} from './helpers'

const useRegisterModal = create<IModalState>(createModalStateHandler());

export default useRegisterModal;