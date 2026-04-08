# ConfigUpsellRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description gives the description for the upsell rule. | [optional] 
**UpsellByRoomType** | Pointer to **bool** | Signifies whether upsell rule involves upselling from room type to room type or from room class to room class. | [optional] 
**FromRoomTypeOrFromRoomClass** | Pointer to **string** | The \&quot;from\&quot; room type or room class for the upsell rule. This is the original room type/room class category. | [optional] 
**ToRoomTypeOrToRoomClass** | Pointer to **string** | The \&quot;to\&quot; room type or room class for the upsell rule. This is the room type that the original room type/room class will be upsold to. | [optional] 
**StartDate** | Pointer to **string** | This represents the begin date of the date range for which the upsell rule is valid. | [optional] 
**EndDate** | Pointer to **string** | This represents the end date of the date range for which the upsell rule is valid. | [optional] 
**RateCodes** | Pointer to **[]string** |  | [optional] 
**RateCategories** | Pointer to **[]string** |  | [optional] 
**MembershipTypes** | Pointer to **[]string** |  | [optional] 
**Channels** | Pointer to **[]string** |  | [optional] 
**ReservationTypes** | Pointer to **[]string** |  | [optional] 
**MarketCodes** | Pointer to **[]string** |  | [optional] 
**UpsellByOccupancyLevels** | Pointer to **bool** | Signifies whether upsell rule is by occupancy levels or by amount. | [optional] 
**Formula** | Pointer to [**FormulaType**](FormulaType.md) |  | [optional] 
**UpsellAmount** | Pointer to **float32** | Signifies the formula to apply to the rule. The formula selected is used to calculate the upsell amount that is offered. | [optional] 
**CurrencyCode** | Pointer to **string** | The currency code used in the upsell rule. | [optional] 
**RoundingRule** | Pointer to [**RoundingRuleType**](RoundingRuleType.md) |  | [optional] 
**OccupancyLevelsType** | Pointer to [**[]ConfigOccupancyLevelType**](ConfigOccupancyLevelType.md) | This type holds a collection of upsell amounts by occupancy levels. | [optional] 
**DaysInAdvance** | Pointer to **int32** | Specifies the number of days in advance of the reservation arrival date that a reservation can be upsold using this rule. So if this field is set to 10, then the reservation must be booked at least 10 days before the arrival date, in order to be eligible for the upsell. | [optional] 
**UseDefaultTrxCode** | Pointer to **bool** | Signifies whether the default trx code defined for the property has to be used when posting upsell charges. | [optional] 
**TransactionCode** | Pointer to [**TrxInfoType**](TrxInfoType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel code for which the upsell rule is defined. | [optional] 
**UpsellRuleCode** | Pointer to **string** | Specifies the user defined code that identifies a upsell rule. | [optional] 

## Methods

### NewConfigUpsellRuleType

`func NewConfigUpsellRuleType() *ConfigUpsellRuleType`

NewConfigUpsellRuleType instantiates a new ConfigUpsellRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigUpsellRuleTypeWithDefaults

`func NewConfigUpsellRuleTypeWithDefaults() *ConfigUpsellRuleType`

NewConfigUpsellRuleTypeWithDefaults instantiates a new ConfigUpsellRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ConfigUpsellRuleType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigUpsellRuleType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigUpsellRuleType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigUpsellRuleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUpsellByRoomType

`func (o *ConfigUpsellRuleType) GetUpsellByRoomType() bool`

GetUpsellByRoomType returns the UpsellByRoomType field if non-nil, zero value otherwise.

### GetUpsellByRoomTypeOk

`func (o *ConfigUpsellRuleType) GetUpsellByRoomTypeOk() (*bool, bool)`

GetUpsellByRoomTypeOk returns a tuple with the UpsellByRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellByRoomType

`func (o *ConfigUpsellRuleType) SetUpsellByRoomType(v bool)`

SetUpsellByRoomType sets UpsellByRoomType field to given value.

### HasUpsellByRoomType

`func (o *ConfigUpsellRuleType) HasUpsellByRoomType() bool`

HasUpsellByRoomType returns a boolean if a field has been set.

### GetFromRoomTypeOrFromRoomClass

`func (o *ConfigUpsellRuleType) GetFromRoomTypeOrFromRoomClass() string`

GetFromRoomTypeOrFromRoomClass returns the FromRoomTypeOrFromRoomClass field if non-nil, zero value otherwise.

### GetFromRoomTypeOrFromRoomClassOk

`func (o *ConfigUpsellRuleType) GetFromRoomTypeOrFromRoomClassOk() (*string, bool)`

GetFromRoomTypeOrFromRoomClassOk returns a tuple with the FromRoomTypeOrFromRoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoomTypeOrFromRoomClass

`func (o *ConfigUpsellRuleType) SetFromRoomTypeOrFromRoomClass(v string)`

SetFromRoomTypeOrFromRoomClass sets FromRoomTypeOrFromRoomClass field to given value.

### HasFromRoomTypeOrFromRoomClass

`func (o *ConfigUpsellRuleType) HasFromRoomTypeOrFromRoomClass() bool`

HasFromRoomTypeOrFromRoomClass returns a boolean if a field has been set.

### GetToRoomTypeOrToRoomClass

`func (o *ConfigUpsellRuleType) GetToRoomTypeOrToRoomClass() string`

GetToRoomTypeOrToRoomClass returns the ToRoomTypeOrToRoomClass field if non-nil, zero value otherwise.

### GetToRoomTypeOrToRoomClassOk

`func (o *ConfigUpsellRuleType) GetToRoomTypeOrToRoomClassOk() (*string, bool)`

GetToRoomTypeOrToRoomClassOk returns a tuple with the ToRoomTypeOrToRoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoomTypeOrToRoomClass

`func (o *ConfigUpsellRuleType) SetToRoomTypeOrToRoomClass(v string)`

SetToRoomTypeOrToRoomClass sets ToRoomTypeOrToRoomClass field to given value.

### HasToRoomTypeOrToRoomClass

`func (o *ConfigUpsellRuleType) HasToRoomTypeOrToRoomClass() bool`

HasToRoomTypeOrToRoomClass returns a boolean if a field has been set.

### GetStartDate

`func (o *ConfigUpsellRuleType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ConfigUpsellRuleType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ConfigUpsellRuleType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ConfigUpsellRuleType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ConfigUpsellRuleType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ConfigUpsellRuleType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ConfigUpsellRuleType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ConfigUpsellRuleType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetRateCodes

`func (o *ConfigUpsellRuleType) GetRateCodes() []string`

GetRateCodes returns the RateCodes field if non-nil, zero value otherwise.

### GetRateCodesOk

`func (o *ConfigUpsellRuleType) GetRateCodesOk() (*[]string, bool)`

GetRateCodesOk returns a tuple with the RateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodes

`func (o *ConfigUpsellRuleType) SetRateCodes(v []string)`

SetRateCodes sets RateCodes field to given value.

### HasRateCodes

`func (o *ConfigUpsellRuleType) HasRateCodes() bool`

HasRateCodes returns a boolean if a field has been set.

### GetRateCategories

`func (o *ConfigUpsellRuleType) GetRateCategories() []string`

GetRateCategories returns the RateCategories field if non-nil, zero value otherwise.

### GetRateCategoriesOk

`func (o *ConfigUpsellRuleType) GetRateCategoriesOk() (*[]string, bool)`

GetRateCategoriesOk returns a tuple with the RateCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategories

`func (o *ConfigUpsellRuleType) SetRateCategories(v []string)`

SetRateCategories sets RateCategories field to given value.

### HasRateCategories

`func (o *ConfigUpsellRuleType) HasRateCategories() bool`

HasRateCategories returns a boolean if a field has been set.

### GetMembershipTypes

`func (o *ConfigUpsellRuleType) GetMembershipTypes() []string`

GetMembershipTypes returns the MembershipTypes field if non-nil, zero value otherwise.

### GetMembershipTypesOk

`func (o *ConfigUpsellRuleType) GetMembershipTypesOk() (*[]string, bool)`

GetMembershipTypesOk returns a tuple with the MembershipTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypes

`func (o *ConfigUpsellRuleType) SetMembershipTypes(v []string)`

SetMembershipTypes sets MembershipTypes field to given value.

### HasMembershipTypes

`func (o *ConfigUpsellRuleType) HasMembershipTypes() bool`

HasMembershipTypes returns a boolean if a field has been set.

### GetChannels

`func (o *ConfigUpsellRuleType) GetChannels() []string`

GetChannels returns the Channels field if non-nil, zero value otherwise.

### GetChannelsOk

`func (o *ConfigUpsellRuleType) GetChannelsOk() (*[]string, bool)`

GetChannelsOk returns a tuple with the Channels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannels

`func (o *ConfigUpsellRuleType) SetChannels(v []string)`

SetChannels sets Channels field to given value.

### HasChannels

`func (o *ConfigUpsellRuleType) HasChannels() bool`

HasChannels returns a boolean if a field has been set.

### GetReservationTypes

`func (o *ConfigUpsellRuleType) GetReservationTypes() []string`

GetReservationTypes returns the ReservationTypes field if non-nil, zero value otherwise.

### GetReservationTypesOk

`func (o *ConfigUpsellRuleType) GetReservationTypesOk() (*[]string, bool)`

GetReservationTypesOk returns a tuple with the ReservationTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationTypes

`func (o *ConfigUpsellRuleType) SetReservationTypes(v []string)`

SetReservationTypes sets ReservationTypes field to given value.

### HasReservationTypes

`func (o *ConfigUpsellRuleType) HasReservationTypes() bool`

HasReservationTypes returns a boolean if a field has been set.

### GetMarketCodes

`func (o *ConfigUpsellRuleType) GetMarketCodes() []string`

GetMarketCodes returns the MarketCodes field if non-nil, zero value otherwise.

### GetMarketCodesOk

`func (o *ConfigUpsellRuleType) GetMarketCodesOk() (*[]string, bool)`

GetMarketCodesOk returns a tuple with the MarketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodes

`func (o *ConfigUpsellRuleType) SetMarketCodes(v []string)`

SetMarketCodes sets MarketCodes field to given value.

### HasMarketCodes

`func (o *ConfigUpsellRuleType) HasMarketCodes() bool`

HasMarketCodes returns a boolean if a field has been set.

### GetUpsellByOccupancyLevels

`func (o *ConfigUpsellRuleType) GetUpsellByOccupancyLevels() bool`

GetUpsellByOccupancyLevels returns the UpsellByOccupancyLevels field if non-nil, zero value otherwise.

### GetUpsellByOccupancyLevelsOk

`func (o *ConfigUpsellRuleType) GetUpsellByOccupancyLevelsOk() (*bool, bool)`

GetUpsellByOccupancyLevelsOk returns a tuple with the UpsellByOccupancyLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellByOccupancyLevels

`func (o *ConfigUpsellRuleType) SetUpsellByOccupancyLevels(v bool)`

SetUpsellByOccupancyLevels sets UpsellByOccupancyLevels field to given value.

### HasUpsellByOccupancyLevels

`func (o *ConfigUpsellRuleType) HasUpsellByOccupancyLevels() bool`

HasUpsellByOccupancyLevels returns a boolean if a field has been set.

### GetFormula

`func (o *ConfigUpsellRuleType) GetFormula() FormulaType`

GetFormula returns the Formula field if non-nil, zero value otherwise.

### GetFormulaOk

`func (o *ConfigUpsellRuleType) GetFormulaOk() (*FormulaType, bool)`

GetFormulaOk returns a tuple with the Formula field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormula

`func (o *ConfigUpsellRuleType) SetFormula(v FormulaType)`

SetFormula sets Formula field to given value.

### HasFormula

`func (o *ConfigUpsellRuleType) HasFormula() bool`

HasFormula returns a boolean if a field has been set.

### GetUpsellAmount

`func (o *ConfigUpsellRuleType) GetUpsellAmount() float32`

GetUpsellAmount returns the UpsellAmount field if non-nil, zero value otherwise.

### GetUpsellAmountOk

`func (o *ConfigUpsellRuleType) GetUpsellAmountOk() (*float32, bool)`

GetUpsellAmountOk returns a tuple with the UpsellAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellAmount

`func (o *ConfigUpsellRuleType) SetUpsellAmount(v float32)`

SetUpsellAmount sets UpsellAmount field to given value.

### HasUpsellAmount

`func (o *ConfigUpsellRuleType) HasUpsellAmount() bool`

HasUpsellAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ConfigUpsellRuleType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ConfigUpsellRuleType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ConfigUpsellRuleType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ConfigUpsellRuleType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetRoundingRule

`func (o *ConfigUpsellRuleType) GetRoundingRule() RoundingRuleType`

GetRoundingRule returns the RoundingRule field if non-nil, zero value otherwise.

### GetRoundingRuleOk

`func (o *ConfigUpsellRuleType) GetRoundingRuleOk() (*RoundingRuleType, bool)`

GetRoundingRuleOk returns a tuple with the RoundingRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingRule

`func (o *ConfigUpsellRuleType) SetRoundingRule(v RoundingRuleType)`

SetRoundingRule sets RoundingRule field to given value.

### HasRoundingRule

`func (o *ConfigUpsellRuleType) HasRoundingRule() bool`

HasRoundingRule returns a boolean if a field has been set.

### GetOccupancyLevelsType

`func (o *ConfigUpsellRuleType) GetOccupancyLevelsType() []ConfigOccupancyLevelType`

GetOccupancyLevelsType returns the OccupancyLevelsType field if non-nil, zero value otherwise.

### GetOccupancyLevelsTypeOk

`func (o *ConfigUpsellRuleType) GetOccupancyLevelsTypeOk() (*[]ConfigOccupancyLevelType, bool)`

GetOccupancyLevelsTypeOk returns a tuple with the OccupancyLevelsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupancyLevelsType

`func (o *ConfigUpsellRuleType) SetOccupancyLevelsType(v []ConfigOccupancyLevelType)`

SetOccupancyLevelsType sets OccupancyLevelsType field to given value.

### HasOccupancyLevelsType

`func (o *ConfigUpsellRuleType) HasOccupancyLevelsType() bool`

HasOccupancyLevelsType returns a boolean if a field has been set.

### GetDaysInAdvance

`func (o *ConfigUpsellRuleType) GetDaysInAdvance() int32`

GetDaysInAdvance returns the DaysInAdvance field if non-nil, zero value otherwise.

### GetDaysInAdvanceOk

`func (o *ConfigUpsellRuleType) GetDaysInAdvanceOk() (*int32, bool)`

GetDaysInAdvanceOk returns a tuple with the DaysInAdvance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysInAdvance

`func (o *ConfigUpsellRuleType) SetDaysInAdvance(v int32)`

SetDaysInAdvance sets DaysInAdvance field to given value.

### HasDaysInAdvance

`func (o *ConfigUpsellRuleType) HasDaysInAdvance() bool`

HasDaysInAdvance returns a boolean if a field has been set.

### GetUseDefaultTrxCode

`func (o *ConfigUpsellRuleType) GetUseDefaultTrxCode() bool`

GetUseDefaultTrxCode returns the UseDefaultTrxCode field if non-nil, zero value otherwise.

### GetUseDefaultTrxCodeOk

`func (o *ConfigUpsellRuleType) GetUseDefaultTrxCodeOk() (*bool, bool)`

GetUseDefaultTrxCodeOk returns a tuple with the UseDefaultTrxCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseDefaultTrxCode

`func (o *ConfigUpsellRuleType) SetUseDefaultTrxCode(v bool)`

SetUseDefaultTrxCode sets UseDefaultTrxCode field to given value.

### HasUseDefaultTrxCode

`func (o *ConfigUpsellRuleType) HasUseDefaultTrxCode() bool`

HasUseDefaultTrxCode returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ConfigUpsellRuleType) GetTransactionCode() TrxInfoType`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ConfigUpsellRuleType) GetTransactionCodeOk() (*TrxInfoType, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ConfigUpsellRuleType) SetTransactionCode(v TrxInfoType)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ConfigUpsellRuleType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigUpsellRuleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigUpsellRuleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigUpsellRuleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigUpsellRuleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetUpsellRuleCode

`func (o *ConfigUpsellRuleType) GetUpsellRuleCode() string`

GetUpsellRuleCode returns the UpsellRuleCode field if non-nil, zero value otherwise.

### GetUpsellRuleCodeOk

`func (o *ConfigUpsellRuleType) GetUpsellRuleCodeOk() (*string, bool)`

GetUpsellRuleCodeOk returns a tuple with the UpsellRuleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellRuleCode

`func (o *ConfigUpsellRuleType) SetUpsellRuleCode(v string)`

SetUpsellRuleCode sets UpsellRuleCode field to given value.

### HasUpsellRuleCode

`func (o *ConfigUpsellRuleType) HasUpsellRuleCode() bool`

HasUpsellRuleCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


