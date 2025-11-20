import {
  BaseCreateUsecase,
  BaseDeleteUsecase,
  BaseFindByIdUsecase,
  BaseGetAllUsecase,
  BaseUpdateUsecase,
} from "src/shared/usecases";

import { InputUserDTO, OutputUserDTO } from "./dtos";

export type UserRepository = BaseCreateUsecase<InputUserDTO> &
  BaseDeleteUsecase &
  BaseFindByIdUsecase<OutputUserDTO> &
  BaseGetAllUsecase<OutputUserDTO> &
  BaseUpdateUsecase<InputUserDTO>;
