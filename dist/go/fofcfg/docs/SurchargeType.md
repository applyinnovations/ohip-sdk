# SurchargeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Minimum** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Percentage** | Pointer to **float32** | Indicates the percentage amount for a credit card transaction. | [optional] 

## Methods

### NewSurchargeType

`func NewSurchargeType() *SurchargeType`

NewSurchargeType instantiates a new SurchargeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSurchargeTypeWithDefaults

`func NewSurchargeTypeWithDefaults() *SurchargeType`

NewSurchargeTypeWithDefaults instantiates a new SurchargeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMinimum

`func (o *SurchargeType) GetMinimum() CurrencyAmountType`

GetMinimum returns the Minimum field if non-nil, zero value otherwise.

### GetMinimumOk

`func (o *SurchargeType) GetMinimumOk() (*CurrencyAmountType, bool)`

GetMinimumOk returns a tuple with the Minimum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimum

`func (o *SurchargeType) SetMinimum(v CurrencyAmountType)`

SetMinimum sets Minimum field to given value.

### HasMinimum

`func (o *SurchargeType) HasMinimum() bool`

HasMinimum returns a boolean if a field has been set.

### GetPercentage

`func (o *SurchargeType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *SurchargeType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *SurchargeType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *SurchargeType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


