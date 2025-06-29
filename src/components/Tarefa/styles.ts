import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

import * as enums from '../../utils/enums/Tarefa';
import { Botao } from '../../styles';

type TagProps = {
  prioridade?: enums.Prioridade;
  status?: enums.Status;
  parametro: 'status' | 'prioridade';
};

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1290999436.
    if (props.prioridade === enums.Prioridade.URGENTE)
      return variaveis.vermelho;
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2;
  } else {
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1075433466.
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo;
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde;
  }

  return '#ccc';
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-botton: 16px;
  }
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`;
