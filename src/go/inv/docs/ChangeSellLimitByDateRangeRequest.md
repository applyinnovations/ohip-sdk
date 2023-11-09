# ChangeSellLimitByDateRangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellLimitsByDateRange** | Pointer to [**[]SellLimitByDateRangeType**](SellLimitByDateRangeType.md) | Contains the sell limits for a given date range to be set. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeSellLimitByDateRangeRequest

`func NewChangeSellLimitByDateRangeRequest() *ChangeSellLimitByDateRangeRequest`

NewChangeSellLimitByDateRangeRequest instantiates a new ChangeSellLimitByDateRangeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeSellLimitByDateRangeRequestWithDefaults

`func NewChangeSellLimitByDateRangeRequestWithDefaults() *ChangeSellLimitByDateRangeRequest`

NewChangeSellLimitByDateRangeRequestWithDefaults instantiates a new ChangeSellLimitByDateRangeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSellLimitsByDateRange

`func (o *ChangeSellLimitByDateRangeRequest) GetSellLimitsByDateRange() []SellLimitByDateRangeType`

GetSellLimitsByDateRange returns the SellLimitsByDateRange field if non-nil, zero value otherwise.

### GetSellLimitsByDateRangeOk

`func (o *ChangeSellLimitByDateRangeRequest) GetSellLimitsByDateRangeOk() (*[]SellLimitByDateRangeType, bool)`

GetSellLimitsByDateRangeOk returns a tuple with the SellLimitsByDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimitsByDateRange

`func (o *ChangeSellLimitByDateRangeRequest) SetSellLimitsByDateRange(v []SellLimitByDateRangeType)`

SetSellLimitsByDateRange sets SellLimitsByDateRange field to given value.

### HasSellLimitsByDateRange

`func (o *ChangeSellLimitByDateRangeRequest) HasSellLimitsByDateRange() bool`

HasSellLimitsByDateRange returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeSellLimitByDateRangeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeSellLimitByDateRangeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeSellLimitByDateRangeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeSellLimitByDateRangeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


