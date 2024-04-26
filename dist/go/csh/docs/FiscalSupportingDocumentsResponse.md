# FiscalSupportingDocumentsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records the API should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index of the page being requested. If the index goes out of the bounds of the total set count, no data will be returned. | [optional] 
**SupportingDocuments** | Pointer to [**[]SupportingDocumentType**](SupportingDocumentType.md) | List of supporting documents. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalSupportingDocumentsResponse

`func NewFiscalSupportingDocumentsResponse() *FiscalSupportingDocumentsResponse`

NewFiscalSupportingDocumentsResponse instantiates a new FiscalSupportingDocumentsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalSupportingDocumentsResponseWithDefaults

`func NewFiscalSupportingDocumentsResponseWithDefaults() *FiscalSupportingDocumentsResponse`

NewFiscalSupportingDocumentsResponseWithDefaults instantiates a new FiscalSupportingDocumentsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *FiscalSupportingDocumentsResponse) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *FiscalSupportingDocumentsResponse) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *FiscalSupportingDocumentsResponse) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *FiscalSupportingDocumentsResponse) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *FiscalSupportingDocumentsResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *FiscalSupportingDocumentsResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *FiscalSupportingDocumentsResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *FiscalSupportingDocumentsResponse) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *FiscalSupportingDocumentsResponse) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *FiscalSupportingDocumentsResponse) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *FiscalSupportingDocumentsResponse) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *FiscalSupportingDocumentsResponse) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalSupportingDocumentsResponse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalSupportingDocumentsResponse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalSupportingDocumentsResponse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalSupportingDocumentsResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *FiscalSupportingDocumentsResponse) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *FiscalSupportingDocumentsResponse) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *FiscalSupportingDocumentsResponse) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *FiscalSupportingDocumentsResponse) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetSupportingDocuments

`func (o *FiscalSupportingDocumentsResponse) GetSupportingDocuments() []SupportingDocumentType`

GetSupportingDocuments returns the SupportingDocuments field if non-nil, zero value otherwise.

### GetSupportingDocumentsOk

`func (o *FiscalSupportingDocumentsResponse) GetSupportingDocumentsOk() (*[]SupportingDocumentType, bool)`

GetSupportingDocumentsOk returns a tuple with the SupportingDocuments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportingDocuments

`func (o *FiscalSupportingDocumentsResponse) SetSupportingDocuments(v []SupportingDocumentType)`

SetSupportingDocuments sets SupportingDocuments field to given value.

### HasSupportingDocuments

`func (o *FiscalSupportingDocumentsResponse) HasSupportingDocuments() bool`

HasSupportingDocuments returns a boolean if a field has been set.

### GetTotalPages

`func (o *FiscalSupportingDocumentsResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FiscalSupportingDocumentsResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FiscalSupportingDocumentsResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FiscalSupportingDocumentsResponse) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *FiscalSupportingDocumentsResponse) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *FiscalSupportingDocumentsResponse) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *FiscalSupportingDocumentsResponse) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *FiscalSupportingDocumentsResponse) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalSupportingDocumentsResponse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalSupportingDocumentsResponse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalSupportingDocumentsResponse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalSupportingDocumentsResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


