import { createContext, useContext } from 'react';

let contexts = {};

export function useContextGenerator(name) {
  if (!Object.hasOwn(contexts, name)) {
    contexts = { ...contexts, [name]: createContext() };
  }

  const Context = contexts[name];

  return ({ children, value }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
}

export function useContextOf(name) {
  const Context = contexts[name];

  return useContext(Context || createContext());
}
