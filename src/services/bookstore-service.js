
export default class BookstoreService {

    async getResource() {
        const res = await fetch("https://terminal.yst.ru/api/xml/tyre/json/d3bb1c5a-03be-434f-b324-58dbb322e0e3");

        if (!res.ok) {
            throw new Error(`Could not fetch` +
                `, received ${res.status}`)
        }


        return await res.json();
    }


    async getBooks() {
        const data = await this.getResource();

        return data.slice(100, 112);
    }

 /* data = [
      {
          code: 9296563,
          article: 1150012,
          name:"Кама НК-241 (КАМА 365) 175/65R14 82H M+S",
          brand:"КАМА",
          type:"Легковые летние",
          model:"НК-241",
          width:175,
          height:65,
          diametr:14,
          speed_index:"H",
          load_index:82,
          thorn:0,
          runflat:0,
          season:"Лето",
          price:1558.00,
          price_recomend_rozn:1746.00,
          picture:"https://images.yst.ru/storage/9296563.jpg",
          weight:7.70,
      },
      {
          code: 9296560,
          article: 1150012,
          name:"Кама НК-241 (КАМА 365) 175/70R13 82H M+S",
          brand:"КАМА",
          type:"Легковые летние",
          model:"НК-241",
          width:175,
          height:70,
          diametr:13,
          speed_index:"K",
          load_index:82,
          thorn:0,
          runflat:0,
          season:"Зима",
          price:1558.00,
          price_recomend_rozn:1700.00,
          picture:"https://images.yst.ru/storage/9296563.jpg",
          weight:7.75,
      },
      {
          code: 9296511,
          article: 1150012,
          name:"Кама НК-241 (КАМА 365) 175/70R13 82H M+S",
          brand:"КАМА",
          type:"Легковые летние",
          model:"НК-241",
          width:175,
          height:70,
          diametr:13,
          speed_index:"K",
          load_index:82,
          thorn:0,
          runflat:0,
          season:"Зима",
          price:1558.00,
          price_recomend_rozn:1700.00,
          picture:"https://images.yst.ru/storage/9296563.jpg",
          weight:7.75,
      },
      {
          code: 9296569,
          article: 1150012,
          name:"Кама НК-241 (КАМА 365) 175/70R13 82H M+S",
          brand:"КАМА",
          type:"Легковые летние",
          model:"НК-241",
          width:175,
          height:70,
          diametr:13,
          speed_index:"K",
          load_index:82,
          thorn:0,
          runflat:0,
          season:"Зима",
          price:1558.00,
          price_recomend_rozn:1700.00,
          picture:"https://images.yst.ru/storage/9296563.jpg",
          weight:7.75,
      },
      {
          code: 9296519,
          article: 1150012,
          name:"Кама НК-241 (КАМА 365) 175/70R13 82H M+S",
          brand:"КАМА",
          type:"Легковые летние",
          model:"НК-241",
          width:175,
          height:70,
          diametr:13,
          speed_index:"K",
          load_index:82,
          thorn:0,
          runflat:0,
          season:"Зима",
          price:1558.00,
          price_recomend_rozn:1700.00,
          picture:"https://images.yst.ru/storage/9296563.jpg",
          weight:7.75,
      },
      {
          code: 92965622,
          article: 1150012,
          name:"Кама НК-241 (КАМА 365) 175/70R13 82H M+S",
          brand:"КАМА",
          type:"Легковые летние",
          model:"НК-241",
          width:175,
          height:70,
          diametr:13,
          speed_index:"K",
          load_index:82,
          thorn:0,
          runflat:0,
          season:"Зима",
          price:1558.00,
          price_recomend_rozn:1700.00,
          picture:"https://images.yst.ru/storage/9296563.jpg",
          weight:7.75,
      },

  ];

  getBooks() {
    return new Promise((resolve, reject) => {
     resolve()
    });
  }*/
}