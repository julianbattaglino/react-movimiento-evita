import './Movimiento.css';
import { Helmet } from "react-helmet";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Movimiento = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Movimiento Evita Azul - Sobre del movimiento</title>
                <meta name="description" content="El Movimiento Evita es un movimiento social, piquetero y sindical, y una agrupación política de Argentina, que se define de ideología peronista, nacional, popular y revolucionaria."></meta>
            </Helmet>

            <div className="global-container">
                <h1 className="welcome-title">Acerca del&nbsp;<span className="bolder"> Movimiento Evita Azul.</span></h1>
                <p>El Movimiento Evita es un movimiento social, piquetero y sindical, y una agrupación política de Argentina, que se define de ideología peronista, nacional, popular y revolucionaria.7​ Fue creado en 2004 y formó parte del Frente para la Victoria que gobernó entre 2003 y 2015. En 2016 el Movimiento Evita se separó del bloque parlamentario del Frente para la Victoria, formando un bloque propio denominado en un principio Peronismo para la Victoria.8​ Desde 2019 integra el gobernante Frente de Todos.</p>
                <p>Su nombre fue adoptado como homenaje a Eva Perón. Integra la Confederación de Trabajadores de la Economía Popular (CTEP).</p>
                <p>Su secretario general es Emilio Pérsico. Otros referentes del movimiento son el diputado nacional Leonardo Grosso, el periodista y abogado Fernando Chino Navarro y el responsable de Evita-CTEP Esteban Castro, entre otros.</p>
                <p>El Movimiento Evita surgió en 2004, como resultado de la unión de diversos grupos provenientes del Movimiento Patriótico Revolucionario Quebracho y de la Corriente de Trabajadores Desocupados Aníbal Verón, con arraigo principalmente en el conurbano bonaerense.9​</p>
                <p>El primer año el Movimiento Evita se organizó como movimiento piquetero de desocupados (MTD), pero luego redefinió su finalidad para reorganizarse como ala popular revolucionaria del kirchnerismo, actuando con amplia autonomía tanto dentro como afuera del Partido Justicialista. En 2007 Emilio Pérsico fue nombrado secretario de Organizaciones Territoriales del PJ. Una de las características inusuales del Movimiento Evita es que su secretario electoral ha carecido de interés en ocupar cargos políticos.9​</p>
                <p>El Movimiento Evita, como otros movimientos de desocupados, concede un papel central a la organización de sus integrantes para trabajar cooperativamente, principalmente en la construcción de viviendas populares, financiadas por el Estado. La política de poder popular del Movimiento Evita fue explicada en estos términos por uno de sus integrantes:</p>
                <q>La organización popular determina la posibilidad para los participantes de apropiarse de las decisiones de políticas públicas y de la asignación de recursos. Esto genera una relación mucho más sólida de las políticas públicas con sus beneficiarios, que hace que este proceso sea más difícil de revertir. Cuando una persona en una cooperativa construye cincuenta casas, ¿cómo se le puede decir que ya no tiene su empleo? En cambio cuando las casas son construidas por empresas privadas, simplemente se presenta en otra licitación estatal. Esto último no produce una relación de poder en la que el pueblo participa activamente. A esto le llamamos política social, como la llamó Evita: "la fuerza popular organizada", "el poder popular".</q>
            </div>
            <Stack className="avatars-container" direction="row" spacing={2}>
                <Avatar alt="Silvia Casares Aavatar" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Tata Avatar" src="/static/images/avatar/2.jpg" />
            </Stack>


        </>
    )

}

export default Movimiento;