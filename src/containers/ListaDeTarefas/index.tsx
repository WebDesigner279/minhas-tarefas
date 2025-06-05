import { useSelector } from 'react-redux';
import Tarefa from '../../components/Tarefa';
import { Container, Resultado } from './styles';
import { RootState } from '../../store';

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootState) => state.tarefas);
  const { termo, criterio, valor } = useSelector(
    (state: RootState) => state.filtro
  );

  const filtraTarefas = () => {
    let tarefasFiltradas = [...itens];

    // Filtro por termo
    if (termo && termo.trim() !== '') {
      tarefasFiltradas = tarefasFiltradas.filter((item) =>
        item.titulo.toLowerCase().includes(termo.toLowerCase())
      );
    }

    // Filtro por prioridade ou status
    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      );
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      );
    }

    return tarefasFiltradas;
  };

  const exibeResultadoFiltragem = (quantidade: number) => {
    const complemento =
      termo && termo.trim() !== '' ? ` e título contendo "${termo}"` : '';

    if (criterio === 'todas') {
      return `${quantidade} tarefa${quantidade !== 1 ? 's' : ''} encontrada${
        quantidade !== 1 ? 's' : ''
      } (todas${complemento})`;
    } else {
      return `${quantidade} tarefa${quantidade !== 1 ? 's' : ''} encontrada${
        quantidade !== 1 ? 's' : ''
      } (${criterio} = "${valor}"${complemento})`;
    }
  };

  const tarefas = filtraTarefas();
  const mensagem = exibeResultadoFiltragem(tarefas.length);

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListaDeTarefas;
