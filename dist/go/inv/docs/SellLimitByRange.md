# SellLimitByRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellLimitsByDateRange** | Pointer to [**[]SellLimitByDateRangeType**](SellLimitByDateRangeType.md) | Contains the sell limits for a given date range to be set. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSellLimitByRange

`func NewSellLimitByRange() *SellLimitByRange`

NewSellLimitByRange instantiates a new SellLimitByRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellLimitByRangeWithDefaults

`func NewSellLimitByRangeWithDefaults() *SellLimitByRange`

NewSellLimitByRangeWithDefaults instantiates a new SellLimitByRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSellLimitsByDateRange

`func (o *SellLimitByRange) GetSellLimitsByDateRange() []SellLimitByDateRangeType`

GetSellLimitsByDateRange returns the SellLimitsByDateRange field if non-nil, zero value otherwise.

### GetSellLimitsByDateRangeOk

`func (o *SellLimitByRange) GetSellLimitsByDateRangeOk() (*[]SellLimitByDateRangeType, bool)`

GetSellLimitsByDateRangeOk returns a tuple with the SellLimitsByDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimitsByDateRange

`func (o *SellLimitByRange) SetSellLimitsByDateRange(v []SellLimitByDateRangeType)`

SetSellLimitsByDateRange sets SellLimitsByDateRange field to given value.

### HasSellLimitsByDateRange

`func (o *SellLimitByRange) HasSellLimitsByDateRange() bool`

HasSellLimitsByDateRange returns a boolean if a field has been set.

### GetWarnings

`func (o *SellLimitByRange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SellLimitByRange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SellLimitByRange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SellLimitByRange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


