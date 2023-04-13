export const COLOR_CHANGED = 'filter/colorChanged';
export const STATUS_CHANGED = 'filter/statusChanged';

export type stateType = {
    status?: string;
    colors?: string[];
    changeType?: string;
    color?: string;
}

export type actionType = {
    type: string;
    payload: stateType
}

