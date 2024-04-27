# CallHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CallHistory** | Pointer to [**[]CallType**](CallType.md) | Holds call information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCallHistory

`func NewCallHistory() *CallHistory`

NewCallHistory instantiates a new CallHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallHistoryWithDefaults

`func NewCallHistoryWithDefaults() *CallHistory`

NewCallHistoryWithDefaults instantiates a new CallHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCallHistory

`func (o *CallHistory) GetCallHistory() []CallType`

GetCallHistory returns the CallHistory field if non-nil, zero value otherwise.

### GetCallHistoryOk

`func (o *CallHistory) GetCallHistoryOk() (*[]CallType, bool)`

GetCallHistoryOk returns a tuple with the CallHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallHistory

`func (o *CallHistory) SetCallHistory(v []CallType)`

SetCallHistory sets CallHistory field to given value.

### HasCallHistory

`func (o *CallHistory) HasCallHistory() bool`

HasCallHistory returns a boolean if a field has been set.

### GetLinks

`func (o *CallHistory) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CallHistory) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CallHistory) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CallHistory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CallHistory) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CallHistory) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CallHistory) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CallHistory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


