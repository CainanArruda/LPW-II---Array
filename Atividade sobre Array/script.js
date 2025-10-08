// Exercício 1
function exercicio1() {
    const numeros = [15, 3, 42, 7, 28];
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    
    document.getElementById('resultado1').innerHTML = `
        <strong>Array:</strong> [${numeros}]<br>
        <strong>Maior número:</strong> ${maior}<br>
        <strong>Menor número:</strong> ${menor}
    `;
}

// Exercício 2
function exercicio2() {
    let listaCompras = ['Leite', 'Pão'];
    let resultado = '<strong>Lista inicial:</strong> [' + listaCompras.join(', ') + ']<br><br>';
    
    listaCompras.push('Ovos');
    resultado += '<strong>Após push("Ovos"):</strong> [' + listaCompras.join(', ') + ']<br>';
    
    listaCompras.unshift('Café');
    resultado += '<strong>Após unshift("Café"):</strong> [' + listaCompras.join(', ') + ']<br>';
    
    listaCompras.push('Queijo');
    resultado += '<strong>Após push("Queijo"):</strong> [' + listaCompras.join(', ') + ']<br>';
    
    let removidoFinal = listaCompras.pop();
    resultado += '<strong>Após pop() - removido:</strong> ' + removidoFinal + ' | Lista: [' + listaCompras.join(', ') + ']<br>';
    
    let removidoInicio = listaCompras.shift();
    resultado += '<strong>Após shift() - removido:</strong> ' + removidoInicio + ' | Lista: [' + listaCompras.join(', ') + ']<br>';
    
    document.getElementById('resultado2').innerHTML = resultado;
}

// Exercício 3
function exercicio3() {
    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    let resultado = '<strong>Matriz 3x3:</strong><br><br>';
    resultado += '<table style="border-collapse: collapse; margin: 10px 0;">';
    
    for(let i = 0; i < matriz.length; i++) {
        resultado += '<tr>';
        for(let j = 0; j < matriz[i].length; j++) {
            resultado += `<td style="border: 1px solid #667eea; padding: 10px; text-align: center; width: 40px;">${matriz[i][j]}</td>`;
        }
        resultado += '</tr>';
    }
    resultado += '</table><br>';
    
    resultado += '<strong>Valores percorridos:</strong> ';
    let valores = [];
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            valores.push(matriz[i][j]);
        }
    }
    resultado += valores.join(', ');
    
    document.getElementById('resultado3').innerHTML = resultado;
}

// Exercício 4
function exercicio4() {
    const alunos = [
        { nome: 'João', nota: 8.5 },
        { nome: 'Maria', nota: 9.2 },
        { nome: 'Pedro', nota: 6.8 },
        { nome: 'Ana', nota: 7.5 },
        { nome: 'Carlos', nota: 5.9 }
    ];
    
    let resultado = '<strong>Todos os alunos:</strong><br>';
    alunos.forEach(aluno => {
        resultado += `${aluno.nome}: ${aluno.nota}<br>`;
    });
    
    resultado += '<br><strong>Alunos com nota maior que 7 (Aprovados):</strong><br>';
    const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
    alunosAprovados.forEach(aluno => {
        resultado += `✅ ${aluno.nome}: ${aluno.nota}<br>`;
    });
    
    document.getElementById('resultado4').innerHTML = resultado;
}

// Exercício 5
function exercicio5() {
    const arrayMisto = [10, 'JavaScript', true, 3.14, 'HTML', false, 42, null, undefined, ['array'], {objeto: 'sim'}];
    
    let resultado = '<strong>Percorrendo array misto com for...of:</strong><br><br>';
    
    for(const elemento of arrayMisto) {
        let valor = elemento;
        if(elemento === null) valor = 'null';
        if(elemento === undefined) valor = 'undefined';
        if(typeof elemento === 'object' && elemento !== null) {
            valor = JSON.stringify(elemento);
        }
        
        resultado += `<strong>Valor:</strong> ${valor} | <strong>Tipo:</strong> ${typeof elemento}<br>`;
    }
    
    document.getElementById('resultado5').innerHTML = resultado;
}