function calculate() {
    let visitasSite = document.getElementById('visitas_site_mensal').value;
    let leads = document.getElementById('leads_mensal').value;
    let oportunidades = document.getElementById('nmr_oportunidades').value;
    let vendas = document.getElementById('vendas_mensal').value;
    let ticketMedio = document.getElementById('ticket_medio').value;
    
    let tx_conversao_visitas_para_leads = (leads/visitasSite)*100;

    let tx_conversao_leads_para_ops = (oportunidades/leads)*100;

    let tx_conversao_ops_para_vendas = (vendas/oportunidades)*100;

    let result_octadesk = tx_conversao_leads_para_ops * 1.8;
    
    let double_vendas = (vendas * 0.8) + vendas;

    let ganho_vendas_mensais = vendas * 0.8;

    let faturamento_w_octa = ticketMedio * double_vendas;

    let acresc_receita_anual = double_vendas - ganho_vendas_mensais;

    let result_visitas = document.querySelector('#result_visitas')
    let result_leads = document.querySelector('#result_leads')
    let result_ql_octadesk = document.querySelector('#result_ql_octadesk')
    let result_double_vendas = document.querySelector('#result_double_vendas')
    let result_ticket_medio = document.querySelector('#result_ticket_medio')
    let result_acresc_vendas = document.querySelector('#result_acresc_vendas')
    let result_faturamento_w_octa = document.querySelector('#result_faturamento_w_octa')
    let result_acresc_receita_anual = document.querySelector('#result_acresc_receita_anual')


    result_visitas.innerHTML = visitasSite;
    result_leads.innerHTML = leads;
    result_ql_octadesk.innerHTML = result_octadesk.toFixed(1);
    result_double_vendas.innerHTML = double_vendas;
    result_ticket_medio.innerHTML = ticketMedio;
    result_acresc_vendas.innerHTML = ganho_vendas_mensais.toFixed(1);
    result_faturamento_w_octa.innerHTML = faturamento_w_octa.toFixed(2); 
    result_acresc_receita_anual.innerHTML = acresc_receita_anual.toFixed(2); 
}