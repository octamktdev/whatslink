import React from "react";

import './Footer.scss'
import ilustracaoOcta from './img/ilustracao-octadesk-canais.png'

const Footer = () => (
    <footer className="app-footer">
        <section className="first-line-footer">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-5">
                        <img src={ilustracaoOcta} className="ilustracao-octadesk img-fluid"/>    
                    </div>
                
                    <div className="col-md-5">
                        <div className="chamada-octadesk">
                            <h3>Atender múltiplos canais
                                nunca foi tão fácil</h3>
                            <p>
                            Conecte suas principais plataformas em um único lugar. Tenha WhatsApp, Facebook, Instagram e muito mais pelo Octadesk.
                            </p>
                        </div>
                        <a type="button" id="btn-experimente-octa-footer" className="btn-blue-1874D9" href="https://app.octadesk.com/sign-up?_gl=1%2ay4znw6%2aga4__ga%2aMTY0OTMwMDk4OS4xNjMxNzM4ODkx%2aga4__ga_88PTB7Z07Z%2aMTY0ODY2MTUxMi4zMjAuMS4xNjQ4NjYyMTI1LjU5&_ga=2.79692951.1246785857.1648470960-1649300989.1631738891" target="_blank">Experimente Grátis</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="second-line-footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md text-center">
                        <p>2022 © <a href="https://pt.octadesk.com/" id="btn-octadesk-footer" target="_blank">Octadesk</a>. Desenvolvido com amor, de São Paulo para o mundo.</p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
)

export default Footer