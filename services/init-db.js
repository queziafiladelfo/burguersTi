db = db.getSiblingDB("burguer_db");
db.burguer_tb.drop();

db.burguer_tb.insertMany([
    {
      
        "id": 1,
        "name": "Supremo",
        "image": "https://www.folhadealphaville.com.br/images/articles/3963/b2ap3_amp_bullguer-lanca-red-neck-bacon-duplamente-defumado-geek-publicitario.jpg",
        "price": "R$10,00",
        
        "ingredients": "Pão tradicional, blend  de fraldinha 150g, bacon, queijo prato, shimeji, alface, tomate e cebola roxa.",
        "comments": {
            
            "review01": " Teste comentario 1 Supremo",
            "review02": " Teste comentario 2 Supremo",
            "review03": " Teste comentario 3 Supremo"
            
        }
        
      },
      {
        "id": 2,
        "name": "Valente",
        "image": "http://bigx.com.br/wp-content/uploads/2020/02/Picanha-Burger-Queijo.png",
        "price": "R$11,00",        
        "ingredients": "Pão tradicional, blend de fraldinha 150g, queijo coalho na chapa, cebola caramelizada, bacon, cebola rocha, alface e tomate e cebola.",
        "comments": {
          
          "review01": " Teste comentario 1 Valente",
          "review02": " Teste comentario 2 Valente",
          "review03": " Teste comentario 3 Valente"
          
      }
        
      },      
      {
        "id": 3,
        "name": "Corajoso",
        "image": "https://www.confeiteiradesucesso.com/wp-content/uploads/2019/03/hamburguergourmet-fb.jpg",
        "price": "R$12,00",        
        "ingredients": "Pão tradicional, 3 blend's de fraldinha 150g, mussarela, bacon, creme de cheddar, cebola roxa, alface e tomate.",
        "comments": {
         
          "review01": " Teste comentario 1 Corajoso",
          "review02": " Teste comentario 2 Corajoso",
          "review03": " Teste comentario 3 Corajoso"
          
      }
        
      },
      {
        "id": 4,
        "name": "Rochedo",
        "image": "https://paranaportal.uol.com.br/wp-content/uploads/2020/10/3907395c-fe31-487d-a075-e19e99eb0cc3-1024x829.jpg",
        "price": "R$13,00",        
        "ingredients": "Pão tradicional, blend  de fraldinha 150g, bacon, queijo prato, shimeji, alface, tomate e cebola roxa.",
        "comments": {
          
          "review01": " Teste comentario 1 Rochedo",
          "review02": " Teste comentario 2 Rochedo",
          "review03": " Teste comentario 3 Rochedo"
          
      }
        
      },
      {
        "id": 5,
        "name": "Divino",
        "image": "https://ogimg.infoglobo.com.br/in/22318020-42b-a9d/FT1086A/xHOB_Costela-BBQ_Credito-Ezio-Philot-e-Vinicius-Oliveira-1.jpg.pagespeed.ic.URqNOjzR_Y.jpg",
        "price": "R$14,00",
        "ingredients": "Pão australiano, 2 blend's de fraldinha 150g, bacon, massarela, cebola caramelizada, cebola roxa, alface e tomate.",
        "comments": {
          
          "review01": " Teste comentario 1 Divino",
          "review02": " Teste comentario 2 Divino",
          "review03": " Teste comentario 3 Divino"
          
      }
        
      },
      {
        "id": 6,
        "name": "Guerreiro",
        "image": "https://t1.uc.ltmcdn.com/pt/images/9/9/5/como_fazer_hamburguer_no_microondas_24599_600.jpg",
        "price": "R$15,00",
        "ingredients": "Pão tradicional, blend fraldinha 150g, blend de calabresa 150g, mussarela, bacon e cebola caramelizada.",
        "comments": {
          
          "review01": " Teste comentario 1 Guerreiro",
          "review02": " Teste comentario 2 Guerreiro",
          "review03": " Teste comentario 3 Guerreiro"
          
      }
        
      }


]);