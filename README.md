# br-cities-complete

A simple braziliam cities names complete library.

## how to use

```javascript
const complete = require("br-cities-complete");

complete.cities("Pedro de").forEach(item => {console.log(`${item.country} - ${item.uf} - ${item.capitalized}`)});
```

### return

```
BRAZIL - RS - Dom Pedro De Alcântara
BRAZIL - SC - São Pedro De Alcântara
BRAZIL - SP - Pedro De Toledo
```

#### Object

```javascript
[ { normalized: 'DOM PEDRO DE ALCANTARA',
    capitalized: 'Dom Pedro De Alcântara',
    areaCode: '51',
    country: 'BRAZIL',
    uf: 'RS' },
  { normalized: 'SAO PEDRO DE ALCANTARA',
    capitalized: 'São Pedro De Alcântara',
    areaCode: '48',
    country: 'BRAZIL',
    uf: 'SC' },
  { normalized: 'PEDRO DE TOLEDO',
    capitalized: 'Pedro De Toledo',
    areaCode: '13',
    country: 'BRAZIL',
    uf: 'SP' } ]
```

## run test

`yarn add br-cities-complete`

```bash
$ yarn test
yarn run v1.21.1
$ mocha


  Testing autocomplete
    ✓ Aaa input
BRAZIL - AM - Caapiranga
BRAZIL - AM - Maraã
BRAZIL - BA - Caatiba
BRAZIL - BA - Nova Canaã
BRAZIL - ES - São Roque Do Canaã
BRAZIL - MG - Canaã
BRAZIL - MS - Caarapó
BRAZIL - MT - Nova Canãa Do Norte
BRAZIL - PA - Canaã Dos Carajás
BRAZIL - PB - Caaporã
BRAZIL - RS - Caraá
BRAZIL - RS - Itaara
BRAZIL - SP - Nova Canaã Paulista
    ✓ Aa input
BRAZIL - AL - Barra De São Miguel
BRAZIL - AL - São Brás
BRAZIL - AL - São José Da Laje
BRAZIL - AL - São José Da Tapera
BRAZIL - AL - São Luís Do Quitunde
BRAZIL - AL - São Miguel Dos Campos
BRAZIL - AL - São Miguel Dos Milagres
BRAZIL - AL - São Sebastião
BRAZIL - AM - São Gabriel Da Cachoeira
BRAZIL - AM - São Paulo De Olivença
BRAZIL - AM - São Sebastião Do Uatumã
BRAZIL - BA - Mata De São João
BRAZIL - BA - Muquém De São Francisco
BRAZIL - BA - São Desidério
BRAZIL - BA - São Domingos
BRAZIL - BA - São Felipe
BRAZIL - BA - São Félix
BRAZIL - BA - São Félix Do Coribe
BRAZIL - BA - São Francisco Do Conde
BRAZIL - BA - São Gabriel
BRAZIL - BA - São Gonçalo Dos Campos
BRAZIL - BA - São José Da Vitória
BRAZIL - BA - São José Do Jacuípe
BRAZIL - BA - São Miguel Das Matas
BRAZIL - BA - São Sebastião Do Passé
BRAZIL - CE - Missão Velha
BRAZIL - CE - São Benedito
BRAZIL - CE - São Gonçalo Do Amarante
BRAZIL - CE - São João Do Jaguaribe
BRAZIL - CE - São Luís Do Curu
BRAZIL - ES - Barra De São Francisco
BRAZIL - ES - Divino De São Lourenço
BRAZIL - ES - São Domingos Do Norte
BRAZIL - ES - São Gabriel Da Palha
BRAZIL - ES - São José Do Calçado
BRAZIL - ES - São Mateus
BRAZIL - ES - São Roque Do Canaã
BRAZIL - GO - São Domingos
BRAZIL - GO - São Francisco De Goiás
BRAZIL - GO - São João Da Paraúna
BRAZIL - GO - São João D'aliança
BRAZIL - GO - São Luís De Montes Belos
BRAZIL - GO - São Luíz Do Norte
BRAZIL - GO - São Miguel Do Araguaia
BRAZIL - GO - São Miguel Do Passa Quatro
BRAZIL - GO - São Patrício
BRAZIL - GO - São Simão
BRAZIL - MA - São Benedito Do Rio Preto
BRAZIL - MA - São Bento
BRAZIL - MA - São Bernardo
BRAZIL - MA - São Domingos Do Azeitão
BRAZIL - MA - São Domingos Do Maranhão
BRAZIL - MA - São Félix De Balsas
BRAZIL - MA - São Francisco Do Brejão
BRAZIL - MA - São Francisco Do Maranhão
BRAZIL - MA - São João Batista
BRAZIL - MA - São João Do Carú
BRAZIL - MA - São João Do Paraíso
BRAZIL - MA - São João Do Soter
BRAZIL - MA - São João Dos Patos
BRAZIL - MA - São José De Ribamar
BRAZIL - MA - São José Dos Basílios
BRAZIL - MA - São Luís
BRAZIL - MA - São Luís Gonzaga Do Maranhão
BRAZIL - MA - São Mateus Do Maranhão
BRAZIL - MA - São Pedro Da Água Branca
BRAZIL - MA - São Pedro Dos Crentes
BRAZIL - MA - São Raimundo Das Mangabeiras
BRAZIL - MA - São Raimundo Do Doca Bezerra
BRAZIL - MA - São Roberto
BRAZIL - MA - São Vicente Ferrer
BRAZIL - MG - São Bento Abade
BRAZIL - MG - São Brás Do Suaçuí
BRAZIL - MG - São Domingos Das Dores
BRAZIL - MG - São Domingos Do Prata
BRAZIL - MG - São Félix De Minas
BRAZIL - MG - São Francisco
BRAZIL - MG - São Francisco De Paula
BRAZIL - MG - São Francisco De Sales
BRAZIL - MG - São Francisco Do Glória
BRAZIL - MG - São Geraldo
BRAZIL - MG - São Geraldo Da Piedade
BRAZIL - MG - São Geraldo Do Baixio
BRAZIL - MG - São Gonçalo Do Abaeté
BRAZIL - MG - São Gonçalo Do Pará
BRAZIL - MG - São Gonçalo Do Rio Abaixo
BRAZIL - MG - São Gonçalo Do Rio Preto
BRAZIL - MG - São Gonçalo Do Sapucaí
BRAZIL - MG - São Gotardo
BRAZIL - MG - São João Batista Do Glória
BRAZIL - MG - São João Da Lagoa
BRAZIL - MG - São João Da Mata
BRAZIL - MG - São João Da Ponte
BRAZIL - MG - São João Das Missões
BRAZIL - MG - São João Del Rei
BRAZIL - MG - São João Do Manhuaçu
BRAZIL - MG - São João Do Manteninha
BRAZIL - MG - São João Do Oriente
BRAZIL - MG - São João Do Pacuí
BRAZIL - MG - São João Do Paraíso
BRAZIL - MG - São João Evangelista
BRAZIL - MG - São João Nepomuceno
BRAZIL - MG - São Joaquim De Bicas
BRAZIL - MG - São José Da Barra
BRAZIL - MG - São José Da Lapa
BRAZIL - MG - São José Da Safira
BRAZIL - MG - São José Da Varginha
BRAZIL - MG - São José Do Alegre
BRAZIL - MG - São José Do Divino
BRAZIL - MG - São José Do Goiabal
BRAZIL - MG - São José Do Jacuri
BRAZIL - MG - São José Do Mantimento
BRAZIL - MG - São Lourenço
BRAZIL - MG - São Miguel Do Anta
BRAZIL - MG - São Pedro Da União
BRAZIL - MG - São Pedro Do Suaçuí
BRAZIL - MG - São Pedro Dos Ferros
BRAZIL - MG - São Romão
BRAZIL - MG - São Roque De Minas
BRAZIL - MG - São Sebastião Da Bela Vista
BRAZIL - MG - São Sebastião Da Vargem Alegre
BRAZIL - MG - São Sebastião Do Anta
BRAZIL - MG - São Sebastião Do Maranhão
BRAZIL - MG - São Sebastião Do Oeste
BRAZIL - MG - São Sebastião Do Paraíso
BRAZIL - MG - São Sebastião Do Rio Preto
BRAZIL - MG - São Sebastião Do Rio Verde
BRAZIL - MG - Sao Thome Das Letras
BRAZIL - MG - São Tiago
BRAZIL - MG - São Tomás De Aquino
BRAZIL - MG - São Vicente De Minas
BRAZIL - MS - São Gabriel Do Oeste
BRAZIL - MT - Novo São Joaquim
BRAZIL - MT - São Félix Do Araguaia
BRAZIL - MT - São José Do Povo
BRAZIL - MT - São José Do Rio Claro
BRAZIL - MT - São José Do Xingu
BRAZIL - MT - São José Dos Quatro Marcos
BRAZIL - MT - São Pedro Da Cipa
BRAZIL - MT - Vale De São Domingos
BRAZIL - PA - São Caetano De Odivelas
BRAZIL - PA - São Domingos Do Araguaia
BRAZIL - PA - São Domingos Do Capim
BRAZIL - PA - São Félix Do Xingu
BRAZIL - PA - São Francisco Do Pará
BRAZIL - PA - São Geraldo Do Araguaia
BRAZIL - PA - São João Da Ponta
BRAZIL - PA - São João De Pirabas
BRAZIL - PA - São João Do Araguaia
BRAZIL - PA - São Miguel Do Guamá
BRAZIL - PA - São Sebastião Da Boa Vista
BRAZIL - PB - Barra De São Miguel
BRAZIL - PB - Salgado De São Félix
BRAZIL - PB - São Bentinho
BRAZIL - PB - São Bento
BRAZIL - PB - São Domingos De Pombal
BRAZIL - PB - São Domingos Do Cariri
BRAZIL - PB - São Francisco
BRAZIL - PB - São João Do Cariri
BRAZIL - PB - São João Do Rio Do Peixe
BRAZIL - PB - São João Do Tigre
BRAZIL - PB - São José Da Lagoa Tapada
BRAZIL - PB - São José De Caiana
BRAZIL - PB - São José De Espinharas
BRAZIL - PB - São José De Piranhas
BRAZIL - PB - São José De Princesa
BRAZIL - PB - São José Do Bonfim
BRAZIL - PB - São José Do Brejo Do Cruz
BRAZIL - PB - São José Do Sabugi
BRAZIL - PB - São José Dos Cordeiros
BRAZIL - PB - São José Dos Ramos
BRAZIL - PB - São Mamede
BRAZIL - PB - São Miguel De Taipu
BRAZIL - PB - São Sebastião De Lagoa De Roça
BRAZIL - PB - São Sebastião Do Umbuzeiro
BRAZIL - PE - Belém De São Francisco
BRAZIL - PE - Camocim De São Félix
BRAZIL - PE - São Benedito Do Sul
BRAZIL - PE - São Bento Do Una
BRAZIL - PE - São Caitano
BRAZIL - PE - São João
BRAZIL - PE - São Joaquim Do Monte
BRAZIL - PE - São José Da Coroa Grande
BRAZIL - PE - São José Do Belmonte
BRAZIL - PE - São José Do Egito
BRAZIL - PE - São Lourenço Da Mata
BRAZIL - PE - São Vicente Ferrer
BRAZIL - PI - Lagoa De São Francisco
BRAZIL - PI - São Braz Do Piauí
BRAZIL - PI - São Félix Do Piauí
BRAZIL - PI - São Francisco De Assis Do Piauí
BRAZIL - PI - São Francisco Do Piauí
BRAZIL - PI - São Gonçalo Do Gurguéia
BRAZIL - PI - São Gonçalo Do Piauí
BRAZIL - PI - São João Da Canabrava
BRAZIL - PI - São João Da Fronteira
BRAZIL - PI - São João Da Serra
BRAZIL - PI - São João Da Varjota
BRAZIL - PI - São João Do Arraial
BRAZIL - PI - São João Do Piauí
BRAZIL - PI - São José Do Divino
BRAZIL - PI - São José Do Peixe
BRAZIL - PI - São José Do Piauí
BRAZIL - PI - São Julião
BRAZIL - PI - São Lourenço Do Piauí
BRAZIL - PI - São Luis Do Piauí
BRAZIL - PI - São Miguel Da Baixa Grande
BRAZIL - PI - São Miguel Do Fidalgo
BRAZIL - PI - São Miguel Do Tapuio
BRAZIL - PI - São Pedro Do Piauí
BRAZIL - PI - São Raimundo Nonato
BRAZIL - PR - Boa Ventura De São Roque
BRAZIL - PR - Pinhal De São Bento
BRAZIL - PR - São Carlos Do Ivaí
BRAZIL - PR - São Jerônimo Da Serra
BRAZIL - PR - São João
BRAZIL - PR - São João Do Caiuá
BRAZIL - PR - São João Do Ivaí
BRAZIL - PR - São João Do Triunfo
BRAZIL - PR - São Jorge Do Ivaí
BRAZIL - PR - São Jorge Do Patrocínio
BRAZIL - PR - São Jorge D'oeste
BRAZIL - PR - São José Da Boa Vista
BRAZIL - PR - São José Das Palmeiras
BRAZIL - PR - São José Dos Pinhais
BRAZIL - PR - São Manoel Do Paraná
BRAZIL - PR - São Mateus Do Sul
BRAZIL - PR - São Miguel Do Iguaçu
BRAZIL - PR - São Pedro Do Iguaçu
BRAZIL - PR - São Pedro Do Ivaí
BRAZIL - PR - São Pedro Do Paraná
BRAZIL - PR - São Sebastião Da Amoreira
BRAZIL - PR - São Tomé
BRAZIL - RJ - São Fidélis
BRAZIL - RJ - São Francisco De Itabapoana
BRAZIL - RJ - São Gonçalo
BRAZIL - RJ - São João Da Barra
BRAZIL - RJ - São João De Meriti
BRAZIL - RJ - São José De Ubá
BRAZIL - RJ - São José Do Vale Do Rio Preto
BRAZIL - RJ - São Pedro Da Aldeia
BRAZIL - RJ - São Sebastião Do Alto
BRAZIL - RN - São Bento Do Norte
BRAZIL - RN - São Bento Do Trairí
BRAZIL - RN - São Fernando
BRAZIL - RN - São Francisco Do Oeste
BRAZIL - RN - São Gonçalo Do Amarante
BRAZIL - RN - São João Do Sabugi
BRAZIL - RN - São José De Campestre
BRAZIL - RN - São José De Mipibu
BRAZIL - RN - São José Do Seridó
BRAZIL - RN - São Miguel
BRAZIL - RN - São Miguel De Touros
BRAZIL - RN - São Paulo Do Potengi
BRAZIL - RN - São Pedro
BRAZIL - RN - São Rafael
BRAZIL - RN - São Tomé
BRAZIL - RN - São Vicente
BRAZIL - RN - Serra De São Bento
BRAZIL - RO - São Felipe D'oeste
BRAZIL - RO - São Francisco Do Guaporé
BRAZIL - RO - São Miguel Do Guaporé
BRAZIL - RR - São João Da Baliza
BRAZIL - RR - São Luiz
BRAZIL - RS - São Borja
BRAZIL - RS - São Domingos Do Sul
BRAZIL - RS - São Francisco De Assis
BRAZIL - RS - São Francisco De Paula
BRAZIL - RS - São Gabriel
BRAZIL - RS - São Jerônimo
BRAZIL - RS - São João Da Urtiga
BRAZIL - RS - São João Do Polêsine
BRAZIL - RS - São Jorge
BRAZIL - RS - São José Das Missões
BRAZIL - RS - São José Do Herval
BRAZIL - RS - São José Do Hortêncio
BRAZIL - RS - São José Do Inhacorá
BRAZIL - RS - São José Do Norte
BRAZIL - RS - São José Do Ouro
BRAZIL - RS - Sao Jose Do Sul
BRAZIL - RS - São José Dos Ausentes
BRAZIL - RS - São Leopoldo
BRAZIL - RS - São Lourenço Do Sul
BRAZIL - RS - São Luiz Gonzaga
BRAZIL - RS - São Marcos
BRAZIL - RS - São Martinho
BRAZIL - RS - São Martinho Da Serra
BRAZIL - RS - São Miguel Das Missões
BRAZIL - RS - São Nicolau
BRAZIL - RS - São Paulo Das Missões
BRAZIL - RS - São Pedro Da Serra
BRAZIL - RS - Sao Pedro Das Missões
BRAZIL - RS - São Pedro Do Butiá
BRAZIL - RS - São Pedro Do Sul
BRAZIL - RS - São Sebastião Do Caí
BRAZIL - RS - São Sepé
BRAZIL - RS - São Valentim
BRAZIL - RS - São Valentim Do Sul
BRAZIL - RS - São Valério Do Sul
BRAZIL - RS - São Vendelino
BRAZIL - RS - São Vicente Do Sul
BRAZIL - SC - São Bento Do Sul
BRAZIL - SC - São Bernardino
BRAZIL - SC - São Bonifácio
BRAZIL - SC - São Carlos
BRAZIL - SC - São Cristovão Do Sul
BRAZIL - SC - São Domingos
BRAZIL - SC - São Francisco Do Sul
BRAZIL - SC - São João Batista
BRAZIL - SC - São João Do Itaperiú
BRAZIL - SC - São João Do Oeste
BRAZIL - SC - São João Do Sul
BRAZIL - SC - São Joaquim
BRAZIL - SC - São José
BRAZIL - SC - São José Do Cedro
BRAZIL - SC - São José Do Cerrito
BRAZIL - SC - São Lourenço Do Oeste
BRAZIL - SC - São Ludgero
BRAZIL - SC - São Martinho
BRAZIL - SC - São Miguel Da Boa Vista
BRAZIL - SC - São Miguel D'oeste
BRAZIL - SC - São Pedro De Alcântara
BRAZIL - SE - Amparo De São Francisco
BRAZIL - SE - Canindé De São Francisco
BRAZIL - SE - Cedro De São João
BRAZIL - SE - Santana Do São Francisco
BRAZIL - SE - São Cristóvão
BRAZIL - SE - São Domingos
BRAZIL - SE - São Francisco
BRAZIL - SE - São Miguel Do Aleixo
BRAZIL - SP - Águas De São Pedro
BRAZIL - SP - Promissão
BRAZIL - SP - São Bento Do Sapucaí
BRAZIL - SP - São Bernardo Do Campo
BRAZIL - SP - São Caetano Do Sul
BRAZIL - SP - São Carlos
BRAZIL - SP - São Francisco
BRAZIL - SP - São João Da Boa Vista
BRAZIL - SP - São João Das Duas Pontes
BRAZIL - SP - São João De Iracema
BRAZIL - SP - São João Do Pau D'alho
BRAZIL - SP - São Joaquim Da Barra
BRAZIL - SP - São José Da Bela Vista
BRAZIL - SP - São José Do Barreiro
BRAZIL - SP - São José Do Rio Pardo
BRAZIL - SP - São José Do Rio Preto
BRAZIL - SP - São José Dos Campos
BRAZIL - SP - São Lourenço Da Serra
BRAZIL - SP - São Luís Do Paraitinga
BRAZIL - SP - São Manuel
BRAZIL - SP - São Miguel Arcanjo
BRAZIL - SP - São Paulo
BRAZIL - SP - São Pedro
BRAZIL - SP - São Pedro Do Turvo
BRAZIL - SP - São Roque
BRAZIL - SP - São Sebastião
BRAZIL - SP - São Sebastião Da Grama
BRAZIL - SP - São Simão
BRAZIL - SP - São Vicente
BRAZIL - TO - Lagoa Da Confusão
BRAZIL - TO - São Bento Do Tocantins
BRAZIL - TO - São Félix Do Tocantins
BRAZIL - TO - São Miguel Do Tocantins
BRAZIL - TO - São Salvador Do Tocantins
BRAZIL - TO - São Sebastião Do Tocantins
BRAZIL - TO - São Valério Da Natividade
    ✓ São input
BRAZIL - RS - Dom Pedro De Alcântara
BRAZIL - SC - São Pedro De Alcântara
BRAZIL - SP - Pedro De Toledo
    ✓ Pedro de input


  4 passing (38ms)

Done in 0.35s.
```