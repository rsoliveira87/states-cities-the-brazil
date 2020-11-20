class StatesAndCitiesTheBrazil {

    constructor() {}

    /**
     * Método inicializador da classe
     *
     * @memberof StatesAndCitiesTheBrazil
     * @method onInit
     */
    onInit() {
        this.getJson();
    }

    /**
     * Método que lê o json de estados e cidades
     *
     * @memberof StatesAndCitiesTheBrazil
     * @method getJson
     */
    getJson() {
        const file = 'assets/json/states-and-cities-the-brazil.json';

        fetch( file )
            .then( response => response.json() )
            .then( data => this.populateSelectStates( data ) );
    }

    /**
     * Método que popula o select de estados
     *
     * @memberof StatesAndCitiesTheBrazil
     * @method populateSelectStates
     * @param {Object} data - Estados e cidades vindos do json
     */
    populateSelectStates( data ) {
        const statesSelect = document.querySelector( '#states' );
        const { estados } = data;
        let options = '';

        for( const estado of estados )
            options += `<option value="${estado.nome}">${estado.nome}</option>`;

        statesSelect.innerHTML += options;

        statesSelect.onchange = () => {
            const state = estados.filter( item => item.nome === statesSelect.value );

            this.populateSelectCities( state );
        };
    }

    /**
     * Método que popula o select de cidades conforme o estado
     *
     * @memberof StatesAndCitiesTheBrazil
     * @method populateSelectCities
     * @param {Object} states - Estado selecionado ou array vazio
     */
    populateSelectCities( state ) {
        const citiesSelect = document.querySelector( '#cities' );
        let options = '<option value="">Cidades</options>';
        
        if( state.length > 0 ) {
            const cities = state[0].cidades;
            
            for( const city of cities ) 
                options += `<option value="${city}">${city}</option>`;
        }

        citiesSelect.innerHTML = options;
    }    
}

// Instância da classe
const instance = new StatesAndCitiesTheBrazil;

instance.onInit();
