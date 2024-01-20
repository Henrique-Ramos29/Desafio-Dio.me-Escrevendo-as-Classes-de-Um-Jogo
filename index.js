class Heroi {
    constructor(nome, idade, guerreiros) {
      this.nome = nome;
      this.idade = idade;
      this.guerreiros = guerreiros;
    }
  
    atacar() {
      let ataque;
  
      switch (this.guerreiros) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      console.log(`O ${this.guerreiros} atacou usando ${ataque}`);
    }
  }
  
  const heroiMago = new Heroi('Herói 1', 25, 'mago');
  const heroiGuerreiro = new Heroi('Herói 2', 30, 'guerreiro');
  const heroiMonge = new Heroi('Herói 3', 28, 'monge');
  const heroiNinja = new Heroi('Herói 4', 22, 'ninja');
  
  heroiMago.atacar(); // Saída: O mago atacou usando magia
  heroiGuerreiro.atacar(); // Saída: O guerreiro atacou usando espada
  heroiMonge.atacar(); // Saída: O monge atacou usando artes marciais
  heroiNinja.atacar(); // Saída: O ninja atacou usando shuriken