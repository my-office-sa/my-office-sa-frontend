import "./Avatar.css";

const Avatar = (props) => {
  if (!props.nome) {
    return <div className="avatar_root">NA</div>;
  }

  const nomeParts = props.nome.split(" ");

  const primeiroNome = nomeParts[0];
  const segundoNome = nomeParts[1];

  const iniciais = segundoNome
    ? primeiroNome[0].toUpperCase() + segundoNome[0].toUpperCase()
    : primeiroNome[0].toUpperCase();

  return (
    <div className={props.perfil ? "avatar_perfil" : "avatar_root"}>
      {props.imagem ? (
        <img src={props.imagem} width="100%" style={{ borderRadius: "50%" }} />
      ) : (
        iniciais
      )}
    </div>
  );
};

export default Avatar;
