import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './mutasi.css';

function Mutasi() {
    return (
        <div className='content-wrapper'>
            <h1>Project Mutation History - Talitha</h1>
            <div className='table-section'>
                <div className='header'>
                    <Link to='/dashboard/pegawai/add'>Tambah</Link>
                    

                    <label>
                        Search :
                        <input type="text" />
                    </label>
                </div>
            </div>

                <table>
                    <thead>
                        <th align="center">No</th>
                        <th>PROJECT NAME</th>
                        <th>MUTATION</th>
                        <th>STATUS</th>
                        <th>Action</th>
                    </thead>
                    <tr>
                        <td align="center">1</td>
                        <td> Project Name5</td>
                        <td>21/09/2021</td>
                        <td>Aktif</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                    <td align="center">2</td>
                        <td> Project Name4</td>
                        <td>21/08/2021</td>
                        <td>Tidak Aktif</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                    <td align="center">3</td>
                        <td> Project Name3</td>
                        <td>21/07/2021</td>
                        <td>Tidak Aktif</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                    <td align="center">4</td>
                        <td> Project Name2</td>
                        <td>21/06/2021</td>
                        <td>Tidak Aktif</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                    <td align="center">5</td>
                        <td> Project Name1</td>
                        <td>21/05/2021</td>
                        <td>Tidak Aktif</td>
                        <td>66666666</td>
                    </tr>

                    <tr  class="pagination">
                    <td></td>
                    <td><a>Total Project : 1364</a></td>
                    <td></td>
                    <td><a>Row per page : 5</a></td>
                    <td>
                        <li><a href="#">Previous</a></li>
                        <li><a href="#" class="active">1</a></li>
                        <li><a href="#">Next</a></li></td>
                    </tr>
                <tfoot>
                    <div></div>
                </tfoot>

                </table>

        </div>
    )
}

export default Mutasi