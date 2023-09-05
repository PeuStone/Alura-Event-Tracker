import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { ListaDeEventosState } from "../atom"

const useRemoverEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(ListaDeEventosState)

    return (evento: IEvento) => {
        setListaDeEventos((listaAntiga => [...listaAntiga.filter(evt => evento.id !== evt.id)]))
    }

}

export default useRemoverEvento