const slugify = ( text ) => {
        return text
        .toString()
        .normalize( 'NFD' )                   // split an accented letter in the base letter and the acent
        .replace( /[̀-ͯ]/g, '' )   // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/s+/g, '-')
        .replace(/[^w-]+/g, '')
        .replace(/--+/g, '-'); 
      };
      
      class SkuData {
              data() {
                return {
                  permalink: "/data/sku/{{page.fileSlug}}.json"
                };
              }
            
              render(data) {
      
                let item = {}
                try {
                  const skus = {};
                  (data['sku-values'] || []).forEach( e => {
                    skus[e.property] = slugify(e.name)
                  })
                  item = {
                    "id": data.slug,
                    "price": data.price.value/100,
                    "compare-at-price": data['compare-at-price'],
                    "more-images": data['more-images'],
                    "image": data['main-image'].url || "",
                    "name": data.name,
                    "slug": data.slug,
                    "product": data.product,
                    "download-files": data['download-files'],
                    "sku-values": skus
                  }
                } catch(e) {
                  item = {}
                }
                
                return JSON.stringify(item);
              }
            }
            
            module.exports = SkuData;