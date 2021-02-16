# Splitador do Marco
Na Cooeprativa Agroindustrial Lar, na leitura de uma etiqueta temos esse padrão -> 123456798;12345678789;123445568789; em que o primeiro item é o código do produto, o segundo o código de barras e o terceiro um código aleatório. 

Muitas vezes é necessário gerar planilhas para verificar alguns dados em algumas tabelas em que fica mais fácil a manipulação da planilha com somente o item de código do produto.
Então imagine uma seguinte consulta que te retorna: 
## Valor Valor Valor Valor  123456798;12345678789;123445568789; valor valor
## Valor Valor Valor Valor  123456798;12345678789;123445568789; valor
## Valor Valor Valor Valor  123456798;12345678789;123445568789; valor
## Valor Valor Valor Valor  123456798;12345678789;123445568789; valor
## ... N linhas a mais

E precisamos ordernar essa planilha, fazer cálculos etc. O splitador do Marco faz com que as N linhas que contém o padrão se tornarem somente o produto.
então se jogarmos a coluna inteira do padrão (123456798;12345678789;123445568789;\n123456798;12345678789;123445568789;\n....) o retorno será de 
### 123456798
### 123456798
### 123456798
### ...

Ao final pegue o resultado, sobreponha pelos valores do padrão e pronto! a Tabela pode ser manipulada e terá os códigos do produtos mais fáceis de se trabalhar
