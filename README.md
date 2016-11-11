# HL7Project
----------------------------------------------------------------------------------------------------------------------------------------
   **Background**
Health Level 7 is a set of international standards for transfer of clinical and administrative data between software applications used by various healthcare providers.

Hospitals and other healthcare provider organizations typically have many different computer systems used for everything from billing records to patient tracking. All of these systems should communicate with each other (or "interface") when they receive new information, or when they wish to retrieve information, but not all do so.

HL7 v2.x messages use a non-XML encoding syntax based on segments (lines) and one-character delimiters.[5] Segments have composites (fields) separated by the composite delimiter. A composite can have sub-composites (components) separated by the sub-composite delimiter, and sub-composites can have sub-sub-composites (subcomponents) separated by the sub-sub-composite delimiter. 

The default delimiters are vertical bar or pipe (|) for the field separator, caret (^) for the component separator, and ampersand (&) for the subcomponent separator. 
The tilde (~) is the default repetition separator. 
Each segment starts with a 3-character string which identifies the segment type. 
Each segment of the message contains one specific category of information. 
Every message has MSH as its first segment, which includes a field that identifies the message type. 
The message type determines the expected segment types in the message. The segment types used in a particular message type are specified by the segment grammar notation used in the HL7 standards.

  Example: 
      "MSH|^~\&|MegaReg|XYZHospC|SuperOE|XYZImgCtr|20060529090131-0500||ADT^A01^ADT_A01|01052901|P|2.5
        EVN||200605290901||||200605290900
        PID|||56782445^^^UAReg^PI||KLEINSAMPLE^BARRY^Q^JR||19620910|M||2028-9^^HL70005^RA99113^^XYZ|260 GOODWIN CREST DRIVE^^BIRMINGHAM^AL^35209^^M~NICKELL’S PICKLES^10000 W 100TH AVE^BIRMINGHAM^AL^35200^^O|||||||0105I30001^^^99DEF^AN
        PV1||I|W^389^1^UABH^^^^3||||12345^MORGAN^REX^J^^^MD^0010^UAMC^L||67890^GRAINGER^LUCY^X^^^MD^0010^UAMC^L|MED|||||A0||13579^POTTER^SHERMAN^T^^^MD^0010^UAMC^L|||||||||||||||||||||||||||200605290900
        OBX|1|NM|^Body Height||1.80|m^Meter^ISO+|||||F
        OBX|2|NM|^Body Weight||79|kg^Kilogram^ISO+|||||F
        AL1|1||^ASPIRIN
        DG1|1||786.50^CHEST PAIN, UNSPECIFIED^I9|||A"
----------------------------------------------------------------------------------------------------------------------------------------
   
   **Purpose of Application:**

Parse and stringify all the necessary parameters of the PID and  PV1 section of the segment (ie. Name, gender, address, doctor, etc) and return a HL7-encoded string.


------------------------------------------------------------------------------------------------------------------------------------------------


This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
##

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
