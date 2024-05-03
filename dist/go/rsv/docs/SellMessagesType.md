# SellMessagesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**SellMessage** | Pointer to [**[]SellMessageType**](SellMessageType.md) | This is the message text. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewSellMessagesType

`func NewSellMessagesType() *SellMessagesType`

NewSellMessagesType instantiates a new SellMessagesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellMessagesTypeWithDefaults

`func NewSellMessagesTypeWithDefaults() *SellMessagesType`

NewSellMessagesTypeWithDefaults instantiates a new SellMessagesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SellMessagesType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SellMessagesType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SellMessagesType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SellMessagesType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *SellMessagesType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *SellMessagesType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *SellMessagesType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *SellMessagesType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetSellMessage

`func (o *SellMessagesType) GetSellMessage() []SellMessageType`

GetSellMessage returns the SellMessage field if non-nil, zero value otherwise.

### GetSellMessageOk

`func (o *SellMessagesType) GetSellMessageOk() (*[]SellMessageType, bool)`

GetSellMessageOk returns a tuple with the SellMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessage

`func (o *SellMessagesType) SetSellMessage(v []SellMessageType)`

SetSellMessage sets SellMessage field to given value.

### HasSellMessage

`func (o *SellMessagesType) HasSellMessage() bool`

HasSellMessage returns a boolean if a field has been set.

### GetTotalResults

`func (o *SellMessagesType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *SellMessagesType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *SellMessagesType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *SellMessagesType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


