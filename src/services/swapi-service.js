export default class SwapiService {
    apiBase = 'https://swapi.dev/api'
    async getResource(url) {
      
      const res = await fetch(`${this.apiBase}${url}`);
  
    if (!res.ok) {
      throw new Error (`Could not fetch ${this.apiBase}` + ` , received ${res.status}`)
    }
  
   return await res.json();
    } 
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`)
      return res.results
    }
  
    getPerson(id) {
      return this.getResource(`/people/${id}/`)
    }
  
    async getAllPlanets() {
      const res = await this.getResource('/planets')
      return res.results.map(this.transformPlanet)
    }
    
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return this.transformPlanet(planet)
    }
  
    async getAllStarships() {
      const res = await this.getResource('/starships')
      return res.results
    }
    
    getStarship(id) {
      return this.getResource(`/starships/${id}/`)
    }

    extractId(item) {
      const idRegExp = /\/([0-9])*\/$/;
      return item.url.match(idRegExp)[1] 
    }

    transformPlanet(planet) {
      
      
      return { 
          id : this.extractId(planet),       
          name: planet.name,
          population: planet.population,
          rotation: planet.rotation_period,
          diameter:planet.diameter
      }
    }
  }
  