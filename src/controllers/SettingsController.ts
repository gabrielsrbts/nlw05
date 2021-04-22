import { Request, Response } from "express"  // necessário definir as tipagens neste caso, ele não reconhece da mesma forma que no caso do Routes
import { SettingsService } from "../services/SettingsService"

class SettingsController {

    async create(req: Request, res: Response) {
        const { chat, username } = req.body  // desestruturação

        const settingsService = new SettingsService()

        try {
            
            const settings = await settingsService.create({ chat, username })
    
            return res.json(settings)

        } catch(e) {
            return res.status(400).json({
                message: `Error: ${e.message}`
            })
        }


    }

}

export { SettingsController }