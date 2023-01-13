import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './projects.css';

function Project() {
    return (
        <div className='content-wrapper'>
            <h1>List Projects</h1>
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
                        <th  align="center">NO</th>
                        <th>PROJECT NAME</th>
                        <th>DIREKTORI</th>
                        <th>COUNT EMPLOYEE</th>
                        <th align='center'>Action</th>
                    </thead>
                    <tr>
                        <td align="center">1</td>
                        <td>SATPAM BRI</td>
                        <td>satpam-bri</td>
                        <td>100</td>
                        <td><td className='action'><button className='btn-reset'><Link to='/dashboard/pegawai/add'>Ubah</Link></button>
                        <button className='btn-lihat'><Link to='/dashboard/projectdipilih'>Lihat</Link></button>
                        <button className='btn-hapus'><Link to='/dashboard/pegawai/add'>Hapus</Link></button></td></td>
                    </tr>
                    <tr>
                    <td align="center">2</td>
                    <td>PROJECT NAME5</td>
                        <td>project-name5</td>
                        <td>80</td>
                        <td><td className='action'><button className='btn-reset'><Link to='/dashboard/pegawai/add'>Ubah</Link></button>
                        <button className='btn-lihat'><Link to='/dashboard/projectdipilih'>Lihat</Link></button>
                        <button className='btn-hapus'><Link to='/dashboard/pegawai/add'>Hapus</Link></button></td></td>
                    </tr>
                    <tr>
                    <td align="center">3</td>
                    <td>PROJECT NAME4</td>
                        <td>project-name4</td>
                        <td>100</td>
                        <td><td className='action'><button className='btn-reset'><Link to='/dashboard/pegawai/add'>Ubah</Link></button>
                        <button className='btn-lihat'><Link to='/dashboard/projectdipilih'>Lihat</Link></button>
                        <button className='btn-hapus'><Link to='/dashboard/pegawai/add'>Hapus</Link></button></td></td>
                    </tr>
                    <tr>
                    <td align="center">4</td>
                    <td>PROJECT NAME3</td>
                        <td>project-name3</td>
                        <td>100</td>
                        <td><td className='action'><button className='btn-reset'><Link to='/dashboard/pegawai/add'>Ubah</Link></button>
                        <button className='btn-lihat'><Link to='/dashboard/projectdipilih'>Lihat</Link></button>
                        <button className='btn-hapus'><Link to='/dashboard/pegawai/add'>Hapus</Link></button></td></td>
                    </tr>
                    <tr>
                    <td align="center">5</td>
                    <td>PROJECT NAME2</td>
                        <td>project-name2</td>
                        <td>100</td>
                        <td><td className='action'><button className='btn-reset'><Link to='/dashboard/pegawai/add'>Ubah</Link></button>
                        <button className='btn-lihat'><Link to='/dashboard/projectdipilih'>Lihat</Link></button>
                        <button className='btn-hapus'><Link to='/dashboard/pegawai/add'>Hapus</Link></button></td></td>
                    </tr>

                    <tr  class="pagination">
                    <td></td>
                    <td><a>Total Pegawai : 31</a></td>
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

export default Project