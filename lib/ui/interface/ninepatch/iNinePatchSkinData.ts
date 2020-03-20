import { Transform } from "../pos/transform";

export interface INinePatchSkinData {
    transform: Transform;
    key: string; // 主贴图集key
    frame?: string; // 如果没有，则直接用__BASE
}
