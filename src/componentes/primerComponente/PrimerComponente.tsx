interface PrimerComponenteProps {
  name: string;
}

const PrimerComponente = ({ name }: PrimerComponenteProps) => {
  return <div>{name} </div>;
};
export default PrimerComponente;
