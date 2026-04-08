# CheckProfileResultType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckProfileInstruction** | Pointer to [**CheckProfileInstructionType**](CheckProfileInstructionType.md) |  | [optional] 
**Exists** | Pointer to **bool** | Indicates status of allowed actions, total number of attached records, or number of occurrences of indicator of a profile. | [optional] 

## Methods

### NewCheckProfileResultType

`func NewCheckProfileResultType() *CheckProfileResultType`

NewCheckProfileResultType instantiates a new CheckProfileResultType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckProfileResultTypeWithDefaults

`func NewCheckProfileResultTypeWithDefaults() *CheckProfileResultType`

NewCheckProfileResultTypeWithDefaults instantiates a new CheckProfileResultType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckProfileInstruction

`func (o *CheckProfileResultType) GetCheckProfileInstruction() CheckProfileInstructionType`

GetCheckProfileInstruction returns the CheckProfileInstruction field if non-nil, zero value otherwise.

### GetCheckProfileInstructionOk

`func (o *CheckProfileResultType) GetCheckProfileInstructionOk() (*CheckProfileInstructionType, bool)`

GetCheckProfileInstructionOk returns a tuple with the CheckProfileInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckProfileInstruction

`func (o *CheckProfileResultType) SetCheckProfileInstruction(v CheckProfileInstructionType)`

SetCheckProfileInstruction sets CheckProfileInstruction field to given value.

### HasCheckProfileInstruction

`func (o *CheckProfileResultType) HasCheckProfileInstruction() bool`

HasCheckProfileInstruction returns a boolean if a field has been set.

### GetExists

`func (o *CheckProfileResultType) GetExists() bool`

GetExists returns the Exists field if non-nil, zero value otherwise.

### GetExistsOk

`func (o *CheckProfileResultType) GetExistsOk() (*bool, bool)`

GetExistsOk returns a tuple with the Exists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExists

`func (o *CheckProfileResultType) SetExists(v bool)`

SetExists sets Exists field to given value.

### HasExists

`func (o *CheckProfileResultType) HasExists() bool`

HasExists returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


