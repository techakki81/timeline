import './App.css';

function App() {
  return (
    <section className  ="timeline">

   <div className="baseLine"></div>

    <div className="box box-top">
        <div className="date">
            <p>20</p>
            <p>DEC</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>


    <div className="box box-bottom">
        <div className="date">
            <p>11</p>
            <p>AUG</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>


    <div className="box">
        <div className="date">
            <p>21</p>
            <p>DEC</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>

    <div className="box box-bottom">
        <div className="date">
            <p>11</p>
            <p>AUG</p>
        </div>
        <div className="box-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        </div>
    </div>
</section>
  );
}

export default App;
