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
      return res.results
    }
    
    getPlanet(id) {
      return this.getResource(`/planets/${id}/`)
    }
  
    async getAllStarships() {
      const res = await this.getResource('/starships')
      return res.results
    }
    
    getStarship(id) {
      return this.getResource(`/starships/${id}/`)
    }
  }
  
  
  
  const swapi = new SwapiService();
  
  swapi.getAllPeople().then((people) => {
    
  })
  
  swapi.getPerson(1).then((body) => {
    
  })
  
  swapi.getAllStarships().then((starships) => {
    console.log(starships)
  })
  
  swapi.getStarship(9).then((body) => {
    console.log(body)
  })