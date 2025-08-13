document.addEventListener('DOMContentLoaded', function() {
    // livros cadastrados
   const books = [
    { 
        id: 1, 
        title: "Dom Casmurro", 
        author: "Machado de Assis", 
        genre: "Romance",
        description: "Publicado em 1899, narra a vida de Bento Santiago desde a adolescência até a maturidade, explorando seu relacionamento com Capitu e a dúvida sobre uma possível traição. Obra-prima do realismo brasileiro, aborda ciúme, memória e subjetividade.",
        cover: "https://i.pinimg.com/originals/b2/3d/38/b23d386975a25c688e2bf11e05503137.jpg"
    },
    { 
        id: 2, 
        title: "O Cortiço", 
        author: "Aluísio Azevedo", 
        genre: "Naturalismo",
        description: "Publicado em 1890, retrata a vida nos cortiços do Rio de Janeiro do século XIX, expondo desigualdades sociais, preconceito e degradação humana. É um marco do naturalismo brasileiro.",
        cover: "https://a-static.mlcdn.com.br/800x560/livro-o-cortico/livrariamartinsfontespaulista/1000448/c07de0df9129deebd789ff18e647c967.png"
    },
    { 
        id: 3, 
        title: "Iracema", 
        author: "José de Alencar", 
        genre: "Romance",
        description: "Romance indianista de 1865 que narra o amor entre a índia Iracema e o colonizador Martim, simbolizando o encontro entre culturas indígena e europeia. Obra marcada por lirismo e simbolismo.",
        cover: "https://th.bing.com/th/id/R.8bb9ce1bc67e27e939195d869605f7d7?rik=Q4OMsYtSRFed%2fQ&pid=ImgRaw&r=0"
    },
    { 
        id: 4, 
        title: "Memórias Póstumas", 
        author: "Machado de Assis", 
        genre: "Romance",
        description: "Publicado em 1881, apresenta as memórias de Brás Cubas, narradas após sua morte. Com ironia e pessimismo, o autor critica a sociedade e rompe com o romance tradicional.",
        cover: "https://www.bing.com/th?id=OPHS.zVjsF1rjDuqv8g474C474&o=5&pid=21.1&w=160&h=242&qlt=100&dpr=1&o=2&c=8&pcl=f5f5f5"
    },
    { 
        id: 5, 
        title: "Vidas Secas", 
        author: "Graciliano Ramos", 
        genre: "Modernismo",
        description: "Lançado em 1938, acompanha a família de retirantes nordestinos em meio à seca e à pobreza. Obra marcante do regionalismo, com estilo seco e crítico.",
        cover: "https://m.media-amazon.com/images/I/91u+sdDOgvL._SL1500_.jpg"
    },
    { 
        id: 6, 
        title: "Capitães da Areia", 
        author: "Jorge Amado", 
        genre: "Modernismo",
        description: "Publicado em 1937, retrata a vida de crianças abandonadas que vivem de pequenos crimes em Salvador. Mostra desigualdade social e luta pela sobrevivência.",
        cover: "https://m.media-amazon.com/images/I/81t7altQZxL._SL1500_.jpg"
    },
    { 
        id: 7, 
        title: "O Alienista", 
        author: "Machado de Assis", 
        genre: "Conto",
        description: "Novela de 1882 que narra as experiências do médico Simão Bacamarte na busca por compreender a loucura. Obra satírica e crítica aos excessos da ciência.",
        cover: "https://http2.mlstatic.com/D_NQ_NP_635076-MLA82475320073_022025-O.webp"
    },
    { 
        id: 8, 
        title: "A Hora da Estrela", 
        author: "Clarice Lispector", 
        genre: "Modernismo",
        description: "Publicado em 1977, conta a história de Macabéa, uma jovem nordestina no Rio de Janeiro. Com linguagem única, reflete sobre identidade, solidão e destino.",
        cover: "https://tse4.mm.bing.net/th/id/OIP.YTtxUL_K9vixVZvUilsFpQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    { 
        id: 9, 
        title: "Grande Sertão: Veredas", 
        author: "João Guimarães Rosa", 
        genre: "Modernismo",
        description: "Obra de 1956 que acompanha o jagunço Riobaldo em sua jornada pelo sertão mineiro. Mistura épico, filosofia e a oralidade sertaneja.",
        cover: "data:image/webp;base64,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"
    },
    { 
        id: 10, 
        title: "Macunaíma", 
        author: "Mário de Andrade", 
        genre: "Modernismo",
        description: "Romance modernista de 1928 que narra as aventuras do herói sem nenhum caráter, Macunaíma. Mistura mitos indígenas, crítica social e linguagem experimental.",
        cover: "https://th.bing.com/th/id/OIP.bOxAgupJ11alnXXzsWMwPgAAAA?w=186&h=248&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 11, 
        title: "O Guarani", 
        author: "José de Alencar", 
        genre: "Romance",
        description: "Publicado em 1857, apresenta a história de amor entre o índio Peri e a jovem Ceci, unindo elementos românticos e indianistas. Marco do romantismo brasileiro.",
        cover: "https://th.bing.com/th/id/OIP.syCTgME_WRb4I3q_94fUuAHaMR?w=186&h=308&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 12, 
        title: "Quincas Borba", 
        author: "Machado de Assis", 
        genre: "Romance",
        description: "Lançado em 1891, acompanha Rubião, herdeiro do filósofo Quincas Borba, que enriquece e vive ilusões na corte. Famosa pela frase 'Ao vencedor, as batatas'.",
        cover: "https://th.bing.com/th/id/OIP.R5rRnQSUxiSDUUf7qFdYkwHaKV?w=186&h=260&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 13, 
        title: "Memórias de um Sargento de Milícias", 
        author: "Manuel Antônio de Almeida", 
        genre: "Romance",
        description: "Romance de costumes publicado em 1854-55 que narra a vida do travesso Leonardo, ambientado no Rio de Janeiro do início do século XIX. Destaca-se pelo humor e ausência de idealização.",
        cover: "data:image/webp;base64,UklGRnIjAABXRUJQVlA4IGYjAABwfACdASq6ACEBPp1CmUmlo6KiLJkrKLATiU2y01/peEnuyNEc370j8DB1gzfR5P8XAx3WXwffE/6Hri2//m284j04f3Tfh/RN6af+72wi1o2ffg+uPejtP+53832B9lPzf1C3cdoL7i/Y/P8++80vtl/zvcA8ue/m9b9gD+d/5v1lP93yK/t//F9gry7///7pP3d///u1ftMfZUiSaVVxp7vVcmsnXuux3YHs2LWmqd2qCn/ZC7GPAndWsRP7oH+hX8k8tjUIWvZXod5JednDFbld99ShZqDIAq0lCGhzy3bb+9P/oiFiSOFD5n+Qow3ctkxVndnrzBfOj/4X4CkAiLyxy5akCDql46kEsohnslLswv+U4XeQuTcoewBBCFTs9wBnIzS649XrWK8NpBpiDeIgCGR4Jd1wu5Ez4SOGMVt2tRwM1MkuoyDgykr9GzpXqNaL78bhx8qU7qpyGpbwzmq3GKkfPQp4PnhthlDCzGOIhDScSg4oPiHcA5g08XKVIOv3SFM0rIHubEodNUzTX60pmOAbSsB5MAVtz1nmCjMOncVb7P2AZ3iTg0E0pbEOptDdKqhpCx5ZoY7coD0Cqo5LQaFNMP+0dskvcAF2OvLG6lp6GWH425YPxNrpzxXY+PgQbXy/MgbR1lN7dH9isggHzpOBZMIebBfII/GmA8kKjFzqFWVaI7Xpbkf++ZTdQXwjResl+f5GUf9na3WiRCbaBAs1OiC2CHwujWUk26n8Sk7dUkIG36y1fr2lRxmEKPGOIOZGIDpFzWmOAr7als7fbBrX6JTjwKFluZnhkbK36cfbP9Wyl0GdpP+HfPwJELrSPGlzWfeMWRw4kkbUBiU3EiXuD8dwcm8F0R0F2p7XE/4tSU8Ro4MYa72ciTSVRiIWoExcjd8l0sJsVQKzOrr0Vhyrg0lZUZjpMTGDI1t4wsm+S4oT6OZERJkOpOnGGi+kHw76AUWDsIguQfCxFRT0ah+sq5QgJ1m0vbun5l528EDGDqZwXsPGkM4XD08Cv2sZxAgV9g8e/r3VRi+xJ150s1PKbMJgAdpVOaYqiRQH+yv/5k5ssFmSkYClW/bLmLCCUMa9pSGoRaU6/T/D5ofulMV2mJ/zKPvpKCGjsTdAi/oPd28A3u01BnqEI70g/rmBnGv/aZOzLy6oMiM+HbMoU45AsvW/cYQJZ7ed8tx/ULjG/65EDeypSuV8vbzpQQmyPvUgJpmOQ6v3UlbC8kwFyWmlAJBjxwIDFDMu/u+7QFs522v1oLjEGaI8Myf8keXYN/rAvX4JB8Rz82/2BKES1Bol2UfKR7O1lbK8lYBCOyg8JzCtXTGIwAD4KF6XO20m3Iw0LbF97d7bwhfb3X2Ipm2IL12vMICVj8kYZmDnPkwYG2ghyjg8WbNCM8psrrI8UGbw6mnwFQ0p1jFR/pyUPrIe+l5PkU+W4tgYV+065S3AtPs5V6U8pRzoTSEZoaj+4TGltUHA3wTg+muOQodqNFbHJ24dnUpxi7W2+GeSybIqQUUTJF0ObK+J+5sQnBG6+8Q8BKQICg3ATv0TjT7NmTAK4iRV9pO8fOVieiAU/jdNiRZH9pZk9Eg4wrAoF0n7nnztjg1MtA/x8+EYgq0cG8VP5DpXIpmAGet8oBmsgY0dnql8Vbvu1V6elGtm2ZYr2eg5ZF+/J6C+p7VVJeA6O07m9osguR/2c6o5XdGvVUy5bz77+GCVRLuDWI5c1GybipC7uXsCfU+mBememtnNu4UQgf+/s1pxRh/2NLSfKrFmAVsgI4YIxtvvSF4wkCTFyuxbHXscaNRpHX9rfACVTbWrn1K0XcB4A2U/RfOwAVS6I+WErakK/5fdoaJi+yIp950aWnygMu0BrWOgFniW1lkyycCygzeeZqixVrhqZgMJoVkCogO4Gg7+xZgJt4g/rjtBsRetpbxNvlPzWcel2373JEMIS5RrzmLz4KJEUrHhA9/PVYghasHSU7kGWmMyD1F4LR5hfclq+0ZgXjsR9/Ht0HEk59Jc06z08jHt2BdHyCCXUnEgDfJbMqH1GE8qgpw/TUATw4CmUTq8hfNjhaScVc9+9LYiEvN2RYTmdGb8SPQM0K1vbee6qBLB/Zy5WBIs+JxZkynzXeMynlLA5F7mnrk+1XQvGYrUc9EitF0N6Twb25F8sc9hdrFOkgG60hdZ/pDJURNSw4sR2Bi8kOGeWBGboXyTUDVIrlkAHzNK7CsQ/P8HcpN8c13P9jlb2h/wgIUJQrDw+VPUHJ1vNk28XAgYl49J7oNzrHyZFDEqXQi/D9ht5PEV4ea2W3EJYFzVcutGQGETkaSZK3wHdT/cx2ddWKk82FoMER66NAKC2g28TO2kheL2W+V4l9pmqngcKldN2rn9l9JByNtHEag9SfkinXxRu5kCCSulGUhHbrxq4rkwGtHjdmKbp5N99Y9CuCEpDV0B+FqtY5I4nLe+YbC1spbHFXCDdtG+Hbp4MaGaUkRW0VzEFj0fB5QCuBa/RpnB2gj8xXWpvV+H/HOwOaasITjdT8DoZvYOWl5Fu1jUvlOoGQDXXvXwa7cOHrOVqcw8l5JU27mPGo05Hoc+4YzdCZ/hjRhQ40Y1UV0e4bl9Dwl1pnqwz6jae50SwAWY3wDEpmR4o5IbzXgkuQZFm+yLfULn7wH/QpHQLthGuWzJsRRm50AdPTDXTdsHXfgvxMD+iOWIY8rS/vuoXH0fpyMN2LY0c/0MWbE9CAvPha/gbBM99CgY3UpeVb7AI+XG6KAf1vJaew2aQuwlTohfEvd+LidA8H41metaUVfMen8q40XZUPVxAuqXr1Vgt7gyFDhWzNfTFAXL5PWbV6i0pex2zPMPJ+RrXNX1sy/uVTejjXqPSBoKKWg4uqcSbxevB6RnAVTlpiR0CqJT9L5qWn51RK9I+haKueG2zhewO3tRSrFW+/feHu6DKq3XFMgPpAHgAwsjK9b2IuekuePGRnNisnka1TQvBPDeN4b26r7rfNNSwkBu9Dh1N3MYd66YIzPT+9Ha9i8CLtapFNiDwYh0t3Uzdjzgk4Ned6Fjw7eX2+Dn6OZENwyu1eWrmSicWCWcmabs206sd4+4qlCQGNBrPbXpxLU+B2Eim0Fi7YBOy65uxNnBydyDp/9y331868S2zogvmfqPFkESMsyyEKPwLApI1ucGIUNdfj5Bi9dibCaiwbQ3PpdjeQcZPIgdxfCQvUUvUOEuHaYXKkQrOQus6Y/DUJimYjXVcL9z316GhrnVvMnAzOq98BY5DkqdNlwcyS1MB2AYyiyTqLexYGUvOOdOIa9mwVNc0CPoVKzdt8i3Y+7qv0nT8RUJfEkSPSAIJYM9wFRzE6ck1oMcoUX7xPga5XBNRsoZo1pKv2AK/J/NU0gtJO/OZtahb56u8f0hoQLSn9JgdMECiknxz0fnOsM4oUVgNCEp+tYr8o3wxAVfqCEKI7EOBJv4C4N1n6buHt6KMbAkRKtbPYiaPhlsR0dbQjntCBYbIkFRbIaO9nCezSGuTI89ExatIZXv2ftFXtW74bKS4cFIoQqmOPzyfbqD8sZA2reQDLcXEG1iURQKzqc6szDaTm2u0g69Fc8QZT3MHxuRiJgW1Yc1vBPtRpLmKOBkCseJMkl6qwB7GOcy4PvgBC6FsbWlxapd77AeZA4fPikI3TmZuKCQGirRfrdHw0h8TZpzy8lA92g9RTlAsJz8jaIwrN0EKiRPJ9+SsANOG74jvsDfu0EUYtsPSiuf92LQdd0YbeumJpa/xNcm1BjSdigXIwJytl3HoPRWWTqrHEAhP1UrxPFq34l/MP+kdL4QjGZ0kmCeeO+b9L4RVW3IbuflcuELrblm+6IVzqZtrYkPftI4W7ZVMISJpxMAPOlIEweluVT5t4p/runP1wYXwIEkd6n3WFQcRHeyKAaTZgF9e1IvmacUyPD/4OAFsKmjEwwLUSwYqA+7KK1RaOD/T5hmK9iQFMkIRU5ooM612YhcpbwrXHWqY+GfqmeQFJL9uDQ9+a+9ciYMS+IaNPNPKHSEEyYjaLeWupywz83lvzmdqQd0s4JbEqIHYeXJ2VRDRRZkdPtcrjkLHPgWx4Ooha+53p3UgElZ0+LBRHaCY0aCqzWxST1b2gcccUu8QNB+wiKmZJAJlJrx+R8F8mduF1uarms47xjzgmzAxcFAMVS4h04fSdY7fhUfV6TK51aJek5yoaM/gQqyeVoMx7SIXTGDBiPEZFr01oc8KCGPgL5Fhrc0ZULsSBvCGNl4vg+XFHEVj4X/mU+eO6wj6KhusyDXtFjLt106Z1hoXJZ9ZwWtnF4MXZ+Ivgk3eu7maS1xdnG5VuwDgqJWkRX84pn3rX0aLC4Fvxlie64rAh+NsPGs2eR8OjJPW/C+aWdU92yB2p3Sh6sl6mJ7h2juphLI1jBhTgoXYdDDA1MKUq0tgMtAKT2Kyd6kZC6Ue6HVY3eZkGI+Zt1b4kmDDYdqt4ewQIpUTD9gOoj0lpHUjW/sp6s2t+G58b25J7RgqauDOnJS5adimNWbIj5ROJyKndy+H4Dy/MitkcbifAHiBEZBbssbc+IJf3HmQCptPiVZfYY02sXetUrEykFxEmbqiuWi1QQ35N++ykz6nF6SHAfccTOIAHJsDMQ2uAAyC4Qd3bh3W2breKNA5sduVcLiXo/Bp4RJTD7iC6FOsMsJJqaeRj9zUAFJduy10L3oJH6QJE51vJPNnoDTZUz8asX3eBsH6hINIJekpFmXMWWdNvRQtGwgVmLlWvsqgHJplqAa7NOreg1LjqgbLsh0Pqhv5zZnSasd8a3zmul1sh727LNMIiJePMgBFFjxtmdUfGgghCq8TFyioQNQ9NIRzb+WA5WDJE8DGjY7DG+cx8duatxcoUeYLXpmfQt1uUfaN/AJo1IaEMFEJ2Dog+Egv6B/OItfDEUDbJVPDZgAvvyAV/epgUUnbQ01KZk/f/wXgcSLpyZqW7gwZmkbr+2BMd95rmV1qb5MCzsOM405t//g4Fxegtf1Goyi+QkdXmWg0RXy4y3i2sVFcGlPslvcBW2WubjbdS620SjWULqu4iaBDK8xSVBg5j8CdRcIsecVp7j98dv/4UBsL8H5gIVUNlr2na2MypuZUVMlviAodGgzBhmv1i9mIWPBdnyzeoryakIWClUBNJr4aW6TppNAQn6PLMPMfifSGZQVkucwzNMDWMZqMWSA2+dCykdT41Rue9ErJbdd19SpioXKiKBGr0ZuhZTUkF8HF9MxDceSV7aaS1OJZDmEAUdo2pRv2NUJMFCSR6JGFzATIzW5IZhc72ofRpjTOaXvOO9z+4zbgMB67tl0XIh56r7ajIYUFolrmbu/i7MKSuvF7Ee/JCQHUY/DPCbg8MHQDPl5vT2Wf9j7Vwy+SEB1hEgVmzzPlpa/JG9Hc88Ux1LRsPVoShF2XaFq+yCBtwVmjfmL+2vHm081O5DbPeI9h151tQBJU8QPioIdqujbwElHAXicDX24aMkYLm5yRXvUiUO4E2i9Ccs+PSTv8CQAsNjpxhDMQpvYYQR3N3UBD/4+ApET14kDAA7KNZ0PPaUEM6MC9ipXgiHPLrY34jeRkYecrbDIbJeumKFsK9XnRENgX8kSSFALmsqx799VfYaiSSodnFgGWIBmG9rFIpW5Oz3na+ezrdxf87dVTQTsDcLbTUBGLEcH/ay5+NFIW5yqKGAwjirmPQcenwzwNBPiIjhAnPY8qZRbmNzDhz4FIeJbkmqwKPeBNlKoRuZr6yREN94XU+L0DcFRkt+HEh6IAnyGwY1axTt/Yhap9IenCGM6NpXlS1jzdU/xKFNrOKxldGlxx5Fi60L31bMMsovwhViEcOofV5F3Om5IuZ9YWU0O7BDRqVx/6CRGjbgB7TIB7HuMeV26Tynxaj3XYW687qKwsf0eqHsuZc44wacqkFLyZzzUQ5keqA5/JHsu0oogYjdcxkYuQktsfAsplnVILee0mufxkpUBhnwO7MBuOZrvkk6EFJ2ueYoezYJ2+nSLU+xUj+qS8CABmos3NMA1F9k+4PsXfb2vPzl3b3iC/ezEdsXr/4YDB7VzydtKmi5wbgh9ycFEIPDI7Gc9z1Ik36tiFJbXln6C3yryYOWTmx4E5uf3G8crlKNyA6YwF0hhyKFz+c6XGksOdbJuJzHyyUW8CEb5IeBGCdytZJMZfzOtUTYaQ0RdCYUFaRzm/Cll23XrS8kq2+lJ2lQsevA7iJIr0dCG7lYHOOnSwICoQV3QLnLmk0ZwFE23bi681lhQOT0LB+azMfUdeh0BYQYlnmF990cjrqO1Xoazx4vCz95xDKsiPp5zSYwWfWRrCuTN4mj2HxVp7FpZt0ioLEA4D56XmWr44M4LGyWXDa+KGju5up+7qBAbtcHUZJ4TOn/uXHMMY4JpfGyR/C5cAi7imP+dcc2KXm8W3GkCT6TFznLc05LEq7ZHEZJxY+FCNXkhW/v7rUiq7X+yteB4oxUXnqofb/aOL7AWG/X8KLLKWd6hipjmhjOvvB/7pZOn0S+GbUpUi7eQrxXRevwJNY5xeKha7M/Zc0qyHsk96ZqIjHxRGIg6f6z+iygMC3BPxIH4J46zcbhbSM+JtH10UQIWefV3pmh8IVY7dr63Ni106xIbQYIiaUSaGt2a0KvEXoOdjTfU1db3VmqfBc4Cm4XrCNejOuidL4kn3Hjox8YP3D0cnNwU79vcrzv0mB0f425KqQfHpYKjHrJseaZkuUdSdQSsixltAGhguzcgXDHHJfL5B/mfSDy2ucuGu48hkwV6sg0QKAuCgCqBA9HSs8wGoGZE1YJyaGmQ+1z5S096SAkTZ2ASqKW6LZYlSXoQj0XJ/sgdBybn8/x9YsonWyRuCz+nEm11hY8ZIoloTF/2A2TfYlwXE4g7O3RM8WKoIL/uO7UW9qGPbB/FxXfbdc0bdbba2+oqd4cafRarfhAqe4uErFygw3lLEES+K+YrVBCZ1iy/ushIULPI3GAh9Bq/3jWRvIpN59D0mGgRSldSKZfhkRCeJzXY5lxrFB/sFWK4wgg7QCAyPefC75vlmon+5KG0Y0OqKy6757LGBaanbHKJSOk2EIDNDOdJ2lSgt5xqyqWjsxC8a3zkmhLTbkMb1gnP9p/IwkdlTNUMwqg9nuuzzsJbec9RdzotFlOTTmi2yGf/d6oD+jy+1cgZyeDWuDZ/4RBTStUxhWrC8WfaVCdBemCtpStnAM9niXCVJXDl/njqzFCssOFjxbwtpSwedwrcU5BWPOBgvTvW5kCXxFTkU79opagSOuoOzlWFBMGe7nrD9TY0iqnGPxHHZ5QkXr3RRfkhi619Re07HGC4TwYffs2AfcPwG4nYtmQI+sRQTXK8oK7UnYv5OWkQ/2QUAcdSHr8YLnvao6rRlRSwZtpukSieTnI6hPVgOTAqF2kl7IOgwIsf8viCtsLHMczqPFkf2QuIFr1c89Ng8hxSSZXcyl6g7e/DJ+VFq87SOOFZD2g2rLLovA8FnUZL+/HZDu3wPOcJ79w7vg/JBfQLfDyK5XiAD0xnJrD7YgyWnDnmba2iGqsWqGPjaOxAjTiiCt7WCrdWaDJ2JCUnz5AvR9TtuttqT365AP6IAA84woLSR65r2mcWMX0UzBNeh8WnJl/HgfkalIrHWdvHbx3hhOx9Ht2nCV9VGEAztBXkxdi+HBR867EcM+7IFCHFiqlUMAqjggb36KABM0xeGF+g1qwVM7LHbD8NyMSQppTMho7BWx86EQMpwbrfk0EzVaaf5nO3gQGKnnH8hROuf8yBFNXXGwWFBW9w9r1Aw8Hz1M/vgmoCbagCJUS4GNp6xddnHMhaNgmxbA2lS05vM6YVVuN12DHHFNHTEaGgmPWzAYNVdCUdvaL4T0SMVTkR4E9kZFNKM1iCw6c07CT8hHWTDMcT0iJfmvk6iCL7RkfdEpmNvvSwqP4NdGTq2ZrMRdNqU6f6omXSfNN/0ZTQ86j20r16eV0G5iJLvoU159gyQmljxZ/vIXxsOZs1PnbloVsSyLMwwNtNyo4hwfmujszK5MvrXnSCSnLPDc57GTr91INrE9P774Wlv5AKcYHaW4LFnqv80Av8kpZNjqW48/x2bvnsiw0pvIKly1k3pEd1inMzvvVaa54NJGeWhQ1l5ZNJGHbq831mp7f+AmWeEmEWfGYyUyabIPR4gUJLVFf3S219vRPcJU9vLbjc6wUiiVSNe1OPGtuySUKGoZFhx9QNmXSxSf27mnI/IDxRWLsKgVytjrqsAF+SayKpLQ+D2PT4FXNRVhufHxs/1pdmMkLEQIdPQ2QBcQ8jYW4DCmFF7FKQyTrQQBcAuvjOPGbq+23dTkZPWlg4JAr7RMBVij7Mh18gKmZDnxUGNmJnHSOG6JoY2TDLpM8Qt5WCIATGBntbzU62KwVqUb8h+blgnhWJdNJ/Bdmv6DEHrLYzabL0zWvleSQefv+F4rWWTrgc+QDqbZKpTk1sUvrXflGD3YbpKAcEOmTW6aPBzIaHCqISQaQTrU0QrYVJUCsNRjBkCtCBStp3HxgRET8SIJkFBaQU/NWTlRQQkeBcJzuTChRWGCe1Mjka7fGZ0eL//CuOs/8xY0eMEafhttDxj2TEv4cWexg5wp/LCBVWxc9lIXDG6g6OIQ0N47d7OgLS1R8/yaUPSqM/OAbYtNJFoRX9y+VZxn1tbBo/Zp1BQd7I+OhWprZg2OvOLAcOXr7V1b1+7GnRukOdvGc27eqXq7KdZkt7XFuOcKZMaG4MX/qvuSgyWE2d3Momqoaa258LzR3gwQd5TS+dWilk6MxhwSNSRK7aVg4x0VZB9mIixcC1eAMc4yoBp9EnLpEAvdo3qbTHvpIwzGZvevO+aM6WdbDSW52ZxDeWlr1T/wI/zQ5sw/uLg+kiYKnZMEkn+d97HI7l9+GI3YOsIAcSdYsraSspZEJYyH9H7u6EGL7wjLORFNP534tfDSJj1a3WE4Kk6vBe69/ys+N8nttaQ/W5jQrbdbwupngrB5jLlksmPSYWk/XBhTbM3k7CcyBfeS/VeP4kkD97XihL4mh5dDhvWDouY1MUar672fdWLhg09DSFBJcTKbe4pLhyppcGq8Em5exPAIeZpAeTvosTkUzwAOWquqNjXW9Uk1yhfxhKgFOuMnGx0WciSnt9CGrn8y11ZohwxSDf34m8CiMIHakmcz8lH7m2r9az6PosmTvs5aMFEfh0ivcgOwI5fWMtq+vTmwBFxk63wSr/RVozZ4L07MGusehlt6taH8Mp9duZM1UhHi/lYN9owqMzsPzADBEMYqA/oac32md0WAN7O5U2O4bZR0aqM9QmkIxHMtaXV2p2e6ohXUscUszee5pbr43UX5mRRod5Sq4qrPu9cA3CXfjRKHBLh9HkPfr20Y0AXy/WmpMeStI8ruT67DL5ckDS/F9B8XrMSydNtxazELUKDcoKUO8C5oi6AGosGym8tfkrPlj/iaSB7b/rVbjD99c2/DUR/JuAAh08yKMzvYbO6KYc9LGZECHgixEvnBwU6swF/cXyKPNonD4LaXxV225PqYqYxKub6b8D/rnP6dTq8N7ya7GKMLiikPShskyPPcCr4fv2UATqMVBwxtcYC6ZYzmF9KMf5xCpHhac4wahABVJuPVskX4tnxLgaNsNVFiNff0mAsDv94vzlt60EVHFlCilO1z32oaCuZhgy3gA+egXFFVhMj90U0iSxjdJIUZMFTgk8/R0mjLDoFGggaV7ebMbKwHXr0Mhb3vtcRbRbG8evd70+JDmcM1J6h7feIIaDyNyFWVomlT5MPxyWm9w/GfgTo3hC/bbk5tkwHjK7iyIM9CmWNtrIn6bY2llXFNJozizeXl8/HHqIgSjWqKduBQhg4hGRsSkxoontAXelvOT67Ddu2mHphGcbBZ6VHj92oUnPKXpx1x2qG7REmTW+cfc4fLnXg9UyfzZXVu2q/rmnrBazkSSm3lgPwtPEtBluBgvU3PCKtZ46eWU0bx/U/8hlSYRihrtgYEDOL+Ww/V4XXUxKAwVWKcxbH2iNz4yY1OpC0P2nz6jCjTUJ9ZA53qE2wNqbu8SAHBM2t9LNYu2r8nCAn/xXD6TX6GDoqOn3R2lDiJ1luRKcKZ9/lPljLDXf92wTDEHr7fZTQvJGy9G9MOFmy4mcPr6S2idDgeDjOQLBIaavWGvWkFbIfh3Sq07q5fFXn/B9ceNlLmP/WAY+mbGWvJoYq5Ysur3XRuGo3QfkCQx+yZvj6TV/FQyeM1EJT0zDibr1YS2Tsmz8QFeQWNKUwl484SVo8BfVUROqDT80yoEntH3xlo3TUU/3P/Nelmi73VtF9V9VllYsQrra3yu5h14cvYOT2Sz4LWWH+aigRIZ7GDOBZOpLEPZ9MoTnm2Az3nfLoxgrg/9nPIAwLqkASbZb2HmG32rGnVtuzTEOXdXnIivvgdHdLyqheHQcqVH91mNQmY9WvXvKMNHxUOpDTLsNF2+NvaJ9xmRTEtW3JTLTxg1qOl+1Gql3K4UkcLDoEfwlzAtFK2wFgPlAprVEARxgSqD+HKaphHHsGX09JmPyBQmlxyePvRmg6rLiZSDtjDETKyJ3aj7lX7CwWqey/68h/t+qBMrPaGK/tq0wcoJEPWbXWl6pEx1LePd3ZJo1nivbtYAvS8HQfx2aDKuooMenk3uScTdUqEYiQGdeuz3qMubq+xmfhXwwZvJ2faDrgdzkExbm28050OVvw1EH2yNOl4IA24cduWe3vDl8Yuj+WgQ4x4IPGstoSLBpdMY81lZMrCESkYv5a7k+mPNAdkzpzxNVsvx1MAo3CO6COrtpVNC7OPIczCu3Ib8J/h9pNwYn+oracsatpUjrsjXh7wvfOvbhN3/KcOK109T/elp+fFm8KylsMjqQvOCJC4iFy/HP4fyP9xwJxX7yyNYyCj61X2T40+7Ne5VMtcg6hG98oRbSv2ogVvEfCrlX+r0M5YyQO4nCS/RNR6P14RfuGVKujnLGo5ltgy4QF5A1Gc3F2dmp+rdiDs0ol1yztVrkbhYHOCwOhbfj3UCBs+sea/dQp+TK8db+atID6/bJeKVZFHnAdWns6IaP2BAJKWYL3k7tGovh3RvN1jce0C44AQrZSNtOgIzqFqO8WkcIaGFmPnRlElkW954Ra/ck4bN2oUUZlkySZ3nPeQtcwV6MptP6200K+SMKUUcTOZO04yYIcgXnBOLZKN15hcul4fHVC9nXVLBEg9X5i87/MAokKv+QCqtpdzqE0yytHM6AUzPSY9a8fiL/pTDGs1vbGYJr15ohaYiQqA6g0QUI03/Vsz71wVAMwjDOByAxJ5TlcOPDUGRDv/grj+WOFTLX8HlD895veOo54zyzuQTMmQq4NiuGFnZBkZ8QDeJsRIBAExDDenn53rrzDPZ3d7bSK+soo5Ih8bExasWg1O+iCo0CiS/X3t3WuL0pJLoyPfzOdlcpmjFkfApsAaBiN5Z6sByilU1kKslEVY1N7mksdQaBI91fEKeBZldSJZR8g3myQs8gyu2m7FPlc7wgL7VnP1ar+c2veL7pegkGTsl1LCcH6NLxHRkkPuUv6EtnyZwk56AELhnNRyoMkF3wCHcfFp7S9G3gbJjDQLRKyPd8jq9GEPilJDP0jXlTgXiqwdaAIbKJgqL6W/BuBiH6+sx4jOE5wmjJqFx7yMofaaav22l+kEfmt6fkn+xvzJRasaumyvRq8Se7sXNoUy2dvVoqLZ/L1ftzzP1eVPzcktijgshtG7CFi1a38UyGHIf1BKyBr+ywOzBbzT+6ceIsz7LVkleFvqczanc7p2xp8lEH8VK2SENlm+dswZnFctSSedSfs49chp8663ozvPbOWLMQIPM5I0vr2PR2Ht49Rxx/ZcwhxYDWLW58oqt8U34sz+1zkV6N1uKHAtCKg7ItcR7XS4kc040vnf07D/sl9o5Ps7R221GiE+2l9ctMZDD7bT0IBbUN7dzAikcFDRagE726fEGSLT9pokQHieACsSB7yf1N1IAMtoTi1EFpYpOTVijPBLnSkE3qf/RDxwAgHeRfT3K9rq+qjHcD2BRqt54H1za7gnbT2gAAAA=="
    },
    { 
        id: 14, 
        title: "O Triste Fim de Policarpo Quaresma", 
        author: "Lima Barreto", 
        genre: "Pré-Modernismo",
        description: "Publicado em 1915, narra a história do patriota Policarpo Quaresma e seu idealismo frustrado. É uma crítica à política e à sociedade brasileira da Primeira República.",
        cover: "https://www.bing.com/th?id=OPHS.sNVSw3L%2fzNSlIQ474C474&o=5&pid=21.1&w=160&h=233&qlt=100&dpr=1&o=2&c=8&pcl=f5f5f5"
    },
    { 
        id: 15, 
        title: "Claro Enigma", 
        author: "Carlos Drummond de Andrade", 
        genre: "Poesia",
        description: "Livro de poemas de 1951 que marca a fase mais reflexiva e filosófica de Drummond. Traz questões existenciais e angústias humanas.",
        cover: "https://th.bing.com/th/id/OIP.Z8q1-w6ppH_A83XJNTbt4gAAAA?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 16, 
        title: "A Rosa do Povo", 
        author: "Carlos Drummond de Andrade", 
        genre: "Poesia",
        description: "Publicado em 1945, reúne poemas que mesclam questões sociais, políticas e íntimas. É considerado um dos maiores livros de poesia brasileira do século XX.",
        cover: "https://th.bing.com/th/id/OIP.YO4UlED_jU7IJtkTG40CJAHaLc?w=186&h=287&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 17, 
        title: "Mayombe", 
        author: "Pepetela", 
        genre: "Romance",
        description: "Romance de 1980 que retrata a luta de guerrilheiros angolanos pela independência. Explora dilemas humanos e conflitos ideológicos.",
        cover: "https://th.bing.com/th/id/OIP.2P9lYAxgyD1gD-dXBxyp9QHaLH?w=186&h=279&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 18, 
        title: "O Pagador de Promessas", 
        author: "Dias Gomes", 
        genre: "Teatro",
        description: "Peça de 1960 que conta a história de Zé do Burro, homem simples que enfrenta a burocracia e a hipocrisia religiosa ao tentar cumprir uma promessa. Vencedora da Palma de Ouro em Cannes na versão cinematográfica.",
        cover: "https://th.bing.com/th/id/OIP.GeqNy3t1elmpHE2qPkzqnAHaLH?w=186&h=279&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 19, 
        title: "A Moreninha", 
        author: "Joaquim Manuel de Macedo", 
        genre: "Romance",
        description: "Publicado em 1844, é considerado o primeiro romance urbano brasileiro. Conta a história de amor juvenil entre Augusto e Carolina, a 'Moreninha'.",
        cover: "https://th.bing.com/th/id/OIP.JpAjRJALa0wwn8bi3vfAOgAAAA?w=186&h=276&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 20, 
        title: "O Ateneu", 
        author: "Raul Pompéia", 
        genre: "Romance",
        description: "Romance de 1888 que narra as memórias de Sérgio no colégio interno Ateneu. É uma obra realista e de crítica social.",
        cover: "https://th.bing.com/th/id/OIP.wvf2g3DK1_qg-0eBbZSoTwHaK_?w=186&h=276&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 21, 
        title: "Lucíola", 
        author: "José de Alencar", 
        genre: "Romance",
        description: "Publicado em 1862, conta o romance entre Paulo e a cortesã Lúcia, discutindo temas como moralidade, amor e redenção. Integra a 'trilogia urbana' de Alencar.",
        cover: "https://th.bing.com/th/id/OIP.pZK0x9x1L9p4sCK4lTZjrAHaLl?w=186&h=292&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 22, 
        title: "Senhora", 
        author: "José de Alencar", 
        genre: "Romance",
        description: "Romance de 1875 que narra a relação entre Aurélia Camargo e Fernando Seixas, unindo crítica ao casamento por interesse e elementos românticos.",
        cover: "https://th.bing.com/th/id/OIP.tD9moppHIhLwiGEkMJXrCgHaLf?w=186&h=289&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 23, 
        title: "O Mulato", 
        author: "Aluísio Azevedo", 
        genre: "Naturalismo",
        description: "Publicado em 1881, aborda o preconceito racial e a hipocrisia social no Maranhão do século XIX. Considerado o primeiro romance naturalista brasileiro.",
        cover: "https://th.bing.com/th/id/OIP.5cH2xBUQ1ao8qzayuB8-JgHaMK?w=186&h=305&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 24, 
        title: "A Cidade e as Serras", 
        author: "Eça de Queirós", 
        genre: "Romance",
        description: "Obra de 1901 que contrapõe a vida simples no campo e o luxo da cidade. Traz humor, crítica social e reflexões sobre progresso e tradição.",
        cover: "https://th.bing.com/th/id/OIP.qgd5QGLJ0RBnpsMEVrkGZgHaLJ?w=186&h=280&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 25, 
        title: "O Quinze", 
        author: "Rachel de Queiroz", 
        genre: "Modernismo",
        description: "Publicado em 1930, retrata a seca de 1915 no Ceará e seus impactos na vida de retirantes. É um marco do romance regionalista brasileiro.",
        cover: "https://static.wixstatic.com/media/2ea568_96972efa3e404412b680548ba13d97a9~mv2.jpg/v1/fill/w_686,h_793,al_c,q_85/2ea568_96972efa3e404412b680548ba13d97a9~mv2.jpg"
    },
    { 
        id: 26, 
        title: "Dona Flor e Seus Dois Maridos", 
        author: "Jorge Amado", 
        genre: "Modernismo",
        description: "Romance de 1966 que conta a história de Dona Flor, dividida entre o amor libertino de Vadinho e a segurança de Teodoro. Mistura realismo e elementos fantásticos.",
        cover: "https://th.bing.com/th/id/OIP.Vnw051B4kbDlbiCF-wLMgAHaJu?w=186&h=244&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 27, 
        title: "Tenda dos Milagres", 
        author: "Jorge Amado", 
        genre: "Modernismo",
        description: "Publicado em 1969, celebra a cultura afro-brasileira e critica o preconceito racial. Tem como pano de fundo a cidade de Salvador.",
        cover: "https://th.bing.com/th/id/OIP.U5lYu4HgtLuxISqSxtHkTQHaL1?w=186&h=297&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 28, 
        title: "A Paixão Segundo G.H.", 
        author: "Clarice Lispector", 
        genre: "Modernismo",
        description: "Romance de 1964 que narra a experiência existencial de uma mulher após esmagar uma barata em seu apartamento. Introspectivo e filosófico.",
        cover: "https://th.bing.com/th/id/OIP.AD6AVcMQmxgkzXIeFpSKNAHaKw?w=186&h=270&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 29, 
        title: "Laços de Família", 
        author: "Clarice Lispector", 
        genre: "Conto",
        description: "Coletânea de contos publicada em 1960 que explora as complexidades das relações familiares, o cotidiano e os dilemas internos das personagens.",
        cover: "https://th.bing.com/th/id/OIP.mLtQuwdDrKFQM4cfFPjHMwHaLK?w=186&h=280&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    { 
        id: 30, 
        title: "Sagarana", 
        author: "Guimarães Rosa", 
        genre: "Conto",
        description: "Lançado em 1946, reúne nove contos ambientados no sertão, unindo linguagem inovadora e elementos da cultura popular.",
        cover: "https://th.bing.com/th/id/OIP.bDVD2gW7igqRm7iqGoWuYwHaLV?w=186&h=285&c=7&r=0&o=7&pid=1.7&rm=3"
    }
];
    const booksContainer = document.getElementById('booksContainer');
    const shelfContainer = document.getElementById('shelfContainer');
    const totalBooksElement = document.getElementById('totalBooks');
    const searchInput = document.getElementById('searchInput');
    
    let shelf = JSON.parse(localStorage.getItem('shelf')) || [];
    let currentFilter = 'all';
    
    
    function init() {
        renderBooks();
        setupFilterButtons();
        setupSearch();
    }
    
    
    function renderBooks() {
        renderFilteredBooks(books);
        renderShelf();
    }
    
   
    function setupFilterButtons() {
        document.querySelectorAll('.filter-option').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                currentFilter = this.getAttribute('data-filter');
                applyFilters();
            });
        });
    }
    
    
    function setupSearch() {
        searchInput.addEventListener('input', function() {
            applyFilters();
        });
    }
    
   
    function applyFilters() {
        let filteredBooks = books;
        
        
        if (currentFilter !== 'all') {
            filteredBooks = filteredBooks.filter(book => book.genre === currentFilter);
        }
        
        
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredBooks = filteredBooks.filter(book => 
                book.title.toLowerCase().includes(searchTerm) || 
                book.author.toLowerCase().includes(searchTerm)
            );
        }
        
        renderFilteredBooks(filteredBooks);
    }
    
   
    function renderFilteredBooks(filteredBooks) {
    booksContainer.innerHTML = '';
    
    if (filteredBooks.length === 0) {
        booksContainer.innerHTML = '<p class="text-center col-12">Nenhum livro encontrado</p>';
        return;
    }
    
    filteredBooks.forEach(book => {
        const isInShelf = shelf.some(item => item.id === book.id);
        
        const bookElement = document.createElement('div');
        bookElement.className = 'col-md-3 mb-4';
        bookElement.innerHTML = `
            <div class="card bg-light-gold border-gold h-100" onclick="openBookPopup(${book.id})" style="cursor: pointer;">
                <div class="card-body">
                    <h5 class="card-title text-bordo">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                    <small class="text-muted">${book.genre}</small>
                </div>
                <div class="card-footer bg-transparent border-gold">
                    <button class="btn btn-sm ${isInShelf ? 'btn-outline-danger' : 'btn-outline-gold'}" 
                            onclick="event.stopPropagation(); toggleShelf(${book.id})">
                        ${isInShelf ? 'Remover' : 'Adicionar'}
                    </button>
                </div>
            </div>
        `;
        booksContainer.appendChild(bookElement);
    });
}
    
   
    function renderShelf() {
        shelfContainer.innerHTML = '';
        totalBooksElement.textContent = shelf.length;
        
        if (shelf.length === 0) {
            shelfContainer.innerHTML = '<p class="text-center col-12">Sua estante está vazia</p>';
            return;
        }
        
        shelf.forEach(book => {
            const bookData = books.find(b => b.id === book.id);
            if (!bookData) return;
            
            const bookElement = document.createElement('div');
            bookElement.className = 'col-md-3 mb-4';
            bookElement.innerHTML = `
                <div class="card bg-light-gold border-gold h-100">
                    <div class="card-body">
                        <h5 class="card-title text-bordo">${bookData.title}</h5>
                        <p class="card-text">${bookData.author}</p>
                        <small class="text-muted">${bookData.genre}</small>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" ${book.read ? 'checked' : ''} 
                                   id="read-${book.id}" onchange="toggleReadStatus(${book.id})">
                            <label class="form-check-label" for="read-${book.id}">
                                Lido
                            </label>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-gold">
                        <button class="btn btn-sm btn-outline-danger" onclick="removeFromShelf(${book.id})">
                            Remover
                        </button>
                    </div>
                </div>
            `;
            shelfContainer.appendChild(bookElement);
        });
    }
    
    
    window.toggleShelf = function(bookId) {
        const index = shelf.findIndex(item => item.id === bookId);
        
        if (index === -1) {
            shelf.push({ id: bookId, read: false });
        } else {
            shelf.splice(index, 1);
        }
        
        localStorage.setItem('shelf', JSON.stringify(shelf));
        applyFilters();
        renderShelf();
    };
    
    window.removeFromShelf = function(bookId) {
        shelf = shelf.filter(item => item.id !== bookId);
        localStorage.setItem('shelf', JSON.stringify(shelf));
        applyFilters();
        renderShelf();
    };
    
    window.toggleReadStatus = function(bookId) {
        const book = shelf.find(item => item.id === bookId);
        if (book) {
            book.read = !book.read;
            localStorage.setItem('shelf', JSON.stringify(shelf));
            renderShelf();
        }
    };
     window.openBookPopup = function(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    
    closeBookPopup();
    
    const popupHTML = `
        <div class="book-popup-overlay" id="bookPopup">
            <div class="book-popup-content">
                <span class="book-popup-close" onclick="closeBookPopup()">&times;</span>
                <div class="row">
                    <div class="col-md-4">
                        <img src="${book.cover || 'https://via.placeholder.com/200x300?text=Capa+Indispon%C3%ADvel'}" 
                             alt="Capa do livro ${book.title}" class="book-popup-img">
                    </div>
                    <div class="col-md-8">
                        <h3 class="text-bordo">${book.title}</h3>
                        <h5 class="autorClaro">${book.author}</h5>
                        <p><small class="text-muted">${book.genre}</small></p>
                        <p class="mt-3">${book.description || 'Descrição não disponível.'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    
    void document.getElementById('bookPopup').offsetWidth;
    
  
    document.getElementById('bookPopup').classList.add('active');
    document.body.style.overflow = 'hidden';
};

    window.closeBookPopup = function() {
    const popup = document.getElementById('bookPopup');
    if (popup) {
        popup.classList.remove('active');
        
       
        setTimeout(() => {
            if (popup.parentNode) {
                popup.remove();
            }
            document.body.style.overflow = 'auto';
        }, 300);
    }
};

    
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('bookPopup');
        if (popup && e.target === popup) {
            closeBookPopup();
        }
    });
    init();
});