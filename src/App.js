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
    let combinedA = ''
    let vowels = ['a','e','i','o','u'] // look up how to use to find index more efficently
    let runEverything = function(array) {
        for (let i = 0; i < array.length; i++) {
                //var locationFirstVowel = array.filter(value => value.includes(vowels))
                if (array[i].indexOf('a') === 0 || array[i].indexOf('e') === 0 || array[i].indexOf('i') === 0 || array[i].indexOf('o') === 0 || array[i].indexOf('u') === 0) {
                    let letters = array[i].split("")
                    combinedA = letters.join("") + "way"
                     return combinedA

                }

                else if (array[i].indexOf('a') !== 0 || array[i].indexOf('e') !== 0 || array[i].indexOf('i') !== 0 || array[i].indexOf('o') !== 0 || array[i].indexOf('u') !== 0) {
                    let changedA = array[i].substring(0,array[i].indexOf('a'))
                    let restOfWord = array[i].substring(array[i].indexOf('a'))
                    //if not a then find other vowels
                    console.log(changedA)
                    console.log(restOfWord)
                    combinedA = restOfWord + changedA + 'ay'
                    console.log(combinedA)
                    return combinedA
                }
        }
    }
    runEverything(transNew)
    this.setState({phraseTranslated: combinedA})

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
