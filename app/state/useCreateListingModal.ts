import { create } from "zustand";

import {createModalStateHandler, IModalState} from './helpers'

const useCreateListingModal = create<IModalState>(createModalStateHandler());

export default useCreateListingModal;