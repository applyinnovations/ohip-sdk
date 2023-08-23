# PostAutoTraceOwnerAssignmentsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoTraceOwnerAssignments** | Pointer to [**[]AutoTraceOwnerAssignmentType**](AutoTraceOwnerAssignmentType.md) | Detailed information of trace owner assignment. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostAutoTraceOwnerAssignmentsRequest

`func NewPostAutoTraceOwnerAssignmentsRequest() *PostAutoTraceOwnerAssignmentsRequest`

NewPostAutoTraceOwnerAssignmentsRequest instantiates a new PostAutoTraceOwnerAssignmentsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAutoTraceOwnerAssignmentsRequestWithDefaults

`func NewPostAutoTraceOwnerAssignmentsRequestWithDefaults() *PostAutoTraceOwnerAssignmentsRequest`

NewPostAutoTraceOwnerAssignmentsRequestWithDefaults instantiates a new PostAutoTraceOwnerAssignmentsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoTraceOwnerAssignments

`func (o *PostAutoTraceOwnerAssignmentsRequest) GetAutoTraceOwnerAssignments() []AutoTraceOwnerAssignmentType`

GetAutoTraceOwnerAssignments returns the AutoTraceOwnerAssignments field if non-nil, zero value otherwise.

### GetAutoTraceOwnerAssignmentsOk

`func (o *PostAutoTraceOwnerAssignmentsRequest) GetAutoTraceOwnerAssignmentsOk() (*[]AutoTraceOwnerAssignmentType, bool)`

GetAutoTraceOwnerAssignmentsOk returns a tuple with the AutoTraceOwnerAssignments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoTraceOwnerAssignments

`func (o *PostAutoTraceOwnerAssignmentsRequest) SetAutoTraceOwnerAssignments(v []AutoTraceOwnerAssignmentType)`

SetAutoTraceOwnerAssignments sets AutoTraceOwnerAssignments field to given value.

### HasAutoTraceOwnerAssignments

`func (o *PostAutoTraceOwnerAssignmentsRequest) HasAutoTraceOwnerAssignments() bool`

HasAutoTraceOwnerAssignments returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAutoTraceOwnerAssignmentsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAutoTraceOwnerAssignmentsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAutoTraceOwnerAssignmentsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAutoTraceOwnerAssignmentsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


