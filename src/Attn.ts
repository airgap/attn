export interface AttnConfig {
    coverageMinimum: number;
    inattentiveAfter: number;
}
export const AttnDefaultConfig: AttnConfig = {
    coverageMinimum: 50, // window must take up 50% of usable screen space
    inattentiveAfter: 45, // users are considered inattentive after 45 seconds of inactivity
};
export class Attn {
    constructor (public config: Partial<AttnConfig>) {

    }
}
