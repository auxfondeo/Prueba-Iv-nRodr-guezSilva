import Loader from './Loader'; // Importa el componente del spinner

const Overlay = () => {
  return (
    <div className="overlay">
      <Loader />
    </div>
  );
}

export default Overlay;