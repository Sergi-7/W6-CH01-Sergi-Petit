import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  title: lorem.sentence(2),
  description: lorem.sentence(10),
}));

export const getRandomTask = () => factory.build();
export const getRandomTaskslist = (count = 3) => factory.buildList(count);
