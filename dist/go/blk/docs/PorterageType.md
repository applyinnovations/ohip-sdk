# PorterageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PorterageIncluded** | Pointer to **bool** | Indicates if the room rate quoted includes any porterage cost. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewPorterageType

`func NewPorterageType() *PorterageType`

NewPorterageType instantiates a new PorterageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPorterageTypeWithDefaults

`func NewPorterageTypeWithDefaults() *PorterageType`

NewPorterageTypeWithDefaults instantiates a new PorterageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPorterageIncluded

`func (o *PorterageType) GetPorterageIncluded() bool`

GetPorterageIncluded returns the PorterageIncluded field if non-nil, zero value otherwise.

### GetPorterageIncludedOk

`func (o *PorterageType) GetPorterageIncludedOk() (*bool, bool)`

GetPorterageIncludedOk returns a tuple with the PorterageIncluded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPorterageIncluded

`func (o *PorterageType) SetPorterageIncluded(v bool)`

SetPorterageIncluded sets PorterageIncluded field to given value.

### HasPorterageIncluded

`func (o *PorterageType) HasPorterageIncluded() bool`

HasPorterageIncluded returns a boolean if a field has been set.

### GetPrice

`func (o *PorterageType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *PorterageType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *PorterageType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *PorterageType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


