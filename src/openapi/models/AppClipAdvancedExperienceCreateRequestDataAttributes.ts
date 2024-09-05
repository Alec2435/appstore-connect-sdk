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

import { exists, mapValues } from '../runtime';
import type { AppClipAction } from './AppClipAction';
import {
    AppClipActionFromJSON,
    AppClipActionFromJSONTyped,
    AppClipActionToJSON,
} from './AppClipAction';
import type { AppClipAdvancedExperienceAttributesPlace } from './AppClipAdvancedExperienceAttributesPlace';
import {
    AppClipAdvancedExperienceAttributesPlaceFromJSON,
    AppClipAdvancedExperienceAttributesPlaceFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlaceToJSON,
} from './AppClipAdvancedExperienceAttributesPlace';
import type { AppClipAdvancedExperienceLanguage } from './AppClipAdvancedExperienceLanguage';
import {
    AppClipAdvancedExperienceLanguageFromJSON,
    AppClipAdvancedExperienceLanguageFromJSONTyped,
    AppClipAdvancedExperienceLanguageToJSON,
} from './AppClipAdvancedExperienceLanguage';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceCreateRequestDataAttributes
 */
export interface AppClipAdvancedExperienceCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    link: string;
    /**
     * 
     * @type {AppClipAction}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    action?: AppClipAction;
    /**
     * 
     * @type {boolean}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    isPoweredBy: boolean;
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlace}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    place?: AppClipAdvancedExperienceAttributesPlace;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    businessCategory?: AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceLanguage}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    defaultLanguage: AppClipAdvancedExperienceLanguage;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum = {
    Automotive: 'AUTOMOTIVE',
    Beauty: 'BEAUTY',
    Bikes: 'BIKES',
    Books: 'BOOKS',
    Casino: 'CASINO',
    Education: 'EDUCATION',
    EducationJapan: 'EDUCATION_JAPAN',
    Entertainment: 'ENTERTAINMENT',
    EvCharger: 'EV_CHARGER',
    FinancialUsd: 'FINANCIAL_USD',
    FinancialCny: 'FINANCIAL_CNY',
    FinancialGbp: 'FINANCIAL_GBP',
    FinancialJpy: 'FINANCIAL_JPY',
    FinancialEur: 'FINANCIAL_EUR',
    Fitness: 'FITNESS',
    FoodAndDrink: 'FOOD_AND_DRINK',
    Gas: 'GAS',
    Grocery: 'GROCERY',
    HealthAndMedical: 'HEALTH_AND_MEDICAL',
    HotelAndTravel: 'HOTEL_AND_TRAVEL',
    Music: 'MUSIC',
    Parking: 'PARKING',
    PetServices: 'PET_SERVICES',
    ProfessionalServices: 'PROFESSIONAL_SERVICES',
    Shopping: 'SHOPPING',
    Ticketing: 'TICKETING',
    Transit: 'TRANSIT'
} as const;
export type AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum = typeof AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum[keyof typeof AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequestDataAttributes interface.
 */
export function instanceOfAppClipAdvancedExperienceCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "link" in value;
    isInstance = isInstance && "isPoweredBy" in value;
    isInstance = isInstance && "defaultLanguage" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceCreateRequestDataAttributesFromJSON(json: any): AppClipAdvancedExperienceCreateRequestDataAttributes {
    return AppClipAdvancedExperienceCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': json['link'],
        'action': !exists(json, 'action') ? undefined : AppClipActionFromJSON(json['action']),
        'isPoweredBy': json['isPoweredBy'],
        'place': !exists(json, 'place') ? undefined : AppClipAdvancedExperienceAttributesPlaceFromJSON(json['place']),
        'businessCategory': !exists(json, 'businessCategory') ? undefined : json['businessCategory'],
        'defaultLanguage': AppClipAdvancedExperienceLanguageFromJSON(json['defaultLanguage']),
    };
}

export function AppClipAdvancedExperienceCreateRequestDataAttributesToJSON(value?: AppClipAdvancedExperienceCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'action': AppClipActionToJSON(value.action),
        'isPoweredBy': value.isPoweredBy,
        'place': AppClipAdvancedExperienceAttributesPlaceToJSON(value.place),
        'businessCategory': value.businessCategory,
        'defaultLanguage': AppClipAdvancedExperienceLanguageToJSON(value.defaultLanguage),
    };
}

