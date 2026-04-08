# AdvancedDynamicBaseRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BasedOnRatePlan** | Pointer to **string** | Rate plan code used to Advanced Dynamically base the rate on. | [optional] 
**Rounding** | Pointer to **string** | Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal. | [optional] 
**CompareWithRateSchedules** | Pointer to **bool** | While showing availability, do system need to compare the static rates defined for the rate with Advanced dynamically computed base rate pricing? If true, availability shows lower of the these two pricing. If false, availability shows the advanced dynamically calculated pricing. | [optional] 
**AdvancedDependentRatePlans** | Pointer to **[]string** | Rate Plan code. | [optional] 

## Methods

### NewAdvancedDynamicBaseRateType

`func NewAdvancedDynamicBaseRateType() *AdvancedDynamicBaseRateType`

NewAdvancedDynamicBaseRateType instantiates a new AdvancedDynamicBaseRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdvancedDynamicBaseRateTypeWithDefaults

`func NewAdvancedDynamicBaseRateTypeWithDefaults() *AdvancedDynamicBaseRateType`

NewAdvancedDynamicBaseRateTypeWithDefaults instantiates a new AdvancedDynamicBaseRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBasedOnRatePlan

`func (o *AdvancedDynamicBaseRateType) GetBasedOnRatePlan() string`

GetBasedOnRatePlan returns the BasedOnRatePlan field if non-nil, zero value otherwise.

### GetBasedOnRatePlanOk

`func (o *AdvancedDynamicBaseRateType) GetBasedOnRatePlanOk() (*string, bool)`

GetBasedOnRatePlanOk returns a tuple with the BasedOnRatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasedOnRatePlan

`func (o *AdvancedDynamicBaseRateType) SetBasedOnRatePlan(v string)`

SetBasedOnRatePlan sets BasedOnRatePlan field to given value.

### HasBasedOnRatePlan

`func (o *AdvancedDynamicBaseRateType) HasBasedOnRatePlan() bool`

HasBasedOnRatePlan returns a boolean if a field has been set.

### GetRounding

`func (o *AdvancedDynamicBaseRateType) GetRounding() string`

GetRounding returns the Rounding field if non-nil, zero value otherwise.

### GetRoundingOk

`func (o *AdvancedDynamicBaseRateType) GetRoundingOk() (*string, bool)`

GetRoundingOk returns a tuple with the Rounding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRounding

`func (o *AdvancedDynamicBaseRateType) SetRounding(v string)`

SetRounding sets Rounding field to given value.

### HasRounding

`func (o *AdvancedDynamicBaseRateType) HasRounding() bool`

HasRounding returns a boolean if a field has been set.

### GetCompareWithRateSchedules

`func (o *AdvancedDynamicBaseRateType) GetCompareWithRateSchedules() bool`

GetCompareWithRateSchedules returns the CompareWithRateSchedules field if non-nil, zero value otherwise.

### GetCompareWithRateSchedulesOk

`func (o *AdvancedDynamicBaseRateType) GetCompareWithRateSchedulesOk() (*bool, bool)`

GetCompareWithRateSchedulesOk returns a tuple with the CompareWithRateSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompareWithRateSchedules

`func (o *AdvancedDynamicBaseRateType) SetCompareWithRateSchedules(v bool)`

SetCompareWithRateSchedules sets CompareWithRateSchedules field to given value.

### HasCompareWithRateSchedules

`func (o *AdvancedDynamicBaseRateType) HasCompareWithRateSchedules() bool`

HasCompareWithRateSchedules returns a boolean if a field has been set.

### GetAdvancedDependentRatePlans

`func (o *AdvancedDynamicBaseRateType) GetAdvancedDependentRatePlans() []string`

GetAdvancedDependentRatePlans returns the AdvancedDependentRatePlans field if non-nil, zero value otherwise.

### GetAdvancedDependentRatePlansOk

`func (o *AdvancedDynamicBaseRateType) GetAdvancedDependentRatePlansOk() (*[]string, bool)`

GetAdvancedDependentRatePlansOk returns a tuple with the AdvancedDependentRatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDependentRatePlans

`func (o *AdvancedDynamicBaseRateType) SetAdvancedDependentRatePlans(v []string)`

SetAdvancedDependentRatePlans sets AdvancedDependentRatePlans field to given value.

### HasAdvancedDependentRatePlans

`func (o *AdvancedDynamicBaseRateType) HasAdvancedDependentRatePlans() bool`

HasAdvancedDependentRatePlans returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


