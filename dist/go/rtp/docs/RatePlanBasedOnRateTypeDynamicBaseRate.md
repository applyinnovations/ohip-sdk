# RatePlanBasedOnRateTypeDynamicBaseRate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompareWithRateSchedules** | Pointer to **bool** | While showing availability, do system need to compare the static rates defined for the rate with dynamically computed base rate pricing? If true, availability shows lower of the these two pricing. If false, availabilty shows the dynamically calucated pricing. | [optional] 
**DependentRatePlans** | Pointer to **[]string** | Rate Plan code. | [optional] 
**DynamicBaseAmount** | Pointer to **float32** | Base Amount used for Dynamic base rate calculation. | [optional] 
**DynamicBasedOnRatePlan** | Pointer to **string** | Rate plan code used to Dynamically base the rate on. | [optional] 
**FlatOrPercentage** | Pointer to **string** | Flat or Percentage (FLT/PCT) indicator. | [optional] 
**Rounding** | Pointer to **string** | Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal. | [optional] 

## Methods

### NewRatePlanBasedOnRateTypeDynamicBaseRate

`func NewRatePlanBasedOnRateTypeDynamicBaseRate() *RatePlanBasedOnRateTypeDynamicBaseRate`

NewRatePlanBasedOnRateTypeDynamicBaseRate instantiates a new RatePlanBasedOnRateTypeDynamicBaseRate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanBasedOnRateTypeDynamicBaseRateWithDefaults

`func NewRatePlanBasedOnRateTypeDynamicBaseRateWithDefaults() *RatePlanBasedOnRateTypeDynamicBaseRate`

NewRatePlanBasedOnRateTypeDynamicBaseRateWithDefaults instantiates a new RatePlanBasedOnRateTypeDynamicBaseRate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompareWithRateSchedules

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetCompareWithRateSchedules() bool`

GetCompareWithRateSchedules returns the CompareWithRateSchedules field if non-nil, zero value otherwise.

### GetCompareWithRateSchedulesOk

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetCompareWithRateSchedulesOk() (*bool, bool)`

GetCompareWithRateSchedulesOk returns a tuple with the CompareWithRateSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompareWithRateSchedules

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) SetCompareWithRateSchedules(v bool)`

SetCompareWithRateSchedules sets CompareWithRateSchedules field to given value.

### HasCompareWithRateSchedules

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) HasCompareWithRateSchedules() bool`

HasCompareWithRateSchedules returns a boolean if a field has been set.

### GetDependentRatePlans

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetDependentRatePlans() []string`

GetDependentRatePlans returns the DependentRatePlans field if non-nil, zero value otherwise.

### GetDependentRatePlansOk

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetDependentRatePlansOk() (*[]string, bool)`

GetDependentRatePlansOk returns a tuple with the DependentRatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependentRatePlans

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) SetDependentRatePlans(v []string)`

SetDependentRatePlans sets DependentRatePlans field to given value.

### HasDependentRatePlans

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) HasDependentRatePlans() bool`

HasDependentRatePlans returns a boolean if a field has been set.

### GetDynamicBaseAmount

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetDynamicBaseAmount() float32`

GetDynamicBaseAmount returns the DynamicBaseAmount field if non-nil, zero value otherwise.

### GetDynamicBaseAmountOk

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetDynamicBaseAmountOk() (*float32, bool)`

GetDynamicBaseAmountOk returns a tuple with the DynamicBaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDynamicBaseAmount

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) SetDynamicBaseAmount(v float32)`

SetDynamicBaseAmount sets DynamicBaseAmount field to given value.

### HasDynamicBaseAmount

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) HasDynamicBaseAmount() bool`

HasDynamicBaseAmount returns a boolean if a field has been set.

### GetDynamicBasedOnRatePlan

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetDynamicBasedOnRatePlan() string`

GetDynamicBasedOnRatePlan returns the DynamicBasedOnRatePlan field if non-nil, zero value otherwise.

### GetDynamicBasedOnRatePlanOk

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetDynamicBasedOnRatePlanOk() (*string, bool)`

GetDynamicBasedOnRatePlanOk returns a tuple with the DynamicBasedOnRatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDynamicBasedOnRatePlan

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) SetDynamicBasedOnRatePlan(v string)`

SetDynamicBasedOnRatePlan sets DynamicBasedOnRatePlan field to given value.

### HasDynamicBasedOnRatePlan

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) HasDynamicBasedOnRatePlan() bool`

HasDynamicBasedOnRatePlan returns a boolean if a field has been set.

### GetFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetFlatOrPercentage() string`

GetFlatOrPercentage returns the FlatOrPercentage field if non-nil, zero value otherwise.

### GetFlatOrPercentageOk

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetFlatOrPercentageOk() (*string, bool)`

GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) SetFlatOrPercentage(v string)`

SetFlatOrPercentage sets FlatOrPercentage field to given value.

### HasFlatOrPercentage

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) HasFlatOrPercentage() bool`

HasFlatOrPercentage returns a boolean if a field has been set.

### GetRounding

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetRounding() string`

GetRounding returns the Rounding field if non-nil, zero value otherwise.

### GetRoundingOk

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) GetRoundingOk() (*string, bool)`

GetRoundingOk returns a tuple with the Rounding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRounding

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) SetRounding(v string)`

SetRounding sets Rounding field to given value.

### HasRounding

`func (o *RatePlanBasedOnRateTypeDynamicBaseRate) HasRounding() bool`

HasRounding returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


