# AutoTraceDefinitionOwnerInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomOwnerCode** | Pointer to **string** | Custom owner code | [optional] 
**OwnerAssignment** | Pointer to [**AutoTraceOwnerAssignmentListType**](AutoTraceOwnerAssignmentListType.md) |  | [optional] 
**OwnerAssignmentExist** | Pointer to **bool** | Indicates if Owner Assignment exists | [optional] 
**OwnerofActivity** | Pointer to [**ActivityOwnerType**](ActivityOwnerType.md) |  | [optional] 

## Methods

### NewAutoTraceDefinitionOwnerInfoType

`func NewAutoTraceDefinitionOwnerInfoType() *AutoTraceDefinitionOwnerInfoType`

NewAutoTraceDefinitionOwnerInfoType instantiates a new AutoTraceDefinitionOwnerInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoTraceDefinitionOwnerInfoTypeWithDefaults

`func NewAutoTraceDefinitionOwnerInfoTypeWithDefaults() *AutoTraceDefinitionOwnerInfoType`

NewAutoTraceDefinitionOwnerInfoTypeWithDefaults instantiates a new AutoTraceDefinitionOwnerInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomOwnerCode

`func (o *AutoTraceDefinitionOwnerInfoType) GetCustomOwnerCode() string`

GetCustomOwnerCode returns the CustomOwnerCode field if non-nil, zero value otherwise.

### GetCustomOwnerCodeOk

`func (o *AutoTraceDefinitionOwnerInfoType) GetCustomOwnerCodeOk() (*string, bool)`

GetCustomOwnerCodeOk returns a tuple with the CustomOwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomOwnerCode

`func (o *AutoTraceDefinitionOwnerInfoType) SetCustomOwnerCode(v string)`

SetCustomOwnerCode sets CustomOwnerCode field to given value.

### HasCustomOwnerCode

`func (o *AutoTraceDefinitionOwnerInfoType) HasCustomOwnerCode() bool`

HasCustomOwnerCode returns a boolean if a field has been set.

### GetOwnerAssignment

`func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerAssignment() AutoTraceOwnerAssignmentListType`

GetOwnerAssignment returns the OwnerAssignment field if non-nil, zero value otherwise.

### GetOwnerAssignmentOk

`func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerAssignmentOk() (*AutoTraceOwnerAssignmentListType, bool)`

GetOwnerAssignmentOk returns a tuple with the OwnerAssignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerAssignment

`func (o *AutoTraceDefinitionOwnerInfoType) SetOwnerAssignment(v AutoTraceOwnerAssignmentListType)`

SetOwnerAssignment sets OwnerAssignment field to given value.

### HasOwnerAssignment

`func (o *AutoTraceDefinitionOwnerInfoType) HasOwnerAssignment() bool`

HasOwnerAssignment returns a boolean if a field has been set.

### GetOwnerAssignmentExist

`func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerAssignmentExist() bool`

GetOwnerAssignmentExist returns the OwnerAssignmentExist field if non-nil, zero value otherwise.

### GetOwnerAssignmentExistOk

`func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerAssignmentExistOk() (*bool, bool)`

GetOwnerAssignmentExistOk returns a tuple with the OwnerAssignmentExist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerAssignmentExist

`func (o *AutoTraceDefinitionOwnerInfoType) SetOwnerAssignmentExist(v bool)`

SetOwnerAssignmentExist sets OwnerAssignmentExist field to given value.

### HasOwnerAssignmentExist

`func (o *AutoTraceDefinitionOwnerInfoType) HasOwnerAssignmentExist() bool`

HasOwnerAssignmentExist returns a boolean if a field has been set.

### GetOwnerofActivity

`func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerofActivity() ActivityOwnerType`

GetOwnerofActivity returns the OwnerofActivity field if non-nil, zero value otherwise.

### GetOwnerofActivityOk

`func (o *AutoTraceDefinitionOwnerInfoType) GetOwnerofActivityOk() (*ActivityOwnerType, bool)`

GetOwnerofActivityOk returns a tuple with the OwnerofActivity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerofActivity

`func (o *AutoTraceDefinitionOwnerInfoType) SetOwnerofActivity(v ActivityOwnerType)`

SetOwnerofActivity sets OwnerofActivity field to given value.

### HasOwnerofActivity

`func (o *AutoTraceDefinitionOwnerInfoType) HasOwnerofActivity() bool`

HasOwnerofActivity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


