import { httpRequest } from '@/api'

const FILE_UPLOAD_PATH = '/reports'

export const filesService = {
  uploadFile: (data: FormData) =>
    httpRequest('multipart/form-data').post(FILE_UPLOAD_PATH, data)
}
