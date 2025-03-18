# EventRevenueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueType** | Pointer to **string** | Type of Revenue | [optional] 
**Revenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewEventRevenueType

`func NewEventRevenueType() *EventRevenueType`

NewEventRevenueType instantiates a new EventRevenueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventRevenueTypeWithDefaults

`func NewEventRevenueTypeWithDefaults() *EventRevenueType`

NewEventRevenueTypeWithDefaults instantiates a new EventRevenueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueType

`func (o *EventRevenueType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *EventRevenueType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *EventRevenueType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *EventRevenueType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetRevenue

`func (o *EventRevenueType) GetRevenue() CurrencyAmountType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *EventRevenueType) GetRevenueOk() (*CurrencyAmountType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *EventRevenueType) SetRevenue(v CurrencyAmountType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *EventRevenueType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


