# BlockCutoffScheduleRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**BlockCutoffScheduleRangeType**](BlockCutoffScheduleRangeType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockCutoffScheduleRange

`func NewBlockCutoffScheduleRange() *BlockCutoffScheduleRange`

NewBlockCutoffScheduleRange instantiates a new BlockCutoffScheduleRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCutoffScheduleRangeWithDefaults

`func NewBlockCutoffScheduleRangeWithDefaults() *BlockCutoffScheduleRange`

NewBlockCutoffScheduleRangeWithDefaults instantiates a new BlockCutoffScheduleRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *BlockCutoffScheduleRange) GetCriteria() BlockCutoffScheduleRangeType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *BlockCutoffScheduleRange) GetCriteriaOk() (*BlockCutoffScheduleRangeType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *BlockCutoffScheduleRange) SetCriteria(v BlockCutoffScheduleRangeType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *BlockCutoffScheduleRange) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *BlockCutoffScheduleRange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockCutoffScheduleRange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockCutoffScheduleRange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockCutoffScheduleRange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockCutoffScheduleRange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockCutoffScheduleRange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockCutoffScheduleRange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockCutoffScheduleRange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


