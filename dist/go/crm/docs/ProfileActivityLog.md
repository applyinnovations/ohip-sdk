# ProfileActivityLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLog** | Pointer to [**ActivityLogListType**](ActivityLogListType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileActivityLog

`func NewProfileActivityLog() *ProfileActivityLog`

NewProfileActivityLog instantiates a new ProfileActivityLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileActivityLogWithDefaults

`func NewProfileActivityLogWithDefaults() *ProfileActivityLog`

NewProfileActivityLogWithDefaults instantiates a new ProfileActivityLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLog

`func (o *ProfileActivityLog) GetActivityLog() ActivityLogListType`

GetActivityLog returns the ActivityLog field if non-nil, zero value otherwise.

### GetActivityLogOk

`func (o *ProfileActivityLog) GetActivityLogOk() (*ActivityLogListType, bool)`

GetActivityLogOk returns a tuple with the ActivityLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLog

`func (o *ProfileActivityLog) SetActivityLog(v ActivityLogListType)`

SetActivityLog sets ActivityLog field to given value.

### HasActivityLog

`func (o *ProfileActivityLog) HasActivityLog() bool`

HasActivityLog returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileActivityLog) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileActivityLog) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileActivityLog) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileActivityLog) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileActivityLog) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileActivityLog) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileActivityLog) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileActivityLog) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


