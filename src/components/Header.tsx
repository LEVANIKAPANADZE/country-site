import sun from "/public/icon-sun.svg";
import moon from "/icon-moon.svg";

export default function Header() {
  return (
    <header>
      <h1>Where in the world?</h1>

      <div>
        <img src={moon} alt="Moon icon" />
        <img src={sun} alt="" />
      </div>
    </header>
  );
}
