import { PageItem } from './page.interface';

export const PageItems: PageItem[] = [
  {
    id:0,
    name:"about",
    primary:true,
    translation:"Úvod",
    content:`
      <h2>Ovládání:</h2>
      <ul>
        <li>Klávesy (⇦/⇨) = předešlý/další slide</li>
        <li>Klávesy (⇧/⇩) = scrolování nahoru/dolu</li>
        <li>z = zoom</li>
      </ul>`
  },{
    id:1,
    name:"about",
    primary:false,
    translation:"Úvod",
    content:`
      <h2>Tato příručka:</h2>
      <ul>
        <li>Je interaktivní prezentací, představující základní koncepty UX&nbsp;&&nbsp;UI</li>
        <li>Poukazuje na základní chyby při jejich implementaci</li>
      </ul>`
  },{
    id:2,
    name:"about",
    primary:false,
    translation:"UX vs UI",
    content:`
      <div class="container-fluid negative-margin">  
        <div class="row">      
          <div class="col-sm-6">
            <img class="example-img" src="public/images/ux.gif"/>
            <div>
              <br>
              <img class="example-img" src="public/images/text-placeholder.png"/>
            </div>
          </div>
          <div class="col-sm-6">
            <img class="example-img" src="public/images/ui.png"/>
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
      <div class="container-fluid negative-margin">  
        <div class="row">       
          <div class="col-sm-6">
            <img class="example-img enlarge-animate" src="public/images/ux.gif"/>

            <div class="list-wrapper relative">
              <div class="absolute fade-out">
                <br>
                <img class="example-img" src="public/images/text-placeholder.png"/>
              </div>
              <h2>User&nbsp;Experience</h2>
              <ul class="fade-in">
                <li>Celkový uživatalský požitek z používáni služby či produktu</li>
                <li>Zahrnuje <b>Interaction design</b>, <b>Information achitecture</b> i <b>UI</b></li>
                <li>Aplikace s dobrým UX by měla být ovladatelná i bez použití manuálu.</li>
                <li>UX staví na předešlých zkušenostech uživatele</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <img class="example-img enlarge-animate" src="public/images/ui.png"/>
            
            <div class="list-wrapper">
              <ul class="fade-in">
              <h2>User&nbsp;Interface</h2>
                <li>Prostředí ve kterém dochází k interakci mezi uživatelem a počítačem</li>
                <li>Jednotlivé obrazovky, funkční elementy (linky, tlačítka, ikonky)</li>
                <li>I&nbsp;příkazová řádka je uživatelským rozhraním</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },/*{
    id:4,
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
  },*/{
    id:4,
    name:"about",
    primary:false,
    translation:"UX vs UI",
    content:`
      <div class="container-fluid negative-margin"> 
        <div class="row">        
          <div class="col-sm-12">
            <div class="centered">
              <h1 class="text-center">Kečup není UX ani UI</h1>  
              <img class="full-img" src="public/images/ui_ux.png"/>
            </div>
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
        <li>Zlatý řez (zlatá spirála) 1.618 == matematika</li>
        <li>Fibonaceho řada 1,2,3,5,8,13 (8:13)</li>
        <li>Pravidla třetin (fotografie)</li>
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
      </ul>
      <img class="example-img-xl" src="public/images/content-water.png" />
      `
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
      </div>`
  },{
    id:4,
    name:"layout",
    primary:false,
    translation:"Layout",
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
      </ul>
      `
  },{
    id:5,
    name:"layout",
    primary:false,
    translation:"Layout a design",
    content:`
    <div class="container-fluid negative-margin"> 
      <h2>Příklady: NYT 2001</h2>
      <img class="example-img-xl" src="public/images/nyt01.jpg" />
    </div>`
  },{
    id:6,
    name:"layout",
    primary:false,
    translation:"Layout a design",
    content:`
    <div class="container-fluid negative-margin"> 
      <h2>Příklady: NYT 2004</h2>
      <img class="example-img-xl" src="public/images/nyt04.jpg" />
    </div>`
  },{
    id:7,
    name:"layout",
    primary:false,
    translation:"Layout a design",
    content:`
    <div class="container-fluid negative-margin"> 
      <h2>Příklady: NYT 2007</h2>
      <img class="example-img-xl" src="public/images/nyt07.jpg" />
    </div>`
  },{
    id:8,
    name:"layout",
    primary:false,
    translation:"Layout a design",
    content:`
    <div class="container-fluid negative-margin"> 
      <h2>Příklady: NYT 2014</h2>
      <img class="example-img-xl" src="public/images/nyt14.jpg" />
    </div>`
  },{
    id:9,
    name:"layout",
    primary:false,
    translation:"Layout a design",
    content:`
    <div class="container-fluid negative-margin"> 
      <h2>Příklady: NYT Proposal</h2>
      <img class="example-img-xl" src="public/images/nyt-proposal.png" />
    </div>`
  },{
    id:10,
    name:"layout",
    primary:false,
    translation:"Layout a design",
    content:`
    <div class="container-fluid negative-margin"> 
      <h2>Příklady: NYT 2017</h2>
      <img class="example-img-xl" src="public/images/nyt17.png" />
    </div>`
  },{
    id:0,
    name:"colors",  
    primary:true,  
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
    id:1,
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
    id:2,
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
    name:"accessibility",
    primary:true,
    translation:"Přístupnost",
    content:`
      <h2>15% populace má určitý handicap a nemůže:</h2>
      <ul class="list-minified">
        <li>Vidět obrazovku</li>
        <li>Používat myš</li>
        <li>Rozlišovat málo kontrastní text</li>
        <li>Poslouchat hudbu/zvuky</li>
        <li>Rozumět složitému textu</li>
      </ul>`
  },{
    id:1,
    name:"accessibility",
    primary:false,
    translation:"Přístupnost",
    content:`
      <h2>Řešení</h2>
      <ul class="list-minified">
        <li>Sémantické HTML</li>
        <li>HTML tabindex</li>
        <li>Aria atributy, např.: role="button", aria-label="přidat do košíku"</li>
        <li>Přiměřený počet aktivních elementů na obrazovce</li>
        <li>Optimalizace barev</li>
        <li>Transkripce zvuku</li>
      </ul>
      <p class="inline-links">
        <a href="https://github.com/dequelabs/axe-core" target="_blank">"Axe core" testování přístupnosti</a>                                   
      </p>`
  },{
    id:0,
    name:"usability",
    primary:true,
    translation:"Použitelnost",
    content:`
      <h2>Co je použitelnost</h2>
      <ul class="list-minified">
        <li>Použitelnost znamená snadné a intuitivní ovládání</li>
        <li>Schopost dostat se k cíli na co nejméně akcí (kliků, stisků kláves)</li>
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
        <li>Nejefektivnější testování probíhá ještě na wireframech</li>
        <li>Uživatel je dotazován co se stane, když na něco klikne apod.</li>
      </ul>
      <p class="inline-links">
      <a href="/public/video.html" target="_blank">Usability testing</a> 
      </p>                                  
      `
  },{
    id:2,
    name:"usability",
    primary:false,
    translation:"Použitelnost: testování",
    content:`
    <h2>Testování během vývoje</h2>
      <ul class="list-minified">
        <li>Testy na reálné aplikaci děláme během vývoje</li>
        <li>Náhodný uživatel (nikoli váš kamarád) dostane scénář a vy pozorujete jak se s ním vypořádá. Testovaný uživatel by měl přemýšlet nahlas</li>
        <li>Náročnější testování: eye tracking </li>
      </ul>
      
      <p class="inline-links">
        <a href="http://browserstack.com" target="_blank">browserstack.com</a>
        <a href="http://saucelabs.com" target="_blank">saucelabs.com</a>
      </p>
      `
  },{
    id:3,
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
    `
  },{
    id:4,
    name:"usability",
    primary:false,
    translation:"Použitelnost: animace",
    content:`      
      <ul class="list-minified">
        <li>Neměla by být použita jen pro efekt (jezdicí text, padající vločky)</li>
        <li>Měla by:</li>
        <li>A) vyprávět příběh <a href="http://www.apple.com/cz/mac-pro/">Mac pro</a></li>
        <li>B) zachovávat kontext</li>
      </ul>
      <img class="example-img-lg " src="public/images/animated.gif"/>`
  },{
    id:5,
    name:"usability",
    primary:false,
    translation:"Použitelnost: příklady\u00A01",
    content:`
      <table class="compare-table">
        <tr>
          <td>
            <h3>Dobře</h3>
          </td>
          <td class="mid-cell"></td>
          <td>
            <h3>Špatně</h3>
          </td>
        </tr>
        <tr>
          <td>
            <img class="example-img-xl " src="public/images/kosik-ok.png"/>
          </td>
          <td></td>
          <td>
            <img class="example-img-xl " src="public/images/kosik.png"/>
          </td>
        </tr>
        <tr>
          <td>
            <img class="example-img-xl " src="public/images/menu-ok.png"/>
          </td>
          <td></td>
          <td>
            <img class="example-img-xl " src="public/images/menu.png"/>
          </td>
        </tr>
        <tr>
          <td>
            <img class="example-img-xl " src="public/images/nav-better.png"/>
          </td>
          <td></td>
          <td>
            <img class="example-img-xl " src="public/images/nav1.png"/>
          </td>
        </tr>
      </table>`
  },{
    id:6,
    name:"usability",
    primary:false,
    translation:"Použitelnost: příklady\u00A02",
    content:`
      <table class="compare-table">
        <tr>
          <td>
            <h3>Dobře</h3>
          </td>
          <td class="mid-cell"></td>
          <td>
            <h3>Špatně</h3>
          </td>
        </tr>
        <tr>
          <td>
            <img class="example-img-xl " src="public/images/roll-ok.png"/>
          </td>
          <td></td>
          <td>
            <img class="example-img-xl " src="public/images/roll.png"/>
          </td>
        </tr>        
      </table>`
  },{
    id:7,
    name:"usability",
    primary:false,
    translation:"Použitelnost: příklady\u00A03",
    content:`
      <table class="compare-table">
        <tr>
          <td>
            <h3>Špatně</h3>
          </td>
          <td class="mid-cell"></td>
          <td>
            <h3>Špatně</h3>
          </td>
        </tr>
        <tr>
          <td>
            <img class="example-img-xl " src="public/images/tabs.png"/>
          </td>
          <td></td>
          <td>
            <img class="example-img-xl " src="public/images/form.png"/>
          </td>
        </tr>        
      </table>`
  },{
    id:0,
    name:"guidelines",
    primary:true,
    translation:"Guidelines",
    content:`
      <h2>Styleguides</h2>
      <ul class="list-minified">
        <li>Mají zaručit standard v kódování (.editorconfig)</li>
        <li>Zavádějí jmenné konvence</li>
        <li>Pomáhají vytvářet udržitelný projekt</li>
        <li>Usnadňují zapracování nových zaměstnanců</li>
      </ul>`
  },{
    id:1,
    name:"guidelines",
    primary:false,
    translation:"Guidelines",
    content:`
      <h2>UI Guidelines</h2>
      <ul class="list-minified">
        <li>Udávají pravidla pro design / layout / navigaci</li>
        <li>Jsou přehledem UI komponentů použitých na projektu</li>
        <li>Pomáhají předcházet kolizím v CSS </li>
        <li>Např.: Material design, iOS guidelines, bootstrap </li>
      </ul>
      <p class="inline-links">
        <a href="/public/guidelines.html" target="_blank">UI guidelines Example</a>
      </p>`
  }
];
