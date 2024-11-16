import './Avatar.css';

const Avatar = (props) => {
  // Verifica se props.nome está definido e não é uma string vazia
  if (!props.nome) {
    return <div className="avatar_root">NA</div>; // Fallback caso o nome não esteja disponível
  }

  // Divide o nome, tratando casos em que pode haver apenas um nome
  const nomeParts = props.nome.split(' ');

  // Caso o nome tenha apenas um sobrenome, usamos apenas a primeira inicial
  const primeiroNome = nomeParts[0];
  const segundoNome = nomeParts[1]; // Pode ser undefined se não houver segundo nome

  // Se houver um segundo nome, usamos as iniciais de ambos, senão usamos apenas a inicial do primeiro nome
  const iniciais = segundoNome ? primeiroNome[0].toUpperCase() + segundoNome[0].toUpperCase() : primeiroNome[0].toUpperCase();

  return (
    <div className="avatar_root">
      {iniciais}
    </div>
  );
};

export default Avatar;

