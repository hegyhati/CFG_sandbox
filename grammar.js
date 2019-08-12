class CFG_Rule{
  constructor(lhs,rhs) {
    this.lhs=lhs
    this.rhs=rhs
  }    
}

class Grammar {
  constructor(alphabet=[],non_terminals=['S'],rules=[],start='S') {
    this.alphabet = [...alphabet] 
    this.non_terminals = [...non_terminals]
    this.rules=[...rules]
    this.start=start.slice(0)
  }
  getRules(nonterminal) {
    return this.rules.filter(rule => rule.lhs == nonterminal)
  }
  isNonterminal(symbol) {return this.non_terminals.includes(symbol)}
}

class Derivation {
  constructor(grammar){
    this.grammar=grammar
    this.current=new Array(grammar.start)
  }
  replace (index, rule) {
    if(rule.lhs == this.current[index]) 
      this.current = this.current.slice(0,index).concat(rule.rhs).concat(this.current.slice(index+1))
    else console.log("Replace not possible")
  }
  hasDerived(word) {
    return (JSON.stringify(word) === JSON.stringify(this.current))
  }
  terminalPrefixLength(){
    let i=0;
    while(i < this.current.length && !this.grammar.isNonterminal(this.current[i])) i++;
    return i;
  }
}

