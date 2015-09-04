function getLanguageResources() {
    var fr = []; 
    var nl = [];
    var en = [];

    /////////////////
    // Nav
    /////////////////

    // nav_welcome
    fr.nav_welcome = "Bienvenue"; 
    en.nav_welcome = "Welcome"; 
    nl.nav_welcome = "Welkom"; 

    // nav_about
    fr.nav_about = "A propos";
    en.nav_about = "About";
    nl.nav_about = "Omtrent";

    // nav_resume
    fr.nav_resume = "CV";
    en.nav_resume = "Resume";
    nl.nav_resume = "CV";

    /////////////////
    // Caption
    /////////////////

    // Caption 1
    fr.caption_1 = "Je suis créatif"; 
    en.caption_1 = "I'm creative"; 
    nl.caption_1 = "Ik ben creatief"; 

    // Caption 2
    fr.caption_2 = "J'aime déjà votre projet!";
    en.caption_2 = "I already love your project!";
    nl.caption_2 = "Ik hou van al uw project!";

    // Caption 3
    fr.caption_3 = "Je suis Louis Borsu";
    en.caption_3 = "I'm Louis Borsu";
    nl.caption_3 = "Ik ben Louis Borsu";

    // Versatile developer
    fr.versatile_developer = "Développeur polyvalent";
    en.versatile_developer = "Versatile Developer";
    nl.versatile_developer = "Veelzijdige Developer";

    

    /////////////////
    // Welcome
    /////////////////

    // welcome_text
    fr.welcome_text = "<p class='drop-cap'>Je me définirais comme un rêveur multimédia. </p><p> J'ai commencé à travailler comme ingénieur du son depuis que j'ai quinze ans. J'ai travaillé pour plusieurs sociétés de live mais aussi en tant que freelance. J'ai une grande expérience en Live. Aujourd'hui, 12 ans d'expérience. </p><p> Depuis 2006, j'ai commencé à travailler dans les studios, et j'ai commencé la construction du mien (Satprod-studio). </p><p> Dernièrement, je me suis concentré sur le versant technique, j'ai construit plusieurs équipements électroniques personnalisés, développé des Back Office Web très spécialisés, de nombreux systèmes automatisés pour le quotidien et pour le milieu des spectacles, etc .. </p><p> Entre 2012 et 2014, j'ai travaillé au SAE Institute (Bruxelles et en ligne) en tant que professeur, administrateur système (IT) et développeur. </p><p> Depuis février 2014, je travaille entièrement pour les activités techniques de Satprod. Ma tâche principale est de concevoir, développer et configurer des procédés de haute technologie automatisés pour des utilisations artistiques, industrielles, personnelles et commerciales (IPTV, domotique, mesures énergétiques, etc ..). </p><p> Je suis déjà intéressé par votre projet et nous devrions s'assoir autour d'une table pour discuter de vos idées. </p><p> N'hésitez pas à me contacter ! </p>"; 
    en.welcome_text = "<p class='drop-cap'>I would define myself as a multimedia dreamer.</p><p>I've started as sound engineer since I'm fifteen. I've worked for several live companies and also as a freelancer. I've got a great experience in Live sound. Nowadays, 12 years of experience.</p><p>Since 2006, I've started working in Studios, and started building mine (Satprod-studio).</p><p>Lately, I turned to be more a technical guy, I'm building custom electronic gear, develop high-featured Web Back Office, automated living environemnt and live shows, etc...</p><p>Between 2012 and 2014, I've worked at SAE Institute (Brussels and Online) as a teacher, IT Sysadmin and Developer.</p><p>Since february 2014, I'm fully working for the technical activities inside Satprod. My main job is to design, develop and setup high-tech automated process for personnal, artistic, industrial and commercial uses (IPTv, Domotic Automation, Energy Scaling, etc...).</p><p>I'm already interested by your project and we definitely have to take a sip together to discuss about your ideas.</p><p>Be welcome to contact me!</p>"; 
    nl.welcome_text = "<p class='drop-cap'>Ik zou mezelf omschrijven als een multimedia dromer. </p><p>Ik heb begonnen als geluidstechnicus wanner ik vijftien was. Ik heb gewerkt voor diverse live-bedrijven en ook als freelancer. Ik heb een geweldige ervaring in Live geluid. Vandaag, 12 jaar ervaring. </p><p> Sinds 2006 ben ik gaan werken in de studio, en begonnen met de bouw van mijn (Satprod-studio). </p><p> Laatste tijd, draaide ik me om meer een techneut te zijn, ik ben het bouwen van aangepaste elektronische apparatuur, de ontwikkeling van high-featured Web Back Office, geautomatiseerde woon environemnt en live shows, enz. .. </p><p> Tussen 2012 en 2014 heb ik gewerkt bij SAE Institute (Brussel en Online) als leraar, IT Sysadmin en Developer. </p><p> Sinds februari 2014 ben ik volledig werkzaam voor de technische activiteiten binnen Satprod. Mijn belangrijkste taak is het ontwerpen, ontwikkelen en setup high-tech geautomatiseerd proces voor personnal, artistieke, industrieel en commercieel gebruik (IPTV, Domotic Automation, Energy Scaling, enz. ..). </p><p> Ben ik al geïnteresseerd in uw project en we hebben zonder twijfel een slokje nemen samen om te discussiëren over uw ideeën. </p><p> Wees van harte welkom om me te contacteren! </p>"; 

    var resources = [];
    resources.fr = fr;
    resources.en = en;
    resources.nl = nl;
 
    return resources;
}

function changeLanguage(lang) {
    var langResources = getLanguageResources()[lang];
 
    $("span[data-name='lbl").each(function (i, elt) {
        $(elt).empty();
        $(elt).html(langResources[$(elt).data("caption")]);
    });
}