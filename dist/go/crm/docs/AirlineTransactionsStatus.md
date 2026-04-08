# AirlineTransactionsStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | Pointer to [**[]AirlineTransactionType**](AirlineTransactionType.md) | Contains details of the membership transaction processing status, provided by the airline. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAirlineTransactionsStatus

`func NewAirlineTransactionsStatus() *AirlineTransactionsStatus`

NewAirlineTransactionsStatus instantiates a new AirlineTransactionsStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAirlineTransactionsStatusWithDefaults

`func NewAirlineTransactionsStatusWithDefaults() *AirlineTransactionsStatus`

NewAirlineTransactionsStatusWithDefaults instantiates a new AirlineTransactionsStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *AirlineTransactionsStatus) GetTransactions() []AirlineTransactionType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *AirlineTransactionsStatus) GetTransactionsOk() (*[]AirlineTransactionType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *AirlineTransactionsStatus) SetTransactions(v []AirlineTransactionType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *AirlineTransactionsStatus) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetTotalPages

`func (o *AirlineTransactionsStatus) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *AirlineTransactionsStatus) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *AirlineTransactionsStatus) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *AirlineTransactionsStatus) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *AirlineTransactionsStatus) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *AirlineTransactionsStatus) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *AirlineTransactionsStatus) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *AirlineTransactionsStatus) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *AirlineTransactionsStatus) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *AirlineTransactionsStatus) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *AirlineTransactionsStatus) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *AirlineTransactionsStatus) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *AirlineTransactionsStatus) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *AirlineTransactionsStatus) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *AirlineTransactionsStatus) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *AirlineTransactionsStatus) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *AirlineTransactionsStatus) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *AirlineTransactionsStatus) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *AirlineTransactionsStatus) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *AirlineTransactionsStatus) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *AirlineTransactionsStatus) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *AirlineTransactionsStatus) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *AirlineTransactionsStatus) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *AirlineTransactionsStatus) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *AirlineTransactionsStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AirlineTransactionsStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AirlineTransactionsStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AirlineTransactionsStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AirlineTransactionsStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AirlineTransactionsStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AirlineTransactionsStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AirlineTransactionsStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


