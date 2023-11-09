# BlockCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CopyBlockType**](CopyBlockType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ResponseInstruction** | Pointer to [**ResponseInstructionType**](ResponseInstructionType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBlockCopy

`func NewBlockCopy() *BlockCopy`

NewBlockCopy instantiates a new BlockCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCopyWithDefaults

`func NewBlockCopyWithDefaults() *BlockCopy`

NewBlockCopyWithDefaults instantiates a new BlockCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *BlockCopy) GetCriteria() CopyBlockType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *BlockCopy) GetCriteriaOk() (*CopyBlockType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *BlockCopy) SetCriteria(v CopyBlockType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *BlockCopy) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *BlockCopy) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockCopy) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockCopy) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *BlockCopy) GetResponseInstruction() ResponseInstructionType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *BlockCopy) GetResponseInstructionOk() (*ResponseInstructionType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *BlockCopy) SetResponseInstruction(v ResponseInstructionType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *BlockCopy) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockCopy) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockCopy) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockCopy) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


