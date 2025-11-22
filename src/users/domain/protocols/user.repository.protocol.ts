import {
  BaseCreateUsecase,
  BaseDeleteUsecase,
  BaseFindByIdUsecase,
  BaseGetAllUsecase,
  BaseUpdateUsecase,
} from "src/shared/domain/protocols";

import { InputUserDTO, OutputUserDTO } from "../../application/dtos";

export type UserRepository = BaseCreateUsecase<InputUserDTO> &
  BaseDeleteUsecase &
  BaseFindByIdUsecase<OutputUserDTO> &
  BaseGetAllUsecase<OutputUserDTO> &
  BaseUpdateUsecase<InputUserDTO>;
