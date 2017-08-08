import React from 'react';

class AjouterRecette extends React.Component {

  creerRecette = (event) => {
    event.preventDefault();
    const recette = {
      nom: this.nom.value,
      image: this.image.value,
      ingredients: this.ingredients.value,
      instructions: this.instructions.value
    };
    this.props.ajouterRecette(recette);
    this.recetteForm.reset();
   }

  render() {
    return(
      <div className="card">
        <form className="admin-form ajouter-recette" ref={input => this.recetteForm = input} onSubmit={e => this.creerRecette(e)}>
          <input type="text" placeholder="Nom de la recette" ref={input => this.nom = input}/>
          <input type="text" placeholder="Nom de la recette" ref={input => this.image = input} placeholder="Adresse de l'image"/>
          <textarea name="name" rows="8" cols="80" ref={input => this.ingredients = input} placeholder="Ingrédients"></textarea>
          <textarea name="name" rows="8" cols="80" ref={input => this.instructions = input} placeholder="Instructions"></textarea>
          <button type="submit" name="button">+ Ajouter une recette</button>
        </form>
      </div>
    )
  }

  static propTypes = {
    ajouterRecette: React.PropTypes.func.isRequired
  };
}

export default AjouterRecette;
