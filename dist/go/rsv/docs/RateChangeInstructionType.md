# RateChangeInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Discount** | Pointer to [**DiscountType**](DiscountType.md) |  | [optional] 
**RateChange** | Pointer to [**RateChangeType**](RateChangeType.md) |  | [optional] 

## Methods

### NewRateChangeInstructionType

`func NewRateChangeInstructionType() *RateChangeInstructionType`

NewRateChangeInstructionType instantiates a new RateChangeInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateChangeInstructionTypeWithDefaults

`func NewRateChangeInstructionTypeWithDefaults() *RateChangeInstructionType`

NewRateChangeInstructionTypeWithDefaults instantiates a new RateChangeInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDiscount

`func (o *RateChangeInstructionType) GetDiscount() DiscountType`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *RateChangeInstructionType) GetDiscountOk() (*DiscountType, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *RateChangeInstructionType) SetDiscount(v DiscountType)`

SetDiscount sets Discount field to given value.

### HasDiscount

`func (o *RateChangeInstructionType) HasDiscount() bool`

HasDiscount returns a boolean if a field has been set.

### GetRateChange

`func (o *RateChangeInstructionType) GetRateChange() RateChangeType`

GetRateChange returns the RateChange field if non-nil, zero value otherwise.

### GetRateChangeOk

`func (o *RateChangeInstructionType) GetRateChangeOk() (*RateChangeType, bool)`

GetRateChangeOk returns a tuple with the RateChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateChange

`func (o *RateChangeInstructionType) SetRateChange(v RateChangeType)`

SetRateChange sets RateChange field to given value.

### HasRateChange

`func (o *RateChangeInstructionType) HasRateChange() bool`

HasRateChange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


