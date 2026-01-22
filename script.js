const botao = document.getElementById('btnGerar');

botao.addEventListener("click", function(){
    console.log("clicado!")


    const nomeselecionado = document.querySelector('input[name="nomesoc"]:checked')
    if(nomeselecionado){
        console.log(nomeselecionado.value)
    }else{
        console.log("Não foi selecionado nenhum nome")
    }

    /******************************************************************************************************** */

    const statusSTP = document.querySelector('input[name="statusSTP"]:checked')
    
    let statusSTPvalor = 'Não informado';

    if(statusSTP){
        statusSTPvalor = statusSTP.value
    }
    console.log(statusSTPvalor)

    const statusSTP2 = document.querySelector('input[name="statusSTP2"]:checked')

    let statusSTP2valor = 'Não informado';

    if(statusSTP2){
        statusSTP2valor = statusSTP2.value
    }

     const statusSTP3 = document.querySelector('input[name="statusSTP3"]:checked')

    let statusSTP3valor = 'Não informado';

    if(statusSTP3){
        statusSTP3valor = statusSTP3.value
    }

     const statusSTP4 = document.querySelector('input[name="statusSTP4"]:checked')

    let statusSTP4valor = 'Não informado';

    if(statusSTP4){
        statusSTP4valor = statusSTP4.value
    }
    
     const statusSTP5 = document.querySelector('input[name="statusSTP5"]:checked')

    let statusSTP5valor = 'Não informado';

    if(statusSTP5){
        statusSTP5valor = statusSTP5.value
    }

     const statusSTP6 = document.querySelector('input[name="statusSTP6"]:checked')

    let statusSTP6valor = 'Não informado';

    if(statusSTP6){
        statusSTP6valor = statusSTP6.value
    }

    const statusSTP7 = document.querySelector('input[name="statusSTP7"]:checked')

    let statusSTP7valor = 'Não informado';

    if(statusSTP7){
        statusSTP7valor = statusSTP7.value
    }

    const statusSTP8 = document.querySelector('input[name="statusSTP8"]:checked')

    let statusSTP8valor = 'Não informado';

    if(statusSTP8){
        statusSTP8valor = statusSTP8.value
    }

    let adsite = document.getElementById('adsite').value;

    console.log(adsite)
/*************************************************************************************************** */
    const explore = document.querySelector('input[name="statusEXPLORE"]:checked')

    let statusEXPLOREvalor = "Não informado";

    if(explore){
        statusEXPLOREvalor = explore.value
    }

    let adexplore = document.getElementById('adexplore').value;

 /********************************************************************************************************* */
    const prtgdado = document.querySelector('input[name="dadosPRTG"]:checked')

    let prtgdadovalor = "Não informado";

    if(prtgdado){
        prtgdadovalor = prtgdado.value
    }

    let adado = document.getElementById('adado').value;

 
    const prtgvoz = document.querySelector('input[name="vozPRTG"]:checked')

    let prtgvozvalor = "Não informado"

    if(prtgvoz){
        prtgvozvalor = prtgvoz.value
    }

    let advoz = document.getElementById('advoz').value;

 /*********************************************************************************************************** */ 
 
    const ars = document.querySelector('input[name="ARS"]:checked')

    let arsvalor = "Não informado"
     
    if(ars){
        arsvalor = ars.value;
    }

    let adars = document.getElementById('adARS').value;


    const gtpc = document.querySelector('input[name="GTPC"]:checked')

    let gtpcvalor = "Não informado"

    if(gtpc){
        gtpcvalor = gtpc.value;
    }

    let adgtpc = document.getElementById('adGTPc').value;


    const ggsn = document.querySelector('input[name="GGSN"]:checked')

    let ggsnvalor = "Não informado"

    if(ggsn){
        ggsnvalor = ggsn.value;
    }

    let adggsn = document.getElementById('adGGSN').value;

    /***************************************************************************************************** */

    const radius = document.querySelector('input[name="RAD"]:checked')

    let radiusvalor = "Não informado"

    if(radius){
        radiusvalor = radius.value;
    }

    let adrad = document.getElementById('adrad').value

    /****************************************************************************************************** */

    const asr = document.querySelector('input[name="ASR"]:checked')

    let asrvalor = "Não informado"

    if(asr){
        asrvalor = asr.value;
    }

    let adasr = document.getElementById('adasr').value

    /*************************************************************************************************** */

    const asr2 = document.querySelector('input[name="ASR2"]:checked')

    let asr2valor = "Não informado"

    if(asr2){
        asr2valor = asr2.value;
    }

    let adasr2 = document.getElementById('adasr2').value

    /*************************************************************************************************** */

    let ai = document.getElementById('ai').value || 0;    
    let cn = document.getElementById('cn').value || 0;
    let ca = document.getElementById('ca').value || 0;
    let cd = document.getElementById('cd').value || 0;
    let ti = document.getElementById('ti').value || 0;
    let te = document.getElementById('te').value || 0;
    let bas = document.getElementById('bas').value || 0;
    let inc = document.getElementById('inc').value || 0;

    /***************************************************************************************************** */

    const sgeral = document.querySelector('input[name="sg"]:checked')

    let sgeralvalor = "Não informado"

    if(sgeral){
        sgeralvalor = sgeral.value;
    }
    let adsgeral = document.getElementById('adsg').value

    /*************************************************************************************************** */

    let incelemento = document.getElementById('inc_elemento').value; 
    let incdescricao = document.getElementById('inc_descricao').value; 
    let incimpacto = document.getElementById('inc_impacto').value; 
    let incinicio = document.getElementById('inc_inicio').value; 
    let incstatus = document.getElementById('inc_status').value; 
    let incacoes = document.getElementById('inc_acoes').value; 
    let incproximos = document.getElementById('inc_proximos').value; 
    let incchamado = document.getElementById('inc_chamado').value; 
    let incfornecedor = document.getElementById('inc_fornecedor').value; 

    let atividades = document.getElementById('atividades_p').value

/************************************************************************************************************ */
    let data = document.getElementById('data').value;
    console.log(data)

    if(data){
        const [ano, mes, dia] = data.split("-");
        data = `${dia}/${mes}/${ano}`;
    }

    let hora = document.getElementById('hora').value;
    console.log(hora)


/******************************************************************************************************* */
    let textoemail = `
    Checklist noturno

    data:${data}
    hora:${hora}
    Plantonista: ${nomeselecionado ? nomeselecionado.value : "Não mencionado"}

    STP

    Status:
    LOCAL_SITE1_VIRTUAL_STP103_M3UA_ALARM (1103):
             ${statusSTPvalor}
    LOCAL_SITE1_VIRTUAL_STP103_M3UA_ALARM (1103):
             ${statusSTP2valor}
    LOCAL_SITE1_VIRTUAL_STP104_M3UA_ALARM (1104):
             ${statusSTP3valor}
    LOCAL_SITE1_VIRTUAL_STP104_M3UA_ALARM (1104):
             ${statusSTP4valor}
    VIVO_BARB_HOST_STP02_M2PA_ALARM (4526):
             ${statusSTP5valor}
    VIVO_BARB_HOST_STP02_M2PA_ALARM (4526):
             ${statusSTP6valor}
    VIVO_VVJB_HOST_STP01_M2PA_ALARM (159):
             ${statusSTP7valor}
    VIVO_VVJB_HOST_STP01_M2PA_ALARM (159):
             ${statusSTP8valor}
    observações:${adsite}

    EXPLORE 

    status:${statusEXPLOREvalor}
    observações:${adexplore}

    PRTG
    
    Dados
    status:${prtgdadovalor}
    Observações:${adado}

    Voz
    status:${prtgvozvalor}
    Observações:${advoz}

    ARS/GTPc

    Status

    ARS:${arsvalor}  
    Observações:${adars}

    GTPc:${gtpcvalor}
    Observações:${adgtpc}

    GGSN(X):${ggsnvalor}
    Observações:${adggsn}

    Protocols /Radius Monitor V2 - Access Request/Accept / Reject (All - All)

    Status:${radiusvalor}
    Observações:${adrad}

    Radius ASR Accounting Virtueyes
    
    Status:${asrvalor}
    Observações:${adasr}

    Radius ASR Accounting (All - acc_radiuslinksfield)

    status:${asr2valor}
    Observações:${adasr2}

    Jira

    Aguardando informação:${ai}
    Casos novos:${cn} 
    Casos em andamento:${ca}
    Casos Devolvidos:${cd} 
    Tramitação interna:${ti} 
    Tramitação externa:${te} 
    BAs:${bas}
    Incidentes:${inc}

    Resumo Geral da rede

    Situação Geral da rede:
    ${sgeralvalor}
    Observações:${adsgeral}

    INCIDENTES EM ANDAMENTO (Caso haja)

    Elemento/Alarme:${incelemento}
    Descrição:${incdescricao}
    Impacto:${incimpacto}
    Data/Hora de início:${incinicio}
    Status atual:${incstatus}
    Ações realizadas:${incacoes}
    Próximos passos:${incproximos}
    Número do chamado:${incchamado}
    Fornecedor/Área:${incfornecedor}

    ATIVIDADES PENDENTES / ACOMPANHAMENTO:

    ${atividades}        

   
`
    const mostrar = document.getElementById('mostrar');
mostrar.value = textoemail;
})



