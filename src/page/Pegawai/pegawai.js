import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './pegawai.css';
import avatarImg from '../../assets/img/image 1.png';

function Pegawai() {
    return (
        <div className='content-wrapper'>
            <h1>Managemen Akun Pegawai</h1>
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
                    <thead align="center">
                        <th>No</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Current Project</th>
                        <th>Action</th>
                    </thead>
                    <tr>
                        <td align="center">1</td>
                        <td colspan="1" align="center"> <img src={avatarImg} alt="avatarimg" width="15%"/></td>
                        <td>Talitha Amalia
                        5684236583
                        </td>
                        <td>08XXXXXXXXXX</td>
                        <td>Nama Project(?)</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                    <td align="center">2</td>
                        <td colspan="1" align="center"> <img src={avatarImg} alt="avatarimg" width="15%"/></td>
                        <td>Nurul Khairunnisa 5684236580
                        </td>
                        <td>08XXXXXXXXXX</td>
                        <td>Nama Project(?)</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                    <td align="center">3</td>
                        <td colspan="1" align="center"> <img src={avatarImg} alt="avatarimg" width="15%"/></td>
                        <td>Joko Arwanto
                        5684236575
                        </td>
                        <td>08XXXXXXXXXX</td>
                        <td>Nama Project(?)</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                    <td align="center">4</td>
                        <td colspan="1" align="center"> <img src={avatarImg} alt="avatarimg" width="15%"/></td>
                        <td>Lia Setiawati
                        5684236577
                        </td>
                        <td>08XXXXXXXXXX</td>
                        <td>Nama Project(?)</td>
                        <td>66666666</td>
                    </tr>
                    <tr>
                    <td align="center">5</td>
                        <td colspan="1" align="center"> <img src={avatarImg} alt="avatarimg" width="15%"/></td>
                        <td>Zahra Nur Azizah
                        5684236590
                        </td>
                        <td>08XXXXXXXXXX</td>
                        <td>Nama Project(?)</td>
                        <td>66666666</td>
                    </tr>

                    <tr  class="pagination">
                    <td></td>
                    <td><a>Total Pegawai : 1364</a></td>
                    <td></td>
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

export default Pegawai