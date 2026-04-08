# AutoTraceOwnerAssignmentsStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAutoTraceOwnerAssignmentsStatus

`func NewAutoTraceOwnerAssignmentsStatus() *AutoTraceOwnerAssignmentsStatus`

NewAutoTraceOwnerAssignmentsStatus instantiates a new AutoTraceOwnerAssignmentsStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoTraceOwnerAssignmentsStatusWithDefaults

`func NewAutoTraceOwnerAssignmentsStatusWithDefaults() *AutoTraceOwnerAssignmentsStatus`

NewAutoTraceOwnerAssignmentsStatusWithDefaults instantiates a new AutoTraceOwnerAssignmentsStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *AutoTraceOwnerAssignmentsStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AutoTraceOwnerAssignmentsStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AutoTraceOwnerAssignmentsStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AutoTraceOwnerAssignmentsStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AutoTraceOwnerAssignmentsStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AutoTraceOwnerAssignmentsStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AutoTraceOwnerAssignmentsStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AutoTraceOwnerAssignmentsStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


