# BlockWashSchedules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockWashSchedules** | Pointer to [**[]BlockWashScheduleType**](BlockWashScheduleType.md) | Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockWashSchedules

`func NewBlockWashSchedules() *BlockWashSchedules`

NewBlockWashSchedules instantiates a new BlockWashSchedules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockWashSchedulesWithDefaults

`func NewBlockWashSchedulesWithDefaults() *BlockWashSchedules`

NewBlockWashSchedulesWithDefaults instantiates a new BlockWashSchedules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockWashSchedules

`func (o *BlockWashSchedules) GetBlockWashSchedules() []BlockWashScheduleType`

GetBlockWashSchedules returns the BlockWashSchedules field if non-nil, zero value otherwise.

### GetBlockWashSchedulesOk

`func (o *BlockWashSchedules) GetBlockWashSchedulesOk() (*[]BlockWashScheduleType, bool)`

GetBlockWashSchedulesOk returns a tuple with the BlockWashSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockWashSchedules

`func (o *BlockWashSchedules) SetBlockWashSchedules(v []BlockWashScheduleType)`

SetBlockWashSchedules sets BlockWashSchedules field to given value.

### HasBlockWashSchedules

`func (o *BlockWashSchedules) HasBlockWashSchedules() bool`

HasBlockWashSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *BlockWashSchedules) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockWashSchedules) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockWashSchedules) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockWashSchedules) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockWashSchedules) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockWashSchedules) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockWashSchedules) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockWashSchedules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


