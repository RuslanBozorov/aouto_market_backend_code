import pool from "../database/config.js";

class SearchService{
    async barchaQarzdorlar(){
    const nowData = new Date
    const search =await pool.query("select c.fullName as Ismi, c.contact as telefonRaqam, car.name as mashinaNomi,o.end_date,p.amount as tulovMuqdori from orders o inner join customers c on c.id=o.customerid inner join car  on car.id=o.carid inner join payments p on p.orderid = o.id where o.end_date < $1",[nowData])
    return search.rows
    }

}

const searchService = new SearchService()

export default searchService




