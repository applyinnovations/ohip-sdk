# CheckResultType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckInstruction** | Pointer to [**CheckInstructionType**](CheckInstructionType.md) |  | [optional] 
**Exists** | Pointer to **bool** | Indicates status of allowed actions, total number of attached records, or number of occurrences of indicator of a reservation. | [optional] 

## Methods

### NewCheckResultType

`func NewCheckResultType() *CheckResultType`

NewCheckResultType instantiates a new CheckResultType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckResultTypeWithDefaults

`func NewCheckResultTypeWithDefaults() *CheckResultType`

NewCheckResultTypeWithDefaults instantiates a new CheckResultType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckInstruction

`func (o *CheckResultType) GetCheckInstruction() CheckInstructionType`

GetCheckInstruction returns the CheckInstruction field if non-nil, zero value otherwise.

### GetCheckInstructionOk

`func (o *CheckResultType) GetCheckInstructionOk() (*CheckInstructionType, bool)`

GetCheckInstructionOk returns a tuple with the CheckInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInstruction

`func (o *CheckResultType) SetCheckInstruction(v CheckInstructionType)`

SetCheckInstruction sets CheckInstruction field to given value.

### HasCheckInstruction

`func (o *CheckResultType) HasCheckInstruction() bool`

HasCheckInstruction returns a boolean if a field has been set.

### GetExists

`func (o *CheckResultType) GetExists() bool`

GetExists returns the Exists field if non-nil, zero value otherwise.

### GetExistsOk

`func (o *CheckResultType) GetExistsOk() (*bool, bool)`

GetExistsOk returns a tuple with the Exists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExists

`func (o *CheckResultType) SetExists(v bool)`

SetExists sets Exists field to given value.

### HasExists

`func (o *CheckResultType) HasExists() bool`

HasExists returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


