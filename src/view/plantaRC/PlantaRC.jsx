import React from 'react'
import Menu from "../../components/menu/Menu"

import exportFromJSON from 'export-from-json'



const PlantaRC = () => {

  const onExportEsterilF2000 = ()=>{
    fetch('http://192.168.2.3:1880/reportEsteril')
    .then(res => res.json())
    .then((response)=>{
      const fileName = "dadosEsteril_F2000_RC";
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({data:response,fileName, exportType,});
    });
  };

  /* Função de expotação dos dados de fermentação */

  const onExportFermentacaoF2000 = ()=>{
    fetch('http://192.168.2.3:1880/reportFermentacao')
    .then(res => res.json())
    .then((response)=>{
      const fileName = "dadosFermentacao_F2000_RC";
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({data:response,fileName, exportType,});
    });
  };
  
  return (
    <div>
    <Menu />
    
      <section id="departments" class="departments">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2 id="main">Fementadores da planta RC</h2>
          
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-2 mb-2 mb-lg-0">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                  <h4>F2000</h4>
                                
                  
                </a>
                
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                  <h4>F300-1</h4>
                 
                </a>
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                  <h4>F300-2</h4>
                 
                </a>
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                  <h4>F6000</h4>
                 
                </a>
              </li>
             
            </ul>
          </div>
          <div class="col-lg-8">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <h3>Fermentador F2000</h3>
                <div class="card-body p-3">
                  <div class="row">

                 
                      <p>Exporta dados do banco em excel.</p>
                    
                    <button style={{border: '1px solid #3fbbc0', marginRight:'6px'}} class="tablink" onClick={onExportEsterilF2000} >Esterilização</button>
                    
                    <button style={{border: '1px solid #3fbbc0'}} class="tablink" onClick={onExportFermentacaoF2000}>Fermentação</button>
                
                    <div id="Home" class="tabcontent">                      
                  
                    
                    </div>
                
                    <div id="News" class="tabcontent">
                     
                    </div>
               
            
          </div>
        </div>              
                 
                
              </div>
              <div class="tab-pane" id="tab-2">
                <h3>Fermentador F300-1</h3>
                <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-2.jpg" alt="" class="img-fluid" />
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              
              </div>
              <div class="tab-pane" id="tab-3">
                <h3>Fermentador F300-2</h3>
                <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-3.jpg" alt="" class="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div class="tab-pane" id="tab-4">
                <h3>Fermentador F6000</h3>
                <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src="assets/img/departments-4.jpg" alt="" class="img-fluid" />
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> 
      </div>
  )

  
  function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }  
   
}

export default PlantaRC