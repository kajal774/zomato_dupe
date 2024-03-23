import React from "react";
import "../LOGIN/Login.css"
import { Link } from "react-router-dom";
import Signup from "../Signup";


const Login=({toggle})=>{
    return(<div className="container">
    <div className=" container-fluid">
    <label>Login</label><span id="close" onClick={toggle}>X</span>
    <div className="input-group mb-3  main">
   <select name="country" id="country">
        <option data-code="IN" data-name="India" data-cid="c124"><i className="flagstrap-icon"></i>India (+91)</option>
      <option data-code="AF" data-name="Afghanistan" data-cid="c32"><i className="flagstrap-icon"></i>Afghanistan (+93)</option>
      <option data-code="AL" data-name="Albania" data-cid="c33"><i className="flagstrap-icon"></i>Albania (+355)</option>
      <option data-code="DZ" data-name="Algeria" data-cid="c34"><i className="flagstrap-icon"></i>Algeria (+213)</option>
      <option data-code="AS" data-name="American Samoa" data-cid="c35"><i className="flagstrap-icon"></i>American Samoa (+1-684)</option>
      <option data-code="AD" data-name="Andorra" data-cid="c36"><i className="flagstrap-icon"></i>Andorra (+376)</option>
      <option data-code="AO" data-name="Angola" data-cid="c37"><i className="flagstrap-icon"></i>Angola (+244)</option>
      <option data-code="AI" data-name="Anguilla" data-cid="c38"><i className="flagstrap-icon"></i>Anguilla (+1-264)</option>
      <option data-code="AG" data-name="Antigua and Barbuda" data-cid="c39"><i className="flagstrap-icon"></i>Antigua and Barbuda (+1-268)</option>
      <option data-code="AR" data-name="Argentina" data-cid="c40"><i className="flagstrap-icon"></i>Argentina (+54)</option>
      <option data-code="AM" data-name="Armenia" data-cid="c41"><i className="flagstrap-icon"></i>Armenia (+374)</option>
      <option data-code="AW" data-name="Aruba" data-cid="c42"><i className="flagstrap-icon"></i>Aruba (+297)</option>
      <option data-code="AU" data-name="Australia" data-cid="c43"><i className="flagstrap-icon"></i>Australia (+61)</option>
      <option data-code="AT" data-name="Austria" data-cid="c44"><i className="flagstrap-icon"></i>Austria (+43)</option>
      <option data-code="AZ" data-name="Azerbaijan" data-cid="c45"><i className="flagstrap-icon"></i>Azerbaijan (+994)</option>
      <option data-code="BS" data-name="Bahamas" data-cid="c46"><i className="flagstrap-icon"></i>Bahamas (+1-242)</option>
      <option data-code="BH" data-name="Bahrain" data-cid="c47"><i className="flagstrap-icon"></i>Bahrain (+973)</option>
      <option data-code="BD" data-name="Bangladesh" data-cid="c48"><i className="flagstrap-icon"></i>Bangladesh (+880)</option>
      <option data-code="BB" data-name="Barbados" data-cid="c49"><i className="flagstrap-icon"></i>Barbados (+1-246)</option>
      <option data-code="BY" data-name="Belarus" data-cid="c50"><i className="flagstrap-icon"></i>Belarus (+375)</option>
      <option data-code="BE" data-name="Belgium" data-cid="c51"><i className="flagstrap-icon"></i>Belgium (+32)</option>
      <option data-code="BZ" data-name="Belize" data-cid="c52"><i className="flagstrap-icon"></i>Belize (+501)</option>
      <option data-code="BJ" data-name="Benin" data-cid="c53"><i className="flagstrap-icon"></i>Benin (+229)</option>
      <option data-code="BM" data-name="Bermuda" data-cid="c54"><i className="flagstrap-icon"></i>Bermuda (+1-441)</option>
      <option data-code="BT" data-name="Bhutan" data-cid="c55"><i className="flagstrap-icon"></i>Bhutan (+975)</option>
      <option data-code="BO" data-name="Bolivia" data-cid="c56"><i className="flagstrap-icon"></i>Bolivia (+591)</option>
      <option data-code="BA" data-name="Bosnia and Herzegovina" data-cid="c57"><i className="flagstrap-icon"></i>Bosnia and Herzegovina (+387)</option>
      <option data-code="BW" data-name="Botswana" data-cid="c58"><i className="flagstrap-icon"></i>Botswana (+267)</option>
      <option data-code="BR" data-name="Brazil" data-cid="c59"><i className="flagstrap-icon"></i>Brazil (+55)</option>
      <option data-code="IO" data-name="British Indian Ocean Territory" data-cid="c60"><i className="flagstrap-icon"></i>British Indian Ocean Territory (+246)</option>
      <option data-code="" data-name="British Virgin Islands" data-cid="c61"><i className="flagstrap-icon"></i>British Virgin Islands (+1-284)</option>
      <option data-code="BN" data-name="Brunei" data-cid="c62"><i className="flagstrap-icon"></i>Brunei (+673)</option>
      <option data-code="BG" data-name="Bulgaria" data-cid="c63"><i className="flagstrap-icon"></i>Bulgaria (+359)</option>
      <option data-code="BF" data-name="Burkina Faso" data-cid="c64"><i className="flagstrap-icon"></i>Burkina Faso (+226)</option>
      <option data-code="BI" data-name="Burundi" data-cid="c65"><i className="flagstrap-icon"></i>Burundi (+257)</option>
      <option data-code="KH" data-name="Cambodia" data-cid="c66"><i className="flagstrap-icon"></i>Cambodia (+855)</option>
      <option data-code="CM" data-name="Cameroon" data-cid="c67"><i className="flagstrap-icon"></i>Cameroon (+237)</option>
      <option data-code="CA" data-name="Canada" data-cid="c68"><i className="flagstrap-icon"></i>Canada (+1)</option>
      <option data-code="CV" data-name="Cape Verde" data-cid="c69"><i className="flagstrap-icon"></i>Cape Verde (+238)</option>
      <option data-code="KY" data-name="Cayman Islands" data-cid="c70"><i className="flagstrap-icon"></i>Cayman Islands (+1-345)</option>
      <option data-code="CF" data-name="Central African Republic" data-cid="c71"><i className="flagstrap-icon"></i>Central African Republic (+236)</option>
      <option data-code="TD" data-name="Chad" data-cid="c72"><i className="flagstrap-icon"></i>Chad (+235)</option>
      <option data-code="CL" data-name="Chile" data-cid="c73"><i className="flagstrap-icon"></i>Chile (+56)</option>
      <option data-code="CN" data-name="China" data-cid="c74"><i className="flagstrap-icon"></i>China (+86)</option>
      <option data-code="" data-name="Christmas Island" data-cid="c75"><i className="flagstrap-icon"></i>Christmas Island (+61)</option>
      <option data-code="" data-name="Cocos Islands" data-cid="c76"><i className="flagstrap-icon"></i>Cocos Islands (+61)</option>
      <option data-code="CO" data-name="Colombia" data-cid="c77"><i className="flagstrap-icon"></i>Colombia (+57)</option>
      <option data-code="KM" data-name="Comoros" data-cid="c78"><i className="flagstrap-icon"></i>Comoros (+269)</option>
      <option data-code="CK" data-name="Cook Islands" data-cid="c79"><i className="flagstrap-icon"></i>Cook Islands (+682)</option>
      <option data-code="CR" data-name="Costa Rica" data-cid="c80"><i className="flagstrap-icon"></i>Costa Rica (+506)</option>
      <option data-code="HR" data-name="Croatia" data-cid="c81"><i className="flagstrap-icon"></i>Croatia (+385)</option>
      <option data-code="CU" data-name="Cuba" data-cid="c82"><i className="flagstrap-icon"></i>Cuba (+53)</option>
      <option data-code="CY" data-name="Cyprus" data-cid="c83"><i className="flagstrap-icon"></i>Cyprus (+357)</option>
      <option data-code="CZ" data-name="Czech Republic" data-cid="c84"><i className="flagstrap-icon"></i>Czech Republic (+420)</option>
      <option data-code="CD" data-name="Democratic Republic of the Congo" data-cid="c85"><i className="flagstrap-icon"></i>Democratic Republic of the Congo (+243)</option>
      <option data-code="DK" data-name="Denmark" data-cid="c86"><i className="flagstrap-icon"></i>Denmark (+45)</option>
      <option data-code="DJ" data-name="Djibouti" data-cid="c87"><i className="flagstrap-icon"></i>Djibouti (+253)</option>
      <option data-code="DM" data-name="Dominica" data-cid="c88"><i className="flagstrap-icon"></i>Dominica (+1-767)</option>
      <option data-code="DO" data-name="Dominican Republic" data-cid="c89"><i className="flagstrap-icon"></i>Dominican Republic (+1-809)</option>
      <option data-code="DO" data-name="Dominican Republic" data-cid="c90"><i className="flagstrap-icon"></i>Dominican Republic (+1-829)</option>
      <option data-code="" data-name="East Timor" data-cid="c91"><i className="flagstrap-icon"></i>East Timor (+670)</option>
      <option data-code="EC" data-name="Ecuador" data-cid="c92"><i className="flagstrap-icon"></i>Ecuador (+593)</option>
      <option data-code="EG" data-name="Egypt" data-cid="c93"><i className="flagstrap-icon"></i>Egypt (+20)</option>
      <option data-code="SV" data-name="El Salvador" data-cid="c94"><i className="flagstrap-icon"></i>El Salvador (+503)</option>
      <option data-code="GQ" data-name="Equatorial Guinea" data-cid="c95"><i className="flagstrap-icon"></i>Equatorial Guinea (+240)</option>
      <option data-code="ER" data-name="Eritrea" data-cid="c96"><i className="flagstrap-icon"></i>Eritrea (+291)</option>
      <option data-code="EE" data-name="Estonia" data-cid="c97"><i className="flagstrap-icon"></i>Estonia (+372)</option>
      <option data-code="ET" data-name="Ethiopia" data-cid="c98"><i className="flagstrap-icon"></i>Ethiopia (+251)</option>
      <option data-code="FK" data-name="Falkland Islands" data-cid="c99"><i className="flagstrap-icon"></i>Falkland Islands (+500)</option>
      <option data-code="FO" data-name="Faroe Islands" data-cid="c100"><i className="flagstrap-icon"></i>Faroe Islands (+298)</option>
      <option data-code="FJ" data-name="Fiji" data-cid="c101"><i className="flagstrap-icon"></i>Fiji (+679)</option>
      <option data-code="FI" data-name="Finland" data-cid="c102"><i className="flagstrap-icon"></i>Finland (+358)</option>
      <option data-code="FR" data-name="France" data-cid="c103"><i className="flagstrap-icon"></i>France (+33)</option>
      <option data-code="PF" data-name="French Polynesia" data-cid="c104"><i className="flagstrap-icon"></i>French Polynesia (+689)</option>
      <option data-code="GA" data-name="Gabon" data-cid="c105"><i className="flagstrap-icon"></i>Gabon (+241)</option>
      <option data-code="GM" data-name="Gambia" data-cid="c106"><i className="flagstrap-icon"></i>Gambia (+220)</option>
      <option data-code="GE" data-name="Georgia" data-cid="c107"><i className="flagstrap-icon"></i>Georgia (+995)</option>
      <option data-code="DE" data-name="Germany" data-cid="c108"><i className="flagstrap-icon"></i>Germany (+49)</option>
      <option data-code="GH" data-name="Ghana" data-cid="c109"><i className="flagstrap-icon"></i>Ghana (+233)</option>
      <option data-code="GI" data-name="Gibraltar" data-cid="c110"><i className="flagstrap-icon"></i>Gibraltar (+350)</option>
      <option data-code="GR" data-name="Greece" data-cid="c111"><i className="flagstrap-icon"></i>Greece (+30)</option>
      <option data-code="GL" data-name="Greenland" data-cid="c112"><i className="flagstrap-icon"></i>Greenland (+299)</option>
      <option data-code="GD" data-name="Grenada" data-cid="c113"><i className="flagstrap-icon"></i>Grenada (+1-473)</option>
      <option data-code="GU" data-name="Guam" data-cid="c114"><i className="flagstrap-icon"></i>Guam (+1-671)</option>
      <option data-code="GT" data-name="Guatemala" data-cid="c115"><i className="flagstrap-icon"></i>Guatemala (+502)</option>
      <option data-code="GN" data-name="Guinea" data-cid="c116"><i className="flagstrap-icon"></i>Guinea (+224)</option>
      <option data-code="GN" data-name="Guinea" data-cid="c117"><i className="flagstrap-icon"></i>Guinea (+245)</option>
      <option data-code="GN" data-name="Guyana" data-cid="c118"><i className="flagstrap-icon"></i>Guyana (+592)</option>
      <option data-code="HT" data-name="Haiti" data-cid="c119"><i className="flagstrap-icon"></i>Haiti (+509)</option>
      <option data-code="HN" data-name="Honduras" data-cid="c120"><i className="flagstrap-icon"></i>Honduras (+504)</option>
      <option data-code="HK" data-name="Hong Kong" data-cid="c121"><i className="flagstrap-icon"></i>Hong Kong (+852)</option>
      <option data-code="HU" data-name="Hungary" data-cid="c122"><i className="flagstrap-icon"></i>Hungary (+36)</option>
      <option data-code="IS" data-name="Iceland" data-cid="c123"><i className="flagstrap-icon"></i>Iceland (+354)</option>
     
      <option data-code="ID" data-name="Indonesia" data-cid="c125"><i className="flagstrap-icon"></i>Indonesia (+62)</option>
      <option data-code="IR" data-name="Iran" data-cid="c126"><i className="flagstrap-icon"></i>Iran (+98)</option>
      <option data-code="IQ" data-name="Iraq" data-cid="c127"><i className="flagstrap-icon"></i>Iraq (+964)</option>
      <option data-code="IE" data-name="Ireland" data-cid="c128"><i className="flagstrap-icon"></i>Ireland (+353)</option>
      <option data-code="IM" data-name="Isle of Man" data-cid="c129"><i className="flagstrap-icon"></i>Isle of Man (+44-1624)</option>
      <option data-code="IL" data-name="Israel" data-cid="c130"><i className="flagstrap-icon"></i>Israel (+972)</option>
      <option data-code="IT" data-name="Italy" data-cid="c131"><i className="flagstrap-icon"></i>Italy (+39)</option>
      <option data-code="" data-name="Ivory Coast" data-cid="c132"><i className="flagstrap-icon"></i>Ivory Coast (+225)</option>
      <option data-code="JM" data-name="Jamaica" data-cid="c133"><i className="flagstrap-icon"></i>Jamaica (+1-876)</option>
      <option data-code="JP" data-name="Japan" data-cid="c134"><i className="flagstrap-icon"></i>Japan (+81)</option>
      <option data-code="JE" data-name="Jersey" data-cid="c135"><i className="flagstrap-icon"></i>Jersey (+44-1534)</option>
      <option data-code="JO" data-name="Jordan" data-cid="c136"><i className="flagstrap-icon"></i>Jordan (+962)</option>
      <option data-code="KZ" data-name="Kazakhstan" data-cid="c137"><i className="flagstrap-icon"></i>Kazakhstan (+7)</option>
      <option data-code="KE" data-name="Kenya" data-cid="c138"><i className="flagstrap-icon"></i>Kenya (+254)</option>
      <option data-code="KI" data-name="Kiribati" data-cid="c139"><i className="flagstrap-icon"></i>Kiribati (+686)</option>
      <option data-code="KW" data-name="Kuwait" data-cid="c140"><i className="flagstrap-icon"></i>Kuwait (+965)</option>
      <option data-code="KG" data-name="Kyrgyzstan" data-cid="c141"><i className="flagstrap-icon"></i>Kyrgyzstan (+996)</option>
      <option data-code="LA" data-name="Laos" data-cid="c142"><i className="flagstrap-icon"></i>Laos (+856)</option>
      <option data-code="LV" data-name="Latvia" data-cid="c143"><i className="flagstrap-icon"></i>Latvia (+371)</option>
      <option data-code="LB" data-name="Lebanon" data-cid="c144"><i className="flagstrap-icon"></i>Lebanon (+961)</option>
      <option data-code="LS" data-name="Lesotho" data-cid="c145"><i className="flagstrap-icon"></i>Lesotho (+266)</option>
      <option data-code="LR" data-name="Liberia" data-cid="c146"><i className="flagstrap-icon"></i>Liberia (+231)</option>
      <option data-code="LY" data-name="Libya" data-cid="c147"><i className="flagstrap-icon"></i>Libya (+218)</option>
      <option data-code="LI" data-name="Liechtenstein" data-cid="c148"><i className="flagstrap-icon"></i>Liechtenstein (+423)</option>
      <option data-code="LT" data-name="Lithuania" data-cid="c149"><i className="flagstrap-icon"></i>Lithuania (+370)</option>
      <option data-code="LU" data-name="Luxembourg" data-cid="c150"><i className="flagstrap-icon"></i>Luxembourg (+352)</option>
      <option data-code="MO" data-name="Macao" data-cid="c151"><i className="flagstrap-icon"></i>Macao (+853)</option>
      <option data-code="MK" data-name="Macedonia" data-cid="c152"><i className="flagstrap-icon"></i>Macedonia (+389)</option>
      <option data-code="MG" data-name="Madagascar" data-cid="c153"><i className="flagstrap-icon"></i>Madagascar (+261)</option>
      <option data-code="MW" data-name="Malawi" data-cid="c154"><i className="flagstrap-icon"></i>Malawi (+265)</option>
      <option data-code="MY" data-name="Malaysia" data-cid="c155"><i className="flagstrap-icon"></i>Malaysia (+60)</option>
      <option data-code="MV" data-name="Maldives" data-cid="c156"><i className="flagstrap-icon"></i>Maldives (+960)</option>
      <option data-code="ML" data-name="Mali" data-cid="c157"><i className="flagstrap-icon"></i>Mali (+223)</option>
      <option data-code="MT" data-name="Malta" data-cid="c158"><i className="flagstrap-icon"></i>Malta (+356)</option>
      <option data-code="MH" data-name="Marshall Islands" data-cid="c159"><i className="flagstrap-icon"></i>Marshall Islands (+692)</option>
      <option data-code="MQ" data-name="Martinique" data-cid="c160"><i className="flagstrap-icon"></i>Martinique (+596)</option>
      <option data-code="MR" data-name="Mauritania" data-cid="c161"><i className="flagstrap-icon"></i>Mauritania (+222)</option>
      <option data-code="MU" data-name="Mauritius" data-cid="c162"><i className="flagstrap-icon"></i>Mauritius (+230)</option>
      <option data-code="YT" data-name="Mayotte" data-cid="c163"><i className="flagstrap-icon"></i>Mayotte (+262)</option>
      <option data-code="MX" data-name="Mexico" data-cid="c164"><i className="flagstrap-icon"></i>Mexico (+52)</option>
      <option data-code="FM" data-name="Micronesia" data-cid="c165"><i className="flagstrap-icon"></i>Micronesia (+691)</option>
      <option data-code="MD" data-name="Moldova" data-cid="c166"><i className="flagstrap-icon"></i>Moldova (+373)</option>
      <option data-code="MC" data-name="Monaco" data-cid="c167"><i className="flagstrap-icon"></i>Monaco (+377)</option>
      <option data-code="MN" data-name="Mongolia" data-cid="c168"><i className="flagstrap-icon"></i>Mongolia (+976)</option>
      <option data-code="ME" data-name="Montenegro" data-cid="c169"><i className="flagstrap-icon"></i>Montenegro (+382)</option>
      <option data-code="MS" data-name="Montserrat" data-cid="c170"><i className="flagstrap-icon"></i>Montserrat (+1-664)</option>
      <option data-code="MA" data-name="Morocco" data-cid="c171"><i className="flagstrap-icon"></i>Morocco (+212)</option>
      <option data-code="MZ" data-name="Mozambique" data-cid="c172"><i className="flagstrap-icon"></i>Mozambique (+258)</option>
      <option data-code="MM" data-name="Myanmar" data-cid="c173"><i className="flagstrap-icon"></i>Myanmar (+95)</option>
      <option data-code="NA" data-name="Namibia" data-cid="c174"><i className="flagstrap-icon"></i>Namibia (+264)</option>
      <option data-code="NR" data-name="Nauru" data-cid="c175"><i className="flagstrap-icon"></i>Nauru (+674)</option>
      <option data-code="NP" data-name="Nepal" data-cid="c176"><i className="flagstrap-icon"></i>Nepal (+977)</option>
      <option data-code="NL" data-name="Netherlands" data-cid="c177"><i className="flagstrap-icon"></i>Netherlands (+31)</option>
      <option data-code="" data-name="Netherlands Antilles" data-cid="c178"><i className="flagstrap-icon"></i>Netherlands Antilles (+599)</option>
      <option data-code="NC" data-name="New Caledonia" data-cid="c179"><i className="flagstrap-icon"></i>New Caledonia (+687)</option>
      <option data-code="NZ" data-name="New Zealand" data-cid="c180"><i className="flagstrap-icon"></i>New Zealand (+64)</option>
      <option data-code="NI" data-name="Nicaragua" data-cid="c181"><i className="flagstrap-icon"></i>Nicaragua (+505)</option>
      <option data-code="NE" data-name="Niger" data-cid="c182"><i className="flagstrap-icon"></i>Niger (+227)</option>
      <option data-code="NG" data-name="Nigeria" data-cid="c183"><i className="flagstrap-icon"></i>Nigeria (+234)</option>
      <option data-code="NU" data-name="Niue" data-cid="c184"><i className="flagstrap-icon"></i>Niue (+683)</option>
      <option data-code="" data-name="North Korea" data-cid="c185"><i className="flagstrap-icon"></i>North Korea (+850)</option>
      <option data-code="MP" data-name="Northern Mariana Islands" data-cid="c186"><i className="flagstrap-icon"></i>Northern Mariana Islands (+1-670)</option>
      <option data-code="NO" data-name="Norway" data-cid="c187"><i className="flagstrap-icon"></i>Norway (+47)</option>
      <option data-code="OM" data-name="Oman" data-cid="c188"><i className="flagstrap-icon"></i>Oman (+968)</option>
      <option data-code="PK" data-name="Pakistan" data-cid="c189"><i className="flagstrap-icon"></i>Pakistan (+92)</option>
      <option data-code="PW" data-name="Palau" data-cid="c190"><i className="flagstrap-icon"></i>Palau (+680)</option>
      <option data-code="PA" data-name="Panama" data-cid="c191"><i className="flagstrap-icon"></i>Panama (+507)</option>
      <option data-code="PG" data-name="Papua New Guinea" data-cid="c192"><i className="flagstrap-icon"></i>Papua New Guinea (+675)</option>
      <option data-code="PY" data-name="Paraguay" data-cid="c193"><i className="flagstrap-icon"></i>Paraguay (+595)</option>
      <option data-code="PE" data-name="Peru" data-cid="c194"><i className="flagstrap-icon"></i>Peru (+51)</option>
      <option data-code="PH" data-name="Philippines" data-cid="c195"><i className="flagstrap-icon"></i>Philippines (+63)</option>
      <option data-code="PN" data-name="Pitcairn" data-cid="c196"><i className="flagstrap-icon"></i>Pitcairn (+870)</option>
      <option data-code="PL" data-name="Poland" data-cid="c197"><i className="flagstrap-icon"></i>Poland (+48)</option>
      <option data-code="PT" data-name="Portugal" data-cid="c198"><i className="flagstrap-icon"></i>Portugal (+351)</option>
      <option data-code="PR" data-name="Puerto Rico (+1-787)" data-cid="c199"><i className="flagstrap-icon"></i>Puerto Rico (+1-787) (+1-787)</option>
      <option data-code="PR" data-name="Puerto Rico (+1-939)" data-cid="c200"><i className="flagstrap-icon"></i>Puerto Rico (+1-939) (+1-939)</option>
      <option data-code="QA" data-name="Qatar" data-cid="c201"><i className="flagstrap-icon"></i>Qatar (+974)</option>
      <option data-code="CG" data-name="Republic of the Congo" data-cid="c202"><i className="flagstrap-icon"></i>Republic of the Congo (+242)</option>
      <option data-code="RO" data-name="Romania" data-cid="c203"><i className="flagstrap-icon"></i>Romania (+40)</option>
      <option data-code="RU" data-name="Russia" data-cid="c204"><i className="flagstrap-icon"></i>Russia (+7)</option>
      <option data-code="RW" data-name="Rwanda" data-cid="c205"><i className="flagstrap-icon"></i>Rwanda (+250)</option>
      <option data-code="" data-name="Saint Barthelemy" data-cid="c206"><i className="flagstrap-icon"></i>Saint Barthelemy (+590)</option>
      <option data-code="SH" data-name="Saint Helena" data-cid="c207"><i className="flagstrap-icon"></i>Saint Helena (+290)</option>
      <option data-code="KN" data-name="Saint Kitts and Nevis" data-cid="c208"><i className="flagstrap-icon"></i>Saint Kitts and Nevis (+1-869)</option>
      <option data-code="LC" data-name="Saint Lucia" data-cid="c209"><i className="flagstrap-icon"></i>Saint Lucia (+1-758)</option>
      <option data-code="MF" data-name="Saint Martin" data-cid="c210"><i className="flagstrap-icon"></i>Saint Martin (+590)</option>
      <option data-code="PM" data-name="Saint Pierre and Miquelon" data-cid="c211"><i className="flagstrap-icon"></i>Saint Pierre and Miquelon (+508)</option>
      <option data-code="VC" data-name="Saint Vincent and the Grenadines" data-cid="c212"><i className="flagstrap-icon"></i>Saint Vincent and the Grenadines (+1-784)</option>
      <option data-code="WS" data-name="Samoa" data-cid="c213"><i className="flagstrap-icon"></i>Samoa (+685)</option>
      <option data-code="SM" data-name="San Marino" data-cid="c214"><i className="flagstrap-icon"></i>San Marino (+378)</option>
      <option data-code="ST" data-name="Sao Tome and Principe" data-cid="c215"><i className="flagstrap-icon"></i>Sao Tome and Principe (+239)</option>
      <option data-code="SA" data-name="Saudi Arabia" data-cid="c216"><i className="flagstrap-icon"></i>Saudi Arabia (+966)</option>
      <option data-code="SN" data-name="Senegal" data-cid="c217"><i className="flagstrap-icon"></i>Senegal (+221)</option>
      <option data-code="RS" data-name="Serbia" data-cid="c218"><i className="flagstrap-icon"></i>Serbia (+381)</option>
      <option data-code="SC" data-name="Seychelles" data-cid="c219"><i className="flagstrap-icon"></i>Seychelles (+248)</option>
      <option data-code="SL" data-name="Sierra Leone" data-cid="c220"><i className="flagstrap-icon"></i>Sierra Leone (+232)</option>
      <option data-code="SG" data-name="Singapore" data-cid="c221"><i className="flagstrap-icon"></i>Singapore (+65)</option>
      <option data-code="SK" data-name="Slovakia" data-cid="c222"><i className="flagstrap-icon"></i>Slovakia (+421)</option>
      <option data-code="SI" data-name="Slovenia" data-cid="c223"><i className="flagstrap-icon"></i>Slovenia (+386)</option>
      <option data-code="SB" data-name="Solomon Islands" data-cid="c224"><i className="flagstrap-icon"></i>Solomon Islands (+677)</option>
      <option data-code="SO" data-name="Somalia" data-cid="c225"><i className="flagstrap-icon"></i>Somalia (+252)</option>
      <option data-code="ZA" data-name="South Africa" data-cid="c226"><i className="flagstrap-icon"></i>South Africa (+27)</option>
      <option data-code="KR" data-name="South Korea" data-cid="c227"><i className="flagstrap-icon"></i>South Korea (+82)</option>
      <option data-code="ES" data-name="Spain" data-cid="c228"><i className="flagstrap-icon"></i>Spain (+34)</option>
      <option data-code="LK" data-name="Sri Lanka" data-cid="c229"><i className="flagstrap-icon"></i>Sri Lanka (+94)</option>
      <option data-code="SD" data-name="Sudan" data-cid="c230"><i className="flagstrap-icon"></i>Sudan (+249)</option>
      <option data-code="SR" data-name="Suriname" data-cid="c231"><i className="flagstrap-icon"></i>Suriname (+597)</option>
      <option data-code="" data-name="Svalbard and Jan Mayen" data-cid="c232"><i className="flagstrap-icon"></i>Svalbard and Jan Mayen (+47)</option>
      <option data-code="SZ" data-name="Swaziland" data-cid="c233"><i className="flagstrap-icon"></i>Swaziland (+268)</option>
      <option data-code="SE" data-name="Sweden" data-cid="c234"><i className="flagstrap-icon"></i>Sweden (+46)</option>
      <option data-code="CH" data-name="Switzerland" data-cid="c235"><i className="flagstrap-icon"></i>Switzerland (+41)</option>
      <option data-code="SY" data-name="Syria" data-cid="c236"><i className="flagstrap-icon"></i>Syria (+963)</option>
      <option data-code="TW" data-name="Taiwan" data-cid="c237"><i className="flagstrap-icon"></i>Taiwan (+886)</option>
      <option data-code="TJ" data-name="Tajikistan" data-cid="c238"><i className="flagstrap-icon"></i>Tajikistan (+992)</option>
      <option data-code="TZ" data-name="Tanzania" data-cid="c239"><i className="flagstrap-icon"></i>Tanzania (+255)</option>
      <option data-code="TH" data-name="Thailand" data-cid="c240"><i className="flagstrap-icon"></i>Thailand (+66)</option>
      <option data-code="TG" data-name="Togo" data-cid="c241"><i className="flagstrap-icon"></i>Togo (+228)</option>
      <option data-code="TK" data-name="Tokelau" data-cid="c242"><i className="flagstrap-icon"></i>Tokelau (+690)</option>
      <option data-code="TO" data-name="Tonga" data-cid="c243"><i className="flagstrap-icon"></i>Tonga (+676)</option>
      <option data-code="TT" data-name="Trinidad and Tobago" data-cid="c244"><i className="flagstrap-icon"></i>Trinidad and Tobago (+1-868)</option>
      <option data-code="TN" data-name="Tunisia" data-cid="c245"><i className="flagstrap-icon"></i>Tunisia (+216)</option>
      <option data-code="TR" data-name="Turkey" data-cid="c246"><i className="flagstrap-icon"></i>Turkey (+90)</option>
      <option data-code="TM" data-name="Turkmenistan" data-cid="c247"><i className="flagstrap-icon"></i>Turkmenistan (+993)</option>
      <option data-code="TC" data-name="Turks and Caicos Islands" data-cid="c248"><i className="flagstrap-icon"></i>Turks and Caicos Islands (+1-649)</option>
      <option data-code="TV" data-name="Tuvalu" data-cid="c249"><i className="flagstrap-icon"></i>Tuvalu (+688)</option>
      <option data-code="" data-name="US. Virgin Islands" data-cid="c250"><i className="flagstrap-icon"></i>US. Virgin Islands (+1-340)</option>
      <option data-code="UG" data-name="Uganda" data-cid="c251"><i className="flagstrap-icon"></i>Uganda (+256)</option>
      <option data-code="UK" data-name="Ukraine" data-cid="c252"><i className="flagstrap-icon"></i>Ukraine (+380)</option>
      <option data-code="AE" data-name="United Arab Emirates" data-cid="c253"><i className="flagstrap-icon"></i>United Arab Emirates (+971)</option>
      <option data-code="GB" data-name="United Kingdom" data-cid="c254"><i className="flagstrap-icon"></i>United Kingdom (+44)</option>
      <option data-code="US" data-name="United States" data-cid="c255"><i className="flagstrap-icon"></i>United States (+1)</option>
      <option data-code="UY" data-name="Uruguay" data-cid="c256"><i className="flagstrap-icon"></i>Uruguay (+598)</option>
      <option data-code="UZ" data-name="Uzbekistan" data-cid="c257"><i className="flagstrap-icon"></i>Uzbekistan (+998)</option>
      <option data-code="VU" data-name="Vanuatu" data-cid="c258"><i className="flagstrap-icon"></i>Vanuatu (+678)</option>
      <option data-code="" data-name="Vatican" data-cid="c259"><i className="flagstrap-icon"></i>Vatican (+379)</option>
      <option data-code="VE" data-name="Venezuela" data-cid="c260"><i className="flagstrap-icon"></i>Venezuela (+58)</option>
      <option data-code="VN" data-name="Vietnam" data-cid="c261"><i className="flagstrap-icon"></i>Vietnam (+84)</option>
      <option data-code="WF" data-name="Wallis and Futuna" data-cid="c262"><i className="flagstrap-icon"></i>Wallis and Futuna (+681)</option>
      <option data-code="EH" data-name="Western Sahara" data-cid="c263"><i className="flagstrap-icon"></i>Western Sahara (+212)</option>
      <option data-code="YE" data-name="Yemen" data-cid="c264"><i className="flagstrap-icon"></i>Yemen (+967)</option>
      <option data-code="ZM" data-name="Zambia" data-cid="c265"><i className="flagstrap-icon"></i>Zambia (+260)</option>
      <option data-code="ZW" data-name="Zimbabwe" data-cid="c266"><i className="flagstrap-icon"></i>Zimbabwe (+263)</option>
    
      </select>

 
  <input type="number" className="form-control form" placeholder="phone" />
  <button className="btn btn-danger">send one time password </button>
  <hr/>
   <i id="or" >or</i>
  <a href="#" className="anch" ><span className="bi bi-envelope-fill"></span>  continue with email </a>
  <a href="#" className="anch"><span className="bi bi-google"></span>   continue with google </a>
 
  </div>
  <hr></hr>
  <p>new to Zomato?<Link  to="/signup" onClick={Signup}>create account</Link></p>
  </div>
</div>)
}
export default Login