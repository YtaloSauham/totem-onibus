import pgp from 'pg-promise'
import InputProps from '../interface/InputProps';
require('dotenv').config()
export default class Bus {

    constructor() {

    }


    async getByBairroAndLocation(Input: InputProps) {
        const connection = pgp()(`postgres://postgres:${process.env.DATABASE_PASSWORD}${process.env.DATABASE_USER}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DATA}`)
        const consultResult = await connection.query("select item_de_itinerario.nome, tipo_sentido.descricao, tipo_item_itinerario.descricao, terminal_linhas.plataforma,linhas_de_onibus.codigo,linhas_de_onibus.nome,linhas_de_onibus.caracteristica,itinerario.ordem from itinerario inner join linhas_de_onibus on  itinerario.fk_idlinhas= linhas_de_onibus.idlinhas inner join item_de_itinerario on itinerario.fk_iditem = item_de_itinerario.iditem inner join tipo_item_itinerario on item_de_itinerario.fk_idtipo= tipo_item_itinerario.idtipo inner join terminal_linhas on terminal_linhas.fk_idlinhas = linhas_de_onibus.idlinhas inner join tipo_sentido on terminal_linhas.fk_idtipo_sentido = tipo_sentido.idtipo_sentido where tipo_item_itinerario.descricao = $1 and terminal_linhas.fk_idterminal = $2 and item_de_itinerario.nome = $3", [Input.sentido, Input.terminalId, Input.local]);
        await connection.$pool.end();
        return consultResult
    }

    async getLinha(Input: InputProps) {
        const connection = pgp()(`postgres://postgres:${process.env.DATABASE_PASSWORD}${process.env.DATABASE_USER}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DATA}`)
        const consultResult = await connection.query("select item_de_itinerario.nome, tipo_sentido.descricao, tipo_item_itinerario.descricao, terminal_linhas.plataforma,linhas_de_onibus.codigo,linhas_de_onibus.nome,linhas_de_onibus.caracteristica,itinerario.ordem from itinerario inner join linhas_de_onibus on  itinerario.fk_idlinhas= linhas_de_onibus.idlinhas inner join item_de_itinerario on itinerario.fk_iditem = item_de_itinerario.iditem inner join tipo_item_itinerario on item_de_itinerario.fk_idtipo= tipo_item_itinerario.idtipo inner join terminal_linhas on terminal_linhas.fk_idlinhas = linhas_de_onibus.idlinhas inner join tipo_sentido on terminal_linhas.fk_idtipo_sentido = tipo_sentido.idtipo_sentido where linhas_de_onibus.codigo =  $1 and terminal_linhas.fk_idterminal = $2", [Input.linha, Input.terminalId])
        await connection.$pool.end();
        return consultResult;
    }


}

