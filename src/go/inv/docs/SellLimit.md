# SellLimit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellLimitsByDate** | Pointer to [**SellLimitByDateType**](SellLimitByDateType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSellLimit

`func NewSellLimit() *SellLimit`

NewSellLimit instantiates a new SellLimit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellLimitWithDefaults

`func NewSellLimitWithDefaults() *SellLimit`

NewSellLimitWithDefaults instantiates a new SellLimit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSellLimitsByDate

`func (o *SellLimit) GetSellLimitsByDate() SellLimitByDateType`

GetSellLimitsByDate returns the SellLimitsByDate field if non-nil, zero value otherwise.

### GetSellLimitsByDateOk

`func (o *SellLimit) GetSellLimitsByDateOk() (*SellLimitByDateType, bool)`

GetSellLimitsByDateOk returns a tuple with the SellLimitsByDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimitsByDate

`func (o *SellLimit) SetSellLimitsByDate(v SellLimitByDateType)`

SetSellLimitsByDate sets SellLimitsByDate field to given value.

### HasSellLimitsByDate

`func (o *SellLimit) HasSellLimitsByDate() bool`

HasSellLimitsByDate returns a boolean if a field has been set.

### GetWarnings

`func (o *SellLimit) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SellLimit) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SellLimit) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SellLimit) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


