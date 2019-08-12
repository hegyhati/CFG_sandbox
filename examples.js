function AlgebraicExpersionGrammar(){
  return new Grammar (
            ['id','+','-','*','/','(',')'],
            ['S','E','T'],
            [
              {'lhs':'S','rhs':['S','+','E']} , 
              {'lhs':'S','rhs':['S','-','E']} , 
              {'lhs':'S','rhs':['E']},
              {'lhs':'E','rhs':['E','*','T']} , 
              {'lhs':'E','rhs':['E','/','T']} , 
              {'lhs':'E','rhs':['T']},
              {'lhs':'T','rhs':['(','S',')']} , 
              {'lhs':'T','rhs':['id']} 
            ],
            'S'
            )
}

function AlgebraicExpression1(){
  return ['id','*','(','id','+','id',')']
}
