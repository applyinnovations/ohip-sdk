# TotalPricingElementIDType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code that associated with Transaction Code and Total Pricing Element | [optional] 
**Transaction** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewTotalPricingElementIDType

`func NewTotalPricingElementIDType() *TotalPricingElementIDType`

NewTotalPricingElementIDType instantiates a new TotalPricingElementIDType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTotalPricingElementIDTypeWithDefaults

`func NewTotalPricingElementIDTypeWithDefaults() *TotalPricingElementIDType`

NewTotalPricingElementIDTypeWithDefaults instantiates a new TotalPricingElementIDType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TotalPricingElementIDType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TotalPricingElementIDType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TotalPricingElementIDType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TotalPricingElementIDType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransaction

`func (o *TotalPricingElementIDType) GetTransaction() CodeDescriptionType`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *TotalPricingElementIDType) GetTransactionOk() (*CodeDescriptionType, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *TotalPricingElementIDType) SetTransaction(v CodeDescriptionType)`

SetTransaction sets Transaction field to given value.

### HasTransaction

`func (o *TotalPricingElementIDType) HasTransaction() bool`

HasTransaction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


