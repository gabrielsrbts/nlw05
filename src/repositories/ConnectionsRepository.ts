import { EntityRepository, Repository } from "typeorm"
import { Connection } from "../entities/Connection"  // o TYPEORM possui uma CLasse connection, então estamos garantindo 
                                                     // que o Connection que estamos utilizando é o correto
@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {


}

export { ConnectionsRepository }