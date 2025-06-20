import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as enums from '../../utils/enums/Tarefa';

type FiltroState = {
  termo?: string;
  descricao: 'prioridade' | 'status' | 'todas';
  valor?: enums.Prioridade | enums.Status;
};

const initialState: FiltroState = {
  termo: '',
  descricao: 'todas',
};

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    },
  },
});

export const { alterarTermo, alterarFiltro } = filtroSlice.actions;

export default filtroSlice.reducer;
