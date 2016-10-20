import { PageItem } from './page.interface';

export const PageItems: PageItem[] = [
  {
    id:0,
    name:"about",
    primary:true,
    translation:"O příručce",
    content:`
      <h2>Tato příručka:</h2>
      <ul>
        <li>Je interaktivní prezentací, představující základní koncepty UX&nbsp;&&nbsp;UI</li>
        <li>Poukazuje na základní chyby při jejich implementaci</li>
      </ul>`
  },{
    id:1,
    name:"about",
    primary:false,
    translation:"UX vs UI",
    content:`
      <div class="container-fluid negative-margin">  
        <div class="row">      
          <div class="col-sm-6">
            <h3>UX</h3>
            <img class="example-img" src="public/images/mindmap.png"/>
          </div>
          <div class="col-sm-6">
            <h3>UI</h3>  
            <img class="example-img" src="public/images/UI.jpg"/>
          </div>
        </div>
      </div>
    `
  },{
    id:2,
    name:"about",
    primary:false,
    translation:"UX vs UI",
    content:`
      <div class="container-fluid negative-margin">  
        <div class="row">       
          <div class="col-sm-6">
            <h1>UX</h1>
            <img class="example-img enlarge-animate" src="public/images/mindmap.png"/>
            <div class="list-wrapper">
              <ul class="fade-in">
                <li>UX = User&nbsp;Experience</li>
                <li>Celkový uživatalský požitek z používáni služby či produktu</li>
                <li>Úzce spojen s pojmem použitelnosti (usability)</li>
                <li>Aplikace s dobrým UX by měla být ovladatelná prakticky kýmkoli a to bez použití manuálu.</li>
                <li>UX staví na předešlých zkušenostech uživatele</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <h1>UI</h1>  
            <img class="example-img enlarge-animate" src="public/images/UI.jpg"/>
            <div class="list-wrapper">
              <ul class="fade-in">
                <li>UI = User&nbsp;Interface = Uživatelské&nbsp;Rozhraní</li>
                <li>Prostředí ve kterém dochází k interakci mezi uživatelem a počítačem</li>
                <li>Jednotlivé obrazovky, funkční elementy (linky, tlačítka, ikonky)</li>
                <li>I&nbsp;příkazová řádka je uživatelským rozhraním</li>
                <li>Podstatou UI není otevřenost masám</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },{
    id:3,
    name:"about",
    primary:false,
    translation:"UX vs UI",
    content:`
      <div class="container-fluid">   
        <div class="row">      
          <div class="col-sm-6">
            <h1>UX</h1>
            <br>
              <h2>Strategie a Obsah</h2>
              <ul class="list-minified">
                <li>Analýza konkurence</li>
                <li>Analýza zákazníků</li>
                <li>Produktová strategie</li>
                <li>Zlepšování obsahu</li>
              </ul>

              <h2>Navrhování</h2>
              <ul class="list-minified">
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Testování v iteracích</li>
              </ul>

              <h2>Vývoj a Analýza</h2>
              <ul class="list-minified">
                <li>Koordinace s UI návrháři</li>
                <li>Koordinace s vývojáři</li>
                <li>Měření cílů</li>
                <li><b>Analýza a Iterace</b></li>
              </ul>
          </div>
          <div class="col-sm-6">
            <h1>UI</h1>  
            <br>
              <h2>Vzhled a prezentace</h2>
              <ul class="list-minified">
                <li>Analýza zákazníků</li>
                <li>Průzkum designu</li>
                <li>Tvorba korporátního designu</li>
                <li>Guidelines</li>
              </ul>
            

              <h2>Responsivita a interaktivita</h2>
              <ul class="list-minified">
                <li>UI prototyping</li>
                <li>Interaktivita a animace</li>
                <li>Adaptace všem velikostem obrazkovky</li>
                <li>Implementace s vývojářem</li>
              </ul>
          </div>
        </div>
      </div>
    `
  },{
    id:4,
    name:"about",
    primary:false,
    translation:"UX vs UI",
    content:`
      <div class="container-fluid negative-margin"> 
        <div class="row">        
          <div class="col-sm-12">
            <h1 class="text-center">Co zahrnuje UX</h1>  
            <span class="block-centered-600">
              <img class="full-img" src="public/images/UI-in-UX.png"/>
              <p class="text-right"><a href="http://www.odannyboy.com/" target="_blank">Obrázek: Dan Saffer</a></p>
            <span>
          </div>
        </div>
      </div>
    `
  },{
    id:0,
    name:"layout",
    primary:true,
    translation:"Layout",
    content:`
      <h2>Co je to layout?</h2>
      <ul>
        <li>Layout = rozvržení a uspořádání informací</li>
        <li>Proč není toto uspořádání optimální?</li>
      </ul>`
  },{
    id:1,
    name:"layout",
    primary:false,
    translation:"Layout: tisk",
    content:`
      <ul>
        <li>
          Zlatý řez (zlatá spirála) 1.618 == matematika
          <br><br>
          <img class="example-img" src="public/images/spiral.jpg" />
        </li>
        <li>Fibonaceho řada 1,2,3,5,8,13 (8:13)</li>
        <li>Pravidla třetin</li>
        <li>Fixní grid</li>
      </ul>`
  },{
    id:2,
    name:"layout",
    primary:false,
    translation:"Layout: web",
    content:`
      <h2>Digitální éra</h2>
      <ul>       
        <li>Flexibilita vs Kompaktnost</li>
        <li>Maximální požadavky na responsivnost</li>
         <li>Starý fixní grid nahrazen novým flexibilním (virtuálním)</li>
         <li>Grid - 12 nebo 13 sloupců</li>
      </ul>`
  },{
    id:3,
    name:"layout",
    primary:false,
    translation:"Layout: web",
    content:`
      <h2>Grid</h2>
      <ul>
        <li>
          Ukázka responsivního gridu vytvořeného pomocí knihovny twitter Bootstrap
        </li>
      </ul>
      <div class="container-fluid">   
        <div class="row">     
          <div class="col-md-6 col-sm-8 example-col-150"><div>.col-md-6 .col-sm-8</div></div>
          <div class="col-md-3 col-sm-4 example-col-75"><div>.col-md-3 .col-sm-4</div></div>
          <div class="col-md-3 col-sm-4 example-col-75"><div>.col-md-3 .col-sm-4</div></div>
          <div class="col-md-6 col-sm-12 example-col-75"><div>.col-md-6 .col-sm-12</div></div>
        </div>
      </div>
      <ul>
        <li>Mezi oblíbené knihovny obsahující Grid systémy patří např.:<br>
          <b>960 Grid, Zurb Foundation, Skeleton, Susy</b> a mnoho dalších
        </li>
      </ul>`
  },{
    id:4,
    name:"layout",
    primary:false,
    translation:"Layout",
    content:`
      <h2>Co přetrvává</h2>
      <ul>
        <li>Práce s prázdným prostorem</li>
        <li>Práce s odsazením</li>
      </ul>
      <img class="example-img-lg" src="public/images/pixel-ad.png" />`
  },{
    id:5,
    name:"layout",
    primary:false,
    translation:"Layout a design",
    content:`
      <h2>Základní pravidla designu - Dieter Rams</h2>
      <ul class="list-minified">
        <li>Jednoduché je lepší než komplikované.</li>
        <li>Tiché je lepší než hlasité.</li>
        <li>Nevtíravé je lepší než vzrušující.</li>
        <li>Malé je lepší než veliké.</li>
        <li>Lehké je lepší než těžké.</li>
        <li>Čisté je lepší než barevné.</li>
        <li>Harmonie je lepší než odlišování.</li>
        <li>Dobře vyvážený je lepší než přepjatý.</li>
        <li>Pokračování je lepší než změna.</li>
        <li>Vzácné je lepší než hojné.</li>
        <li>Neutrální je lepší než útočné.</li>
        <li>Samozřejmé je lepší než, to co je zapotřebí hledat.</li>
        <li>Málo prvků je lepší než mnoho.</li>
        <li>Systém je lepší než jednotlivé prvky.</li>
      </ul>`
  },{
    id:0,
    name:"colors",
    primary:true,
    translation:"Barvy",
    content:`
    <ul>
      <li>Barvy v designu vyjadřují emoce, dávají charakter a zdůrazňují</li>
      <li>Plný význam, ale dostávají barvy až v kombinaci</li>
      <li>Přesycenost barvami (jako v tomto případě) může vyvolávat chaos.</li>
      <li>Vyvážené použítí dokáže zdůraznit na určité prvky.</li>
    </ul>
    
    <div class="container-fluid"> 
        <div class="row">        
          <div class="col-sm-12">
            <img class="example-img-lg" src="public/images/colors.png" />
            <p class="text-right"><a href="http://www.huffingtonpost.com/brian-honigman/psychology-color-design-infographic_b_2516608.html" target="_blank">Obrázek: the Huffington Post</a></p>
          </div>
        </div>
      </div>`
  },{
    id:1,
    name:"colors",  
    primary:false,  
    translation:"Barvy",
    content:`
      <h2>Jak vybrat barevné kombinace</h2>
      <ul class="list-minified">
        <li>Pozor na kombinace barev z opačného pólu spektra (viz nadpis)</li>
        <li>Barevné kombinace se řídí určitými pravidly</li>
        <li>Líbivá kombinace barev je čato jen matematickým vzorečkem</li>
        <li>Výběr barev na základě matematických pravidel nabízí např.<a href="http://paletton.com/" target="_blank">Paletton.com</a>:</li>
      </ul>
      <img class="example-img-lg" src="public/images/color-picker.png" />`
  },{
    id:2,
    name:"colors",  
    primary:false,  
    translation:"Barvy",
    content:`
      <h2>Barvoslepost</h2>
      <ul class="list-minified">
        <li>9% mužské populace trpí určitým typem barvosleposti</li>
        <li>2% mužů zcela neodlišuje některé barvy</li>
        <li>Takto vidí tuto prezentaci 1% mužů (protanopia)</li>
      </ul>
      <img class="example-img-lg" src="public/images/colorblindness-test.png" />`
  },{
    id:3,
    name:"colors",  
    primary:false,  
    translation:"Barvy",
    content:`
      <h2>Barevná vyváženost</h2>
      <div class="container-fluid"> 
        <div class="row">        
          <div class="col-sm-6">
            <h3>Dobře</h3>
            <div class="button-wrap">
              <span class="button-1" >Submit</span>
            </div>
          </div>
          <div class="col-sm-6">
            <h3>Špatně</h3>
              <div class="button-wrap button-wrap-1">
                <span class="button-2" >Submit</span>
              </div>
              <p class="support-paragraph">Ztráta přehlednosti</p>
              <div class="button-wrap">
                <span class="button-3" >Submit</span>
              </div>
              <p class="support-paragraph">Malá výraznost</pl>
              <div class="button-wrap">
                <span class="button-4" >Submit</span>
              </div>
              <p class="support-paragraph">Nízký kontrast</p>
          </div>
        </div>
      </div>`
  },{
    id:0,
    name:"usability",
    primary:true,
    translation:"Použitelnost",
    content:`
      <h2>Co je použitelnost</h2>
      <ul class="list-minified">
        <li>Použitelnost znamená snadné a intuitivní ovládání</li>
        <li>Měla by vycházet z reálých dat o používání, z testování použitelnosti a vyhodnocování tzv. "Conversion funnels"</li>
        <li>Je základem pro úspěšnou aplikaci v komerčním světě</li>
        <li>Často rozhodují detaily (viz navigační lišta dole)</li>
      </ul>`
  },{
    id:1,
    name:"usability",
    primary:false,
    translation:"Použitelnost: testování",
    content:`
      <h2>Testování před samotným vývojem</h2>
      <ul class="list-minified">
        <li>Nejefektivnější testování probíhá ješe na wireframech</li>
        <li>Uživatel je dotazován co se stane, když na něco klikne apod.</li>
      </ul>
      <h2>Testování během vývoje</h2>
      <ul class="list-minified">
        <li>Testy na reálné aplikaci děláme během vývoje</li>
        <li>Náhodný uživatel (nikoli váš kamarád) dostane scénář a vy pozorujete jak se s ním vypořádá. Testovaný uživatel by měl přemýšlet nahlas</li>
        <li>Náročnější testování: eye tracking </li>
      </ul>`
  },{
    id:2,
    name:"usability",
    primary:false,
    translation:"Použitelnost: testování",
    content:`
      <h2>Testování na produkci: A/B</h2>
      <ul class="list-minified">
        <li>A/B testování (část uživatelů doste odlišný obsah)</li>
        <li>Při dosažení stanoveného cíle se odešle informace o tom, kterou verzi uživatel použil</li>
        <li>Testování pomocí jazykových variant?</li>
      </ul>
      <h2>Testování na produkci: Heat maps</h2>
      <ul class="list-minified">
        <li>Výpočetně náročné == pouze malý vzorek uživatelů</li>
        <li>Zaznamenává pohyby myši</li>
        <li>Ztrácí smysl s dominancí mobilních aplikací</li>
      </ul>`
  },{
    id:3,
    name:"usability",
    primary:false,
    translation:"Použitelnost: testování",
    content:`
      <div class="container-fluid negative-margin">  
        <div class="row">      
          <div class="col-sm-6">
            <h2>Heat map</h2>
            <img class="example-img-lg " src="public/images/heatmap.png"/>
          </div>
          <div class="col-sm-6">
            <h2>Eye tracking</h3>  
            <img class="example-img-lg " src="public/images/eye.jpg"/>
            <ul class="list-minified">
              <li>Vyžaduje speciální hardware</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },{
    id:4,
    name:"usability",
    primary:false,
    translation:"Použitelnost: animace",
    content:`
      <h2></h2>
      <ul class="list-minified">
        <li>Neměla by být použita jen pro efekt (jezdicí text, padající vločky)</li>
        <li>Měla by:</li>
        <li>A) vyprávět příběh <a href="http://www.apple.com/cz/mac-pro/">Mac book pro</a></li>
        <li>B) zachovávat kontext</li>
      </ul>
      <img class="example-img-lg " src="public/images/animated.gif"/>`
  },{
    id:5,
    name:"usability",
    primary:false,
    translation:"Použitelnost: příklady\u00A01",
    content:`
      <h2></h2>
      <ul class="list-minified">
        <li>Použitelnost znamená snadné a intuitivní ovládání</li>
        <li>Měla by vycházet z reálých dat o používání, z testování použitelnosti a vyhodnocování tzv. "Conversion funnels"</li>
        <li>Je základem pro úspěšnou aplikaci v komerčním světě.</li>
      </ul>`
  },{
    id:6,
    name:"usability",
    primary:false,
    translation:"Použitelnost: příklady\u00A02",
    content:`
      <h2></h2>
      <ul class="list-minified">
        <li>Použitelnost znamená snadné a intuitivní ovládání</li>
        <li>Měla by vycházet z reálých dat o používání, z testování použitelnosti a vyhodnocování tzv. "Conversion funnels"</li>
        <li>Je základem pro úspěšnou aplikaci v komerčním světě.</li>
      </ul>`
  },{
    id:7,
    name:"usability",
    primary:false,
    translation:"Použitelnost: příklady\u00A03",
    content:`
      <h2></h2>
      <ul class="list-minified">
        <li>Použitelnost znamená snadné a intuitivní ovládání</li>
        <li>Měla by vycházet z reálých dat o používání, z testování použitelnosti a vyhodnocování tzv. "Conversion funnels"</li>
        <li>Je základem pro úspěšnou aplikaci v komerčním světě.</li>
      </ul>`
  },{
    id:0,
    name:"guidelines",
    primary:true,
    translation:"Guidelines",
    content:"<ul><li>guidelines 0</li></ul>"
  },{
    id:1,
    name:"guidelines",
    primary:false,
    translation:"Guidelines",
    content:"<ul><li>guidelines 1</li></ul>"
  }
];
