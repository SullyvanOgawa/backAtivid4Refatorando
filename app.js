
import express from 'express';
import cors from 'cors';
import routerProject from './routes/routerProject.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/project', routerProject);

export default app;

/*                                                  Informações Gerais

    - Melhorias apresentadas pela banca da última apresentação.
    - Níveis/controle de Acesso: Admin, usuário comum. Finalidade de controle de acesso sobre quem pode fazer o que dentro do sistema, além das funções. 
    - Log de auditoria: Para registrar todas as ações realizadas no sistema, como criação, atualização e exclusão de projetos, para fins de rastreabilidade e segurança.
    - Implementar as funções fundamentais
    - Relatórios: clientes, produtos, cruzamento de dados, faturamento, dashboard com indicadores de desempenho com gráficos e tabelas.
    ============================================================================================================================================
    ============================================================================================================================================

                                                    Primeira atividade

    - Módulo de Revisão do que já foi implementado no sistema, com a entrega da ERS organizada, vídeo demonstrativo das alterações implementadas, planejamento dos níveis de acesso: administrador, usuário comum e usuário convidado. Permissões/ Níveis de acesso: Incluir todas as funções do sistema, onde cada usuário terá o acesso conforme o seu nível de permissão.

        1 - Entregar a ERS organizada, fazer um video que demonstre as alterações implementadas, planejamento dos níveis de acesso: administrador, usuário comum e usuário convidado. Permissões/ Níveis de acesso: Incluir todas as funções do sistema, onde cada usuário terá o acesso conforme o seu nível de permissão.

        2 - Prévia do Cronograma, inserir as novas tarefas no trello, incluir as funções fundamentais, de saída e a autenticação. Distribuir isso tudo nas datas pré-estabelecidas no documento, datas finais de cada atividade. As dos primeiro módulo devem constar as funções básicas. 

        Dica importante: 
            1- distribuir as funções fundamentais nas dastas definidas.
            2- funções de saída colocar nas datas finais.
            3- atualizar o trello.
            4- apartir da atividade 2 será disponibilizado a week, onde será inserido os prints do trello, daily meeting, e o print de reuniões que sernao realizadas.




*/