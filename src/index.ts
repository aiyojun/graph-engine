import type {Node, Wire, Port, Group} from "./core/engine";
import {Graph} from "./core/engine";
import {CyberPanel, Descriptor} from "./tools/panel";
import {Menu, type MenuItem} from "./tools/menu";
import {load, lang, $t, $T} from "./locale";
const locale = {load, lang, $t, $T}
export {
    Graph, Node, Wire, Port, Group,
    CyberPanel, Descriptor,
    Menu, MenuItem, locale,
}