import React from "react";
import style from "./Historia.module.css";

const Historia = () => {
  return (
    <div className={style.container}>
      <h2 className={style.titulos}>Origenes y Desarrollo</h2>
      <p className={style.parrafos}>
        El rap llegó a Argentina en los años 80, influenciado por el movimiento
        hip-hop que surgía en Estados Unidos. Los primeros intentos de rap
        argentino eran rudimentarios y se limitaban a pequeños círculos urbanos.
        A pesar de ser un fenómeno inicial pequeño, estos primeros raperos
        sentaron las bases para lo que vendría después.
        <br />
        Durante los 90, el rap argentino comenzó a ganar terreno, especialmente
        en barrios urbanos de Buenos Aires. El movimiento encontró un hogar en
        fiestas clandestinas y eventos de breakdance, donde los jóvenes podían
        expresarse libremente. Bandas como Illya Kuryaki and the Valderramas
        mezclaron el funk con rap, y su popularidad ayudó a que el género ganara
        más aceptación.
      </p>
      <h2 className={style.titulos}>Explosión y Consolidación</h2>
      <p className={style.parrafos}>
        El nuevo milenio trajo una explosión del rap en Argentina. Eventos como
        las batallas de freestyle se volvieron extremadamente populares. El
        programa de televisión El Quinto Escalón se convirtió en un semillero de
        nuevos talentos. Batallas de freestyle en plazas públicas, especialmente
        en el parque Rivadavia en Buenos Aires, fueron cruciales para el
        crecimiento del movimiento. Estas batallas no solo ofrecían un espacio
        para la competencia, sino que también servían como una forma de
        comunidad y pertenencia para muchos jóvenes.
      </p>
      <h2 className={style.titulos}>Influencias y Estilo</h2>
      <p className={style.parrafos}>
        El rap argentino ha sido influenciado por una variedad de géneros y
        estilos, incluyendo el rock, el tango, y la música folclórica. Esta
        mezcla única ha permitido que el rap en Argentina desarrolle un sonido
        propio, distinto del rap en otras partes del mundo. Además, el uso del
        lenguaje y las jergas locales en las letras ha ayudado a que el rap
        resuene profundamente con la audiencia argentina.
      </p>
      <h2 className={style.titulos}>Impacto Cultural y Social</h2>
      <p className={style.parrafos}>
        El rap en Argentina no es solo una forma de entretenimiento; también es
        una herramienta poderosa para la crítica social y la expresión política.
        Las letras a menudo abordan temas como la desigualdad, la violencia, y
        la injusticia social. En una sociedad marcada por la turbulencia
        política y económica, el rap ofrece una voz a quienes se sienten
        marginados.
        <br />
        El éxito de raperos como Wos y Trueno ha llevado el rap argentino a un
        escenario global, mostrando al mundo la riqueza y diversidad de la
        cultura urbana argentina.
        <br />
        Además, el rap ha jugado un papel crucial en la creación de una
        identidad juvenil contemporánea, proporcionando una salida creativa para
        muchos jóvenes que buscan expresar sus experiencias y emociones.
      </p>
    </div>
  );
};

export default Historia;
