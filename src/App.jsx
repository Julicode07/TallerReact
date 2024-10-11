import reactLogo from "/react.svg";
import "./index.css";
import Saludo from "./components/Saludo";
import Contenedor from "./components/Contenedor";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <main className="bg-[#13111C] h-full w-screen m-auto py-8 text-white">
        <h1 className="flex justify-center items-center gap-3 text-4xl font-bold">
          Taller Practico React{" "}
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </h1>
        <h2 className="font-bold text-2xl text-center mt-4">
          Trabajo de Laura Sofia Jerez Y Julian Andres Restrepo
        </h2>
        <div className="max-w-4xl mx-auto my-10 flex flex-col gap-3">
          <h3 className="text-2xl font-bold">
            1. Componentes UI y Funcionales
          </h3>
          <span className="flex flex-col gap-2">
            <span className="font-extrabold">Pregunta 1</span>
            <p>
              ¿Cuál es la diferencia entre un componente UI y un componente
              funcional en React?
            </p>
            <p>
              <span className="font-bold">R/ </span>
              La diferencia entre un componente UI y un componente funcional es
              que un componente UI está enfocado principalmente en cómo se ve la
              interfaz de usuario y un componente funcional se encarga de
              manejar la lógica de la aplicación, como la manipulación del
              estado, llamadas a APIs o interacción con el contexto global.
            </p>
            <span className="font-bold">Ejemplos:</span>
            <p>Componente UI:</p>
            <pre className="relative bg-[#2B2937] p-2 ">
              <img
                src={reactLogo}
                className="absolute top-2 right-2 w-6 h-6"
                alt="React logo"
              />
              <code>
                {`
  const App = () => {
    return (
      <div>
        <h1>Componente UI</h1>
      </div>
    );
  };
    `}
              </code>
            </pre>
            <span>Componente funcional:</span>
            <pre className="relative bg-[#2B2937] p-2 ">
              <img
                src={reactLogo}
                className="absolute top-2 right-2 w-6 h-6"
                alt="React logo"
              />
              <code>
                {`
  const Count = () => {
    const [count, setCount] = useState(0);
    return (
     <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    );
  };
    `}
              </code>
            </pre>
          </span>
          <span>
            Ejercicio práctico: Crea un componente funcional llamado Saludo que
            acepte un prop nombre y muestre un mensaje de saludo.
          </span>
          <Saludo language="es" name="Julian" />

          <h3 className="text-2xl font-bold mt-5">2. Props</h3>
          <span className="flex flex-col gap-2">
            <span className="font-extrabold">Pregunta 2</span>
            <p>¿Qué son las props en React y cuál es su propósito principal?</p>
            <p>
              <span className="font-bold">R/ </span>
              Las props en React permiten pasar datos de un componente padre a
              un componente hijo. Su propósito principal es hacer los
              componentes reutilizables y dinámicos, ya que permiten
              personalizar el contenido y comportamiento de un componente según
              los datos recibidos.
            </p>
          </span>
          <span>
            Ejercicio práctico: Modifica el componente Saludo para que acepte un
            prop adicional idioma y muestre el saludo en el idioma especificado.
          </span>
          <Saludo language="es" name="Julian" />
          <Saludo language="en" name="Laura" />
          <h3 className="text-2xl font-bold mt-5">3. Children Props</h3>
          <span className="flex flex-col gap-2">
            <span className="font-extrabold">Pregunta 3</span>
            <p>
              ¿Qué son los children props en React y por qué no se recomienda su
              uso excesivo?
            </p>
            <p>
              <span className="font-bold">R/ </span>
              Los children props en React son un tipo especial de prop que
              permite pasar elementos hijos entre las etiquetas de apertura y
              cierre de un componente. Se usan para componer interfaces más
              flexibles y reutilizables.
              <br></br>
              <strong>No se recomienda su uso excesivo</strong> porque puede
              hacer que el código sea difícil de entender y mantener. Si se
              abusa de `children` para pasar demasiada lógica o estructuras
              complejas, el flujo de datos se vuelve menos claro, lo que
              dificulta el rastreo y depuración del código.
            </p>
          </span>
          <span className="font-bold">Ejemplo:</span>
          <Contenedor>
            Este es el contenedor donde se usa el children
          </Contenedor>
          <h3 className="text-2xl font-bold mt-5">4. useState</h3>
          <span className="flex flex-col gap-2">
            <span className="font-extrabold">Pregunta 4</span>
            <p>
              ¿Qué es useState en React y para qué se utiliza principalmente?
            </p>
            <p>
              <span className="font-bold">R/ </span>
              Son datos que se pasan a un componente y que permiten la
              comunicación entre los componentes de una aplicación. Su propósito
              principal es permitir que los componentes reciban información para
              funcionar y definir los elementos de React que retornarán.
            </p>
          </span>
          <span>
            <strong>Ejercicio práctico:</strong> Crea un componente Contador que
            utilice useState para mantener y actualizar un contador.
          </span>
          <div>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 px-3 py-1 rounded-md border-2 border-blue-700"
            >
              Oprime
            </button>
            <p className="font-bold mt-3">Le diste click {count} veces</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
