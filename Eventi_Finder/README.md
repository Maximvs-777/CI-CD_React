Documento dei Requisiti – Even Finder
Versione: 1.0
Data: 15/10/2025
________________________________________
1. Introduzione
1.1 Scopo
Even Finder è un'applicazione React per la gestione di eventi. Questo documento descrive i requisiti per la versione 1.0, che include tutte le funzionalità principali.
1.2 Convenzioni
•	Requisiti indicati come REQ-1, REQ-2, ecc.
•	Priorità: Alta, Media, Bassa

1.3 Destinatari
•	Sviluppatori: sviluppo e rilascio
•	Tester: validazione
•	Stakeholder: revisione requisiti
1.4 Ambito del Progetto
L’app consente di creare, gestire, cercare, eliminare ed esportare/importare eventi, con persistenza su localStorage. È sviluppata in step incrementali secondo pratiche DevOps.
1.5 Riferimenti
•	React: https://react.dev
•	JSON: https://json.org
•	DevOps: https://azure.microsoft.com/devops
________________________________________
2. Descrizione Generale
2.1 Contesto
Applicazione standalone basata su React, senza backend. Funziona interamente in browser.
2.2 Funzionalità principali
•	Inserimento eventi
•	Visualizzazione eventi
•	Eliminazione eventi
•	Ricerca e filtri
•	Salvataggio in localStorage
•	Import/export JSON
2.3 Tipi di Utenti
Utente	Descrizione
Base	Usa l’app per gestire eventi
Dev/Tester	Gestisce sviluppo e test
2.4 Ambiente Operativo
•	Browser moderni (Chrome, Firefox, Safari, Edge)
•	Nessun server necessario
•	Dati in localStorage
2.5 Vincoli
•	Solo client-side
•	Formato dati JSON

2.6 Documentazione Utente
•	CHANGELOG per ogni versione
•	README con istruzioni

________________________________________
3. Funzionalità del Sistema
3.1 Inserimento Eventi
Priorità: Alta
•	REQ-1: Aggiunta evento con Titolo, Luogo, Categoria, Prezzo, Data
•	REQ-2: Validazione campi
•	REQ-3: Salvataggio in localStorage
3.2 Visualizzazione Eventi
Priorità: Alta
•	REQ-4: Visualizza lista eventi da localStorage
•	REQ-5: Aggiorna lista in tempo reale
3.3 Eliminazione Eventi
Priorità: Alta
•	REQ-6: Eliminazione evento singolo o multiplo
•	REQ-7: Rimozione dal localStorage
3.4 Ricerca e Filtri
Priorità: Media
•	REQ-8: Ricerca per Titolo, Luogo, Categoria, Prezzo, Data
•	REQ-9: Filtri combinabili
3.5 Importazione/Esportazione JSON
Priorità: Media
•	REQ-10: Esporta eventi in JSON
•	REQ-11: Importa eventi da JSON
•	REQ-12: Gestione errori in import
________________________________________
4. Requisiti di Interfaccia
4.1 Interfaccia Utente
•	Layout semplice e reattivo
•	Interazione intuitiva
•	Supporto a UI libraries (facoltativo)
4.2 Interfacce Hardware
Nessuna richiesta specifica
4.3 Interfacce Software
•	Uso di localStorage
•	Formato dati: JSON
________________________________________

