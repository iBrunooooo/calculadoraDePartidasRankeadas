function calcularPartidasRankiadas (nome, quantVitorias, quantDerrotas) {
    switch (true) {
        case (quantVitorias - quantDerrotas) < 0:
            console.log (`Herói ${nome}, você possui mais derrotas do que vitórias.`)
            break;
        case (quantVitorias - quantDerrotas) == 0:
            console.log (`Herói ${nome}, seu número de vitórias é igual ao de derrotas. Seu saldo é 0 (zero).`)
            break;
        case (quantVitorias - quantDerrotas) <= 10:
            console.log (`Herói ${nome}, você possui ${quantVitorias - quantDerrotas} vitórias a mais do que derrotas. Seu nível é Ferro.`)
            break;
        case (quantVitorias - quantDerrotas) <= 20:
            console.log (`Herói ${nome}, você possui ${quantVitorias - quantDerrotas} vitórias a mais do que derrotas. Seu nível é Bronze.`)
            break;
        case (quantVitorias - quantDerrotas) <= 50:
            console.log (`Herói ${nome}, você possui ${quantVitorias - quantDerrotas} vitórias a mais do que derrotas. Seu nível é Prata.`)
            break;
        case (quantVitorias - quantDerrotas) <= 80:
            console.log (`Herói ${nome}, você possui ${quantVitorias - quantDerrotas} vitórias a mais do que derrotas. Seu nível é Ouro.`)
            break;
        case (quantVitorias - quantDerrotas) <= 90:
            console.log (`Herói ${nome}, você possui ${quantVitorias - quantDerrotas} vitórias a mais do que derrotas. Seu nível é Diamente.`)
            break;
        case (quantVitorias - quantDerrotas) <= 100:
            console.log (`Herói ${nome}, você possui ${quantVitorias - quantDerrotas} vitórias a mais do que derrotas. Seu nível é Lendário.`)
            break;
        default:
            console.log (`Herói ${nome}, você possui ${quantVitorias - quantDerrotas} vitórias a mais do que derrotas. Seu nível é Imortal.`)
    }
}

calcularPartidasRankiadas ('Bruno Alves', 253, 240);
