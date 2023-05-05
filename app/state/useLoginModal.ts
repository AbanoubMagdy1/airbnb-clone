import { create } from "zustand";

import {createModalStateHandler, IModalState} from './helpers'

const useLoginrModal = create<IModalState>(createModalStateHandler());

export default useLoginrModal;