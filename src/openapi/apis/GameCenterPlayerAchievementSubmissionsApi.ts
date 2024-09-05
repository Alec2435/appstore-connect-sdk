/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  GameCenterPlayerAchievementSubmissionCreateRequest,
  GameCenterPlayerAchievementSubmissionResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GameCenterPlayerAchievementSubmissionCreateRequestFromJSON,
    GameCenterPlayerAchievementSubmissionCreateRequestToJSON,
    GameCenterPlayerAchievementSubmissionResponseFromJSON,
    GameCenterPlayerAchievementSubmissionResponseToJSON,
} from '../models';

export interface GameCenterPlayerAchievementSubmissionsCreateInstanceRequest {
    gameCenterPlayerAchievementSubmissionCreateRequest: GameCenterPlayerAchievementSubmissionCreateRequest;
}

/**
 * 
 */
export class GameCenterPlayerAchievementSubmissionsApi extends runtime.BaseAPI {

    /**
     */
    async gameCenterPlayerAchievementSubmissionsCreateInstanceRaw(requestParameters: GameCenterPlayerAchievementSubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterPlayerAchievementSubmissionResponse>> {
        if (requestParameters.gameCenterPlayerAchievementSubmissionCreateRequest === null || requestParameters.gameCenterPlayerAchievementSubmissionCreateRequest === undefined) {
            throw new runtime.RequiredError('gameCenterPlayerAchievementSubmissionCreateRequest','Required parameter requestParameters.gameCenterPlayerAchievementSubmissionCreateRequest was null or undefined when calling gameCenterPlayerAchievementSubmissionsCreateInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/gameCenterPlayerAchievementSubmissions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterPlayerAchievementSubmissionCreateRequestToJSON(requestParameters.gameCenterPlayerAchievementSubmissionCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterPlayerAchievementSubmissionResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterPlayerAchievementSubmissionsCreateInstance(requestParameters: GameCenterPlayerAchievementSubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterPlayerAchievementSubmissionResponse> {
        const response = await this.gameCenterPlayerAchievementSubmissionsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
