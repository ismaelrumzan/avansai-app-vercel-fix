interface Metadata {
  token: string
}

export interface StorageFile {
  key: string
  AcceptRanges: string
  LastModified: string
  ContentLength: string
  ETag: string
  Metadata: Metadata
}
