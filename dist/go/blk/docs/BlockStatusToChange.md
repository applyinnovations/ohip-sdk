# BlockStatusToChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackgroundProcessMode** | Pointer to **bool** | Indicator if the request is to be submitted as a background process. | [optional] 
**BlocksStatus** | Pointer to **map[string]interface{}** | Contains the booking status of the business block. | [optional] 
**ChangeBlockStatus** | Pointer to [**ChangeBlockStatusType**](ChangeBlockStatusType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**VerificationOnly** | Pointer to **bool** | Indicator if the request is a verification on whether the block status can be changed. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockStatusToChange

`func NewBlockStatusToChange() *BlockStatusToChange`

NewBlockStatusToChange instantiates a new BlockStatusToChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatusToChangeWithDefaults

`func NewBlockStatusToChangeWithDefaults() *BlockStatusToChange`

NewBlockStatusToChangeWithDefaults instantiates a new BlockStatusToChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackgroundProcessMode

`func (o *BlockStatusToChange) GetBackgroundProcessMode() bool`

GetBackgroundProcessMode returns the BackgroundProcessMode field if non-nil, zero value otherwise.

### GetBackgroundProcessModeOk

`func (o *BlockStatusToChange) GetBackgroundProcessModeOk() (*bool, bool)`

GetBackgroundProcessModeOk returns a tuple with the BackgroundProcessMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackgroundProcessMode

`func (o *BlockStatusToChange) SetBackgroundProcessMode(v bool)`

SetBackgroundProcessMode sets BackgroundProcessMode field to given value.

### HasBackgroundProcessMode

`func (o *BlockStatusToChange) HasBackgroundProcessMode() bool`

HasBackgroundProcessMode returns a boolean if a field has been set.

### GetBlocksStatus

`func (o *BlockStatusToChange) GetBlocksStatus() map[string]interface{}`

GetBlocksStatus returns the BlocksStatus field if non-nil, zero value otherwise.

### GetBlocksStatusOk

`func (o *BlockStatusToChange) GetBlocksStatusOk() (*map[string]interface{}, bool)`

GetBlocksStatusOk returns a tuple with the BlocksStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocksStatus

`func (o *BlockStatusToChange) SetBlocksStatus(v map[string]interface{})`

SetBlocksStatus sets BlocksStatus field to given value.

### HasBlocksStatus

`func (o *BlockStatusToChange) HasBlocksStatus() bool`

HasBlocksStatus returns a boolean if a field has been set.

### GetChangeBlockStatus

`func (o *BlockStatusToChange) GetChangeBlockStatus() ChangeBlockStatusType`

GetChangeBlockStatus returns the ChangeBlockStatus field if non-nil, zero value otherwise.

### GetChangeBlockStatusOk

`func (o *BlockStatusToChange) GetChangeBlockStatusOk() (*ChangeBlockStatusType, bool)`

GetChangeBlockStatusOk returns a tuple with the ChangeBlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeBlockStatus

`func (o *BlockStatusToChange) SetChangeBlockStatus(v ChangeBlockStatusType)`

SetChangeBlockStatus sets ChangeBlockStatus field to given value.

### HasChangeBlockStatus

`func (o *BlockStatusToChange) HasChangeBlockStatus() bool`

HasChangeBlockStatus returns a boolean if a field has been set.

### GetLinks

`func (o *BlockStatusToChange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockStatusToChange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockStatusToChange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockStatusToChange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetVerificationOnly

`func (o *BlockStatusToChange) GetVerificationOnly() bool`

GetVerificationOnly returns the VerificationOnly field if non-nil, zero value otherwise.

### GetVerificationOnlyOk

`func (o *BlockStatusToChange) GetVerificationOnlyOk() (*bool, bool)`

GetVerificationOnlyOk returns a tuple with the VerificationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationOnly

`func (o *BlockStatusToChange) SetVerificationOnly(v bool)`

SetVerificationOnly sets VerificationOnly field to given value.

### HasVerificationOnly

`func (o *BlockStatusToChange) HasVerificationOnly() bool`

HasVerificationOnly returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockStatusToChange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockStatusToChange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockStatusToChange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockStatusToChange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


