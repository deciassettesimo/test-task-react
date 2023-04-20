import { types, Instance } from 'mobx-state-tree';

export const ValueWithUnit = types.model({
  value: types.maybeNull(types.number),
  unit: types.maybeNull(types.string),
});

export interface IValueWithUnit extends Instance<typeof ValueWithUnit> {}

export const Beer = types.model({
  id: types.number,
  name: types.maybeNull(types.string),
  tagline: types.maybeNull(types.string),
  first_brewed: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
  image_url: types.maybeNull(types.string),
  abv: types.maybeNull(types.number),
  ibu: types.maybeNull(types.number),
  target_fg: types.maybeNull(types.number),
  target_og: types.maybeNull(types.number),
  ebc: types.maybeNull(types.number),
  srm: types.maybeNull(types.number),
  ph: types.maybeNull(types.number),
  attenuation_level: types.maybeNull(types.number),
  volume: types.maybeNull(ValueWithUnit),
  boil_volume: types.maybeNull(ValueWithUnit),
  method: types.maybeNull(
    types.model({
      mash_temp: types.maybeNull(
        types.array(
          types.model({
            temp: types.maybeNull(ValueWithUnit),
            duration: types.maybeNull(types.number),
          }),
        ),
      ),
      fermentation: types.maybeNull(
        types.model({
          temp: types.maybeNull(ValueWithUnit),
        }),
      ),
      twist: types.maybeNull(types.string),
    }),
  ),
  ingredients: types.maybeNull(
    types.model({
      malt: types.maybeNull(
        types.array(
          types.model({
            name: types.maybeNull(types.string),
            amount: types.maybeNull(ValueWithUnit),
          }),
        ),
      ),
      hops: types.maybeNull(
        types.array(
          types.model({
            name: types.maybeNull(types.string),
            amount: types.maybeNull(ValueWithUnit),
            add: types.maybeNull(types.string),
            attribute: types.maybeNull(types.string),
          }),
        ),
      ),
      yeast: types.maybeNull(types.string),
    }),
  ),
  food_pairing: types.maybeNull(types.array(types.string)),
  brewers_tips: types.maybeNull(types.string),
  contributed_by: types.maybeNull(types.string),
});

export interface IBeer extends Instance<typeof Beer> {}
