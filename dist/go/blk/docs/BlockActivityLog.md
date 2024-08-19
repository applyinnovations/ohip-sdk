# BlockActivityLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLog** | Pointer to [**ActivityLogListType**](ActivityLogListType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockActivityLog

`func NewBlockActivityLog() *BlockActivityLog`

NewBlockActivityLog instantiates a new BlockActivityLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockActivityLogWithDefaults

`func NewBlockActivityLogWithDefaults() *BlockActivityLog`

NewBlockActivityLogWithDefaults instantiates a new BlockActivityLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLog

`func (o *BlockActivityLog) GetActivityLog() ActivityLogListType`

GetActivityLog returns the ActivityLog field if non-nil, zero value otherwise.

### GetActivityLogOk

`func (o *BlockActivityLog) GetActivityLogOk() (*ActivityLogListType, bool)`

GetActivityLogOk returns a tuple with the ActivityLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLog

`func (o *BlockActivityLog) SetActivityLog(v ActivityLogListType)`

SetActivityLog sets ActivityLog field to given value.

### HasActivityLog

`func (o *BlockActivityLog) HasActivityLog() bool`

HasActivityLog returns a boolean if a field has been set.

### GetLinks

`func (o *BlockActivityLog) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockActivityLog) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockActivityLog) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockActivityLog) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockActivityLog) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockActivityLog) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockActivityLog) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockActivityLog) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


