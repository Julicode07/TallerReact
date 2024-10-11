const Saludo = ({ language, name }) => {
  if (language === "es") {
    return <h1 className="text-4xl font-bold">Hola {name}, bienvenido</h1>;
  } else if (language === "en") {
    return <h1 className="text-4xl font-bold">Hello {name}, welcome</h1>;
  }
};

export default Saludo;
