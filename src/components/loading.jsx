import '../style/css/loading.css';

export default function Loading() {
  return (
    <div className="rotate linear infinite loading">
      <img
        src={
          'https://raw.githubusercontent.com/defsax/shoppies-challenge/master/public/resources/imgs/loading.png'
        }
        alt={'Loading...'}
      ></img>
    </div>
  );
}
