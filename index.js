const element = (
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://th.bing.com/th/id/OIP.gF-mqFDRBkXTmOwx778E_QHaFS?pid=ImgDet&rs=1"
        className="profile-image"
      />
      <h1 className="card-title">APJ Abdul Kalam</h1>
      <p className="card-description">
        Avul Pakir Jainulabdeen Abdul Kalam BR was an Indian aerospace scientist
        and statesman who served as the 11th president of India from 2002 to
        2007. He was born and raised in Rameswaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
