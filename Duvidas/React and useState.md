<h2 align="left">Ao escrever o seguinte código:</h2>

###

<pre> align="left">import React, {useState, useEffect} from 'react';<br><br>function UseEffect(){<br><br>    const [count, setCount] = useState(0);<br><br>    useEffect(() => {<br>        document.title = `Count: ${count}`;<br>    }, [count]);<br><br>    function addCount(){<br>        setCount(c => c + 1);<br>    }<br><br>    function subtractCount(){<br>        setCount(c => c - 1);<br>    }<br><br>    return(<><br>        <p>Count: {count}</p><br>        <button onClick={addCount}>Add</button><br>        <button onClick={subtractCount}>Subtract</button><br>    </>)<br>}<br><br>export default UseEffect;</pre>

###

<p align="left">Eu tive uma dúvida...</p>

###

<h1 align="left">como o JavaScript "sabe" que `c` e `count` são a mesma coisa?</h1>

###

<p align="left">Isso ocorre por cause de como o React e o useState funcionam.</p>

###

<h2 align="left">1. `count` no estado:</h2>

###

<p align="left">Quando você usa `useState`, o React cria internamente uma referência para o estado `count`. Essa referência é atualizada automaticamente<br>    sempre que você chama `setCount`.</p>

###

<h2 align="left">2. `setCount` e o callback:</h2>

###

<p align="left">Quando você passa uma função para `setCount` (como no caso de `setCount(c => c + 1)`), o React chama essa função com o valor atual de `count` como argumento(`c` nesse caso).<br><br>- O React faz isso para garantir que, mesmo que múltiplas atualizações   sejam enfileiradas ou ocorram simultaneamente, o estado atualizado seja sempre calculado com base no valor mais recente.<br>    <br>- Ou seja, `c` é apenas o valor atual de `count` naquele momento em que  a função é executada.</p>

###

<h2 align="left">3. Como `count` e `c` estão relacionados:</h2>

###

<p align="left">- `count` é valor do estado atual (que você vê no componente).<br><br>- `c` é um snapshot (uma cópia) do valor atual de `count` que o React   fornece à função callback dentro de `setCount`.</p>

###

<h3 align="left">Exemplo prático:</h3>

###

<p align="left">Se `count` for `5`, ao clicar no botão, setCount (c => c + 1) será executado.<br> <br>Aqui, `c` recebe o valor `5`, e o retorno da função (c + 1, ou seja, 6) se torna o novo valor de `count`.</p>

###

<h2 align="left">4. Por que usar a callback no `setCount`:</h2>

###

<p align="left">A função de callback (c => c + 1) é importante, especialmente em cenários onde o estado pode ser atualizado várias vezes em sequência. Se você usasse diretamente `setCount(count + 1)`, poderia acabar utilizando um valor desatualizado de `count`.</p>

###

<h2 align="left">Resumo:</h2>

###

<p align="left">O React gerencia o estado internamente, e quando você usa a função de atualização (setCount), ele passa automaticamente o valor mais recente do estado como argumento   para o callback (no caso, `c`). É assim que o JavaScript "sabe" que `count` e `c` estão conectados!</p>

###
