import React from 'react';

import { TableItemData, TableCellRendererParams } from 'components/atoms/Table/types';
import Block from 'components/atoms/Block';
import Grid, { Item } from 'components/atoms/Grid';
import getFormattedAmount from 'utils/getFormattedAmount';
import Span from 'components/atoms/Span';

function Image(props: TableItemData) {
  const { image_url } = props;
  if (!image_url) return null;

  return (
    <Block size="xs">
      <img
        src={image_url}
        style={{ width: 'auto', display: 'block', height: 200, margin: '0 auto' }}
      />
    </Block>
  );
}

function Name(props: TableItemData) {
  const { name } = props;
  return (
    <Block size="s" fontWeight="medium">
      {name}
    </Block>
  );
}

function Tagline(props: TableItemData) {
  const { tagline } = props;
  return <Block size="xs">{tagline}</Block>;
}

function FirstBrewed(props: TableItemData) {
  const { first_brewed } = props;
  return <Block size="xs">{first_brewed}</Block>;
}

function Description(props: TableItemData) {
  const { description } = props;
  return <Block size="xs">{description}</Block>;
}

function Parameters(props: TableItemData) {
  const { abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level, volume, boil_volume } =
    props;
  return (
    <Block size="xs" vPadding="xs">
      <Grid spacing="xs" size={2}>
        <Item size={1}>
          <Grid spacing="xs">
            <Item>
              <Span color="secondary60">ABV:</Span>
            </Item>
            <Item>{getFormattedAmount(abv)}</Item>
          </Grid>
        </Item>
        <Item size={1}>
          <Grid spacing="xs">
            <Item>
              <Span color="secondary60">IBU:</Span>
            </Item>
            <Item>{getFormattedAmount(ibu)}</Item>
          </Grid>
        </Item>
        <Item size={1}>
          <Grid spacing="xs">
            <Item>
              <Span color="secondary60">TARGET FG:</Span>
            </Item>
            <Item>{getFormattedAmount(target_fg)}</Item>
          </Grid>
        </Item>
        <Item size={1}>
          <Grid spacing="xs">
            <Item>
              <Span color="secondary60">TARGET OG:</Span>
            </Item>
            <Item>{getFormattedAmount(target_og)}</Item>
          </Grid>
        </Item>
        <Item size={1}>
          <Grid spacing="xs">
            <Item>
              <Span color="secondary60">EBC:</Span>
            </Item>
            <Item>{getFormattedAmount(ebc)}</Item>
          </Grid>
        </Item>
        <Item size={1}>
          <Grid spacing="xs">
            <Item>
              <Span color="secondary60">SRM:</Span>
            </Item>
            <Item>{getFormattedAmount(srm)}</Item>
          </Grid>
        </Item>
        <Item size={1}>
          <Grid spacing="xs">
            <Item>
              <Span color="secondary60">PH:</Span>
            </Item>
            <Item>{getFormattedAmount(ph)}</Item>
          </Grid>
        </Item>
        <Item size={1}>
          <Grid spacing="xs">
            <Item>
              <Span color="secondary60">ATTENUATION:</Span>
            </Item>
            <Item>{getFormattedAmount(attenuation_level)}</Item>
          </Grid>
        </Item>
        {volume?.value && (
          <Item size={1}>
            <Grid spacing="xs">
              <Item>
                <Span color="secondary60">VOLUME:</Span>
              </Item>
              <Item>
                {getFormattedAmount(volume?.value)} {volume?.unit}
              </Item>
            </Grid>
          </Item>
        )}
        {boil_volume?.value && (
          <Item size={1}>
            <Grid spacing="xs">
              <Item>
                <Span color="secondary60">BOIL VOL.:</Span>
              </Item>
              <Item>
                {getFormattedAmount(boil_volume?.value)} {boil_volume?.unit}
              </Item>
            </Grid>
          </Item>
        )}
      </Grid>
    </Block>
  );
}

function Method(props: TableItemData) {
  const { method } = props;

  if (!method) return null;

  const { mash_temp, fermentation, twist } = method;

  return (
    <Block size="xs" vPadding="xs">
      {mash_temp && (
        <Block margin="xs">
          <Block color="secondary60">Mash Temp:</Block>
          <Block>
            {mash_temp.map((item: any, index: number) => (
              <Block key={index}>
                {getFormattedAmount(item.temp?.value)} {item.temp?.unit}
                {item.duration && `, duration: ${item.duration}`}
              </Block>
            ))}
          </Block>
        </Block>
      )}
      {fermentation && (
        <Block margin="xs">
          <Block color="secondary60">Fermentation:</Block>
          <Block>
            {getFormattedAmount(fermentation.temp?.value)} {fermentation.temp?.unit}
          </Block>
        </Block>
      )}
      {twist && (
        <Block margin="xs">
          <Block color="secondary60">Twist:</Block>
          <Block>{twist}</Block>
        </Block>
      )}
    </Block>
  );
}

function Ingredients(props: TableItemData) {
  const { ingredients } = props;

  if (!ingredients) return null;

  const { malt, hops, yeast } = ingredients;

  return (
    <Block size="xs" vPadding="xs">
      {malt && (
        <Block margin="xs">
          <Block color="secondary60">Malt:</Block>
          <Block>
            {malt.map((item: any, index: number) => (
              <Block key={index}>
                {item.name} - {getFormattedAmount(item.amount?.value)} {item.amount?.unit}
              </Block>
            ))}
          </Block>
        </Block>
      )}
      {hops && (
        <Block margin="xs">
          <Block color="secondary60">Hops:</Block>
          <Block>
            {hops.map((item: any, index: number) => (
              <Block key={index}>
                {item.name} - {getFormattedAmount(item.amount?.value)} {item.amount?.unit} (
                {item.add}, {item.attribute})
              </Block>
            ))}
          </Block>
        </Block>
      )}
      {yeast && (
        <Block margin="xs">
          <Block color="secondary60">Yeast:</Block>
          <Block>{yeast}</Block>
        </Block>
      )}
    </Block>
  );
}

function FoodPairing(props: TableItemData) {
  const { food_pairing } = props;
  return <Block size="xs">{food_pairing?.join(', ')}</Block>;
}

function BrewersTips(props: TableItemData) {
  const { brewers_tips } = props;
  return <Block size="xs">{brewers_tips}</Block>;
}

function ContributedBy(props: TableItemData) {
  const { contributed_by } = props;
  return <Block size="xs">{contributed_by}</Block>;
}

export default function cellRenderer({ id, data }: TableCellRendererParams) {
  switch (id) {
    case 'image':
      return <Image {...data} />;
    case 'name':
      return <Name {...data} />;
    case 'tagline':
      return <Tagline {...data} />;
    case 'firstBrewed':
      return <FirstBrewed {...data} />;
    case 'description':
      return <Description {...data} />;
    case 'parameters':
      return <Parameters {...data} />;
    case 'method':
      return <Method {...data} />;
    case 'ingredients':
      return <Ingredients {...data} />;
    case 'foodPairing':
      return <FoodPairing {...data} />;
    case 'brewersTips':
      return <BrewersTips {...data} />;
    case 'contributedBy':
      return <ContributedBy {...data} />;
    default:
      return null;
  }
}
