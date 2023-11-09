# RotationRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationRule** | Pointer to [**RotationRuleCalculationRuleType**](RotationRuleCalculationRuleType.md) |  | [optional] 
**DaysOfWeek** | Pointer to [**DaysOfWeekAttrType**](DaysOfWeekAttrType.md) |  | [optional] 
**EndDate** | Pointer to **string** | Represents end date for Room Rotation Setup Rule. | [optional] 
**Multiplier** | Pointer to **float32** | Represents multiplier value to be used for an Owner Multiplier Rule or an Out of Order / Service Multiplier rule. | [optional] 
**Points** | Pointer to **float32** | Represents total points for a Rotation Setup Rule. (To be used with Rotation Point Rules) | [optional] 
**RateCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**Reasons** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**Referral** | Pointer to **bool** | Indicates that this Rotation Setup Rule is to be used for Owner Referral Reservations. | [optional] 
**RoomTypes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**RuleId** | Pointer to **float32** | Unique ID for Room Rotation Setup Rule. | [optional] 
**SetupType** | Pointer to [**RotationRuleSetupType**](RotationRuleSetupType.md) |  | [optional] 
**StartDate** | Pointer to **string** | Represents start date for Room Rotation Setup Rule. | [optional] 
**Status** | Pointer to [**RotationRuleStatusType**](RotationRuleStatusType.md) |  | [optional] 

## Methods

### NewRotationRuleType

`func NewRotationRuleType() *RotationRuleType`

NewRotationRuleType instantiates a new RotationRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRotationRuleTypeWithDefaults

`func NewRotationRuleTypeWithDefaults() *RotationRuleType`

NewRotationRuleTypeWithDefaults instantiates a new RotationRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalculationRule

`func (o *RotationRuleType) GetCalculationRule() RotationRuleCalculationRuleType`

GetCalculationRule returns the CalculationRule field if non-nil, zero value otherwise.

### GetCalculationRuleOk

`func (o *RotationRuleType) GetCalculationRuleOk() (*RotationRuleCalculationRuleType, bool)`

GetCalculationRuleOk returns a tuple with the CalculationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculationRule

`func (o *RotationRuleType) SetCalculationRule(v RotationRuleCalculationRuleType)`

SetCalculationRule sets CalculationRule field to given value.

### HasCalculationRule

`func (o *RotationRuleType) HasCalculationRule() bool`

HasCalculationRule returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *RotationRuleType) GetDaysOfWeek() DaysOfWeekAttrType`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *RotationRuleType) GetDaysOfWeekOk() (*DaysOfWeekAttrType, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *RotationRuleType) SetDaysOfWeek(v DaysOfWeekAttrType)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *RotationRuleType) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### GetEndDate

`func (o *RotationRuleType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *RotationRuleType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *RotationRuleType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *RotationRuleType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetMultiplier

`func (o *RotationRuleType) GetMultiplier() float32`

GetMultiplier returns the Multiplier field if non-nil, zero value otherwise.

### GetMultiplierOk

`func (o *RotationRuleType) GetMultiplierOk() (*float32, bool)`

GetMultiplierOk returns a tuple with the Multiplier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiplier

`func (o *RotationRuleType) SetMultiplier(v float32)`

SetMultiplier sets Multiplier field to given value.

### HasMultiplier

`func (o *RotationRuleType) HasMultiplier() bool`

HasMultiplier returns a boolean if a field has been set.

### GetPoints

`func (o *RotationRuleType) GetPoints() float32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *RotationRuleType) GetPointsOk() (*float32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *RotationRuleType) SetPoints(v float32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *RotationRuleType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.

### GetRateCodes

`func (o *RotationRuleType) GetRateCodes() CodeListType`

GetRateCodes returns the RateCodes field if non-nil, zero value otherwise.

### GetRateCodesOk

`func (o *RotationRuleType) GetRateCodesOk() (*CodeListType, bool)`

GetRateCodesOk returns a tuple with the RateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodes

`func (o *RotationRuleType) SetRateCodes(v CodeListType)`

SetRateCodes sets RateCodes field to given value.

### HasRateCodes

`func (o *RotationRuleType) HasRateCodes() bool`

HasRateCodes returns a boolean if a field has been set.

### GetReasons

`func (o *RotationRuleType) GetReasons() CodeListType`

GetReasons returns the Reasons field if non-nil, zero value otherwise.

### GetReasonsOk

`func (o *RotationRuleType) GetReasonsOk() (*CodeListType, bool)`

GetReasonsOk returns a tuple with the Reasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasons

`func (o *RotationRuleType) SetReasons(v CodeListType)`

SetReasons sets Reasons field to given value.

### HasReasons

`func (o *RotationRuleType) HasReasons() bool`

HasReasons returns a boolean if a field has been set.

### GetReferral

`func (o *RotationRuleType) GetReferral() bool`

GetReferral returns the Referral field if non-nil, zero value otherwise.

### GetReferralOk

`func (o *RotationRuleType) GetReferralOk() (*bool, bool)`

GetReferralOk returns a tuple with the Referral field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferral

`func (o *RotationRuleType) SetReferral(v bool)`

SetReferral sets Referral field to given value.

### HasReferral

`func (o *RotationRuleType) HasReferral() bool`

HasReferral returns a boolean if a field has been set.

### GetRoomTypes

`func (o *RotationRuleType) GetRoomTypes() CodeListType`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *RotationRuleType) GetRoomTypesOk() (*CodeListType, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *RotationRuleType) SetRoomTypes(v CodeListType)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *RotationRuleType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetRuleId

`func (o *RotationRuleType) GetRuleId() float32`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *RotationRuleType) GetRuleIdOk() (*float32, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *RotationRuleType) SetRuleId(v float32)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *RotationRuleType) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetSetupType

`func (o *RotationRuleType) GetSetupType() RotationRuleSetupType`

GetSetupType returns the SetupType field if non-nil, zero value otherwise.

### GetSetupTypeOk

`func (o *RotationRuleType) GetSetupTypeOk() (*RotationRuleSetupType, bool)`

GetSetupTypeOk returns a tuple with the SetupType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupType

`func (o *RotationRuleType) SetSetupType(v RotationRuleSetupType)`

SetSetupType sets SetupType field to given value.

### HasSetupType

`func (o *RotationRuleType) HasSetupType() bool`

HasSetupType returns a boolean if a field has been set.

### GetStartDate

`func (o *RotationRuleType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RotationRuleType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RotationRuleType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *RotationRuleType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetStatus

`func (o *RotationRuleType) GetStatus() RotationRuleStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RotationRuleType) GetStatusOk() (*RotationRuleStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RotationRuleType) SetStatus(v RotationRuleStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RotationRuleType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


