export default function App() {
  return (
    <>
      <div class="header">
        <div class="title">DrivenEats</div>
        <div class="subtitle">Sua comida em 6 minutos</div>
      </div>
      <div class="main">
        <div class="options-wrapper">
          <div class="options-header">Primeiro, seu prato</div>
          <div class="options-list">
            <div class="option food">
              <img
                src="assets/frango_yin_yang 1.png"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Frango Yin Yang</div>
              <div class="option-description">
                Um pouco de batata, um pouco de salada
              </div>
              <div class="option-price">
                R$ <span class="price">14,90</span>
              </div>
              <div class="check">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
            <div class="option food">
              <img
                src="assets/hamburguer.jfif"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Hamburgão</div>
              <div class="option-description">Esse bixo é gostoso em</div>
              <div class="option-price">
                R$ <span class="price">18,90</span>
              </div>
              <div class="check">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
            <div class="option food pasta margin-right">
              <img
                src="assets/macarrao.jfif"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Macarrãozão</div>
              <div class="option-description">
                Macarrão da hora feito na hora
              </div>
              <div class="option-price">
                R$ <span class="price">17,90</span>
              </div>
              <div class="check">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="options-wrapper">
          <div class="options-header">Agora, sua bebida</div>
          <div class="options-list">
            <div class="option drink">
              <img
                src="assets/coquinha_gelada 1.png"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Coquinha gelada</div>
              <div class="option-description">
                Uma coquinha gelada e no cacpricho
              </div>
              <div class="option-price">
                R$ <span class="drink">5,00</span>
              </div>
              <div class="check">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
            <div class="option drink">
              <img
                src="assets/juice.jfif"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Suquinho</div>
              <div class="option-description">
                Um suquinho gelado e no cacpricho
              </div>
              <div class="option-price">
                R$ <span class="price">6,00</span>
              </div>
              <div class="check">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
            <div class="option drink margin-right">
              <img
                src="assets/tea.jpg"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Chazinho</div>
              <div class="option-description">
                Um chazinho gelado e no cacpricho
              </div>
              <div class="option-price">
                R$ <span class="price">7,00</span>
              </div>
              <div class="check">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="options-wrapper">
          <div class="options-header">Por fim, sua sbremesa</div>
          <div class="options-list">
            <div class="option dessert">
              <img
                src="assets/pudim 1.png"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Pudim</div>
              <div class="option-description">Pudinzinho bem caprichado</div>
              <div class="option-price">
                R$ <span class="price">8,00</span>
              </div>
              <div class="check">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
            <div class="option dessert">
              <img
                src="assets/chico.jpg"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Chico balanceado</div>
              <div class="option-description">
                Chico balanceado no capricho né
              </div>
              <div class="option-price">
                R$ <span class="price">9,00</span>
              </div>
              <div class="check">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
            <div class="option dessert margin-right">
              <img
                src="assets/cupcakes.jfif"
                alt="Seu celular não consegue carregar a imagem"
              />
              <div class="option-name">Cupcakes</div>
              <div class="option-description">Esses não estão no capricho</div>
              <div class="option-price">
                R$ <span class="price">3,00</span>
              </div>
              <div class="check ">
                <img src="assets/Vector.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="confirm-wrapper">
        <div class="confirm-button">
          <div>Selecione os 3 itens para fechar o pedido</div>
        </div>
      </div>
      <div class="confirm-wrapper confirmation">
        <div class="confirm-button green-button" onclick="confirmScreen()">
          Fechar pedido
        </div>
      </div>

      <div class="confirm-page">
        <div class="confirm-box">
          <div class="confirm-header">Confirme seu pedido</div>
          <div class="confirm-line">
            <div class="confirm food"></div>
            <div class="confirm food price"></div>
          </div>
          <div class="confirm-line">
            <div class="confirm drink"></div>
            <div class="confirm drink price"></div>
          </div>
          <div class="confirm-line">
            <div class="confirm dessert"></div>
            <div class="confirm dessert price"></div>
          </div>
          <div class="confirm-line bold">
            <div>TOTAL</div>
            <div class="final price"></div>
          </div>
          <div class="final-confirm-button" onclick="whatsappMessage()">
            Tudo certo, pode pedir!
          </div>
          <div class="cancel" onclick="cancelButton()">
            Cancelar
          </div>
        </div>
      </div>
    </>
  );
}
