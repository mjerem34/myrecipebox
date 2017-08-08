import React from 'react';
import AjouterRecette from './AjouterRecette';

class Admin extends React.Component {

  traiterChangement = (event, key) => {
    const recette = this.props.recettes[key];
    const majRecette = {
      ...recette,
      [event.target.name]: event.target.value
    };
    this.props.majRecette(key, majRecette);
   }

   traiterSuppression = (event, key) => {
      this.props.supprRecette(key);
    }

  renderAdmin = key => {
    const recette = this.props.recettes[key];
    return(
      <div className="card" key={key}>
        <form className="admin-form" ref={input => this.recetteForm = input} onSubmit={e => this.traiterSuppression(key)}>
          <input onChange={e => this.traiterChangement(e, key)} value={recette.nom} type="text" placeholder="Nom de la recette" ref={input => this.nom = input} name="nom"/>
          <input onChange={e => this.traiterChangement(e, key)} value={recette.image} type="text" placeholder="Adresse de l'image" ref={input => this.image = input} name="image"/>
          <textarea onChange={e => this.traiterChangement(e, key)} value={recette.ingredients} name="ingredients" rows="8" cols="80" ref={input => this.ingredients = input} placeholder="Ingrédients"></textarea>
          <textarea onChange={e => this.traiterChangement(e, key)} value={recette.instructions} name="instructions" rows="8" cols="80" ref={input => this.instructions = input} placeholder="Instructions"></textarea>
          <button type="submit" name="button">Supprimer la recette</button>
        </form>
      </div>
    )
  }

  render() {
    const adminCards = Object
    .keys(this.props.recettes)
    .map(this.renderAdmin);
    return(
      <div className="cards">
        <AjouterRecette ajouterRecette={this.props.ajouterRecette}/>
        {adminCards}
        <footer>
          <button type="button" name="button" onClick={this.props.chargerExemple}>Charger</button>
        </footer>
      </div>
    )
  }
  static propTypes = {
    recettes: React.PropTypes.object.isRequired,
    chargerExemple: React.PropTypes.func.isRequired,
    ajouterRecette: React.PropTypes.func.isRequired,
    majRecette: React.PropTypes.func.isRequired,
    supprRecette: React.PropTypes.func.isRequired
  };
}


export default Admin;
