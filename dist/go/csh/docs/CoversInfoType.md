# CoversInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCode** | Pointer to **string** | Unique transaction code. | [optional] 
**TransactionDescription** | Pointer to **string** | Transaction description. | [optional] 
**CoversDate** | Pointer to **string** | Date on which needs to be searched for covers. | [optional] 
**RevenueToday** | Pointer to **float32** | Total revenue for the transaction code today | [optional] 
**CoversToday** | Pointer to **float32** | Covers for current date i.e., Today. | [optional] 
**CoversJournal** | Pointer to **float32** | Journal of the covers posted. | [optional] 
**CoversMtd** | Pointer to **float32** | Covers posted from Month to Date. | [optional] 
**CoversYtd** | Pointer to **float32** | Covers posted from Year to Date. | [optional] 

## Methods

### NewCoversInfoType

`func NewCoversInfoType() *CoversInfoType`

NewCoversInfoType instantiates a new CoversInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCoversInfoTypeWithDefaults

`func NewCoversInfoTypeWithDefaults() *CoversInfoType`

NewCoversInfoTypeWithDefaults instantiates a new CoversInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCode

`func (o *CoversInfoType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CoversInfoType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CoversInfoType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CoversInfoType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDescription

`func (o *CoversInfoType) GetTransactionDescription() string`

GetTransactionDescription returns the TransactionDescription field if non-nil, zero value otherwise.

### GetTransactionDescriptionOk

`func (o *CoversInfoType) GetTransactionDescriptionOk() (*string, bool)`

GetTransactionDescriptionOk returns a tuple with the TransactionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDescription

`func (o *CoversInfoType) SetTransactionDescription(v string)`

SetTransactionDescription sets TransactionDescription field to given value.

### HasTransactionDescription

`func (o *CoversInfoType) HasTransactionDescription() bool`

HasTransactionDescription returns a boolean if a field has been set.

### GetCoversDate

`func (o *CoversInfoType) GetCoversDate() string`

GetCoversDate returns the CoversDate field if non-nil, zero value otherwise.

### GetCoversDateOk

`func (o *CoversInfoType) GetCoversDateOk() (*string, bool)`

GetCoversDateOk returns a tuple with the CoversDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoversDate

`func (o *CoversInfoType) SetCoversDate(v string)`

SetCoversDate sets CoversDate field to given value.

### HasCoversDate

`func (o *CoversInfoType) HasCoversDate() bool`

HasCoversDate returns a boolean if a field has been set.

### GetRevenueToday

`func (o *CoversInfoType) GetRevenueToday() float32`

GetRevenueToday returns the RevenueToday field if non-nil, zero value otherwise.

### GetRevenueTodayOk

`func (o *CoversInfoType) GetRevenueTodayOk() (*float32, bool)`

GetRevenueTodayOk returns a tuple with the RevenueToday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueToday

`func (o *CoversInfoType) SetRevenueToday(v float32)`

SetRevenueToday sets RevenueToday field to given value.

### HasRevenueToday

`func (o *CoversInfoType) HasRevenueToday() bool`

HasRevenueToday returns a boolean if a field has been set.

### GetCoversToday

`func (o *CoversInfoType) GetCoversToday() float32`

GetCoversToday returns the CoversToday field if non-nil, zero value otherwise.

### GetCoversTodayOk

`func (o *CoversInfoType) GetCoversTodayOk() (*float32, bool)`

GetCoversTodayOk returns a tuple with the CoversToday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoversToday

`func (o *CoversInfoType) SetCoversToday(v float32)`

SetCoversToday sets CoversToday field to given value.

### HasCoversToday

`func (o *CoversInfoType) HasCoversToday() bool`

HasCoversToday returns a boolean if a field has been set.

### GetCoversJournal

`func (o *CoversInfoType) GetCoversJournal() float32`

GetCoversJournal returns the CoversJournal field if non-nil, zero value otherwise.

### GetCoversJournalOk

`func (o *CoversInfoType) GetCoversJournalOk() (*float32, bool)`

GetCoversJournalOk returns a tuple with the CoversJournal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoversJournal

`func (o *CoversInfoType) SetCoversJournal(v float32)`

SetCoversJournal sets CoversJournal field to given value.

### HasCoversJournal

`func (o *CoversInfoType) HasCoversJournal() bool`

HasCoversJournal returns a boolean if a field has been set.

### GetCoversMtd

`func (o *CoversInfoType) GetCoversMtd() float32`

GetCoversMtd returns the CoversMtd field if non-nil, zero value otherwise.

### GetCoversMtdOk

`func (o *CoversInfoType) GetCoversMtdOk() (*float32, bool)`

GetCoversMtdOk returns a tuple with the CoversMtd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoversMtd

`func (o *CoversInfoType) SetCoversMtd(v float32)`

SetCoversMtd sets CoversMtd field to given value.

### HasCoversMtd

`func (o *CoversInfoType) HasCoversMtd() bool`

HasCoversMtd returns a boolean if a field has been set.

### GetCoversYtd

`func (o *CoversInfoType) GetCoversYtd() float32`

GetCoversYtd returns the CoversYtd field if non-nil, zero value otherwise.

### GetCoversYtdOk

`func (o *CoversInfoType) GetCoversYtdOk() (*float32, bool)`

GetCoversYtdOk returns a tuple with the CoversYtd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoversYtd

`func (o *CoversInfoType) SetCoversYtd(v float32)`

SetCoversYtd sets CoversYtd field to given value.

### HasCoversYtd

`func (o *CoversInfoType) HasCoversYtd() bool`

HasCoversYtd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


