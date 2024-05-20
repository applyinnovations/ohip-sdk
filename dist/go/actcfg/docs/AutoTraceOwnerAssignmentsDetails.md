# AutoTraceOwnerAssignmentsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoTraceOwnerAssignments** | Pointer to [**[]AutoTraceOwnerAssignmentType**](AutoTraceOwnerAssignmentType.md) | Detailed information of trace owner assignment. | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAutoTraceOwnerAssignmentsDetails

`func NewAutoTraceOwnerAssignmentsDetails() *AutoTraceOwnerAssignmentsDetails`

NewAutoTraceOwnerAssignmentsDetails instantiates a new AutoTraceOwnerAssignmentsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoTraceOwnerAssignmentsDetailsWithDefaults

`func NewAutoTraceOwnerAssignmentsDetailsWithDefaults() *AutoTraceOwnerAssignmentsDetails`

NewAutoTraceOwnerAssignmentsDetailsWithDefaults instantiates a new AutoTraceOwnerAssignmentsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoTraceOwnerAssignments

`func (o *AutoTraceOwnerAssignmentsDetails) GetAutoTraceOwnerAssignments() []AutoTraceOwnerAssignmentType`

GetAutoTraceOwnerAssignments returns the AutoTraceOwnerAssignments field if non-nil, zero value otherwise.

### GetAutoTraceOwnerAssignmentsOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetAutoTraceOwnerAssignmentsOk() (*[]AutoTraceOwnerAssignmentType, bool)`

GetAutoTraceOwnerAssignmentsOk returns a tuple with the AutoTraceOwnerAssignments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoTraceOwnerAssignments

`func (o *AutoTraceOwnerAssignmentsDetails) SetAutoTraceOwnerAssignments(v []AutoTraceOwnerAssignmentType)`

SetAutoTraceOwnerAssignments sets AutoTraceOwnerAssignments field to given value.

### HasAutoTraceOwnerAssignments

`func (o *AutoTraceOwnerAssignmentsDetails) HasAutoTraceOwnerAssignments() bool`

HasAutoTraceOwnerAssignments returns a boolean if a field has been set.

### GetCount

`func (o *AutoTraceOwnerAssignmentsDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *AutoTraceOwnerAssignmentsDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *AutoTraceOwnerAssignmentsDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *AutoTraceOwnerAssignmentsDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *AutoTraceOwnerAssignmentsDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *AutoTraceOwnerAssignmentsDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *AutoTraceOwnerAssignmentsDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *AutoTraceOwnerAssignmentsDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *AutoTraceOwnerAssignmentsDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *AutoTraceOwnerAssignmentsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AutoTraceOwnerAssignmentsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AutoTraceOwnerAssignmentsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *AutoTraceOwnerAssignmentsDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *AutoTraceOwnerAssignmentsDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *AutoTraceOwnerAssignmentsDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *AutoTraceOwnerAssignmentsDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *AutoTraceOwnerAssignmentsDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *AutoTraceOwnerAssignmentsDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *AutoTraceOwnerAssignmentsDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *AutoTraceOwnerAssignmentsDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *AutoTraceOwnerAssignmentsDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *AutoTraceOwnerAssignmentsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AutoTraceOwnerAssignmentsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AutoTraceOwnerAssignmentsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AutoTraceOwnerAssignmentsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


