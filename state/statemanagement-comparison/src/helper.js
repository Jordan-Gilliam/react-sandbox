export const update = (
  entityArray: IEntity[],
  entityId: number,
  data: IEntity & Object
) => {
  return entityArray.reduce((prev, cur) => {
    const { id, ...rest } = data;
    if (cur.id === entityId) {
      prev.push({ id: entityId, ...rest });
    } else {
      prev.push(cur);
    }
    return prev;
  }, []);
};
export const remove = (entityArray: IEntity[], itemId: number) =>
  entityArray.filter(cur => cur.id !== itemId);

export const create = (entityArray: IEntity[], item: IEntity & Object) => [
  ...entityArray,
  item
];
