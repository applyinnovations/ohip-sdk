# InvoicesPayments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | Pointer to [**[]ARAccountInvoicesPaymentsType**](ARAccountInvoicesPaymentsType.md) | Account Invoice information. | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInvoicesPayments

`func NewInvoicesPayments() *InvoicesPayments`

NewInvoicesPayments instantiates a new InvoicesPayments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoicesPaymentsWithDefaults

`func NewInvoicesPaymentsWithDefaults() *InvoicesPayments`

NewInvoicesPaymentsWithDefaults instantiates a new InvoicesPayments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetails

`func (o *InvoicesPayments) GetDetails() []ARAccountInvoicesPaymentsType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *InvoicesPayments) GetDetailsOk() (*[]ARAccountInvoicesPaymentsType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *InvoicesPayments) SetDetails(v []ARAccountInvoicesPaymentsType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *InvoicesPayments) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *InvoicesPayments) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *InvoicesPayments) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *InvoicesPayments) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *InvoicesPayments) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetTotalPages

`func (o *InvoicesPayments) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *InvoicesPayments) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *InvoicesPayments) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *InvoicesPayments) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *InvoicesPayments) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *InvoicesPayments) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *InvoicesPayments) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *InvoicesPayments) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *InvoicesPayments) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *InvoicesPayments) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *InvoicesPayments) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *InvoicesPayments) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *InvoicesPayments) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *InvoicesPayments) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *InvoicesPayments) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *InvoicesPayments) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *InvoicesPayments) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *InvoicesPayments) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *InvoicesPayments) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *InvoicesPayments) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *InvoicesPayments) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *InvoicesPayments) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *InvoicesPayments) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *InvoicesPayments) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *InvoicesPayments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InvoicesPayments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InvoicesPayments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InvoicesPayments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *InvoicesPayments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InvoicesPayments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InvoicesPayments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InvoicesPayments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


