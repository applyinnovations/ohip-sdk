# ChangeSellLimitByDateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellLimitsByDate** | Pointer to [**SellLimitByDateType**](SellLimitByDateType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeSellLimitByDateRequest

`func NewChangeSellLimitByDateRequest() *ChangeSellLimitByDateRequest`

NewChangeSellLimitByDateRequest instantiates a new ChangeSellLimitByDateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeSellLimitByDateRequestWithDefaults

`func NewChangeSellLimitByDateRequestWithDefaults() *ChangeSellLimitByDateRequest`

NewChangeSellLimitByDateRequestWithDefaults instantiates a new ChangeSellLimitByDateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSellLimitsByDate

`func (o *ChangeSellLimitByDateRequest) GetSellLimitsByDate() SellLimitByDateType`

GetSellLimitsByDate returns the SellLimitsByDate field if non-nil, zero value otherwise.

### GetSellLimitsByDateOk

`func (o *ChangeSellLimitByDateRequest) GetSellLimitsByDateOk() (*SellLimitByDateType, bool)`

GetSellLimitsByDateOk returns a tuple with the SellLimitsByDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimitsByDate

`func (o *ChangeSellLimitByDateRequest) SetSellLimitsByDate(v SellLimitByDateType)`

SetSellLimitsByDate sets SellLimitsByDate field to given value.

### HasSellLimitsByDate

`func (o *ChangeSellLimitByDateRequest) HasSellLimitsByDate() bool`

HasSellLimitsByDate returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeSellLimitByDateRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeSellLimitByDateRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeSellLimitByDateRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeSellLimitByDateRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


