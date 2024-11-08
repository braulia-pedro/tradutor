const dicionario = [
    { ingles: "The", portugues: "A" },
    { ingles: "university", portugues: "universidade" },
    { ingles: "an", portugues: "uma" },
    { ingles: "located", portugues: "localizada" },
    { ingles: "in the", portugues: "na" },
    { ingles: "on the", portugues: "no" },
    { ingles: "About", portugues: "Sobre" },
    { ingles: "city", portugues: "cidade" },
    { ingles: "of", portugues: "de" },
    { ingles: "students", portugues: "alunos" },
    { ingles: "Sciences", portugues: "Ciencias" },
    { ingles: "is", portugues: "é" },
    { ingles: "and", portugues: "e" },
    { ingles: "an" || "a", portugues: "uma" },
    { ingles: "Translate", portugues: "traduzir" },
    { ingles: "focusing", portugues: "focando" },
    { ingles: "page", portugues: "pagina" },
    { ingles: "institution", portugues: "instituição" },
    { ingles: "excellence", portugues: "excelência" },
    { ingles: "higher education", portugues: "ensino superior" },
    { ingles: "aims", portugues: "visa" },
    { ingles: "to be", portugues: "ser" },
    { ingles: "private", portugues: "privada" },
    { ingles: "education", portugues: "educação" },
    { ingles: "training", portugues: "formação" },
    { ingles: "knowledge", portugues: "conhecimento" },
    { ingles: "programs", portugues: "programas" },
    { ingles: "undergraduate", portugues: "graduação" },
    { ingles: "postgraduate", portugues: "pós-graduação" },
    { ingles: "research", portugues: "pesquisa" },
    { ingles: "student", portugues: "estudante" },
    { ingles: "faculty", portugues: "faculdade" },
    { ingles: "teacher", portugues: "professor" },
    { ingles: "reference", portugues: "referência" },
    { ingles: "development", portugues: "desenvolvimento" },
    { ingles: "challenges", portugues: "desafios" },
    { ingles: "global", portugues: "global" },
    { ingles: "ethical", portugues: "ético" },
    { ingles: "humanistic", portugues: "humanístico" },
    { ingles: "values", portugues: "valores" },
    { ingles: "research", portugues: "pesquisa" },
    { ingles: "innovation", portugues: "inovação" },
    { ingles: "contribute", portugues: "contribuir" },
    { ingles: "country", portugues: "país" },
    { ingles: "world", portugues: "mundo" },
    { ingles: "Our", portugues: "Nossa" },
    { ingles: "to provide", portugues: "prover" },
    { ingles: "courses", portugues: "cursos" },
    { ingles: "program", portugues: "programa" },
    { ingles: "social", portugues: "social" },
    { ingles: "of the", portugues: "dos" },
    { ingles: "arts", portugues: "artes" },
    { ingles: "science", portugues: "ciência" },
    { ingles: "law", portugues: "direito" },
    { ingles: "economics", portugues: "economia" },
    { ingles: "technology", portugues: "tecnologia" },
    { ingles: "engineering", portugues: "engenharia" },
    { ingles: "medicine", portugues: "medicina" },
    { ingles: "health", portugues: "saúde" },
    { ingles: "commerce", portugues: "comércio" },
    { ingles: "business", portugues: "negócios" },
    { ingles: "management", portugues: "gestão" },
    { ingles: "communication", portugues: "comunicação" },
    { ingles: "media", portugues: "mídia" },
    { ingles: "international", portugues: "internacional" },
    { ingles: "opportunity", portugues: "oportunidade" },
    { ingles: "internationalization", portugues: "internacionalização" },
    { ingles: "impact", portugues: "impacto" },
    { ingles: "programs", portugues: "programas" },
    { ingles: "graduate", portugues: "graduado" },
    { ingles: "postgraduate", portugues: "pós-graduado" },
    { ingles: "professionals", portugues: "profissionais" },
    { ingles: "leaders", portugues: "líderes" },
    { ingles: "researchers", portugues: "pesquisadores" },
    { ingles: "society", portugues: "sociedade" },
    { ingles: "international", portugues: "internacional" },
    { ingles: "citizens", portugues: "cidadãos" },
    { ingles: "future", portugues: "futuro" },
    { ingles: "advancement", portugues: "avanço" },
    { ingles: "faculty", portugues: "faculdade" },
    { ingles: "members", portugues: "membros" },
    { ingles: "team", portugues: "equipe" },
    { ingles: "learning", portugues: "aprendizado" },
    { ingles: "teaching", portugues: "ensino" },
    { ingles: "commitment", portugues: "compromisso" },
    { ingles: "diversity", portugues: "diversidade" },
    { ingles: "openness", portugues: "abertura" },
    { ingles: "academic", portugues: "acadêmico" },
    { ingles: "involvement", portugues: "envolvimento" },
    { ingles: "professionalism", portugues: "profissionalismo" },
    { ingles: "research", portugues: "pesquisa" },
    { ingles: "activities", portugues: "atividades" },
    { ingles: "knowledge", portugues: "conhecimento" },
    { ingles: "innovation", portugues: "inovação" },
    { ingles: "values", portugues: "valores" },
    { ingles: "challenges", portugues: "desafios" },
    { ingles: "quality", portugues: "qualidade" },
    { ingles: "excellence", portugues: "excelência" }
];



function traduzirPagina() {
    dicionario.forEach(par => {
        document.body.innerHTML = document.body.innerHTML.replace(
            new RegExp(`\\b${par.ingles}\\b`, "gi"), 
            par.portugues
        );
    });
}


function adicionarBotaoTraduzir() {
    const botao = document.createElement("button");
    botao.innerText = "Translate Page";
    botao.style.position = "fixed";
    botao.style.bottom = "10px";
    botao.style.right = "10px";
    botao.style.padding = "10px";
    botao.style.backgroundColor = "#4285f4";
    botao.style.color = "white";
    botao.style.border = "none";
    botao.style.borderRadius = "5px";
    botao.style.cursor = "pointer";
    

    botao.onclick = traduzirPagina;

    document.body.appendChild(botao);
}


window.onload = adicionarBotaoTraduzir;
