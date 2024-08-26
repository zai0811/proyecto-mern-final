import { useState } from "react";
import logo from "../assents/logo_.jpg";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/login.css';

const FormularioLogin = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const procesaLogin = async (event) => {
    event.preventDefault();

    const URL = "http://localhost:8000/usuario/login";
    const config = {
      correo, contrasena
    };
    try {
      const respuesta = await axios.post(URL, config);

      if (respuesta && respuesta.data) {
        const { token } = respuesta.data;
        if (token) {
          localStorage.setItem("token", token);
          console.log("Token guardado:", localStorage.getItem("token"));

          const decodedToken = jwtDecode(token);

          const rol = decodedToken.rol;
          if (rol === 'Rescatista') {
            navigate('/HomeRescatista');
          } else if (rol === 'Adoptante') {
            navigate('/HomeAdoptante');
          } else {
            setError("Rol de usuario desconocido.");
          }

          setError("");
          setCorreo("");
          setContrasena("");
        } else {
          setError("La respuesta del servidor no contiene un token.");
        }
      } else {
        setError("La respuesta del servidor es inválida.");
      }
    } catch (err) {
      console.error("Error en el login:", err);
      if (err.response && err.response.data && err.response.data.mensaje) {
        setError(err.response.data.mensaje);
      } else {
        setError("Error al realizar el login. Por favor, inténtelo de nuevo.");
      }
    }
  }

  return (
    <section className="gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6 d-flex">
                  <div className="card-body p-md-5 ">

                    <div className="text-center">
                      <img src={logo} style={{ width: "185px" }} alt="Logo" />
                    </div>

                    <form onSubmit={procesaLogin}>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="correo"
                          className="form-control"
                          value={correo}
                          onChange={(e) => setCorreo(e.target.value)}
                          placeholder="Correo"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="contrasena"
                          className="form-control"
                          value={contrasena}
                          onChange={(e) => setContrasena(e.target.value)}
                          placeholder="Contraseña"
                        />
                      </div>

                      {err && <div className="text-danger mb-4">{err}</div>}

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block  gradient-custom mb-3 w-100"> {/* Añade la clase w-100 */}
                          Iniciar sesión
                        </button>
                        <Link className="text-muted" to="#">¿Olvidó su contraseña?</Link>
                      </div>

                      <div className="d-flex align-items-center justify-content-left ">
                        <p className="mb-0 me-2">¿No tiene una cuenta?</p>
                        <Link to="">
                          <button type="button" className="btn btn-outline-danger">Crear CUENTA</button>
                        </Link>
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4 ">
                    <h4 className="mb-4">¡Bienvenidos a Adopt Me!</h4>
                    <p className="small mb-0 " >Estamos encantados de que estés aquí. Adopt Me es una organización sin fines de lucro dedicada a una misión muy especial: encontrar un hogar amoroso para cada animalito que lo necesita. Creemos que todos los animales merecen una vida llena de cariño y seguridad, y trabajamos incansablemente para hacer realidad este sueño.
                      Si estás buscando un nuevo amigo peludo, has llegado al lugar indicado. Aquí podrás conocer a muchos animales que están esperando la oportunidad de ser parte de una familia. ¡Gracias por unirte a nuestra causa y por considerar abrir las puertas de tu hogar a un nuevo miembro!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioLogin;