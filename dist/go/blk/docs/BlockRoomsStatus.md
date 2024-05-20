# BlockRoomsStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomsStatusSummary** | Pointer to [**RoomsStatusSummaryType**](RoomsStatusSummaryType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockRoomsStatus

`func NewBlockRoomsStatus() *BlockRoomsStatus`

NewBlockRoomsStatus instantiates a new BlockRoomsStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRoomsStatusWithDefaults

`func NewBlockRoomsStatusWithDefaults() *BlockRoomsStatus`

NewBlockRoomsStatusWithDefaults instantiates a new BlockRoomsStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *BlockRoomsStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRoomsStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRoomsStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRoomsStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomsStatusSummary

`func (o *BlockRoomsStatus) GetRoomsStatusSummary() RoomsStatusSummaryType`

GetRoomsStatusSummary returns the RoomsStatusSummary field if non-nil, zero value otherwise.

### GetRoomsStatusSummaryOk

`func (o *BlockRoomsStatus) GetRoomsStatusSummaryOk() (*RoomsStatusSummaryType, bool)`

GetRoomsStatusSummaryOk returns a tuple with the RoomsStatusSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsStatusSummary

`func (o *BlockRoomsStatus) SetRoomsStatusSummary(v RoomsStatusSummaryType)`

SetRoomsStatusSummary sets RoomsStatusSummary field to given value.

### HasRoomsStatusSummary

`func (o *BlockRoomsStatus) HasRoomsStatusSummary() bool`

HasRoomsStatusSummary returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRoomsStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRoomsStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRoomsStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRoomsStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


