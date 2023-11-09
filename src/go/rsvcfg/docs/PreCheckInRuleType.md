# PreCheckInRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code of Pre Check-In Rule to be searched | [optional] 
**MarketCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**Memberships** | Pointer to [**MembershipTypeLevelListType**](MembershipTypeLevelListType.md) |  | [optional] 
**NewTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**OriginCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**RatePlans** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**ReservationTypes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**RuleType** | Pointer to [**PreCheckInRuleTypeType**](PreCheckInRuleTypeType.md) |  | [optional] 
**Specials** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**TimeLimit** | Pointer to [**PreCheckInTimeRuleTypes**](PreCheckInTimeRuleTypes.md) |  | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**VIPCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 

## Methods

### NewPreCheckInRuleType

`func NewPreCheckInRuleType() *PreCheckInRuleType`

NewPreCheckInRuleType instantiates a new PreCheckInRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreCheckInRuleTypeWithDefaults

`func NewPreCheckInRuleTypeWithDefaults() *PreCheckInRuleType`

NewPreCheckInRuleTypeWithDefaults instantiates a new PreCheckInRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PreCheckInRuleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PreCheckInRuleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PreCheckInRuleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PreCheckInRuleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMarketCodes

`func (o *PreCheckInRuleType) GetMarketCodes() CodeListType`

GetMarketCodes returns the MarketCodes field if non-nil, zero value otherwise.

### GetMarketCodesOk

`func (o *PreCheckInRuleType) GetMarketCodesOk() (*CodeListType, bool)`

GetMarketCodesOk returns a tuple with the MarketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodes

`func (o *PreCheckInRuleType) SetMarketCodes(v CodeListType)`

SetMarketCodes sets MarketCodes field to given value.

### HasMarketCodes

`func (o *PreCheckInRuleType) HasMarketCodes() bool`

HasMarketCodes returns a boolean if a field has been set.

### GetMemberships

`func (o *PreCheckInRuleType) GetMemberships() MembershipTypeLevelListType`

GetMemberships returns the Memberships field if non-nil, zero value otherwise.

### GetMembershipsOk

`func (o *PreCheckInRuleType) GetMembershipsOk() (*MembershipTypeLevelListType, bool)`

GetMembershipsOk returns a tuple with the Memberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberships

`func (o *PreCheckInRuleType) SetMemberships(v MembershipTypeLevelListType)`

SetMemberships sets Memberships field to given value.

### HasMemberships

`func (o *PreCheckInRuleType) HasMemberships() bool`

HasMemberships returns a boolean if a field has been set.

### GetNewTimeSpan

`func (o *PreCheckInRuleType) GetNewTimeSpan() TimeSpanType`

GetNewTimeSpan returns the NewTimeSpan field if non-nil, zero value otherwise.

### GetNewTimeSpanOk

`func (o *PreCheckInRuleType) GetNewTimeSpanOk() (*TimeSpanType, bool)`

GetNewTimeSpanOk returns a tuple with the NewTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewTimeSpan

`func (o *PreCheckInRuleType) SetNewTimeSpan(v TimeSpanType)`

SetNewTimeSpan sets NewTimeSpan field to given value.

### HasNewTimeSpan

`func (o *PreCheckInRuleType) HasNewTimeSpan() bool`

HasNewTimeSpan returns a boolean if a field has been set.

### GetOriginCodes

`func (o *PreCheckInRuleType) GetOriginCodes() CodeListType`

GetOriginCodes returns the OriginCodes field if non-nil, zero value otherwise.

### GetOriginCodesOk

`func (o *PreCheckInRuleType) GetOriginCodesOk() (*CodeListType, bool)`

GetOriginCodesOk returns a tuple with the OriginCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginCodes

`func (o *PreCheckInRuleType) SetOriginCodes(v CodeListType)`

SetOriginCodes sets OriginCodes field to given value.

### HasOriginCodes

`func (o *PreCheckInRuleType) HasOriginCodes() bool`

HasOriginCodes returns a boolean if a field has been set.

### GetRatePlans

`func (o *PreCheckInRuleType) GetRatePlans() CodeListType`

GetRatePlans returns the RatePlans field if non-nil, zero value otherwise.

### GetRatePlansOk

`func (o *PreCheckInRuleType) GetRatePlansOk() (*CodeListType, bool)`

GetRatePlansOk returns a tuple with the RatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlans

`func (o *PreCheckInRuleType) SetRatePlans(v CodeListType)`

SetRatePlans sets RatePlans field to given value.

### HasRatePlans

`func (o *PreCheckInRuleType) HasRatePlans() bool`

HasRatePlans returns a boolean if a field has been set.

### GetReservationTypes

`func (o *PreCheckInRuleType) GetReservationTypes() CodeListType`

GetReservationTypes returns the ReservationTypes field if non-nil, zero value otherwise.

### GetReservationTypesOk

`func (o *PreCheckInRuleType) GetReservationTypesOk() (*CodeListType, bool)`

GetReservationTypesOk returns a tuple with the ReservationTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationTypes

`func (o *PreCheckInRuleType) SetReservationTypes(v CodeListType)`

SetReservationTypes sets ReservationTypes field to given value.

### HasReservationTypes

`func (o *PreCheckInRuleType) HasReservationTypes() bool`

HasReservationTypes returns a boolean if a field has been set.

### GetRuleType

`func (o *PreCheckInRuleType) GetRuleType() PreCheckInRuleTypeType`

GetRuleType returns the RuleType field if non-nil, zero value otherwise.

### GetRuleTypeOk

`func (o *PreCheckInRuleType) GetRuleTypeOk() (*PreCheckInRuleTypeType, bool)`

GetRuleTypeOk returns a tuple with the RuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleType

`func (o *PreCheckInRuleType) SetRuleType(v PreCheckInRuleTypeType)`

SetRuleType sets RuleType field to given value.

### HasRuleType

`func (o *PreCheckInRuleType) HasRuleType() bool`

HasRuleType returns a boolean if a field has been set.

### GetSpecials

`func (o *PreCheckInRuleType) GetSpecials() CodeListType`

GetSpecials returns the Specials field if non-nil, zero value otherwise.

### GetSpecialsOk

`func (o *PreCheckInRuleType) GetSpecialsOk() (*CodeListType, bool)`

GetSpecialsOk returns a tuple with the Specials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecials

`func (o *PreCheckInRuleType) SetSpecials(v CodeListType)`

SetSpecials sets Specials field to given value.

### HasSpecials

`func (o *PreCheckInRuleType) HasSpecials() bool`

HasSpecials returns a boolean if a field has been set.

### GetTimeLimit

`func (o *PreCheckInRuleType) GetTimeLimit() PreCheckInTimeRuleTypes`

GetTimeLimit returns the TimeLimit field if non-nil, zero value otherwise.

### GetTimeLimitOk

`func (o *PreCheckInRuleType) GetTimeLimitOk() (*PreCheckInTimeRuleTypes, bool)`

GetTimeLimitOk returns a tuple with the TimeLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeLimit

`func (o *PreCheckInRuleType) SetTimeLimit(v PreCheckInTimeRuleTypes)`

SetTimeLimit sets TimeLimit field to given value.

### HasTimeLimit

`func (o *PreCheckInRuleType) HasTimeLimit() bool`

HasTimeLimit returns a boolean if a field has been set.

### GetTimeSpan

`func (o *PreCheckInRuleType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *PreCheckInRuleType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *PreCheckInRuleType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *PreCheckInRuleType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetVIPCodes

`func (o *PreCheckInRuleType) GetVIPCodes() CodeListType`

GetVIPCodes returns the VIPCodes field if non-nil, zero value otherwise.

### GetVIPCodesOk

`func (o *PreCheckInRuleType) GetVIPCodesOk() (*CodeListType, bool)`

GetVIPCodesOk returns a tuple with the VIPCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVIPCodes

`func (o *PreCheckInRuleType) SetVIPCodes(v CodeListType)`

SetVIPCodes sets VIPCodes field to given value.

### HasVIPCodes

`func (o *PreCheckInRuleType) HasVIPCodes() bool`

HasVIPCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


