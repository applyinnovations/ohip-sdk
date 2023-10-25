# EventForecastRevDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AmountType** | Pointer to [**ForecastRevenueAmountTypeType**](ForecastRevenueAmountTypeType.md) |  | [optional] 
**RevenueType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewEventForecastRevDetailType

`func NewEventForecastRevDetailType() *EventForecastRevDetailType`

NewEventForecastRevDetailType instantiates a new EventForecastRevDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventForecastRevDetailTypeWithDefaults

`func NewEventForecastRevDetailTypeWithDefaults() *EventForecastRevDetailType`

NewEventForecastRevDetailTypeWithDefaults instantiates a new EventForecastRevDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *EventForecastRevDetailType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *EventForecastRevDetailType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *EventForecastRevDetailType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *EventForecastRevDetailType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetAmountType

`func (o *EventForecastRevDetailType) GetAmountType() ForecastRevenueAmountTypeType`

GetAmountType returns the AmountType field if non-nil, zero value otherwise.

### GetAmountTypeOk

`func (o *EventForecastRevDetailType) GetAmountTypeOk() (*ForecastRevenueAmountTypeType, bool)`

GetAmountTypeOk returns a tuple with the AmountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountType

`func (o *EventForecastRevDetailType) SetAmountType(v ForecastRevenueAmountTypeType)`

SetAmountType sets AmountType field to given value.

### HasAmountType

`func (o *EventForecastRevDetailType) HasAmountType() bool`

HasAmountType returns a boolean if a field has been set.

### GetRevenueType

`func (o *EventForecastRevDetailType) GetRevenueType() CodeDescriptionType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *EventForecastRevDetailType) GetRevenueTypeOk() (*CodeDescriptionType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *EventForecastRevDetailType) SetRevenueType(v CodeDescriptionType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *EventForecastRevDetailType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


