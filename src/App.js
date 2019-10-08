import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: '',
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The translate function is where you will put your logic to convert the sentence entered by the user to pig location.  What is currently in the function will only directly copy what the user has entered.

  translate = (e) => {
    e.preventDefault()
    // turn the input string into an array
    let translated = this.state.phrase

    let transNew = translated.split(" ")

    let runEverything = function(array) {
        for (let i = 0; i < array.length; i++) {
        //    console.log(array[i] + "way")
                if (array[i].indexOf('a') === 0 || array[i].indexOf('e') === 0 || array[i].indexOf('i') === 0 || array[i].indexOf('o') === 0 || array[i].indexOf('u') === 0) {
                    let letters = array[i].split("")
                    var lettersplit = letters.join("") + "way"
                    console.log(lettersplit)
                     return lettersplit
                
                }
                else{
                    console.log("error")
                }

        }
    }
        // for (let i = 0; i < array.length; i ++) {
            // if (array[i].charAt(0) === 'a' && array[i].charAt(0) === 'e' && array[i].charAt(0) === 'i' && array[i].charAt(0) === 'o' && array[i].charAt(0) === 'u') {
        //         let letters = array.split("")
        //         var lettersplit = letters.join(" ") + "way"
        //         console.log(lettersplit)
        //          return lettersplit
        //     }
        // }
    runEverything(transNew)
// translated = lettersplit
    this.setState({phraseTranslated: translated})
}

  handleChange = (e) => {
    this.setState({phrase: e.target.value})
  }

  render() {
    return (

      <div className="wrapper">
        <header className="box header">
          <div id="pigImage">
            <img src='https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400' alt="pig with butcher cut names in pig latin" id="butcherPig"></img>
          </div>
        </header>
        <sidebar className="box sidebar">
          <div>
            <form className="info" onSubmit={this.translate}>
              <label htmlFor="input-phrase">Translate this: </label>
              <input name="input-phrase" onChange={this.handleChange}></input>
              <input className="button" type="submit" onClick={this.translate} value="Submit" />
            </form>
          </div>
        </sidebar>
        <main>
          <div className="text-center box content">
            <p>{this.state.phraseTranslated}</p>
          </div>
        </main>
        <footer className="box footer">
          <div className="text-center">
            <p>Coded by * * *</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
