import create from "zustand";
import {devtools} from "zustand/middleware";

import chatbotSlice from "./slices/chatbotSlice";

export const chatbotStore = create(devtools(chatbotSlice));