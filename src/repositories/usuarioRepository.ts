// Camada responsável por conversar com o BD
import Usuario from "../models/usuarios.js";

const usuarios: Usuario[] = [];
// usuarios do tipo "array" ou "vetor" de usuários

function getUsuarios(): Promise<Usuario[]> {
    return new Promise ((resolve, reject) => {
        return resolve(usuarios);
    });
}
// resolve = Cumpre a promessa com valor.
// reject = Rejeita a promessa com um erro.

export default getUsuarios;