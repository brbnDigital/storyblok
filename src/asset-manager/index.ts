import { client } from "../client"
import { SPACE_ID } from "../variables"

export type Asset = {
    id: number
    filename: string
    space_id: number
    created_at: string
    updated_at: string
    asset_folder_id: number
    deleted_at?: string
    content_length: number
    content_type: string
    alt: string
    copyright: string
    title: string
    focus?: string
    ext_id?: number
    expire_at?: string
    source?: string
    internal_tag_ids: string[]
    locked: boolean
    is_private: boolean
    publish_at?: string
    internal_tags_list: string[]
    short_filename: string
}

export async function GetAssets(): Promise<Asset[]> {

    let request = await client.get(`spaces/${SPACE_ID}/assets`)
    return request.data.assets as Asset[] ?? []

}

export async function GetAsset(assetId: number): Promise<Asset> {

    let request = await client.get(`spaces/${SPACE_ID}/assets/${assetId}`)
    return request.data as Asset ?? undefined

}

export async function UpdateAsset(assetId: number, asset: Partial<Asset>) {

    await client.put(`spaces/${SPACE_ID}/assets/${assetId}`, asset)
    return await GetAsset(assetId)

}
