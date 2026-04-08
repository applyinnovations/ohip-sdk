# TransactionDiversionDailyDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Posted** | Pointer to **int32** | Transaction diversion rules that are posted. | [optional] 
**Diverted** | Pointer to **int32** | Transaction diversion rules that are diverted . | [optional] 
**Date** | Pointer to **string** | Daily details Date about when the rules are posted or diverted. | [optional] 

## Methods

### NewTransactionDiversionDailyDetailType

`func NewTransactionDiversionDailyDetailType() *TransactionDiversionDailyDetailType`

NewTransactionDiversionDailyDetailType instantiates a new TransactionDiversionDailyDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionDiversionDailyDetailTypeWithDefaults

`func NewTransactionDiversionDailyDetailTypeWithDefaults() *TransactionDiversionDailyDetailType`

NewTransactionDiversionDailyDetailTypeWithDefaults instantiates a new TransactionDiversionDailyDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPosted

`func (o *TransactionDiversionDailyDetailType) GetPosted() int32`

GetPosted returns the Posted field if non-nil, zero value otherwise.

### GetPostedOk

`func (o *TransactionDiversionDailyDetailType) GetPostedOk() (*int32, bool)`

GetPostedOk returns a tuple with the Posted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosted

`func (o *TransactionDiversionDailyDetailType) SetPosted(v int32)`

SetPosted sets Posted field to given value.

### HasPosted

`func (o *TransactionDiversionDailyDetailType) HasPosted() bool`

HasPosted returns a boolean if a field has been set.

### GetDiverted

`func (o *TransactionDiversionDailyDetailType) GetDiverted() int32`

GetDiverted returns the Diverted field if non-nil, zero value otherwise.

### GetDivertedOk

`func (o *TransactionDiversionDailyDetailType) GetDivertedOk() (*int32, bool)`

GetDivertedOk returns a tuple with the Diverted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiverted

`func (o *TransactionDiversionDailyDetailType) SetDiverted(v int32)`

SetDiverted sets Diverted field to given value.

### HasDiverted

`func (o *TransactionDiversionDailyDetailType) HasDiverted() bool`

HasDiverted returns a boolean if a field has been set.

### GetDate

`func (o *TransactionDiversionDailyDetailType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *TransactionDiversionDailyDetailType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *TransactionDiversionDailyDetailType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *TransactionDiversionDailyDetailType) HasDate() bool`

HasDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


