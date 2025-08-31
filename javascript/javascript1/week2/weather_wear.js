function clothesToWear(degree) {
    if (degree < -10) {
      return "Winter jacket and warm pants + thermal underwear"
    }else if (degree < 0 && degree >= -10) {
      return "Winter jacket and warm pants"
    }else if(degree >= 0 && degree<= 10){
      return "Jacket + jeans"
    }else if(degree > 10 && degree <= 17) {
      return "Light sweatshirt + jeans"
    } else {
      return "Shorts + T-shirt"
    }
  }
  
  console.log(clothesToWear(2))
  