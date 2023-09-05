import { useRecoilValue } from "recoil"
import { ListaDeEventosState } from "../atom"

const useListaDeEventos = () => {
    return useRecoilValue(ListaDeEventosState)
}

export default useListaDeEventos