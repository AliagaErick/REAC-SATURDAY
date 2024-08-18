import { Fragment } from 'react';
import Mensaje from './componente/Mensaje'
import Encabezado from './componente/encabezado'
import Pie from './componente/pie'
import Ciudad from './componente/Ciudad'


function App() {

  return (
    <>
      <Encabezado />
      <Ciudad
        nombre="Lima"
        descripcion="Capital del Perú"
        imagen='https://www.xtravelperu.com/wp-content/uploads/2017/09/lima-miraflores-x-travel-peru.jpg'
      />
      <Ciudad
        nombre="Arequipa"
        descripcion="Encantadora tierra volcánica"
        imagen="https://www.peru.travel/Contenido/Destino/Imagen/es/3/1.2/Principal/Plaza%20de%20Armas%20Arequipa.jpg" />
      <Ciudad
        nombre="Iquitos"
        descripcion="Tierra de la Amazonia Peruana"
        imagen="https://cdn.getyourguide.com/img/tour/a2677d4cf9840b66312f63f6d40f8ed764fa0b294db2e4d7396cb67ba0ea750a.jpg/148.jpg" />
      <Ciudad
        nombre="Huancayo"
        descripcion="Ciudad Incontrastable"
        imagen="https://elcomercio.pe/resizer/MomBP5Z1dhhWgdD9yQlp-jyxN_E=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DYGSO62OIVB47HSWMITRLBD7CM.jpg" />

      <Pie />
    </>
  );

}

export default App;