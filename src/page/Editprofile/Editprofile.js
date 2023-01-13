import React from "react";
import { Link } from "react-router-dom";
import './Editprofile.css';
import SelectofImg from '../../assets/img/Select.png';
import uploadImg from '../../assets/img/File upload.png';
import avatarImg from '../../assets/img/image 1.png';
class Editprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: false,
            jenis_kelamin: false

        }

        this.onChangeform = this.onChangeform.bind(this);
    }


    onChangeform(e) {
        const target = e.target;
        const name = target.name;
        const value = target.checked;
        console.log(name + ' : ' + value);
        this.setState({ [name]: value });

    }
    render() {
        return (
            <div className="editprofile-wrapper">
                <h1>MY PROFILE</h1>

                <form>
                    <div className="form-wrapper">
                        <div className="input">
                            <label><h2>NAMA LENGKAP</h2> <input type='text' name="namalengkap" /></label>
                            <label><h2>USERNAME</h2> <input type='text' name="username" /></label>
                            <label><h2>PASSWORD</h2> <input type='password' name="password" /></label>
                            <label><h2>KONFIRMASI PASSWORD</h2> <input type='password' name="password1" /></label>
                            <label>
                                <h2>ROLE</h2>
                                <div className="checkmark-info">
                                    <div className={this.state.role ? 'checkmark active' : 'checkmark'}>
                                        <img src={SelectofImg} alt='role' />
                                    </div>
                                    <input type='checkbox' name="role" checked={this.state.role} onChange={this.onChangeform} alt="role" />ADMIN</div></label>
                            <label>
                                <h2>JENIS KELAMIN</h2>
                                <div className="checkmark-info">
                                    <div className={this.state.jenis_kelamin ? 'checkmark active' : 'checkmark'}>
                                        <img src={SelectofImg} alt="jenis-kelamin" />

                                    </div>
                                    <input type='checkbox' checked={this.state.jenis_kelamin} onChange={this.onChangeform} name="jenis_kelamin" />PEREMPUAN</div>
                            </label>
                        </div>
                        <div className="file-input">
                            <div className="file-upload">
                                <img src={avatarImg} alt="avatarimg" />
                                <h2>gambar-profil.jpeg</h2>
                                <div className="file-upload-logo"><img src={uploadImg} alt="icon-upload" />Pilh File</div>

                            </div>

                        </div>

                    </div>


                    <div className="submit"><button type="submit">Simpan</button><Link to='/dashboard'>Batal</Link></div>
                </form>

            </div>

        );
    }
}
export default Editprofile;