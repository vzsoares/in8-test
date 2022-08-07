# in8-test

## Função recursiva

- Crie uma função recursiva para descobrir o menor número inteiro divisível por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.

### Resolução :

Localizado no arquivo `/funcao_recursiva.js` está a resolução para o problema descrito acima. Onde a partir de `n` é procurado de forma crescente o primeiro numero que satisfaz a condição descrita.

> é procurado a partir do numero 1 por padrão pois 0 satisfaz a condição e retorna a função.
>
> > para procurar de forma decrescente basta mudar o operador da linha 3 de `+` para `-` e chamar a função com o valor `n` desejado.

### execução:

```
$ node funcao_recursiva.js
```

<br/>

---

<br/>

## Lógica de programação

- Pensando em todos os números naturais inferiores a 10 que são múltiplos de 3 ou 5, temos 3, 5, 6 e 9. Somando esses múltiplos obtemos o valor 23. Utilize um algorítimo para calcular a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

### Resolução :

Localizado no arquivo `/logica_de_programacao.js` está a resolução para o problema descrito acima. Onde a partir de `n` por padrão `1000` é somado a `result` todos os números que satisfazem a condição descrita e caso incompatível apenas decrescemos `n` ate chegar a `0` e ao final é retornado a soma `result`.

### execução:

```
$ node logica_de_programacao.js
```
