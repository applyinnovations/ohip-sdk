# OccupantThresholdPricingTypeChildren

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Threshold** | Pointer to **int32** | Threshold value, after it is reached the corresponding amount will be charged. | [optional] 
**Amount** | Pointer to **float32** | Amount to be charged after the threshold is reached. | [optional] 
**ExcludeBucket1** | Pointer to **bool** | When rates are Defined by Age buckets, should the 1st buckets children count be excluded from threshold pricing. | [optional] 
**ExcludeBucket2** | Pointer to **bool** | When rates are Defined by Age buckets, should the 2nd buckets children count be excluded from threshold pricing. | [optional] 
**ExcludeBucket3** | Pointer to **bool** | When rates are Defined by Age buckets, should the 3rd buckets children count be excluded from threshold pricing. | [optional] 

## Methods

### NewOccupantThresholdPricingTypeChildren

`func NewOccupantThresholdPricingTypeChildren() *OccupantThresholdPricingTypeChildren`

NewOccupantThresholdPricingTypeChildren instantiates a new OccupantThresholdPricingTypeChildren object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOccupantThresholdPricingTypeChildrenWithDefaults

`func NewOccupantThresholdPricingTypeChildrenWithDefaults() *OccupantThresholdPricingTypeChildren`

NewOccupantThresholdPricingTypeChildrenWithDefaults instantiates a new OccupantThresholdPricingTypeChildren object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetThreshold

`func (o *OccupantThresholdPricingTypeChildren) GetThreshold() int32`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *OccupantThresholdPricingTypeChildren) GetThresholdOk() (*int32, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *OccupantThresholdPricingTypeChildren) SetThreshold(v int32)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *OccupantThresholdPricingTypeChildren) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetAmount

`func (o *OccupantThresholdPricingTypeChildren) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OccupantThresholdPricingTypeChildren) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OccupantThresholdPricingTypeChildren) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *OccupantThresholdPricingTypeChildren) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetExcludeBucket1

`func (o *OccupantThresholdPricingTypeChildren) GetExcludeBucket1() bool`

GetExcludeBucket1 returns the ExcludeBucket1 field if non-nil, zero value otherwise.

### GetExcludeBucket1Ok

`func (o *OccupantThresholdPricingTypeChildren) GetExcludeBucket1Ok() (*bool, bool)`

GetExcludeBucket1Ok returns a tuple with the ExcludeBucket1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeBucket1

`func (o *OccupantThresholdPricingTypeChildren) SetExcludeBucket1(v bool)`

SetExcludeBucket1 sets ExcludeBucket1 field to given value.

### HasExcludeBucket1

`func (o *OccupantThresholdPricingTypeChildren) HasExcludeBucket1() bool`

HasExcludeBucket1 returns a boolean if a field has been set.

### GetExcludeBucket2

`func (o *OccupantThresholdPricingTypeChildren) GetExcludeBucket2() bool`

GetExcludeBucket2 returns the ExcludeBucket2 field if non-nil, zero value otherwise.

### GetExcludeBucket2Ok

`func (o *OccupantThresholdPricingTypeChildren) GetExcludeBucket2Ok() (*bool, bool)`

GetExcludeBucket2Ok returns a tuple with the ExcludeBucket2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeBucket2

`func (o *OccupantThresholdPricingTypeChildren) SetExcludeBucket2(v bool)`

SetExcludeBucket2 sets ExcludeBucket2 field to given value.

### HasExcludeBucket2

`func (o *OccupantThresholdPricingTypeChildren) HasExcludeBucket2() bool`

HasExcludeBucket2 returns a boolean if a field has been set.

### GetExcludeBucket3

`func (o *OccupantThresholdPricingTypeChildren) GetExcludeBucket3() bool`

GetExcludeBucket3 returns the ExcludeBucket3 field if non-nil, zero value otherwise.

### GetExcludeBucket3Ok

`func (o *OccupantThresholdPricingTypeChildren) GetExcludeBucket3Ok() (*bool, bool)`

GetExcludeBucket3Ok returns a tuple with the ExcludeBucket3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeBucket3

`func (o *OccupantThresholdPricingTypeChildren) SetExcludeBucket3(v bool)`

SetExcludeBucket3 sets ExcludeBucket3 field to given value.

### HasExcludeBucket3

`func (o *OccupantThresholdPricingTypeChildren) HasExcludeBucket3() bool`

HasExcludeBucket3 returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


