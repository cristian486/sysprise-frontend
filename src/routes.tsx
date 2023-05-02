import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaDefault from './components/PaginaDefault';
import Login from './pages/Login';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import LoadSpinner from './components/LoadSpinner';
import Venda from './pages/Venda';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import Suporte from './pages/Suporte';
import PrivateRoutes from './components/PrivateRoute';
import Unidade from './pages/Unidade';
import Categoria from './pages/Categoria';
import Cidade from './pages/Cidade';
import Estado from './pages/Estado';
import Compra from './pages/Compra';
import Produto from './pages/Produto';
import Funcionario from './pages/Funcionario';
import Tipo from './pages/Tipo';
import Usuario from './pages/Usuario';
import PessoaFisica from './pages/PessoaFisica';
import PessoaJuridica from './pages/PessoaJuridica';

export default function Rotas() {

    return (
        <RecoilRoot>
            <Suspense fallback={<LoadSpinner />}>
                <Router>
                    <Routes>
                        <Route path='/login' element={<Login />} />

                        <Route element={<PrivateRoutes />}>
                            <Route path='/' element={<PaginaDefault />}>
                                <Route index element={<Home />} />
                                <Route path='/categoria' element={<Categoria />} />
                                <Route path='/cidade' element={<Cidade />} />
                                <Route path='/compra' element={<Compra />} />
                                <Route path='/estado' element={<Estado />} />
                                <Route path='/funcionario' element={<Funcionario />} />
                                <Route path='/pessoafisica' element={<PessoaFisica />} />
                                <Route path='/pessoajuridica' element={<PessoaJuridica />} />
                                <Route path='/produto' element={<Produto />} />
                                <Route path='/unidade' element={<Unidade />} />
                                <Route path='/usuario' element={<Usuario />} />
                                <Route path='/tipo' element={<Tipo />} />
                                <Route path='/venda' element={<Venda />} />
                                <Route path='/suporte' element={<Suporte />} />
                                <Route path='*' element={<NotFound />} />
                            </Route>
                        </Route>
                    </Routes>
                </Router>
            </Suspense>
        </RecoilRoot>
    );
}