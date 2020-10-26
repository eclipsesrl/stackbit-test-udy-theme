class SkuData {
        data() {
          return {
            permalink: "/data/sku/{{page.fileSlug}}.json"
          };
        }
      
        render(data) {
          const item = {
            "id": data.slug,
            "price": data.price.value/100,
            "compare-at-price": data['compare-at-price'],
            "more-images": data['more-images'],
            "image": data['main-image'].url || "",
            "name": data.name,
            "slug": data.slug,
            "product": data.product,
            "download-files": data['download-files'],
            "sku-values": data['sku-values']
          }
      
          return JSON.stringify(item);
        }
      }
      
      module.exports = SkuData;