'use client';
import { createContext } from 'react'

//create context
const BioData: any = createContext(null);

export default BioData;

//context
//provider
//consumer --> in context Api but it's too much lengthy so we can Use useContextHook(); instead of consumer