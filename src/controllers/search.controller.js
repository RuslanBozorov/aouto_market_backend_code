import searchService from "../services/search.service.js";

class SearchController{
    constructor(){}

    async barchaQarzdorlar(req,res){
        const search = await searchService.barchaQarzdorlar()
        res.status(200).json({
            status:200,
            data:search
        })
    }

}

const searchController = new SearchController()

export default searchController