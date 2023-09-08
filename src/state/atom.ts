import { atom } from 'recoil';
import { IEvento } from '../interfaces/IEvento';
import { IFiltroDeEventos } from '../interfaces/IFiltroDeEventos';

export const ListaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: []
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
})